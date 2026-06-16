# Changelog

All notable changes to this project are documented here. This project adheres to
[Semantic Versioning](https://semver.org/).

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
