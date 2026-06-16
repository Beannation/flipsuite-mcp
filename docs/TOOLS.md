# Tool reference

All 17 tools exposed by `flipsuite-mcp`, grouped by area. Inputs are validated before any
network call. Every tool returns the FlipSuite API's JSON response as text, or a clear error
message (with `isError: true`) on failure.

Legend: **R** = read-only · **W** = write · **⚠️** = destructive / moves real assets.

## Quests

### `create_quest` — W
Create a quest. Faithfully models the full FlipSuite quest schema.

- `name` (string, ≤48), `shortDescription` (≤256), `fullDescription` (≤4096, markdown) — required
- `recurrence` — `ONCE` | `DAILY` | `WEEKLY` | `MONTHLY` | `CUSTOM` — required
- `visibility` — `PRIVATE` | `PUBLIC` | `SHARED` — required
- `tasks` (array, ≤32) — required; up to 22 task types (Discord roles/users/account-age,
  NFT/token/points balance, points/token tip, token swap, the X/Twitter checks, file/text/
  numeric/poll/wallet inputs, custom API task)
- `rewards` (array, ≤4) — required; `FIXED` | `RANDOM` | `SHARED`, each with an
  `EVERYONE` | `FCFS` | `RAFFLE` strategy and a points/token/NFT/role item
- Optional: `bannerUrl`, `recurrenceInterval`, `maxIterations`, `maxIterationCompletions`,
  `maxTotalCompletions`, `status` (`DRAFT` | `ACTIVE`, default `ACTIVE`)

> Pass `status: "DRAFT"` to create a quest without publishing it.

### `get_quest` — R
Fetch one quest by `questId`.

### `list_quests` — R
List quests. Filters: `statuses`, `recurrenceTypes`, `visibilityTypes`. Pagination: `offset`, `limit`.

### `get_quest_completions` — R
Completion records. Filters: `questId`, `iteration`, `userId`, `startTime`, `endTime`.
Pagination: `offset`, `limit` (max 50).

## Points

### `list_point_systems` — R
List point systems. Optional `query`, `statuses`, `permission`, `includeShared`, `offset`,
`limit` (max 50). Use this to find a `pointSystemId`.

### `get_points_balance` — R
Balances for a point system. `pointSystemId` (required); optional `userIds`, `sortBy`
(`balance-desc` | `balance-asc`), `offset`, `limit` (max 100).

### `update_points_balance` — W
Credit/debit balances. `pointSystemId` (required); `changes` (array of `{ userId, amount }`,
amount positive to add / negative to subtract); optional `metadata`. **Permanently changes
user balances.**

## Treasury (shared tipping wallet)

### `get_tipping_wallet_balance` — R
Token balances on a `chain` (symbol, raw + normalized balance, USD value).

### `get_tipping_wallet_inventory` — R
NFTs held in the tipping wallet on a `chain`.

### `send_tip` — W ⚠️
Send points/token/NFT to a Discord user. `channelId`, `recipientId`, `item` (required);
optional `comment`, `hideNotification`. Token/NFT tips move real assets.

### `transfer_asset` — W ⚠️
Send a token/NFT to an arbitrary wallet address. `channelId`, `recipientAddress`, `item`
(token or NFT) required; optional `comment`, `hideNotification`. **Irreversible.**

### `create_airdrop` — W ⚠️
Timed airdrop of points or a token. `channelId`, `item`, `countdown` (ms, ≤30 days),
`maxEntries` (≤500) required; optional `comment` and allowed/forbidden role/user IDs.

### `create_raffle` — W ⚠️
Timed raffle of points/token/NFT/role. As `create_airdrop`, plus optional `maxWinners` (≤500).

### `burn_asset` — W ⚠️
Permanently burn a token/NFT in the tipping wallet. `channelId`, `item` required; optional
`comment`, `hideNotification`. **Irreversible and destroys the asset.**

## Lookups

### `get_user` — R
Verified-user details (Discord profile + linked accounts/wallets per your gating rules).
`userId` required. Requires the Growth plan; users may opt out (fields return redacted).

### `get_user_flipwallets` — R
A user's per-chain Flipwallet addresses. `platform` (`discord`), `user` required.

### `get_supported_chains` — R
List of chains FlipSuite supports, with chain keys and network IDs. No input.
