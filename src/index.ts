#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { FlipSuiteClient } from "./client.js";
import { registerQuestTools } from "./tools.js";
import { registerExtendedTools } from "./extended-tools.js";

async function main(): Promise<void> {
  const apiKey = process.env.FLIPSUITE_API_KEY;
  if (!apiKey) {
    console.error(
      "[flipsuite-mcp] Missing FLIPSUITE_API_KEY environment variable.\n" +
        "Generate a Community API key in the FlipSuite dashboard (https://flipsuite.xyz)\n" +
        "under the Developer tab, then set FLIPSUITE_API_KEY in your MCP client config.",
    );
    process.exit(1);
  }

  const client = new FlipSuiteClient({
    apiKey,
    baseUrl: process.env.FLIPSUITE_API_BASE_URL,
  });

  const server = new McpServer({
    name: "flipsuite-mcp",
    version: "0.2.0",
  });

  registerQuestTools(server, client);
  registerExtendedTools(server, client);

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("[flipsuite-mcp] FlipSuite MCP server running on stdio.");
}

main().catch((err) => {
  console.error("[flipsuite-mcp] Fatal error:", err);
  process.exit(1);
});
