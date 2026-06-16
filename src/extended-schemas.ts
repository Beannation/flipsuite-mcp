import { z } from "zod";
import { ChainKey } from "./chains.js";
import { pointsItem, tokenItem, nftItem, roleItem } from "./schemas.js";

/**
 * Schemas for the points, treasury (tipping), gating, and core tools.
 * Source of truth: https://docs.flipsuite.xyz/api-reference/community
 */

const uuidLike = z
  .string()
  .regex(
    /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
    "Must be a valid UUID",
  );
const snowflake = z.string().regex(/^\d+$/, "Must be a Discord ID");
const idList = z.array(snowflake).max(16);

// ---------------------------------------------------------------------------
// Core
// ---------------------------------------------------------------------------

export const getSupportedChainsShape = {};

export const getUserFlipwalletsShape = {
  platform: z.literal("discord").default("discord").describe("Platform to query."),
  user: z.string().describe("Platform (Discord) ID of the user to query."),
};

// ---------------------------------------------------------------------------
// Gating
// ---------------------------------------------------------------------------

export const getUserShape = {
  userId: snowflake.describe("Discord ID of the user to look up."),
};

// ---------------------------------------------------------------------------
// Points
// ---------------------------------------------------------------------------

export const listPointSystemsShape = {
  query: z.string().max(256).optional().describe("Search query to match point system name against."),
  statuses: z
    .array(z.enum(["ACTIVE", "ARCHIVED", "SUSPENDED"]))
    .optional()
    .describe("Point system statuses to filter by."),
  permission: z
    .enum(["VIEW", "TRANSFER", "SPEND", "PRINT"])
    .optional()
    .describe("Required permission for returned point systems (default VIEW)."),
  includeShared: z.boolean().optional().describe("Include shared point systems available through collabs."),
  offset: z.number().min(0).optional(),
  limit: z.number().min(0).max(50).optional().describe("Max systems to return (default 20, max 50)."),
};

export const getPointsBalanceShape = {
  pointSystemId: z.string().describe("ID of the point system."),
  userIds: z.array(z.string()).optional().describe("Specific Discord user IDs to get balances for."),
  sortBy: z.enum(["balance-desc", "balance-asc"]).optional().describe("Sort direction (default balance-desc)."),
  offset: z.number().min(0).optional(),
  limit: z.number().min(0).max(100).optional().describe("Max balances to return (default 20, max 100)."),
};

export const updatePointsBalanceShape = {
  pointSystemId: z.string().describe("ID of the point system to update."),
  changes: z
    .array(
      z.object({
        platform: z.literal("discord").default("discord"),
        userId: snowflake.describe("Discord user whose balance to change."),
        amount: z.number().describe("Points to add (positive) or subtract (negative)."),
      }),
    )
    .min(1)
    .max(1000)
    .describe("Balance changes to apply."),
  metadata: z
    .record(z.union([z.string().max(128), z.number(), z.boolean()]))
    .nullable()
    .optional()
    .describe("Custom metadata to include in the transaction log."),
};

// ---------------------------------------------------------------------------
// Treasury (tipping wallet) reads
// ---------------------------------------------------------------------------

export const getTippingWalletBalanceShape = {
  chain: ChainKey.describe("Chain to read the shared tipping wallet token balance on."),
};

export const getTippingWalletInventoryShape = {
  chain: ChainKey.describe("Chain to read the shared tipping wallet NFT inventory on."),
};

// ---------------------------------------------------------------------------
// Treasury writes (move real assets — high stakes)
// ---------------------------------------------------------------------------

const tipItem = z.union([pointsItem, tokenItem, nftItem]);
const transferItem = z.union([tokenItem, nftItem]);
const airdropItem = z.union([pointsItem, tokenItem]);
const raffleItem = z.union([pointsItem, tokenItem, nftItem, roleItem]);
const burnItem = z.union([tokenItem, nftItem]);

export const sendTipShape = {
  channelId: snowflake.describe("Discord channel where the tip is sent."),
  recipientId: snowflake.describe("Discord user who receives the tip."),
  item: tipItem.describe("Points, token, or NFT to tip."),
  comment: z.string().max(256).nullable().optional().describe("Note shown on the 'Tip received' message."),
  hideNotification: z.boolean().nullable().optional().describe("Hide the public channel notification."),
};

export const transferAssetShape = {
  channelId: snowflake.describe("Discord channel where the transfer is sent."),
  recipientAddress: z.string().max(128).describe("Wallet address to send the assets to."),
  item: transferItem.describe("Token or NFT to transfer."),
  comment: z.string().max(256).nullable().optional(),
  hideNotification: z.boolean().nullable().optional(),
};

export const createAirdropShape = {
  channelId: snowflake.describe("Discord channel where the airdrop is created."),
  item: airdropItem.describe("Points or token to airdrop."),
  countdown: z
    .number()
    .int()
    .min(1000)
    .max(2592000000)
    .describe("Milliseconds until the airdrop ends and distributes (max 30 days)."),
  maxEntries: z.number().int().min(1).max(500).describe("Maximum number of entries."),
  comment: z.string().max(256).nullable().optional(),
  allowedRoleIds: idList.nullable().optional(),
  allowedUserIds: idList.nullable().optional(),
  forbiddenRoleIds: idList.nullable().optional(),
  forbiddenUserIds: idList.nullable().optional(),
};

export const createRaffleShape = {
  channelId: snowflake.describe("Discord channel where the raffle is created."),
  item: raffleItem.describe("Points, token, NFT, or Discord role to raffle."),
  countdown: z
    .number()
    .int()
    .min(1000)
    .max(2592000000)
    .describe("Milliseconds until the raffle ends and distributes (max 30 days)."),
  maxEntries: z.number().int().min(1).max(500).describe("Maximum number of entries."),
  maxWinners: z.number().int().min(1).max(500).nullable().optional().describe("Maximum number of winners."),
  comment: z.string().max(256).nullable().optional(),
  allowedRoleIds: idList.nullable().optional(),
  allowedUserIds: idList.nullable().optional(),
  forbiddenRoleIds: idList.nullable().optional(),
  forbiddenUserIds: idList.nullable().optional(),
};

export const burnAssetShape = {
  channelId: snowflake.describe("Discord channel where the burn is executed."),
  item: burnItem.describe("Token or NFT to burn."),
  comment: z.string().max(256).nullable().optional(),
  hideNotification: z.boolean().nullable().optional(),
};
