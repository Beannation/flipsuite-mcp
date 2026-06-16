# Safety & responsible use

`flipsuite-mcp` can perform actions that move real on-chain assets and change user data in
your community. Read this before enabling the write tools.

## Risk tiers

**Read-only (safe).** `get_quest`, `list_quests`, `get_quest_completions`,
`list_point_systems`, `get_points_balance`, `get_tipping_wallet_balance`,
`get_tipping_wallet_inventory`, `get_user`, `get_user_flipwallets`, `get_supported_chains`.
These never change anything.

**Writes (consequential).**
- `create_quest` — publishes a quest to your community (use `status: "DRAFT"` to stage it).
- `update_points_balance` — permanently credits/debits user point balances.

**Destructive — moves or destroys real assets (high stakes).**
- `send_tip`, `transfer_asset`, `create_airdrop`, `create_raffle` — commit real tokens/NFTs
  from your shared tipping wallet. On-chain transfers cannot be reversed.
- `burn_asset` — permanently destroys a token/NFT.

## Safety annotations

Each tool is tagged with MCP annotations (`readOnlyHint`, `destructiveHint`, `idempotentHint`)
so MCP clients can decide when to ask for confirmation. The five asset tools and `burn_asset`
are marked **destructive**, and `update_points_balance` is marked as a non-idempotent write.

Most clients (including Claude) will surface a confirmation prompt before running a tool
marked destructive. Always review the recipient, item, chain, and amount before approving.

## Client policy: who actually executes asset moves

A confirmation prompt is not a guarantee the assistant will send the transaction. Some client
surfaces apply an additional safety policy that **prevents the assistant from initiating any
transfer of on-chain assets, even after you confirm**:

- **Claude Code** executes the five asset tools (`send_tip`, `transfer_asset`, `create_airdrop`,
  `create_raffle`, `burn_asset`) after a confirmation prompt.
- **Claude Cowork** declines to execute them by design; it hands the action back to you. The
  read tools, `create_quest`, and points lookups still work conversationally.
- You can always perform the same actions directly in the FlipSuite Discord bot or dashboard.

Treat the asset tools as **you-operated**: run them from Claude Code or FlipSuite directly, and
expect Cowork to stop short of sending. This is a property of the client, not of this server.

## Recommendations

- **Start in draft / on testnets.** Create quests as `DRAFT`; rehearse treasury actions with
  tiny amounts before doing anything large.
- **Protect your key.** Anyone who can run this server with your `FLIPSUITE_API_KEY` can move
  assets and change balances. Treat it like a password; rotate it if it's ever exposed.
- **Least privilege.** Generate an API key scoped to only the permissions you need, if your
  FlipSuite plan supports it.
- **No undo.** There is no "cancel transfer" or "unburn." Confirm twice.

## What the server does and doesn't do

- It does **not** store your key or log requests to disk; the key lives in memory only.
- It talks only to the FlipSuite API (`https://api.flipsuite.xyz` by default).
- It throttles to 1 request/second to respect FlipSuite's rate limit.
