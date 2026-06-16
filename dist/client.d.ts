/**
 * FlipSuite Community API client.
 *
 * Transport- and auth-agnostic: it takes an API key and base URL and knows
 * nothing about MCP or stdio. This is the core that lifts unchanged into a
 * future hosted server (only how the key is supplied would change).
 *
 * Docs: https://docs.flipsuite.xyz/api-reference/community/introduction
 */
/** Error carrying the HTTP status and any response body from FlipSuite. */
export declare class FlipSuiteApiError extends Error {
    status: number;
    body?: unknown | undefined;
    constructor(status: number, message: string, body?: unknown | undefined);
}
export interface FlipSuiteClientOptions {
    apiKey: string;
    baseUrl?: string;
    /** Minimum spacing between requests in ms. FlipSuite limits to 1 req/sec. */
    minRequestIntervalMs?: number;
}
export declare class FlipSuiteClient {
    private readonly apiKey;
    private readonly baseUrl;
    private readonly minIntervalMs;
    private queue;
    private lastRequestAt;
    constructor(opts: FlipSuiteClientOptions);
    /** Serialize requests and throttle to respect the 1 req/sec rate limit. */
    private schedule;
    private request;
    createQuest(body: unknown): Promise<unknown>;
    getQuest(questId: string): Promise<unknown>;
    listQuests(query: Record<string, unknown>): Promise<unknown>;
    getQuestCompletions(query: Record<string, unknown>): Promise<unknown>;
    getSupportedChains(): Promise<unknown>;
    getUserFlipwallets(query: Record<string, unknown>): Promise<unknown>;
    getUser(userId: string): Promise<unknown>;
    listPointSystems(query: Record<string, unknown>): Promise<unknown>;
    getPointsBalance(pointSystemId: string, query: Record<string, unknown>): Promise<unknown>;
    updatePointsBalance(pointSystemId: string, body: unknown): Promise<unknown>;
    getTippingWalletBalance(chain: string): Promise<unknown>;
    getTippingWalletInventory(chain: string): Promise<unknown>;
    sendTip(body: unknown): Promise<unknown>;
    transferAsset(body: unknown): Promise<unknown>;
    createAirdrop(body: unknown): Promise<unknown>;
    createRaffle(body: unknown): Promise<unknown>;
    burnAsset(body: unknown): Promise<unknown>;
}
