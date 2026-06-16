# Contributing

Thanks for your interest in improving `flipsuite-mcp`.

## Development setup

```bash
git clone https://github.com/beannation/flipsuite-mcp.git
cd flipsuite-mcp
npm install
npm run build
```

Run the server locally with a key:

```bash
FLIPSUITE_API_KEY=your-key npm start
```

## Project structure

- `src/client.ts` — transport- and auth-agnostic FlipSuite API client.
- `src/schemas.ts` — Zod schemas for quests and shared asset items.
- `src/extended-schemas.ts` — Zod schemas for points, treasury, gating, core tools.
- `src/tools.ts` / `src/extended-tools.ts` — MCP tool registrations.
- `src/index.ts` — stdio entry point.

The schemas mirror the FlipSuite API (https://docs.flipsuite.xyz/api-reference). When the API
changes, update the schemas and the client, then rebuild.

## Guidelines

- Keep tool input schemas faithful to the API; prefer precise types and helpful `.describe()` text.
- Mark write tools with accurate safety annotations (`readOnlyHint`, `destructiveHint`, `idempotentHint`).
- Run `npm run build` before committing; commit the updated `dist/` so plugin installs keep working.
- Update `docs/TOOLS.md` and `CHANGELOG.md` when adding or changing tools.

## Reporting issues

Open an issue describing the problem, the tool involved, and the expected vs actual behavior.
Do not include your API key or any secrets.
