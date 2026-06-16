import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { FlipSuiteApiError, FlipSuiteClient } from "./client.js";
import {
  createQuestShape,
  getQuestShape,
  listQuestsShape,
  getQuestCompletionsShape,
} from "./schemas.js";

/** Render a successful API payload as a pretty-printed JSON text block. */
function ok(data: unknown): CallToolResult {
  return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
}

/** Turn an error into a tool error result Claude can read and act on. */
function fail(err: unknown): CallToolResult {
  let message: string;
  if (err instanceof FlipSuiteApiError) {
    message =
      err.status === 401 || err.status === 403
        ? `Authentication failed (${err.status}). Check that FLIPSUITE_API_KEY is a valid Community API key. ${err.message}`
        : err.message;
  } else {
    message = err instanceof Error ? err.message : String(err);
  }
  return { content: [{ type: "text", text: message }], isError: true };
}

/**
 * Register the FlipSuite quest tools on an MCP server.
 * Kept separate from transport/auth wiring so it can be reused by a future
 * hosted server.
 */
export function registerQuestTools(server: McpServer, client: FlipSuiteClient): void {
  server.registerTool(
    "create_quest",
    {
      title: "Create Quest",
      description:
        "Create a new quest in your FlipSuite community. A quest has a name, descriptions, a recurrence and visibility, an optional set of completion limits, a list of tasks (requirements members must meet, e.g. follow an X account, hold an NFT, submit input) and a list of rewards (points, tokens, NFTs, or Discord roles). Created as ACTIVE by default; pass status DRAFT to create it unpublished. This writes to your community.",
      inputSchema: createQuestShape,
      annotations: {
        title: "Create Quest",
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false,
        openWorldHint: true,
      },
    },
    async (args) => {
      try {
        return ok(await client.createQuest(args));
      } catch (err) {
        return fail(err);
      }
    },
  );

  server.registerTool(
    "get_quest",
    {
      title: "Get Quest",
      description:
        "Fetch full details of a single quest in your FlipSuite community by its quest ID, including its tasks, rewards, status, timing, and completion counts.",
      inputSchema: getQuestShape,
      annotations: {
        title: "Get Quest",
        readOnlyHint: true,
        openWorldHint: true,
      },
    },
    async (args) => {
      try {
        return ok(await client.getQuest(args.questId));
      } catch (err) {
        return fail(err);
      }
    },
  );

  server.registerTool(
    "list_quests",
    {
      title: "List Quests",
      description:
        "List quests in your FlipSuite community. Optionally filter by status, recurrence type, or visibility, and paginate with offset/limit. Use this to find a quest's ID before fetching its details.",
      inputSchema: listQuestsShape,
      annotations: {
        title: "List Quests",
        readOnlyHint: true,
        openWorldHint: true,
      },
    },
    async (args) => {
      try {
        return ok(await client.listQuests(args));
      } catch (err) {
        return fail(err);
      }
    },
  );

  server.registerTool(
    "get_quest_completions",
    {
      title: "Get Quest Completions",
      description:
        "Retrieve quest completion records for your FlipSuite community, including who completed which quest, when, and the verification data per task. Filter by quest ID, quest round (iteration), user ID, and time range; paginate with offset/limit (max 50 per page).",
      inputSchema: getQuestCompletionsShape,
      annotations: {
        title: "Get Quest Completions",
        readOnlyHint: true,
        openWorldHint: true,
      },
    },
    async (args) => {
      try {
        return ok(await client.getQuestCompletions(args));
      } catch (err) {
        return fail(err);
      }
    },
  );
}
