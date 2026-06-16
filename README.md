# flipsuite-mcp

A [Model Context Protocol](https://modelcontextprotocol.io) (MCP) server for the
**FlipSuite Community API**. It lets an MCP client such as Claude create and read
quests in your FlipSuite Discord community.

This is a local (stdio) server: it runs on your own machine and authenticates
with your own FlipSuite Community API key. No hosting and no OAuth required.

## Tools

| Tool | Type | Description |
|------|------|-------------|
| `create_quest` | write | Create a quest with tasks (requirements) and rewards. Created `ACTIVE` by default; pass `status: "DRAFT"` to keep it unpublished. |
| `get_quest` | read | Fetch a single quest by ID. |
| `list_quests` | read | List quests, with optional filters (status, recurrence, visibility) and `offset`/`limit` pagination. |
| `get_quest_completions` | read | Retrieve quest completion records, filtered by quest, round, user, or time range. |

`create_quest` models the full FlipSuite quest schema: up to 32 tasks across all
22 task types (Discord roles, NFT/token/points balance, token swap, the X/Twitter
checks, file/text/numeric/poll/wallet inputs, and custom API tasks) and up to 4
rewards (points, tokens, NFTs, or Discord roles) with everyone / first-come /
raffle distribution strategies.

> **Note:** The FlipSuite API does not currently expose an "update quest"
> endpoint, so editing an existing quest is not supported. This server can create
> and read quests only.

## Requirements

- Node.js 18 or newer
- A FlipSuite **Community API key**. Generate one in the
  [FlipSuite dashboard](https://flipsuite.xyz) under the **Developer** tab.

## Install

```bash
npm install -g flipsuite-mcp
```

Or run without installing:

```bash
npx flipsuite-mcp
```

## Configure your MCP client

The server reads your API key from the `FLIPSUITE_API_KEY` environment variable.

### Claude Desktop

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "flipsuite": {
      "command": "npx",
      "args": ["-y", "flipsuite-mcp"],
      "env": {
        "FLIPSUITE_API_KEY": "your-community-api-key"
      }
    }
  }
}
```

### Claude Code

```bash
claude mcp add flipsuite --env FLIPSUITE_API_KEY=your-community-api-key -- npx -y flipsuite-mcp
```

### Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `FLIPSUITE_API_KEY` | yes | Your FlipSuite Community API key. |
| `FLIPSUITE_API_BASE_URL` | no | Override the API base URL (defaults to `https://api.flipsuite.xyz`). |

## Develop

```bash
npm install
npm run build      # compile TypeScript to dist/
npm start          # run the compiled server (needs FLIPSUITE_API_KEY)
```

## Notes & limits

- The FlipSuite Community API is rate limited to **1 request per second**. This
  server serializes and throttles its requests to stay within that limit.
- All endpoints require a valid Community API key sent via the `x-api-key` header.

## Privacy

See [PRIVACY.md](./PRIVACY.md). In short: this server runs locally, stores
nothing, and sends requests only to the FlipSuite API using the key you provide.

## License

MIT — see [LICENSE](./LICENSE).
