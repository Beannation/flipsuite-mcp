import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { FlipSuiteClient } from "./client.js";
/**
 * Register points, treasury (tipping), gating, and core tools.
 * Transport-agnostic, like the quest tools.
 */
export declare function registerExtendedTools(server: McpServer, client: FlipSuiteClient): void;
