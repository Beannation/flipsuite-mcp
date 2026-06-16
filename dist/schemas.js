import { z } from "zod";
import { ChainKey } from "./chains.js";
/**
 * Zod schemas mirroring the FlipSuite Community API quest model.
 * Source of truth: https://docs.flipsuite.xyz/api-reference/community/quests
 *
 * These are transport-agnostic and shared by the tool layer, so they lift
 * unchanged into a future hosted (remote) server.
 */
/** UUID accepted by FlipSuite (standard UUID, plus the nil and max UUIDs). */
const uuidLike = z
    .string()
    .regex(/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, "Must be a valid UUID");
const discordSnowflake = z.string().regex(/^\d{16,}$/, "Must be a Discord ID (snowflake)");
const amountUnit = z.enum(["absolute", "dollar"]);
/** Fields shared by every quest task. */
const sharedTaskFields = {
    isOptional: z.boolean().nullable().optional().describe("Whether task completion is optional."),
    isReviewRequired: z
        .boolean()
        .nullable()
        .optional()
        .describe("Whether a manual review is required for this task."),
    skipsReview: z
        .boolean()
        .nullable()
        .optional()
        .describe("If true, the quest submission is auto-approved when this task is completed."),
    rewardBoost: z
        .number()
        .int()
        .min(1)
        .max(10000)
        .nullable()
        .optional()
        .describe("Reward boost percentage."),
    rewardBoostMode: z
        .enum(["MAX", "CUMULATIVE", "GLOBAL"])
        .nullable()
        .optional()
        .describe("Reward boost mode."),
};
// ---------------------------------------------------------------------------
// Tasks (oneOf, discriminated by `type`)
// ---------------------------------------------------------------------------
const apiTask = z.object({
    type: z.literal("API"),
    name: z.string().min(1).max(48).describe("Task name."),
    description: z.string().min(1).max(256).describe("Task description."),
    endpoint: z.string().url().describe("Endpoint called to verify the task."),
    userIdMethods: z
        .array(z.enum(["discord", "twitter", "wallets"]))
        .min(1)
        .describe("User identification methods."),
    walletChains: z.array(ChainKey).min(1).nullable().optional(),
    ...sharedTaskFields,
});
const discordAccountAgeTask = z.object({
    type: z.literal("DISCORD_ACCOUNT_AGE"),
    minAccountAgeDays: z.number().min(1).describe("Minimum Discord account age in days."),
    ...sharedTaskFields,
});
const discordServerRolesTask = z.object({
    type: z.literal("DISCORD_SERVER_ROLES"),
    serverId: discordSnowflake.describe("Discord server (guild) ID."),
    serverInviteLink: z
        .string()
        .regex(/https:\/\/discord\.gg\/\w+/)
        .nullable()
        .optional(),
    roleIds: z.array(discordSnowflake).min(1).describe("IDs of Discord roles to check for."),
    operator: z.enum(["and", "or"]).describe("Logical operator used when checking roles."),
    ...sharedTaskFields,
});
const discordUsersTask = z.object({
    type: z.literal("DISCORD_USERS"),
    userIds: z.array(discordSnowflake).min(1).max(25).describe("IDs of Discord users to check for."),
    ...sharedTaskFields,
});
const fileUploadTask = z.object({
    type: z.literal("FILE_UPLOAD"),
    label: z.string().min(1).max(32).describe("Input label."),
    description: z.string().max(256).describe("Input description."),
    fileTypes: z.array(z.enum(["IMAGE", "VIDEO", "AUDIO", "PDF"])).min(1).describe("Allowed file types."),
    ...sharedTaskFields,
});
const nftStandard = z.enum([
    "CW_721",
    "ERC-721",
    "ERC-1155",
    "METAPLEX",
    "METAPLEX_CNFT",
    "METAPLEX_CORE",
    "SG_BADGE",
    "UNKNOWN",
]);
const nftBalanceTask = z.object({
    type: z.literal("NFT_BALANCE"),
    chain: ChainKey.describe("Chain key."),
    contractAddress: z.string().max(128).describe("NFT contract (verified creator address on Solana)."),
    collectionName: z.string().min(4).max(64).describe("NFT collection name."),
    standard: nftStandard.describe("NFT collection standard."),
    minAmount: z.number().min(0).nullable().optional().describe("Minimum required amount (inclusive)."),
    maxAmount: z.number().min(0).nullable().optional().describe("Maximum allowed amount (exclusive)."),
    tokenIds: z
        .string()
        .regex(/^((\d+(-\d+)?)|(\w+))(,((\d+(-\d+)?)|(\w+)))*$/)
        .nullable()
        .optional()
        .describe("Required NFT IDs."),
    attributes: z
        .array(z.object({ key: z.string(), value: z.string() }))
        .nullable()
        .optional()
        .describe("Required NFT attributes."),
    attributesOperator: z.enum(["and", "or"]).nullable().optional(),
    includeFlipwallets: z.boolean().nullable().optional(),
    includeFlipwalletsExclusively: z.boolean().nullable().optional(),
    includeStakingContracts: z.boolean().nullable().optional(),
    includeStakingContractsExclusively: z.boolean().nullable().optional(),
    ...sharedTaskFields,
});
const numberInputTask = z.object({
    type: z.literal("NUMBER_INPUT"),
    label: z.string().min(1).max(32).describe("Input label."),
    description: z.string().max(256).describe("Input description."),
    isInteger: z.boolean().nullable().optional(),
    prefix: z.string().max(16).nullable().optional(),
    suffix: z.string().max(16).nullable().optional(),
    minValue: z.number().nullable().optional(),
    maxValue: z.number().nullable().optional(),
    ...sharedTaskFields,
});
const pointsBalanceTask = z.object({
    type: z.literal("POINTS_BALANCE"),
    pointSystemId: uuidLike.describe("Point system ID."),
    minAmount: z.number().min(0).nullable().optional(),
    maxAmount: z.number().min(0).nullable().optional(),
    ...sharedTaskFields,
});
const pointsTipTask = z.object({
    type: z.literal("POINTS_TIP"),
    pointSystemId: uuidLike.describe("Point system ID."),
    minAmount: z.number().min(0).describe("Minimum required tip amount."),
    lookbackWindowDays: z.number().min(0).nullable().optional(),
    ...sharedTaskFields,
});
const pollInputTask = z.object({
    type: z.literal("POLL_INPUT"),
    label: z.string().min(1).max(64).describe("Poll label."),
    description: z.string().max(256).nullable().optional(),
    options: z
        .array(z.object({
        id: uuidLike,
        label: z.string().min(1).max(64).describe("Option label."),
        description: z.string().max(256).nullable().optional(),
    }))
        .min(2)
        .max(25)
        .describe("Poll options."),
    minSelections: z.number().int().min(1).describe("Minimum allowed selections."),
    maxSelections: z.number().int().min(1).describe("Maximum allowed selections."),
    ...sharedTaskFields,
});
const swapPlatform = z.enum([
    "COWSWAP",
    "FLIPSUITE",
    "GAS_ZIP",
    "HYPERLIQUID",
    "JUPITER",
    "LI_FI",
    "LIQUID_SWAP",
    "OBSIDIAN",
    "OKU_TRADE",
    "ORBITER",
    "RELAY",
    "ROCKETX",
    "SOLANA",
    "SOMNEX",
    "SKIP_GO",
    "SQUID",
    "STARGATE",
    "SUSHI_SWAP",
    "WOLFSWAP",
    "VVS",
]);
const tokenSwapTask = z.object({
    type: z.literal("TOKEN_SWAP"),
    chain: ChainKey.nullable().optional().describe("Chain key."),
    tokenAddress: z.string().max(128).nullable().optional(),
    minAmount: z.number().min(0).describe("Minimum required swap amount."),
    amountUnit: amountUnit.describe("Amount unit."),
    allowedPlatforms: z.array(swapPlatform).max(10).nullable().optional(),
    lookbackWindowDays: z.number().min(0).nullable().optional(),
    ...sharedTaskFields,
});
const textInputTask = z.object({
    type: z.literal("TEXT_INPUT"),
    label: z.string().min(1).max(32).describe("Input label."),
    description: z.string().max(256).describe("Input description."),
    minLength: z.number().int().min(1).nullable().optional(),
    maxLength: z.number().int().min(1).nullable().optional(),
    regex: z.string().min(1).max(256).nullable().optional().describe("Regex to validate the response."),
    ...sharedTaskFields,
});
const tokenTipTask = z.object({
    type: z.literal("TOKEN_TIP"),
    chain: ChainKey.nullable().optional().describe("Chain key."),
    tokenAddress: z.string().max(128).nullable().optional(),
    minAmount: z.number().min(0).describe("Minimum required tip amount."),
    amountUnit: amountUnit.describe("Amount unit."),
    lookbackWindowDays: z.number().min(0).nullable().optional(),
    excludedActions: z.array(z.enum(["tip", "airdrop", "raffle"])).max(2).nullable().optional(),
    ...sharedTaskFields,
});
const tokenBalanceTask = z.object({
    type: z.literal("TOKEN_BALANCE"),
    chain: ChainKey.describe("Chain key."),
    tokenAddress: z.string().max(128).nullable().optional(),
    minAmount: z.number().min(0).nullable().optional(),
    maxAmount: z.number().min(0).nullable().optional(),
    amountUnit: amountUnit.describe("Amount unit."),
    includeFlipwallets: z.boolean().nullable().optional(),
    includeFlipwalletsExclusively: z.boolean().nullable().optional(),
    includeStakingContracts: z.boolean().nullable().optional(),
    includeStakingContractsExclusively: z.boolean().nullable().optional(),
    ...sharedTaskFields,
});
const twitterAccountAgeTask = z.object({
    type: z.literal("TWITTER_ACCOUNT_AGE"),
    minAccountAgeDays: z.number().min(1).describe("Minimum X account age in days."),
    ...sharedTaskFields,
});
const twitterAccountFollowTask = z.object({
    type: z.literal("TWITTER_ACCOUNT_FOLLOW"),
    accountHandles: z.array(z.string().min(2).max(16)).min(1).max(8).describe("Account handles to follow."),
    ...sharedTaskFields,
});
const twitterAccountFollowersTask = z.object({
    type: z.literal("TWITTER_ACCOUNT_FOLLOWERS"),
    minFollowers: z.number().min(1).nullable().optional(),
    maxFollowers: z.number().min(1).nullable().optional(),
    ...sharedTaskFields,
});
const twitterAccountSubscribeTask = z.object({
    type: z.literal("TWITTER_ACCOUNT_SUBSCRIBE"),
    accountHandles: z.array(z.string().min(2).max(16)).min(1).max(8).describe("Account handles to subscribe to."),
    ...sharedTaskFields,
});
const twitterAccountVerifiedTask = z.object({
    type: z.literal("TWITTER_ACCOUNT_VERIFIED"),
    ...sharedTaskFields,
});
const twitterPostInteractionTask = z.object({
    type: z.literal("TWITTER_POST_INTERACTION"),
    postUrl: z
        .string()
        .min(1)
        .regex(/^https:\/\/(?:twitter|x).com\/(\w+)\/status\/(\d+)(?:\?[^/]*)?$/)
        .describe("Link to a post on X."),
    isLikeRequired: z.boolean().nullable().optional(),
    isBookmarkRequired: z.boolean().nullable().optional(),
    isRepostRequired: z.boolean().nullable().optional(),
    isCommentRequired: z.boolean().nullable().optional(),
    minLength: z.number().min(0).nullable().optional().describe("Minimum required comment length."),
    requiredExactText: z.string().max(256).nullable().optional(),
    requiredPhrases: z.array(z.string()).max(16).nullable().optional(),
    isImageRequired: z.boolean().nullable().optional(),
    ...sharedTaskFields,
});
const twitterPostCreateTask = z.object({
    type: z.literal("TWITTER_POST_CREATE"),
    requiredPhrases: z.array(z.string()).max(16).nullable().optional(),
    minLikes: z.number().min(0).nullable().optional(),
    minReposts: z.number().min(0).nullable().optional(),
    minReplies: z.number().min(0).nullable().optional(),
    minImpressions: z.number().min(0).nullable().optional(),
    minLength: z.number().min(0).nullable().optional().describe("Minimum required post length."),
    isImageRequired: z.boolean().nullable().optional(),
    lookbackWindowDays: z.number().min(0).nullable().optional(),
    ...sharedTaskFields,
});
const walletInputTask = z.object({
    type: z.literal("WALLET_INPUT"),
    label: z.string().min(1).max(32).describe("Input label."),
    description: z.string().max(256).describe("Input description."),
    chains: z.array(ChainKey).min(1).describe("Chains to restrict the wallet input to."),
    ...sharedTaskFields,
});
export const QuestTask = z.discriminatedUnion("type", [
    apiTask,
    discordAccountAgeTask,
    discordServerRolesTask,
    discordUsersTask,
    fileUploadTask,
    nftBalanceTask,
    numberInputTask,
    pointsBalanceTask,
    pointsTipTask,
    pollInputTask,
    tokenSwapTask,
    textInputTask,
    tokenTipTask,
    tokenBalanceTask,
    twitterAccountAgeTask,
    twitterAccountFollowTask,
    twitterAccountFollowersTask,
    twitterAccountSubscribeTask,
    twitterAccountVerifiedTask,
    twitterPostInteractionTask,
    twitterPostCreateTask,
    walletInputTask,
]);
// ---------------------------------------------------------------------------
// Rewards
// ---------------------------------------------------------------------------
const rewardStrategy = z.discriminatedUnion("type", [
    z.object({ type: z.literal("EVERYONE") }).describe("Everyone who completes the quest is eligible."),
    z.object({
        type: z.literal("FCFS"),
        maxClaims: z.number().int().min(1).describe("Number of people to reward (first come first served)."),
    }),
    z.object({
        type: z.literal("RAFFLE"),
        maxWinners: z.number().int().min(1).describe("Number of random winners to pick."),
    }),
]);
const pointsRewardItem = z.object({
    type: z.literal("POINTS"),
    pointSystemId: uuidLike.describe("Point system ID."),
    amount: z.number().gt(0).describe("Points amount."),
});
const tokenRewardItem = z.object({
    type: z.literal("TOKEN"),
    chain: ChainKey,
    tokenAddress: z
        .string()
        .max(256)
        .nullable()
        .optional()
        .describe("Token address. Leave blank for native/gas tokens (e.g. ETH on Base)."),
    amount: z.number().gt(0).describe("Token amount."),
    amountUnit: amountUnit.nullable().optional(),
});
const nftRewardItem = z.object({
    type: z.literal("NFT"),
    chain: ChainKey,
    tokenAddress: z.string().max(256).nullable().optional().describe("Token address of the NFT. Leave blank on Solana."),
    tokenId: z.string().max(256).describe("ID of the NFT."),
    amount: z.number().int().min(1).nullable().optional().describe("NFT amount (ERC-1155 only)."),
});
const roleRewardItem = z.object({
    type: z.literal("ROLE"),
    roleId: z.string().regex(/^\d+$/).describe("ID of a Discord role to grant."),
    duration: z
        .number()
        .int()
        .gt(0)
        .max(93312000000)
        .nullable()
        .optional()
        .describe("Milliseconds after which the role is revoked (max 3 years). Unset = permanent."),
});
const fixedRewardItem = z.union([pointsRewardItem, tokenRewardItem, nftRewardItem, roleRewardItem]);
const sharedRewardItem = z.union([pointsRewardItem, tokenRewardItem]);
export const QuestReward = z.discriminatedUnion("type", [
    z.object({
        type: z.literal("FIXED"),
        strategy: rewardStrategy,
        item: fixedRewardItem.describe("Points, Token, NFT, or Discord role to grant."),
    }),
    z.object({
        type: z.literal("RANDOM"),
        strategy: rewardStrategy,
        rewardPoolId: z.string().min(1).describe("ID of a reward pool to draw rewards from."),
    }),
    z.object({
        type: z.literal("SHARED"),
        strategy: rewardStrategy,
        item: sharedRewardItem.describe("Points or token pool to share between winners."),
    }),
]);
// ---------------------------------------------------------------------------
// create_quest tool input (raw shape for MCP registerTool)
// ---------------------------------------------------------------------------
export const createQuestShape = {
    name: z.string().max(48).describe("Quest name."),
    shortDescription: z.string().max(256).describe("Quest intro (plain text only)."),
    fullDescription: z.string().max(4096).describe("Quest instructions (supports markdown)."),
    bannerUrl: z.string().url().nullable().optional().describe("Link to a banner image for the quest."),
    recurrence: z.enum(["ONCE", "DAILY", "WEEKLY", "MONTHLY", "CUSTOM"]).describe("Quest recurrence type."),
    recurrenceInterval: z
        .number()
        .min(3600000)
        .max(31536000000)
        .nullable()
        .optional()
        .describe("Interval between rounds in ms, or duration for ONCE quests (1 hour to 1 year)."),
    visibility: z.enum(["PRIVATE", "PUBLIC", "SHARED"]).describe("Quest visibility type."),
    maxIterations: z.number().int().min(1).nullable().optional().describe("Maximum number of quest rounds."),
    maxIterationCompletions: z
        .number()
        .int()
        .min(1)
        .nullable()
        .optional()
        .describe("Maximum completions per quest round."),
    maxTotalCompletions: z.number().int().min(1).nullable().optional().describe("Maximum total completions."),
    status: z.enum(["DRAFT", "ACTIVE"]).nullable().optional().describe("Status to create the quest with (default ACTIVE)."),
    tasks: z.array(QuestTask).max(32).describe("Quest tasks and requirements (up to 32)."),
    rewards: z.array(QuestReward).max(4).describe("Rewards obtainable by completing the quest (up to 4)."),
};
export const createQuestInput = z.object(createQuestShape);
// ---------------------------------------------------------------------------
// Read tool inputs
// ---------------------------------------------------------------------------
export const getQuestShape = {
    questId: uuidLike.describe("ID of the quest to fetch."),
};
export const listQuestsShape = {
    statuses: z
        .array(z.enum(["DRAFT", "TEMPLATE", "ACTIVE", "PAUSED", "REVIEW", "ENDED", "ARCHIVED"]))
        .optional()
        .describe("Quest statuses to filter by."),
    recurrenceTypes: z
        .array(z.enum(["ONCE", "DAILY", "WEEKLY", "MONTHLY", "CUSTOM"]))
        .optional()
        .describe("Quest recurrence types to filter by."),
    visibilityTypes: z
        .array(z.enum(["PRIVATE", "PUBLIC", "SHARED"]))
        .optional()
        .describe("Quest visibility types to filter by."),
    offset: z.number().min(0).optional().describe("Pagination offset."),
    limit: z.number().min(0).optional().describe("Maximum number of quests to return."),
};
export const getQuestCompletionsShape = {
    questId: z.string().optional().describe("ID of the quest to filter completions by."),
    iteration: z.number().int().min(1).optional().describe("Quest round number to filter by."),
    userId: z.string().optional().describe("ID of the user to filter completions by."),
    startTime: z.number().optional().describe("Only completions after this unix timestamp (ms)."),
    endTime: z.number().optional().describe("Only completions until this unix timestamp (ms)."),
    offset: z.number().min(0).optional().describe("Pagination offset (default 0)."),
    limit: z.number().min(0).max(50).optional().describe("Max completions to return (default 20, max 50)."),
};
//# sourceMappingURL=schemas.js.map