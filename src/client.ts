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
  constructor(
    public status: number,
    message: string,
    public body?: unknown,
  ) {
    super(message);
    this.name = "FlipSuiteApiError";
  }
}

export interface FlipSuiteClientOptions {
  apiKey: string;
  baseUrl?: string;
  /** Minimum spacing between requests in ms. FlipSuite limits to 1 req/sec. */
  minRequestIntervalMs?: number;
}

interface RequestOptions {
  method: "GET" | "POST";
  path: string;
  query?: Record<string, unknown>;
  body?: unknown;
}

export class FlipSuiteClient {
  private readonly apiKey: string;
  private readonly baseUrl: string;
  private readonly minIntervalMs: number;
  private queue: Promise<unknown> = Promise.resolve();
  private lastRequestAt = 0;

  constructor(opts: FlipSuiteClientOptions) {
    if (!opts.apiKey) {
      throw new Error("A FlipSuite API key is required.");
    }
    this.apiKey = opts.apiKey;
    this.baseUrl = (opts.baseUrl ?? DEFAULT_BASE_URL).replace(/\/$/, "");
    // Default to ~1.1 req/sec to stay safely under the 1 RPS limit.
    this.minIntervalMs = opts.minRequestIntervalMs ?? 1100;
  }

  /** Serialize requests and throttle to respect the 1 req/sec rate limit. */
  private schedule<T>(fn: () => Promise<T>): Promise<T> {
    const run = this.queue.then(async () => {
      const wait = this.minIntervalMs - (Date.now() - this.lastRequestAt);
      if (wait > 0) {
        await new Promise((r) => setTimeout(r, wait));
      }
      try {
        return await fn();
      } finally {
        this.lastRequestAt = Date.now();
      }
    });
    // Keep the chain alive even if a request rejects.
    this.queue = run.then(
      () => undefined,
      () => undefined,
    );
    return run;
  }

  private async request<T>({ method, path, query, body }: RequestOptions): Promise<T> {
    const url = new URL(this.baseUrl + path);
    if (query) {
      for (const [key, value] of Object.entries(query)) {
        if (value === undefined || value === null) continue;
        if (Array.isArray(value)) {
          for (const v of value) url.searchParams.append(key, String(v));
        } else {
          url.searchParams.append(key, String(value));
        }
      }
    }

    return this.schedule(async () => {
      let res: Response;
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
      } catch (err) {
        throw new FlipSuiteApiError(0, `Network error calling FlipSuite: ${(err as Error).message}`);
      }

      const text = await res.text();
      let parsed: unknown = undefined;
      if (text) {
        try {
          parsed = JSON.parse(text);
        } catch {
          parsed = text;
        }
      }

      if (!res.ok) {
        const detail =
          parsed && typeof parsed === "object"
            ? JSON.stringify(parsed)
            : String(parsed ?? res.statusText);
        throw new FlipSuiteApiError(res.status, `FlipSuite API error ${res.status}: ${detail}`, parsed);
      }

      return parsed as T;
    });
  }

  createQuest(body: unknown): Promise<unknown> {
    return this.request({ method: "POST", path: "/v1/community/quests", body });
  }

  getQuest(questId: string): Promise<unknown> {
    return this.request({ method: "GET", path: `/v1/community/quests/${encodeURIComponent(questId)}` });
  }

  listQuests(query: Record<string, unknown>): Promise<unknown> {
    return this.request({ method: "GET", path: "/v1/community/quests", query });
  }

  getQuestCompletions(query: Record<string, unknown>): Promise<unknown> {
    return this.request({ method: "GET", path: "/v1/community/quest-completions", query });
  }

  // --- Core ---
  getSupportedChains(): Promise<unknown> {
    return this.request({ method: "GET", path: "/v1/chains" });
  }

  getUserFlipwallets(query: Record<string, unknown>): Promise<unknown> {
    return this.request({ method: "GET", path: "/v1/flipwallets", query });
  }

  // --- Gating ---
  getUser(userId: string): Promise<unknown> {
    return this.request({
      method: "GET",
      path: `/v1/community/gating/users/${encodeURIComponent(userId)}`,
    });
  }

  // --- Points ---
  listPointSystems(query: Record<string, unknown>): Promise<unknown> {
    return this.request({ method: "GET", path: "/v1/community/points", query });
  }

  getPointsBalance(pointSystemId: string, query: Record<string, unknown>): Promise<unknown> {
    return this.request({
      method: "GET",
      path: `/v1/community/points/${encodeURIComponent(pointSystemId)}/balance`,
      query,
    });
  }

  updatePointsBalance(pointSystemId: string, body: unknown): Promise<unknown> {
    return this.request({
      method: "POST",
      path: `/v1/community/points/${encodeURIComponent(pointSystemId)}/balance`,
      body,
    });
  }

  // --- Treasury (tipping) ---
  getTippingWalletBalance(chain: string): Promise<unknown> {
    return this.request({
      method: "GET",
      path: `/v1/community/tipping/wallets/${encodeURIComponent(chain)}/balance`,
    });
  }

  getTippingWalletInventory(chain: string): Promise<unknown> {
    return this.request({
      method: "GET",
      path: `/v1/community/tipping/wallets/${encodeURIComponent(chain)}/inventory`,
    });
  }

  sendTip(body: unknown): Promise<unknown> {
    return this.request({ method: "POST", path: "/v1/community/tipping/tips", body });
  }

  transferAsset(body: unknown): Promise<unknown> {
    return this.request({ method: "POST", path: "/v1/community/tipping/transfers", body });
  }

  createAirdrop(body: unknown): Promise<unknown> {
    return this.request({ method: "POST", path: "/v1/community/tipping/airdrops", body });
  }

  createRaffle(body: unknown): Promise<unknown> {
    return this.request({ method: "POST", path: "/v1/community/tipping/raffles", body });
  }

  burnAsset(body: unknown): Promise<unknown> {
    return this.request({ method: "POST", path: "/v1/community/tipping/burning", body });
  }
}
