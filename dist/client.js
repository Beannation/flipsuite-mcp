/**
 * FlipSuite Community API client.
 *
 * Transport- and auth-agnostic: it takes an API key and base URL and knows
 * nothing about MCP or stdio. This is the core that lifts unchanged into a
 * future hosted server (only how the key is supplied would change).
 *
 * Docs: https://docs.flipsuite.xyz/api-reference/community/introduction
 */
const DEFAULT_BASE_URL = "https://api.flipsuite.xyz";
/** Error carrying the HTTP status and any response body from FlipSuite. */
export class FlipSuiteApiError extends Error {
    status;
    body;
    constructor(status, message, body) {
        super(message);
        this.status = status;
        this.body = body;
        this.name = "FlipSuiteApiError";
    }
}
export class FlipSuiteClient {
    apiKey;
    baseUrl;
    minIntervalMs;
    queue = Promise.resolve();
    lastRequestAt = 0;
    constructor(opts) {
        if (!opts.apiKey) {
            throw new Error("A FlipSuite API key is required.");
        }
        this.apiKey = opts.apiKey;
        this.baseUrl = (opts.baseUrl ?? DEFAULT_BASE_URL).replace(/\/$/, "");
        // Default to ~1.1 req/sec to stay safely under the 1 RPS limit.
        this.minIntervalMs = opts.minRequestIntervalMs ?? 1100;
    }
    /** Serialize requests and throttle to respect the 1 req/sec rate limit. */
    schedule(fn) {
        const run = this.queue.then(async () => {
            const wait = this.minIntervalMs - (Date.now() - this.lastRequestAt);
            if (wait > 0) {
                await new Promise((r) => setTimeout(r, wait));
            }
            try {
                return await fn();
            }
            finally {
                this.lastRequestAt = Date.now();
            }
        });
        // Keep the chain alive even if a request rejects.
        this.queue = run.then(() => undefined, () => undefined);
        return run;
    }
    async request({ method, path, query, body }) {
        const url = new URL(this.baseUrl + path);
        if (query) {
            for (const [key, value] of Object.entries(query)) {
                if (value === undefined || value === null)
                    continue;
                if (Array.isArray(value)) {
                    for (const v of value)
                        url.searchParams.append(key, String(v));
                }
                else {
                    url.searchParams.append(key, String(value));
                }
            }
        }
        return this.schedule(async () => {
            let res;
            try {
                res = await fetch(url, {
                    method,
                    headers: {
                        "x-api-key": this.apiKey,
                        ...(body ? { "content-type": "application/json" } : {}),
                        accept: "application/json",
                    },
                    body: body ? JSON.stringify(body) : undefined,
                });
            }
            catch (err) {
                throw new FlipSuiteApiError(0, `Network error calling FlipSuite: ${err.message}`);
            }
            const text = await res.text();
            let parsed = undefined;
            if (text) {
                try {
                    parsed = JSON.parse(text);
                }
                catch {
                    parsed = text;
                }
            }
            if (!res.ok) {
                const detail = parsed && typeof parsed === "object"
                    ? JSON.stringify(parsed)
                    : String(parsed ?? res.statusText);
                throw new FlipSuiteApiError(res.status, `FlipSuite API error ${res.status}: ${detail}`, parsed);
            }
            return parsed;
        });
    }
    createQuest(body) {
        return this.request({ method: "POST", path: "/v1/community/quests", body });
    }
    getQuest(questId) {
        return this.request({ method: "GET", path: `/v1/community/quests/${encodeURIComponent(questId)}` });
    }
    listQuests(query) {
        return this.request({ method: "GET", path: "/v1/community/quests", query });
    }
    getQuestCompletions(query) {
        return this.request({ method: "GET", path: "/v1/community/quest-completions", query });
    }
}
//# sourceMappingURL=client.js.map