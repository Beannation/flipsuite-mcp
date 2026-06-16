import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { FlipSuiteClient } from "./client.js";
/**
 * Register the FlipSuite quest tools on an MCP server.
 * Kept separate from transport/auth wiring so it can be reused by a future
 * hosted server.
 */
export declare function registerQuestTools(server: McpServer, client: FlipSuiteClient): void;
