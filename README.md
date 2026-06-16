# flipsuite-mcp

A local [Model Context Protocol](https://modelcontextprotocol.io) (MCP) server for the
**FlipSuite Community API**. It lets an MCP client such as Claude manage your FlipSuite
Discord community — quests, points, treasury, and lookups — in plain language.

The server runs on your own machine and authenticates with your own FlipSuite Community
API key. No hosting and no OAuth required.

- **17 tools** covering the full FlipSuite Community API
- Works in **Claude Code**, **Claude Desktop**, and **Claude Cowork** (as a local MCP server or plugin)
- Faithful, fully-typed input schemas (including the complete quest model)
- Built-in 1 request/second rate limiting and clear error messages
- Destructive actions (asset transfers, burns, balance changes) carry safety annotations

## What it can do

| Area | Tools |
|------|-------|
| **Quests** | `create_quest`, `get_quest`, `list_quests`, `get_quest_completions` |
| **Points** | `list_point_systems`, `get_points_balance`, `update_points_balance` |
| **Treasury (tipping)** | `get_tipping_wallet_balance`, `get_tipping_wallet_inventory`, `send_tip`, `transfer_asset`, `create_airdrop`, `create_raffle`, `burn_asset` |
| **Lookups** | `get_user`, `get_user_flipwallets`, `get_supported_chains` |

See **[docs/TOOLS.md](docs/TOOLS.md)** for the full reference and **[docs/SAFETY.md](docs/SAFETY.md)**
for how the write/destructive tools behave.

> **Note:** FlipSuite has no "update quest" endpoint, so quests can be created and read but
> not edited. Treasury writes (`send_tip`, `transfer_asset`, `create_airdrop`, `create_raffle`,
> `burn_asset`) and `update_points_balance` change real assets/balances — read the safety doc.

## Requirements

- **Node.js 18+** ([nodejs.org](https://nodejs.org) — install the LTS build)
- A FlipSuite **Community API key** — generate one in the [FlipSuite dashboard](https://flipsuite.xyz)
  under the **Developer** tab.

## Get the code

```bash
git clone https://github.com/beannation/flipsuite-mcp.git
cd flipsuite-mcp
npm install
npm run build
```

The repo ships with a prebuilt `dist/`, so the plugin install paths below work even without
running the build yourself.

## Install

The server reads your key from the `FLIPSUITE_API_KEY` environment variable in every case.

### Claude Code

```bash
claude mcp add flipsuite -s user -t stdio \
  -e FLIPSUITE_API_KEY=YOUR_KEY \
  -- node "/absolute/path/to/flipsuite-mcp/dist/index.js"
```

`-s user` makes it available in every project. Confirm with `claude mcp list`, then ask
Claude: *"Use get_supported_chains to list FlipSuite's chains."*

### Claude Desktop

Edit `claude_desktop_config.json` (macOS: `~/Library/Application Support/Claude/`):

```json
{
  "mcpServers": {
    "flipsuite": {
      "command": "node",
      "args": ["/absolute/path/to/flipsuite-mcp/dist/index.js"],
      "env": { "FLIPSUITE_API_KEY": "YOUR_KEY" }
    }
  }
}
```

Fully quit and relaunch Claude Desktop afterwards.

### Claude Cowork

Either **Settings → Developer → add a local MCP server** (command `node`, argument the
absolute path to `dist/index.js`, env var `FLIPSUITE_API_KEY`), then start a new chat — or
install it as a plugin from the Plugins settings page.

> On managed/work accounts an admin may have disabled user-added local MCP servers. If you
> can't add one, use a personal account or ask your admin to deploy it as an organization plugin.

### As a plugin (Cowork & Claude Code)

This repo is also a single-plugin marketplace named **beannation**:

```text
/plugin marketplace add https://github.com/beannation/flipsuite-mcp.git
/plugin install flipsuite-mcp@beannation
```

The plugin reads `FLIPSUITE_API_KEY` from the environment Claude launches it from.

### Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `FLIPSUITE_API_KEY` | yes | Your FlipSuite Community API key. |
| `FLIPSUITE_API_BASE_URL` | no | Override the API base URL (default `https://api.flipsuite.xyz`). |

## Example prompts

- "List my FlipSuite point systems."
- "Create a draft quest called 'Welcome' that requires following @flipsuitexyz on X, rewarding 100 XP to everyone."
- "Show the top 10 holders of point system &lt;id&gt;."
- "What tokens are in our tipping wallet on Base?"

## Develop

```bash
npm install
npm run build      # compile TypeScript to dist/
npm run watch      # rebuild on change
npm start          # run the compiled server (needs FLIPSUITE_API_KEY)
```

Project layout: `src/client.ts` (transport-agnostic API client), `src/schemas.ts` +
`src/extended-schemas.ts` (Zod input schemas), `src/tools.ts` + `src/extended-tools.ts`
(tool registrations), `src/index.ts` (stdio entry point).

## Notes & limits

- The FlipSuite Community API is rate limited to **1 request/second**; the server throttles to match.
- All Community API endpoints require a valid key via the `x-api-key` header.
- `get_user` requires the FlipSuite Growth plan.

## Privacy

See [PRIVACY.md](PRIVACY.md). The server runs locally, stores nothing, and talks only to the
FlipSuite API using the key you provide.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT — see [LICENSE](LICENSE).
