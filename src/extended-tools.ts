import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { FlipSuiteApiError, FlipSuiteClient } from "./client.js";
import {
  getSupportedChainsShape,
  getUserFlipwalletsShape,
  getUserShape,
  listPointSystemsShape,
  getPointsBalanceShape,
  updatePointsBalanceShape,
  getTippingWalletBalanceShape,
  getTippingWalletInventoryShape,
  sendTipShape,
  transferAssetShape,
  createAirdropShape,
  createRaffleShape,
  burnAssetShape,
} from "./extended-schemas.js";

function ok(data: unknown): CallToolResult {
  return { content: [{ type: "text", text: JSON.stringify(data ?? null, null, 2) }] };
}

function fail(err: unknown): CallToolResult {
  let message: string;
  if (err instanceof FlipSuiteApiError) {
    message =
      err.status === 401 || err.status === 403
        ? `Authentication failed (${err.status}). Check FLIPSUITE_API_KEY (and that your plan/permissions allow this action). ${err.message}`
        : err.message;
  } else {
    message = err instanceof Error ? err.message : String(err);
  }
  return { content: [{ type: "text", text: message }], isError: true };
}

const READ = { readOnlyHint: true, openWorldHint: true } as const;
// Treasury writes move real on-chain assets; mark as destructive + non-idempotent.
const ASSET_WRITE = {
  readOnlyHint: false,
  destructiveHint: true,
  idempotentHint: false,
  openWorldHint: true,
} as const;

/**
 * Register points, treasury (tipping), gating, and core tools.
 * Transport-agnostic, like the quest tools.
 */
export function registerExtendedTools(server: McpServer, client: FlipSuiteClient): void {
  // ----- Core -----
  server.registerTool(
    "get_supported_chains",
    {
      title: "Get Supported Chains",
      description: "List the blockchains supported by FlipSuite, with their chain keys and network IDs.",
      inputSchema: getSupportedChainsShape,
      annotations: { title: "Get Supported Chains", ...READ },
    },
    async () => {
      try {
        return ok(await client.getSupportedChains());
      } catch (err) {
        return fail(err);
      }
    },
  );

  server.registerTool(
    "get_user_flipwallets",
    {
      title: "Get User Flipwallets",
      description:
        "Get the Flipwallets (per-chain wallet addresses) of a given Discord user. Flipwallets can change over time, so don't cache them.",
      inputSchema: getUserFlipwalletsShape,
      annotations: { title: "Get User Flipwallets", ...READ },
    },
    async (args) => {
      try {
        return ok(await client.getUserFlipwallets(args));
      } catch (err) {
        return fail(err);
      }
    },
  );

  // ----- Gating -----
  server.registerTool(
    "get_user",
    {
      title: "Get User Details",
      description:
        "Get details about a user who has verified in your server: Discord profile, and the linked accounts and wallets required by your gating rules. Users can opt out of sharing (fields come back redacted). Requires the Growth plan.",
      inputSchema: getUserShape,
      annotations: { title: "Get User Details", ...READ },
    },
    async (args) => {
      try {
        return ok(await client.getUser(args.userId));
      } catch (err) {
        return fail(err);
      }
    },
  );

  // ----- Points -----
  server.registerTool(
    "list_point_systems",
    {
      title: "List Point Systems",
      description:
        "List the point systems in your community, with optional name search, status/permission filters, and pagination. Use this to find a point system's ID.",
      inputSchema: listPointSystemsShape,
      annotations: { title: "List Point Systems", ...READ },
    },
    async (args) => {
      try {
        return ok(await client.listPointSystems(args));
      } catch (err) {
        return fail(err);
      }
    },
  );

  server.registerTool(
    "get_points_balance",
    {
      title: "Get Points Balance",
      description:
        "Get the balance of a point system for one or more users (or the top holders). Filter by specific user IDs and sort by balance; paginate with offset/limit (max 100).",
      inputSchema: getPointsBalanceShape,
      annotations: { title: "Get Points Balance", ...READ },
    },
    async ({ pointSystemId, ...query }) => {
      try {
        return ok(await client.getPointsBalance(pointSystemId, query));
      } catch (err) {
        return fail(err);
      }
    },
  );

  server.registerTool(
    "update_points_balance",
    {
      title: "Update Points Balance",
      description:
        "Credit or debit a point system balance for one or more users. Each change has a Discord userId and an amount (positive to add, negative to subtract). This permanently modifies user balances in your community.",
      inputSchema: updatePointsBalanceShape,
      annotations: {
        title: "Update Points Balance",
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: false,
        openWorldHint: true,
      },
    },
    async ({ pointSystemId, ...body }) => {
      try {
        return ok(await client.updatePointsBalance(pointSystemId, body));
      } catch (err) {
        return fail(err);
      }
    },
  );

  // ----- Treasury reads -----
  server.registerTool(
    "get_tipping_wallet_balance",
    {
      title: "Get Tipping Wallet Balance",
      description:
        "Get your community's shared tipping wallet token balances on a given chain, including symbol, normalized and raw balance, and USD value.",
      inputSchema: getTippingWalletBalanceShape,
      annotations: { title: "Get Tipping Wallet Balance", ...READ },
    },
    async (args) => {
      try {
        return ok(await client.getTippingWalletBalance(args.chain));
      } catch (err) {
        return fail(err);
      }
    },
  );

  server.registerTool(
    "get_tipping_wallet_inventory",
    {
      title: "Get Tipping Wallet Inventory",
      description: "Get the NFTs held in your community's shared tipping wallet on a given chain.",
      inputSchema: getTippingWalletInventoryShape,
      annotations: { title: "Get Tipping Wallet Inventory", ...READ },
    },
    async (args) => {
      try {
        return ok(await client.getTippingWalletInventory(args.chain));
      } catch (err) {
        return fail(err);
      }
    },
  );

  // ----- Treasury writes (move real assets) -----
  server.registerTool(
    "send_tip",
    {
      title: "Send Tip",
      description:
        "Send a tip (points, token, or NFT) from your shared tipping wallet to a Discord user, posted in a channel. WARNING: token and NFT tips move real on-chain assets and cannot be undone. Confirm the recipient, item, and amount before calling.",
      inputSchema: sendTipShape,
      annotations: { title: "Send Tip", ...ASSET_WRITE },
    },
    async (args) => {
      try {
        return ok(await client.sendTip(args));
      } catch (err) {
        return fail(err);
      }
    },
  );

  server.registerTool(
    "transfer_asset",
    {
      title: "Transfer Asset",
      description:
        "Transfer a token or NFT from your shared tipping wallet to an arbitrary wallet address. WARNING: this moves real on-chain assets to an external address and cannot be undone. Double-check the recipient address, item, and amount before calling.",
      inputSchema: transferAssetShape,
      annotations: { title: "Transfer Asset", ...ASSET_WRITE },
    },
    async (args) => {
      try {
        return ok(await client.transferAsset(args));
      } catch (err) {
        return fail(err);
      }
    },
  );

  server.registerTool(
    "create_airdrop",
    {
      title: "Create Airdrop",
      description:
        "Create a timed airdrop of points or a token in a Discord channel; entrants split or claim the prize when the countdown ends. WARNING: token airdrops commit real on-chain assets. Confirm the item, amount, countdown, and entry limits before calling.",
      inputSchema: createAirdropShape,
      annotations: { title: "Create Airdrop", ...ASSET_WRITE },
    },
    async (args) => {
      try {
        return ok(await client.createAirdrop(args));
      } catch (err) {
        return fail(err);
      }
    },
  );

  server.registerTool(
    "create_raffle",
    {
      title: "Create Raffle",
      description:
        "Create a timed raffle of points, a token, an NFT, or a Discord role in a channel; random winners are picked when the countdown ends. WARNING: token/NFT raffles commit real on-chain assets. Confirm the item, winners, countdown, and entry limits before calling.",
      inputSchema: createRaffleShape,
      annotations: { title: "Create Raffle", ...ASSET_WRITE },
    },
    async (args) => {
      try {
        return ok(await client.createRaffle(args));
      } catch (err) {
        return fail(err);
      }
    },
  );

  server.registerTool(
    "burn_asset",
    {
      title: "Burn Asset",
      description:
        "Permanently burn a token or NFT held in your shared tipping wallet. WARNING: burning is irreversible and destroys the asset. Confirm the exact item and amount before calling.",
      inputSchema: burnAssetShape,
      annotations: { title: "Burn Asset", ...ASSET_WRITE },
    },
    async (args) => {
      try {
        return ok(await client.burnAsset(args));
      } catch (err) {
        return fail(err);
      }
    },
  );
}
