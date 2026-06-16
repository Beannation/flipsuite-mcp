# Changelog

All notable changes to this project are documented here. This project adheres to
[Semantic Versioning](https://semver.org/).

## [0.2.1]

### Fixed
- Successful write calls that return an empty response body (e.g. `send_tip`, `transfer_asset`,
  `create_airdrop`, `create_raffle`, `burn_asset`) no longer surface a spurious `-32602` /
  invalid-`content` error. Empty `2xx` bodies now resolve to `{ success: true, status }`, and the
  result formatter never emits a non-string `content[0].text`.
- Synced the supported-chain enum (`src/chains.ts`) with the live `get_supported_chains`
  response: added `Pepecoin`, removed `Intergaze` and `Zaar`.

### Changed
- `list_quests` and `get_quest_completions` now default to `limit: 20` when no limit is given,
  so unfiltered calls return a bounded page instead of the entire history.

### Docs
- README and `docs/SAFETY.md`: clarified that asset-moving tools are user-operated and which
  clients execute them (Claude Code) vs. decline by policy (Claude Cowork).
- Corrected the Claude Cowork install steps to use **Settings → Developer → Edit Config**.

## [0.2.0]

### Added
- Points tools: `list_point_systems`, `get_points_balance`, `update_points_balance`.
- Treasury (tipping) tools: `get_tipping_wallet_balance`, `get_tipping_wallet_inventory`,
  `send_tip`, `transfer_asset`, `create_airdrop`, `create_raffle`, `burn_asset`.
- Lookup tools: `get_user`, `get_user_flipwallets`, `get_supported_chains`.
- Destructive safety annotations on asset-moving and balance-changing tools.
- `docs/TOOLS.md` and `docs/SAFETY.md`.

Now covers the full FlipSuite Community API (17 tools total).

## [0.1.0]

### Added
- Initial release: local stdio MCP server for the FlipSuite Community API.
- Quest tools: `create_quest` (full quest schema — 22 task types, 4 reward types,
  3 distribution strategies), `get_quest`, `list_quests`, `get_quest_completions`.
- `x-api-key` auth via `FLIPSUITE_API_KEY`; 1 request/second throttling.
- Packaged as a Claude plugin and single-plugin "beannation" marketplace.
