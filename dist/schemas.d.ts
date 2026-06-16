import { z } from "zod";
export declare const QuestTask: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
    type: z.ZodLiteral<"API">;
    name: z.ZodString;
    description: z.ZodString;
    endpoint: z.ZodString;
    userIdMethods: z.ZodArray<z.ZodEnum<["discord", "twitter", "wallets"]>, "many">;
    walletChains: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>, "many">>>;
}, "strip", z.ZodTypeAny, {
    type: "API";
    name: string;
    description: string;
    endpoint: string;
    userIdMethods: ("discord" | "twitter" | "wallets")[];
    walletChains?: ("Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos")[] | null | undefined;
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
}, {
    type: "API";
    name: string;
    description: string;
    endpoint: string;
    userIdMethods: ("discord" | "twitter" | "wallets")[];
    walletChains?: ("Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos")[] | null | undefined;
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
}>, z.ZodObject<{
    isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
    type: z.ZodLiteral<"DISCORD_ACCOUNT_AGE">;
    minAccountAgeDays: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: "DISCORD_ACCOUNT_AGE";
    minAccountAgeDays: number;
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
}, {
    type: "DISCORD_ACCOUNT_AGE";
    minAccountAgeDays: number;
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
}>, z.ZodObject<{
    isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
    type: z.ZodLiteral<"DISCORD_SERVER_ROLES">;
    serverId: z.ZodString;
    serverInviteLink: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    roleIds: z.ZodArray<z.ZodString, "many">;
    operator: z.ZodEnum<["and", "or"]>;
}, "strip", z.ZodTypeAny, {
    type: "DISCORD_SERVER_ROLES";
    serverId: string;
    roleIds: string[];
    operator: "and" | "or";
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    serverInviteLink?: string | null | undefined;
}, {
    type: "DISCORD_SERVER_ROLES";
    serverId: string;
    roleIds: string[];
    operator: "and" | "or";
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    serverInviteLink?: string | null | undefined;
}>, z.ZodObject<{
    isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
    type: z.ZodLiteral<"DISCORD_USERS">;
    userIds: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    type: "DISCORD_USERS";
    userIds: string[];
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
}, {
    type: "DISCORD_USERS";
    userIds: string[];
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
}>, z.ZodObject<{
    isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
    type: z.ZodLiteral<"FILE_UPLOAD">;
    label: z.ZodString;
    description: z.ZodString;
    fileTypes: z.ZodArray<z.ZodEnum<["IMAGE", "VIDEO", "AUDIO", "PDF"]>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "FILE_UPLOAD";
    description: string;
    label: string;
    fileTypes: ("IMAGE" | "VIDEO" | "AUDIO" | "PDF")[];
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
}, {
    type: "FILE_UPLOAD";
    description: string;
    label: string;
    fileTypes: ("IMAGE" | "VIDEO" | "AUDIO" | "PDF")[];
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
}>, z.ZodObject<{
    isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
    type: z.ZodLiteral<"NFT_BALANCE">;
    chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>;
    contractAddress: z.ZodString;
    collectionName: z.ZodString;
    standard: z.ZodEnum<["CW_721", "ERC-721", "ERC-1155", "METAPLEX", "METAPLEX_CNFT", "METAPLEX_CORE", "SG_BADGE", "UNKNOWN"]>;
    minAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    tokenIds: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    attributes: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        key: string;
    }, {
        value: string;
        key: string;
    }>, "many">>>;
    attributesOperator: z.ZodOptional<z.ZodNullable<z.ZodEnum<["and", "or"]>>>;
    includeFlipwallets: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    includeFlipwalletsExclusively: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    includeStakingContracts: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    includeStakingContractsExclusively: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    type: "NFT_BALANCE";
    chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
    contractAddress: string;
    collectionName: string;
    standard: "CW_721" | "ERC-721" | "ERC-1155" | "METAPLEX" | "METAPLEX_CNFT" | "METAPLEX_CORE" | "SG_BADGE" | "UNKNOWN";
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    minAmount?: number | null | undefined;
    maxAmount?: number | null | undefined;
    tokenIds?: string | null | undefined;
    attributes?: {
        value: string;
        key: string;
    }[] | null | undefined;
    attributesOperator?: "and" | "or" | null | undefined;
    includeFlipwallets?: boolean | null | undefined;
    includeFlipwalletsExclusively?: boolean | null | undefined;
    includeStakingContracts?: boolean | null | undefined;
    includeStakingContractsExclusively?: boolean | null | undefined;
}, {
    type: "NFT_BALANCE";
    chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
    contractAddress: string;
    collectionName: string;
    standard: "CW_721" | "ERC-721" | "ERC-1155" | "METAPLEX" | "METAPLEX_CNFT" | "METAPLEX_CORE" | "SG_BADGE" | "UNKNOWN";
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    minAmount?: number | null | undefined;
    maxAmount?: number | null | undefined;
    tokenIds?: string | null | undefined;
    attributes?: {
        value: string;
        key: string;
    }[] | null | undefined;
    attributesOperator?: "and" | "or" | null | undefined;
    includeFlipwallets?: boolean | null | undefined;
    includeFlipwalletsExclusively?: boolean | null | undefined;
    includeStakingContracts?: boolean | null | undefined;
    includeStakingContractsExclusively?: boolean | null | undefined;
}>, z.ZodObject<{
    isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
    type: z.ZodLiteral<"NUMBER_INPUT">;
    label: z.ZodString;
    description: z.ZodString;
    isInteger: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    prefix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    suffix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    minValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    type: "NUMBER_INPUT";
    description: string;
    label: string;
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    isInteger?: boolean | null | undefined;
    prefix?: string | null | undefined;
    suffix?: string | null | undefined;
    minValue?: number | null | undefined;
    maxValue?: number | null | undefined;
}, {
    type: "NUMBER_INPUT";
    description: string;
    label: string;
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    isInteger?: boolean | null | undefined;
    prefix?: string | null | undefined;
    suffix?: string | null | undefined;
    minValue?: number | null | undefined;
    maxValue?: number | null | undefined;
}>, z.ZodObject<{
    isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
    type: z.ZodLiteral<"POINTS_BALANCE">;
    pointSystemId: z.ZodString;
    minAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    type: "POINTS_BALANCE";
    pointSystemId: string;
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    minAmount?: number | null | undefined;
    maxAmount?: number | null | undefined;
}, {
    type: "POINTS_BALANCE";
    pointSystemId: string;
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    minAmount?: number | null | undefined;
    maxAmount?: number | null | undefined;
}>, z.ZodObject<{
    isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
    type: z.ZodLiteral<"POINTS_TIP">;
    pointSystemId: z.ZodString;
    minAmount: z.ZodNumber;
    lookbackWindowDays: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    type: "POINTS_TIP";
    minAmount: number;
    pointSystemId: string;
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    lookbackWindowDays?: number | null | undefined;
}, {
    type: "POINTS_TIP";
    minAmount: number;
    pointSystemId: string;
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    lookbackWindowDays?: number | null | undefined;
}>, z.ZodObject<{
    isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
    type: z.ZodLiteral<"POLL_INPUT">;
    label: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    options: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        id: string;
        description?: string | null | undefined;
    }, {
        label: string;
        id: string;
        description?: string | null | undefined;
    }>, "many">;
    minSelections: z.ZodNumber;
    maxSelections: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    options: {
        label: string;
        id: string;
        description?: string | null | undefined;
    }[];
    type: "POLL_INPUT";
    label: string;
    minSelections: number;
    maxSelections: number;
    description?: string | null | undefined;
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
}, {
    options: {
        label: string;
        id: string;
        description?: string | null | undefined;
    }[];
    type: "POLL_INPUT";
    label: string;
    minSelections: number;
    maxSelections: number;
    description?: string | null | undefined;
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
}>, z.ZodObject<{
    isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
    type: z.ZodLiteral<"TOKEN_SWAP">;
    chain: z.ZodOptional<z.ZodNullable<z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>>>;
    tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    minAmount: z.ZodNumber;
    amountUnit: z.ZodEnum<["absolute", "dollar"]>;
    allowedPlatforms: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodEnum<["COWSWAP", "FLIPSUITE", "GAS_ZIP", "HYPERLIQUID", "JUPITER", "LI_FI", "LIQUID_SWAP", "OBSIDIAN", "OKU_TRADE", "ORBITER", "RELAY", "ROCKETX", "SOLANA", "SOMNEX", "SKIP_GO", "SQUID", "STARGATE", "SUSHI_SWAP", "WOLFSWAP", "VVS"]>, "many">>>;
    lookbackWindowDays: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    type: "TOKEN_SWAP";
    minAmount: number;
    amountUnit: "absolute" | "dollar";
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    chain?: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos" | null | undefined;
    lookbackWindowDays?: number | null | undefined;
    tokenAddress?: string | null | undefined;
    allowedPlatforms?: ("COWSWAP" | "FLIPSUITE" | "GAS_ZIP" | "HYPERLIQUID" | "JUPITER" | "LI_FI" | "LIQUID_SWAP" | "OBSIDIAN" | "OKU_TRADE" | "ORBITER" | "RELAY" | "ROCKETX" | "SOLANA" | "SOMNEX" | "SKIP_GO" | "SQUID" | "STARGATE" | "SUSHI_SWAP" | "WOLFSWAP" | "VVS")[] | null | undefined;
}, {
    type: "TOKEN_SWAP";
    minAmount: number;
    amountUnit: "absolute" | "dollar";
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    chain?: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos" | null | undefined;
    lookbackWindowDays?: number | null | undefined;
    tokenAddress?: string | null | undefined;
    allowedPlatforms?: ("COWSWAP" | "FLIPSUITE" | "GAS_ZIP" | "HYPERLIQUID" | "JUPITER" | "LI_FI" | "LIQUID_SWAP" | "OBSIDIAN" | "OKU_TRADE" | "ORBITER" | "RELAY" | "ROCKETX" | "SOLANA" | "SOMNEX" | "SKIP_GO" | "SQUID" | "STARGATE" | "SUSHI_SWAP" | "WOLFSWAP" | "VVS")[] | null | undefined;
}>, z.ZodObject<{
    isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
    type: z.ZodLiteral<"TEXT_INPUT">;
    label: z.ZodString;
    description: z.ZodString;
    minLength: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxLength: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    regex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "TEXT_INPUT";
    description: string;
    label: string;
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    minLength?: number | null | undefined;
    maxLength?: number | null | undefined;
    regex?: string | null | undefined;
}, {
    type: "TEXT_INPUT";
    description: string;
    label: string;
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    minLength?: number | null | undefined;
    maxLength?: number | null | undefined;
    regex?: string | null | undefined;
}>, z.ZodObject<{
    isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
    type: z.ZodLiteral<"TOKEN_TIP">;
    chain: z.ZodOptional<z.ZodNullable<z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>>>;
    tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    minAmount: z.ZodNumber;
    amountUnit: z.ZodEnum<["absolute", "dollar"]>;
    lookbackWindowDays: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    excludedActions: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodEnum<["tip", "airdrop", "raffle"]>, "many">>>;
}, "strip", z.ZodTypeAny, {
    type: "TOKEN_TIP";
    minAmount: number;
    amountUnit: "absolute" | "dollar";
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    chain?: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos" | null | undefined;
    lookbackWindowDays?: number | null | undefined;
    tokenAddress?: string | null | undefined;
    excludedActions?: ("tip" | "airdrop" | "raffle")[] | null | undefined;
}, {
    type: "TOKEN_TIP";
    minAmount: number;
    amountUnit: "absolute" | "dollar";
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    chain?: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos" | null | undefined;
    lookbackWindowDays?: number | null | undefined;
    tokenAddress?: string | null | undefined;
    excludedActions?: ("tip" | "airdrop" | "raffle")[] | null | undefined;
}>, z.ZodObject<{
    isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
    type: z.ZodLiteral<"TOKEN_BALANCE">;
    chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>;
    tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    minAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    amountUnit: z.ZodEnum<["absolute", "dollar"]>;
    includeFlipwallets: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    includeFlipwalletsExclusively: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    includeStakingContracts: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    includeStakingContractsExclusively: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    type: "TOKEN_BALANCE";
    chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
    amountUnit: "absolute" | "dollar";
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    minAmount?: number | null | undefined;
    maxAmount?: number | null | undefined;
    includeFlipwallets?: boolean | null | undefined;
    includeFlipwalletsExclusively?: boolean | null | undefined;
    includeStakingContracts?: boolean | null | undefined;
    includeStakingContractsExclusively?: boolean | null | undefined;
    tokenAddress?: string | null | undefined;
}, {
    type: "TOKEN_BALANCE";
    chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
    amountUnit: "absolute" | "dollar";
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    minAmount?: number | null | undefined;
    maxAmount?: number | null | undefined;
    includeFlipwallets?: boolean | null | undefined;
    includeFlipwalletsExclusively?: boolean | null | undefined;
    includeStakingContracts?: boolean | null | undefined;
    includeStakingContractsExclusively?: boolean | null | undefined;
    tokenAddress?: string | null | undefined;
}>, z.ZodObject<{
    isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
    type: z.ZodLiteral<"TWITTER_ACCOUNT_AGE">;
    minAccountAgeDays: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: "TWITTER_ACCOUNT_AGE";
    minAccountAgeDays: number;
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
}, {
    type: "TWITTER_ACCOUNT_AGE";
    minAccountAgeDays: number;
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
}>, z.ZodObject<{
    isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
    type: z.ZodLiteral<"TWITTER_ACCOUNT_FOLLOW">;
    accountHandles: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    type: "TWITTER_ACCOUNT_FOLLOW";
    accountHandles: string[];
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
}, {
    type: "TWITTER_ACCOUNT_FOLLOW";
    accountHandles: string[];
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
}>, z.ZodObject<{
    isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
    type: z.ZodLiteral<"TWITTER_ACCOUNT_FOLLOWERS">;
    minFollowers: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxFollowers: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    type: "TWITTER_ACCOUNT_FOLLOWERS";
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    minFollowers?: number | null | undefined;
    maxFollowers?: number | null | undefined;
}, {
    type: "TWITTER_ACCOUNT_FOLLOWERS";
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    minFollowers?: number | null | undefined;
    maxFollowers?: number | null | undefined;
}>, z.ZodObject<{
    isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
    type: z.ZodLiteral<"TWITTER_ACCOUNT_SUBSCRIBE">;
    accountHandles: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    type: "TWITTER_ACCOUNT_SUBSCRIBE";
    accountHandles: string[];
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
}, {
    type: "TWITTER_ACCOUNT_SUBSCRIBE";
    accountHandles: string[];
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
}>, z.ZodObject<{
    isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
    type: z.ZodLiteral<"TWITTER_ACCOUNT_VERIFIED">;
}, "strip", z.ZodTypeAny, {
    type: "TWITTER_ACCOUNT_VERIFIED";
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
}, {
    type: "TWITTER_ACCOUNT_VERIFIED";
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
}>, z.ZodObject<{
    isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
    type: z.ZodLiteral<"TWITTER_POST_INTERACTION">;
    postUrl: z.ZodString;
    isLikeRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isBookmarkRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isRepostRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isCommentRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    minLength: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    requiredExactText: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requiredPhrases: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString, "many">>>;
    isImageRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    type: "TWITTER_POST_INTERACTION";
    postUrl: string;
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    minLength?: number | null | undefined;
    isLikeRequired?: boolean | null | undefined;
    isBookmarkRequired?: boolean | null | undefined;
    isRepostRequired?: boolean | null | undefined;
    isCommentRequired?: boolean | null | undefined;
    requiredExactText?: string | null | undefined;
    requiredPhrases?: string[] | null | undefined;
    isImageRequired?: boolean | null | undefined;
}, {
    type: "TWITTER_POST_INTERACTION";
    postUrl: string;
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    minLength?: number | null | undefined;
    isLikeRequired?: boolean | null | undefined;
    isBookmarkRequired?: boolean | null | undefined;
    isRepostRequired?: boolean | null | undefined;
    isCommentRequired?: boolean | null | undefined;
    requiredExactText?: string | null | undefined;
    requiredPhrases?: string[] | null | undefined;
    isImageRequired?: boolean | null | undefined;
}>, z.ZodObject<{
    isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
    type: z.ZodLiteral<"TWITTER_POST_CREATE">;
    requiredPhrases: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString, "many">>>;
    minLikes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    minReposts: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    minReplies: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    minImpressions: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    minLength: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    isImageRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    lookbackWindowDays: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    type: "TWITTER_POST_CREATE";
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    lookbackWindowDays?: number | null | undefined;
    minLength?: number | null | undefined;
    requiredPhrases?: string[] | null | undefined;
    isImageRequired?: boolean | null | undefined;
    minLikes?: number | null | undefined;
    minReposts?: number | null | undefined;
    minReplies?: number | null | undefined;
    minImpressions?: number | null | undefined;
}, {
    type: "TWITTER_POST_CREATE";
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    lookbackWindowDays?: number | null | undefined;
    minLength?: number | null | undefined;
    requiredPhrases?: string[] | null | undefined;
    isImageRequired?: boolean | null | undefined;
    minLikes?: number | null | undefined;
    minReposts?: number | null | undefined;
    minReplies?: number | null | undefined;
    minImpressions?: number | null | undefined;
}>, z.ZodObject<{
    isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
    type: z.ZodLiteral<"WALLET_INPUT">;
    label: z.ZodString;
    description: z.ZodString;
    chains: z.ZodArray<z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "WALLET_INPUT";
    description: string;
    label: string;
    chains: ("Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos")[];
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
}, {
    type: "WALLET_INPUT";
    description: string;
    label: string;
    chains: ("Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos")[];
    isOptional?: boolean | null | undefined;
    isReviewRequired?: boolean | null | undefined;
    skipsReview?: boolean | null | undefined;
    rewardBoost?: number | null | undefined;
    rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
}>]>;
export declare const pointsItem: z.ZodObject<{
    type: z.ZodLiteral<"POINTS">;
    pointSystemId: z.ZodString;
    amount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: "POINTS";
    pointSystemId: string;
    amount: number;
}, {
    type: "POINTS";
    pointSystemId: string;
    amount: number;
}>;
export declare const tokenItem: z.ZodObject<{
    type: z.ZodLiteral<"TOKEN">;
    chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>;
    tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    amount: z.ZodNumber;
    amountUnit: z.ZodOptional<z.ZodNullable<z.ZodEnum<["absolute", "dollar"]>>>;
}, "strip", z.ZodTypeAny, {
    type: "TOKEN";
    chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
    amount: number;
    tokenAddress?: string | null | undefined;
    amountUnit?: "absolute" | "dollar" | null | undefined;
}, {
    type: "TOKEN";
    chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
    amount: number;
    tokenAddress?: string | null | undefined;
    amountUnit?: "absolute" | "dollar" | null | undefined;
}>;
export declare const nftItem: z.ZodObject<{
    type: z.ZodLiteral<"NFT">;
    chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>;
    tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    tokenId: z.ZodString;
    amount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    type: "NFT";
    chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
    tokenId: string;
    tokenAddress?: string | null | undefined;
    amount?: number | null | undefined;
}, {
    type: "NFT";
    chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
    tokenId: string;
    tokenAddress?: string | null | undefined;
    amount?: number | null | undefined;
}>;
export declare const roleItem: z.ZodObject<{
    type: z.ZodLiteral<"ROLE">;
    roleId: z.ZodString;
    duration: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    type: "ROLE";
    roleId: string;
    duration?: number | null | undefined;
}, {
    type: "ROLE";
    roleId: string;
    duration?: number | null | undefined;
}>;
export declare const QuestReward: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"FIXED">;
    strategy: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"EVERYONE">;
    }, "strip", z.ZodTypeAny, {
        type: "EVERYONE";
    }, {
        type: "EVERYONE";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"FCFS">;
        maxClaims: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "FCFS";
        maxClaims: number;
    }, {
        type: "FCFS";
        maxClaims: number;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"RAFFLE">;
        maxWinners: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "RAFFLE";
        maxWinners: number;
    }, {
        type: "RAFFLE";
        maxWinners: number;
    }>]>;
    item: z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"POINTS">;
        pointSystemId: z.ZodString;
        amount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "POINTS";
        pointSystemId: string;
        amount: number;
    }, {
        type: "POINTS";
        pointSystemId: string;
        amount: number;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"TOKEN">;
        chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>;
        tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        amount: z.ZodNumber;
        amountUnit: z.ZodOptional<z.ZodNullable<z.ZodEnum<["absolute", "dollar"]>>>;
    }, "strip", z.ZodTypeAny, {
        type: "TOKEN";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        amount: number;
        tokenAddress?: string | null | undefined;
        amountUnit?: "absolute" | "dollar" | null | undefined;
    }, {
        type: "TOKEN";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        amount: number;
        tokenAddress?: string | null | undefined;
        amountUnit?: "absolute" | "dollar" | null | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"NFT">;
        chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>;
        tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        tokenId: z.ZodString;
        amount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        type: "NFT";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        tokenId: string;
        tokenAddress?: string | null | undefined;
        amount?: number | null | undefined;
    }, {
        type: "NFT";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        tokenId: string;
        tokenAddress?: string | null | undefined;
        amount?: number | null | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"ROLE">;
        roleId: z.ZodString;
        duration: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        type: "ROLE";
        roleId: string;
        duration?: number | null | undefined;
    }, {
        type: "ROLE";
        roleId: string;
        duration?: number | null | undefined;
    }>]>;
}, "strip", z.ZodTypeAny, {
    type: "FIXED";
    strategy: {
        type: "EVERYONE";
    } | {
        type: "FCFS";
        maxClaims: number;
    } | {
        type: "RAFFLE";
        maxWinners: number;
    };
    item: {
        type: "POINTS";
        pointSystemId: string;
        amount: number;
    } | {
        type: "TOKEN";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        amount: number;
        tokenAddress?: string | null | undefined;
        amountUnit?: "absolute" | "dollar" | null | undefined;
    } | {
        type: "NFT";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        tokenId: string;
        tokenAddress?: string | null | undefined;
        amount?: number | null | undefined;
    } | {
        type: "ROLE";
        roleId: string;
        duration?: number | null | undefined;
    };
}, {
    type: "FIXED";
    strategy: {
        type: "EVERYONE";
    } | {
        type: "FCFS";
        maxClaims: number;
    } | {
        type: "RAFFLE";
        maxWinners: number;
    };
    item: {
        type: "POINTS";
        pointSystemId: string;
        amount: number;
    } | {
        type: "TOKEN";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        amount: number;
        tokenAddress?: string | null | undefined;
        amountUnit?: "absolute" | "dollar" | null | undefined;
    } | {
        type: "NFT";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        tokenId: string;
        tokenAddress?: string | null | undefined;
        amount?: number | null | undefined;
    } | {
        type: "ROLE";
        roleId: string;
        duration?: number | null | undefined;
    };
}>, z.ZodObject<{
    type: z.ZodLiteral<"RANDOM">;
    strategy: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"EVERYONE">;
    }, "strip", z.ZodTypeAny, {
        type: "EVERYONE";
    }, {
        type: "EVERYONE";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"FCFS">;
        maxClaims: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "FCFS";
        maxClaims: number;
    }, {
        type: "FCFS";
        maxClaims: number;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"RAFFLE">;
        maxWinners: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "RAFFLE";
        maxWinners: number;
    }, {
        type: "RAFFLE";
        maxWinners: number;
    }>]>;
    rewardPoolId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "RANDOM";
    strategy: {
        type: "EVERYONE";
    } | {
        type: "FCFS";
        maxClaims: number;
    } | {
        type: "RAFFLE";
        maxWinners: number;
    };
    rewardPoolId: string;
}, {
    type: "RANDOM";
    strategy: {
        type: "EVERYONE";
    } | {
        type: "FCFS";
        maxClaims: number;
    } | {
        type: "RAFFLE";
        maxWinners: number;
    };
    rewardPoolId: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"SHARED">;
    strategy: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"EVERYONE">;
    }, "strip", z.ZodTypeAny, {
        type: "EVERYONE";
    }, {
        type: "EVERYONE";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"FCFS">;
        maxClaims: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "FCFS";
        maxClaims: number;
    }, {
        type: "FCFS";
        maxClaims: number;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"RAFFLE">;
        maxWinners: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "RAFFLE";
        maxWinners: number;
    }, {
        type: "RAFFLE";
        maxWinners: number;
    }>]>;
    item: z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"POINTS">;
        pointSystemId: z.ZodString;
        amount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "POINTS";
        pointSystemId: string;
        amount: number;
    }, {
        type: "POINTS";
        pointSystemId: string;
        amount: number;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"TOKEN">;
        chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>;
        tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        amount: z.ZodNumber;
        amountUnit: z.ZodOptional<z.ZodNullable<z.ZodEnum<["absolute", "dollar"]>>>;
    }, "strip", z.ZodTypeAny, {
        type: "TOKEN";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        amount: number;
        tokenAddress?: string | null | undefined;
        amountUnit?: "absolute" | "dollar" | null | undefined;
    }, {
        type: "TOKEN";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        amount: number;
        tokenAddress?: string | null | undefined;
        amountUnit?: "absolute" | "dollar" | null | undefined;
    }>]>;
}, "strip", z.ZodTypeAny, {
    type: "SHARED";
    strategy: {
        type: "EVERYONE";
    } | {
        type: "FCFS";
        maxClaims: number;
    } | {
        type: "RAFFLE";
        maxWinners: number;
    };
    item: {
        type: "POINTS";
        pointSystemId: string;
        amount: number;
    } | {
        type: "TOKEN";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        amount: number;
        tokenAddress?: string | null | undefined;
        amountUnit?: "absolute" | "dollar" | null | undefined;
    };
}, {
    type: "SHARED";
    strategy: {
        type: "EVERYONE";
    } | {
        type: "FCFS";
        maxClaims: number;
    } | {
        type: "RAFFLE";
        maxWinners: number;
    };
    item: {
        type: "POINTS";
        pointSystemId: string;
        amount: number;
    } | {
        type: "TOKEN";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        amount: number;
        tokenAddress?: string | null | undefined;
        amountUnit?: "absolute" | "dollar" | null | undefined;
    };
}>]>;
export declare const createQuestShape: {
    name: z.ZodString;
    shortDescription: z.ZodString;
    fullDescription: z.ZodString;
    bannerUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    recurrence: z.ZodEnum<["ONCE", "DAILY", "WEEKLY", "MONTHLY", "CUSTOM"]>;
    recurrenceInterval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    visibility: z.ZodEnum<["PRIVATE", "PUBLIC", "SHARED"]>;
    maxIterations: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxIterationCompletions: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxTotalCompletions: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    status: z.ZodOptional<z.ZodNullable<z.ZodEnum<["DRAFT", "ACTIVE"]>>>;
    tasks: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"API">;
        name: z.ZodString;
        description: z.ZodString;
        endpoint: z.ZodString;
        userIdMethods: z.ZodArray<z.ZodEnum<["discord", "twitter", "wallets"]>, "many">;
        walletChains: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>, "many">>>;
    }, "strip", z.ZodTypeAny, {
        type: "API";
        name: string;
        description: string;
        endpoint: string;
        userIdMethods: ("discord" | "twitter" | "wallets")[];
        walletChains?: ("Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos")[] | null | undefined;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }, {
        type: "API";
        name: string;
        description: string;
        endpoint: string;
        userIdMethods: ("discord" | "twitter" | "wallets")[];
        walletChains?: ("Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos")[] | null | undefined;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"DISCORD_ACCOUNT_AGE">;
        minAccountAgeDays: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "DISCORD_ACCOUNT_AGE";
        minAccountAgeDays: number;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }, {
        type: "DISCORD_ACCOUNT_AGE";
        minAccountAgeDays: number;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"DISCORD_SERVER_ROLES">;
        serverId: z.ZodString;
        serverInviteLink: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        roleIds: z.ZodArray<z.ZodString, "many">;
        operator: z.ZodEnum<["and", "or"]>;
    }, "strip", z.ZodTypeAny, {
        type: "DISCORD_SERVER_ROLES";
        serverId: string;
        roleIds: string[];
        operator: "and" | "or";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        serverInviteLink?: string | null | undefined;
    }, {
        type: "DISCORD_SERVER_ROLES";
        serverId: string;
        roleIds: string[];
        operator: "and" | "or";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        serverInviteLink?: string | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"DISCORD_USERS">;
        userIds: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "DISCORD_USERS";
        userIds: string[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }, {
        type: "DISCORD_USERS";
        userIds: string[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"FILE_UPLOAD">;
        label: z.ZodString;
        description: z.ZodString;
        fileTypes: z.ZodArray<z.ZodEnum<["IMAGE", "VIDEO", "AUDIO", "PDF"]>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "FILE_UPLOAD";
        description: string;
        label: string;
        fileTypes: ("IMAGE" | "VIDEO" | "AUDIO" | "PDF")[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }, {
        type: "FILE_UPLOAD";
        description: string;
        label: string;
        fileTypes: ("IMAGE" | "VIDEO" | "AUDIO" | "PDF")[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"NFT_BALANCE">;
        chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>;
        contractAddress: z.ZodString;
        collectionName: z.ZodString;
        standard: z.ZodEnum<["CW_721", "ERC-721", "ERC-1155", "METAPLEX", "METAPLEX_CNFT", "METAPLEX_CORE", "SG_BADGE", "UNKNOWN"]>;
        minAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        maxAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        tokenIds: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        attributes: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            key: string;
        }, {
            value: string;
            key: string;
        }>, "many">>>;
        attributesOperator: z.ZodOptional<z.ZodNullable<z.ZodEnum<["and", "or"]>>>;
        includeFlipwallets: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        includeFlipwalletsExclusively: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        includeStakingContracts: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        includeStakingContractsExclusively: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        type: "NFT_BALANCE";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        contractAddress: string;
        collectionName: string;
        standard: "CW_721" | "ERC-721" | "ERC-1155" | "METAPLEX" | "METAPLEX_CNFT" | "METAPLEX_CORE" | "SG_BADGE" | "UNKNOWN";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minAmount?: number | null | undefined;
        maxAmount?: number | null | undefined;
        tokenIds?: string | null | undefined;
        attributes?: {
            value: string;
            key: string;
        }[] | null | undefined;
        attributesOperator?: "and" | "or" | null | undefined;
        includeFlipwallets?: boolean | null | undefined;
        includeFlipwalletsExclusively?: boolean | null | undefined;
        includeStakingContracts?: boolean | null | undefined;
        includeStakingContractsExclusively?: boolean | null | undefined;
    }, {
        type: "NFT_BALANCE";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        contractAddress: string;
        collectionName: string;
        standard: "CW_721" | "ERC-721" | "ERC-1155" | "METAPLEX" | "METAPLEX_CNFT" | "METAPLEX_CORE" | "SG_BADGE" | "UNKNOWN";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minAmount?: number | null | undefined;
        maxAmount?: number | null | undefined;
        tokenIds?: string | null | undefined;
        attributes?: {
            value: string;
            key: string;
        }[] | null | undefined;
        attributesOperator?: "and" | "or" | null | undefined;
        includeFlipwallets?: boolean | null | undefined;
        includeFlipwalletsExclusively?: boolean | null | undefined;
        includeStakingContracts?: boolean | null | undefined;
        includeStakingContractsExclusively?: boolean | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"NUMBER_INPUT">;
        label: z.ZodString;
        description: z.ZodString;
        isInteger: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        prefix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        suffix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        minValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        maxValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        type: "NUMBER_INPUT";
        description: string;
        label: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        isInteger?: boolean | null | undefined;
        prefix?: string | null | undefined;
        suffix?: string | null | undefined;
        minValue?: number | null | undefined;
        maxValue?: number | null | undefined;
    }, {
        type: "NUMBER_INPUT";
        description: string;
        label: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        isInteger?: boolean | null | undefined;
        prefix?: string | null | undefined;
        suffix?: string | null | undefined;
        minValue?: number | null | undefined;
        maxValue?: number | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"POINTS_BALANCE">;
        pointSystemId: z.ZodString;
        minAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        maxAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        type: "POINTS_BALANCE";
        pointSystemId: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minAmount?: number | null | undefined;
        maxAmount?: number | null | undefined;
    }, {
        type: "POINTS_BALANCE";
        pointSystemId: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minAmount?: number | null | undefined;
        maxAmount?: number | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"POINTS_TIP">;
        pointSystemId: z.ZodString;
        minAmount: z.ZodNumber;
        lookbackWindowDays: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        type: "POINTS_TIP";
        minAmount: number;
        pointSystemId: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
    }, {
        type: "POINTS_TIP";
        minAmount: number;
        pointSystemId: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"POLL_INPUT">;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        options: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            id: string;
            description?: string | null | undefined;
        }, {
            label: string;
            id: string;
            description?: string | null | undefined;
        }>, "many">;
        minSelections: z.ZodNumber;
        maxSelections: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        options: {
            label: string;
            id: string;
            description?: string | null | undefined;
        }[];
        type: "POLL_INPUT";
        label: string;
        minSelections: number;
        maxSelections: number;
        description?: string | null | undefined;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }, {
        options: {
            label: string;
            id: string;
            description?: string | null | undefined;
        }[];
        type: "POLL_INPUT";
        label: string;
        minSelections: number;
        maxSelections: number;
        description?: string | null | undefined;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"TOKEN_SWAP">;
        chain: z.ZodOptional<z.ZodNullable<z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>>>;
        tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        minAmount: z.ZodNumber;
        amountUnit: z.ZodEnum<["absolute", "dollar"]>;
        allowedPlatforms: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodEnum<["COWSWAP", "FLIPSUITE", "GAS_ZIP", "HYPERLIQUID", "JUPITER", "LI_FI", "LIQUID_SWAP", "OBSIDIAN", "OKU_TRADE", "ORBITER", "RELAY", "ROCKETX", "SOLANA", "SOMNEX", "SKIP_GO", "SQUID", "STARGATE", "SUSHI_SWAP", "WOLFSWAP", "VVS"]>, "many">>>;
        lookbackWindowDays: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        type: "TOKEN_SWAP";
        minAmount: number;
        amountUnit: "absolute" | "dollar";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        chain?: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
        tokenAddress?: string | null | undefined;
        allowedPlatforms?: ("COWSWAP" | "FLIPSUITE" | "GAS_ZIP" | "HYPERLIQUID" | "JUPITER" | "LI_FI" | "LIQUID_SWAP" | "OBSIDIAN" | "OKU_TRADE" | "ORBITER" | "RELAY" | "ROCKETX" | "SOLANA" | "SOMNEX" | "SKIP_GO" | "SQUID" | "STARGATE" | "SUSHI_SWAP" | "WOLFSWAP" | "VVS")[] | null | undefined;
    }, {
        type: "TOKEN_SWAP";
        minAmount: number;
        amountUnit: "absolute" | "dollar";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        chain?: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
        tokenAddress?: string | null | undefined;
        allowedPlatforms?: ("COWSWAP" | "FLIPSUITE" | "GAS_ZIP" | "HYPERLIQUID" | "JUPITER" | "LI_FI" | "LIQUID_SWAP" | "OBSIDIAN" | "OKU_TRADE" | "ORBITER" | "RELAY" | "ROCKETX" | "SOLANA" | "SOMNEX" | "SKIP_GO" | "SQUID" | "STARGATE" | "SUSHI_SWAP" | "WOLFSWAP" | "VVS")[] | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"TEXT_INPUT">;
        label: z.ZodString;
        description: z.ZodString;
        minLength: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        maxLength: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        regex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        type: "TEXT_INPUT";
        description: string;
        label: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minLength?: number | null | undefined;
        maxLength?: number | null | undefined;
        regex?: string | null | undefined;
    }, {
        type: "TEXT_INPUT";
        description: string;
        label: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minLength?: number | null | undefined;
        maxLength?: number | null | undefined;
        regex?: string | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"TOKEN_TIP">;
        chain: z.ZodOptional<z.ZodNullable<z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>>>;
        tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        minAmount: z.ZodNumber;
        amountUnit: z.ZodEnum<["absolute", "dollar"]>;
        lookbackWindowDays: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        excludedActions: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodEnum<["tip", "airdrop", "raffle"]>, "many">>>;
    }, "strip", z.ZodTypeAny, {
        type: "TOKEN_TIP";
        minAmount: number;
        amountUnit: "absolute" | "dollar";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        chain?: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
        tokenAddress?: string | null | undefined;
        excludedActions?: ("tip" | "airdrop" | "raffle")[] | null | undefined;
    }, {
        type: "TOKEN_TIP";
        minAmount: number;
        amountUnit: "absolute" | "dollar";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        chain?: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
        tokenAddress?: string | null | undefined;
        excludedActions?: ("tip" | "airdrop" | "raffle")[] | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"TOKEN_BALANCE">;
        chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>;
        tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        minAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        maxAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        amountUnit: z.ZodEnum<["absolute", "dollar"]>;
        includeFlipwallets: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        includeFlipwalletsExclusively: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        includeStakingContracts: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        includeStakingContractsExclusively: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        type: "TOKEN_BALANCE";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        amountUnit: "absolute" | "dollar";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minAmount?: number | null | undefined;
        maxAmount?: number | null | undefined;
        includeFlipwallets?: boolean | null | undefined;
        includeFlipwalletsExclusively?: boolean | null | undefined;
        includeStakingContracts?: boolean | null | undefined;
        includeStakingContractsExclusively?: boolean | null | undefined;
        tokenAddress?: string | null | undefined;
    }, {
        type: "TOKEN_BALANCE";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        amountUnit: "absolute" | "dollar";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minAmount?: number | null | undefined;
        maxAmount?: number | null | undefined;
        includeFlipwallets?: boolean | null | undefined;
        includeFlipwalletsExclusively?: boolean | null | undefined;
        includeStakingContracts?: boolean | null | undefined;
        includeStakingContractsExclusively?: boolean | null | undefined;
        tokenAddress?: string | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"TWITTER_ACCOUNT_AGE">;
        minAccountAgeDays: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "TWITTER_ACCOUNT_AGE";
        minAccountAgeDays: number;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }, {
        type: "TWITTER_ACCOUNT_AGE";
        minAccountAgeDays: number;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"TWITTER_ACCOUNT_FOLLOW">;
        accountHandles: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "TWITTER_ACCOUNT_FOLLOW";
        accountHandles: string[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }, {
        type: "TWITTER_ACCOUNT_FOLLOW";
        accountHandles: string[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"TWITTER_ACCOUNT_FOLLOWERS">;
        minFollowers: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        maxFollowers: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        type: "TWITTER_ACCOUNT_FOLLOWERS";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minFollowers?: number | null | undefined;
        maxFollowers?: number | null | undefined;
    }, {
        type: "TWITTER_ACCOUNT_FOLLOWERS";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minFollowers?: number | null | undefined;
        maxFollowers?: number | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"TWITTER_ACCOUNT_SUBSCRIBE">;
        accountHandles: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "TWITTER_ACCOUNT_SUBSCRIBE";
        accountHandles: string[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }, {
        type: "TWITTER_ACCOUNT_SUBSCRIBE";
        accountHandles: string[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"TWITTER_ACCOUNT_VERIFIED">;
    }, "strip", z.ZodTypeAny, {
        type: "TWITTER_ACCOUNT_VERIFIED";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }, {
        type: "TWITTER_ACCOUNT_VERIFIED";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"TWITTER_POST_INTERACTION">;
        postUrl: z.ZodString;
        isLikeRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isBookmarkRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isRepostRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isCommentRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        minLength: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        requiredExactText: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        requiredPhrases: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString, "many">>>;
        isImageRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        type: "TWITTER_POST_INTERACTION";
        postUrl: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minLength?: number | null | undefined;
        isLikeRequired?: boolean | null | undefined;
        isBookmarkRequired?: boolean | null | undefined;
        isRepostRequired?: boolean | null | undefined;
        isCommentRequired?: boolean | null | undefined;
        requiredExactText?: string | null | undefined;
        requiredPhrases?: string[] | null | undefined;
        isImageRequired?: boolean | null | undefined;
    }, {
        type: "TWITTER_POST_INTERACTION";
        postUrl: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minLength?: number | null | undefined;
        isLikeRequired?: boolean | null | undefined;
        isBookmarkRequired?: boolean | null | undefined;
        isRepostRequired?: boolean | null | undefined;
        isCommentRequired?: boolean | null | undefined;
        requiredExactText?: string | null | undefined;
        requiredPhrases?: string[] | null | undefined;
        isImageRequired?: boolean | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"TWITTER_POST_CREATE">;
        requiredPhrases: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString, "many">>>;
        minLikes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        minReposts: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        minReplies: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        minImpressions: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        minLength: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        isImageRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        lookbackWindowDays: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        type: "TWITTER_POST_CREATE";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
        minLength?: number | null | undefined;
        requiredPhrases?: string[] | null | undefined;
        isImageRequired?: boolean | null | undefined;
        minLikes?: number | null | undefined;
        minReposts?: number | null | undefined;
        minReplies?: number | null | undefined;
        minImpressions?: number | null | undefined;
    }, {
        type: "TWITTER_POST_CREATE";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
        minLength?: number | null | undefined;
        requiredPhrases?: string[] | null | undefined;
        isImageRequired?: boolean | null | undefined;
        minLikes?: number | null | undefined;
        minReposts?: number | null | undefined;
        minReplies?: number | null | undefined;
        minImpressions?: number | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"WALLET_INPUT">;
        label: z.ZodString;
        description: z.ZodString;
        chains: z.ZodArray<z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "WALLET_INPUT";
        description: string;
        label: string;
        chains: ("Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos")[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }, {
        type: "WALLET_INPUT";
        description: string;
        label: string;
        chains: ("Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos")[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }>]>, "many">;
    rewards: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"FIXED">;
        strategy: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"EVERYONE">;
        }, "strip", z.ZodTypeAny, {
            type: "EVERYONE";
        }, {
            type: "EVERYONE";
        }>, z.ZodObject<{
            type: z.ZodLiteral<"FCFS">;
            maxClaims: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "FCFS";
            maxClaims: number;
        }, {
            type: "FCFS";
            maxClaims: number;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"RAFFLE">;
            maxWinners: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "RAFFLE";
            maxWinners: number;
        }, {
            type: "RAFFLE";
            maxWinners: number;
        }>]>;
        item: z.ZodUnion<[z.ZodObject<{
            type: z.ZodLiteral<"POINTS">;
            pointSystemId: z.ZodString;
            amount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "POINTS";
            pointSystemId: string;
            amount: number;
        }, {
            type: "POINTS";
            pointSystemId: string;
            amount: number;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"TOKEN">;
            chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>;
            tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            amount: z.ZodNumber;
            amountUnit: z.ZodOptional<z.ZodNullable<z.ZodEnum<["absolute", "dollar"]>>>;
        }, "strip", z.ZodTypeAny, {
            type: "TOKEN";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            amount: number;
            tokenAddress?: string | null | undefined;
            amountUnit?: "absolute" | "dollar" | null | undefined;
        }, {
            type: "TOKEN";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            amount: number;
            tokenAddress?: string | null | undefined;
            amountUnit?: "absolute" | "dollar" | null | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"NFT">;
            chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>;
            tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            tokenId: z.ZodString;
            amount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            type: "NFT";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            tokenId: string;
            tokenAddress?: string | null | undefined;
            amount?: number | null | undefined;
        }, {
            type: "NFT";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            tokenId: string;
            tokenAddress?: string | null | undefined;
            amount?: number | null | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"ROLE">;
            roleId: z.ZodString;
            duration: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            type: "ROLE";
            roleId: string;
            duration?: number | null | undefined;
        }, {
            type: "ROLE";
            roleId: string;
            duration?: number | null | undefined;
        }>]>;
    }, "strip", z.ZodTypeAny, {
        type: "FIXED";
        strategy: {
            type: "EVERYONE";
        } | {
            type: "FCFS";
            maxClaims: number;
        } | {
            type: "RAFFLE";
            maxWinners: number;
        };
        item: {
            type: "POINTS";
            pointSystemId: string;
            amount: number;
        } | {
            type: "TOKEN";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            amount: number;
            tokenAddress?: string | null | undefined;
            amountUnit?: "absolute" | "dollar" | null | undefined;
        } | {
            type: "NFT";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            tokenId: string;
            tokenAddress?: string | null | undefined;
            amount?: number | null | undefined;
        } | {
            type: "ROLE";
            roleId: string;
            duration?: number | null | undefined;
        };
    }, {
        type: "FIXED";
        strategy: {
            type: "EVERYONE";
        } | {
            type: "FCFS";
            maxClaims: number;
        } | {
            type: "RAFFLE";
            maxWinners: number;
        };
        item: {
            type: "POINTS";
            pointSystemId: string;
            amount: number;
        } | {
            type: "TOKEN";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            amount: number;
            tokenAddress?: string | null | undefined;
            amountUnit?: "absolute" | "dollar" | null | undefined;
        } | {
            type: "NFT";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            tokenId: string;
            tokenAddress?: string | null | undefined;
            amount?: number | null | undefined;
        } | {
            type: "ROLE";
            roleId: string;
            duration?: number | null | undefined;
        };
    }>, z.ZodObject<{
        type: z.ZodLiteral<"RANDOM">;
        strategy: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"EVERYONE">;
        }, "strip", z.ZodTypeAny, {
            type: "EVERYONE";
        }, {
            type: "EVERYONE";
        }>, z.ZodObject<{
            type: z.ZodLiteral<"FCFS">;
            maxClaims: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "FCFS";
            maxClaims: number;
        }, {
            type: "FCFS";
            maxClaims: number;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"RAFFLE">;
            maxWinners: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "RAFFLE";
            maxWinners: number;
        }, {
            type: "RAFFLE";
            maxWinners: number;
        }>]>;
        rewardPoolId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "RANDOM";
        strategy: {
            type: "EVERYONE";
        } | {
            type: "FCFS";
            maxClaims: number;
        } | {
            type: "RAFFLE";
            maxWinners: number;
        };
        rewardPoolId: string;
    }, {
        type: "RANDOM";
        strategy: {
            type: "EVERYONE";
        } | {
            type: "FCFS";
            maxClaims: number;
        } | {
            type: "RAFFLE";
            maxWinners: number;
        };
        rewardPoolId: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"SHARED">;
        strategy: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"EVERYONE">;
        }, "strip", z.ZodTypeAny, {
            type: "EVERYONE";
        }, {
            type: "EVERYONE";
        }>, z.ZodObject<{
            type: z.ZodLiteral<"FCFS">;
            maxClaims: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "FCFS";
            maxClaims: number;
        }, {
            type: "FCFS";
            maxClaims: number;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"RAFFLE">;
            maxWinners: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "RAFFLE";
            maxWinners: number;
        }, {
            type: "RAFFLE";
            maxWinners: number;
        }>]>;
        item: z.ZodUnion<[z.ZodObject<{
            type: z.ZodLiteral<"POINTS">;
            pointSystemId: z.ZodString;
            amount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "POINTS";
            pointSystemId: string;
            amount: number;
        }, {
            type: "POINTS";
            pointSystemId: string;
            amount: number;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"TOKEN">;
            chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>;
            tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            amount: z.ZodNumber;
            amountUnit: z.ZodOptional<z.ZodNullable<z.ZodEnum<["absolute", "dollar"]>>>;
        }, "strip", z.ZodTypeAny, {
            type: "TOKEN";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            amount: number;
            tokenAddress?: string | null | undefined;
            amountUnit?: "absolute" | "dollar" | null | undefined;
        }, {
            type: "TOKEN";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            amount: number;
            tokenAddress?: string | null | undefined;
            amountUnit?: "absolute" | "dollar" | null | undefined;
        }>]>;
    }, "strip", z.ZodTypeAny, {
        type: "SHARED";
        strategy: {
            type: "EVERYONE";
        } | {
            type: "FCFS";
            maxClaims: number;
        } | {
            type: "RAFFLE";
            maxWinners: number;
        };
        item: {
            type: "POINTS";
            pointSystemId: string;
            amount: number;
        } | {
            type: "TOKEN";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            amount: number;
            tokenAddress?: string | null | undefined;
            amountUnit?: "absolute" | "dollar" | null | undefined;
        };
    }, {
        type: "SHARED";
        strategy: {
            type: "EVERYONE";
        } | {
            type: "FCFS";
            maxClaims: number;
        } | {
            type: "RAFFLE";
            maxWinners: number;
        };
        item: {
            type: "POINTS";
            pointSystemId: string;
            amount: number;
        } | {
            type: "TOKEN";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            amount: number;
            tokenAddress?: string | null | undefined;
            amountUnit?: "absolute" | "dollar" | null | undefined;
        };
    }>]>, "many">;
};
export declare const createQuestInput: z.ZodObject<{
    name: z.ZodString;
    shortDescription: z.ZodString;
    fullDescription: z.ZodString;
    bannerUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    recurrence: z.ZodEnum<["ONCE", "DAILY", "WEEKLY", "MONTHLY", "CUSTOM"]>;
    recurrenceInterval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    visibility: z.ZodEnum<["PRIVATE", "PUBLIC", "SHARED"]>;
    maxIterations: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxIterationCompletions: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxTotalCompletions: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    status: z.ZodOptional<z.ZodNullable<z.ZodEnum<["DRAFT", "ACTIVE"]>>>;
    tasks: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"API">;
        name: z.ZodString;
        description: z.ZodString;
        endpoint: z.ZodString;
        userIdMethods: z.ZodArray<z.ZodEnum<["discord", "twitter", "wallets"]>, "many">;
        walletChains: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>, "many">>>;
    }, "strip", z.ZodTypeAny, {
        type: "API";
        name: string;
        description: string;
        endpoint: string;
        userIdMethods: ("discord" | "twitter" | "wallets")[];
        walletChains?: ("Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos")[] | null | undefined;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }, {
        type: "API";
        name: string;
        description: string;
        endpoint: string;
        userIdMethods: ("discord" | "twitter" | "wallets")[];
        walletChains?: ("Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos")[] | null | undefined;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"DISCORD_ACCOUNT_AGE">;
        minAccountAgeDays: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "DISCORD_ACCOUNT_AGE";
        minAccountAgeDays: number;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }, {
        type: "DISCORD_ACCOUNT_AGE";
        minAccountAgeDays: number;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"DISCORD_SERVER_ROLES">;
        serverId: z.ZodString;
        serverInviteLink: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        roleIds: z.ZodArray<z.ZodString, "many">;
        operator: z.ZodEnum<["and", "or"]>;
    }, "strip", z.ZodTypeAny, {
        type: "DISCORD_SERVER_ROLES";
        serverId: string;
        roleIds: string[];
        operator: "and" | "or";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        serverInviteLink?: string | null | undefined;
    }, {
        type: "DISCORD_SERVER_ROLES";
        serverId: string;
        roleIds: string[];
        operator: "and" | "or";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        serverInviteLink?: string | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"DISCORD_USERS">;
        userIds: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "DISCORD_USERS";
        userIds: string[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }, {
        type: "DISCORD_USERS";
        userIds: string[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"FILE_UPLOAD">;
        label: z.ZodString;
        description: z.ZodString;
        fileTypes: z.ZodArray<z.ZodEnum<["IMAGE", "VIDEO", "AUDIO", "PDF"]>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "FILE_UPLOAD";
        description: string;
        label: string;
        fileTypes: ("IMAGE" | "VIDEO" | "AUDIO" | "PDF")[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }, {
        type: "FILE_UPLOAD";
        description: string;
        label: string;
        fileTypes: ("IMAGE" | "VIDEO" | "AUDIO" | "PDF")[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"NFT_BALANCE">;
        chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>;
        contractAddress: z.ZodString;
        collectionName: z.ZodString;
        standard: z.ZodEnum<["CW_721", "ERC-721", "ERC-1155", "METAPLEX", "METAPLEX_CNFT", "METAPLEX_CORE", "SG_BADGE", "UNKNOWN"]>;
        minAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        maxAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        tokenIds: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        attributes: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            key: string;
        }, {
            value: string;
            key: string;
        }>, "many">>>;
        attributesOperator: z.ZodOptional<z.ZodNullable<z.ZodEnum<["and", "or"]>>>;
        includeFlipwallets: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        includeFlipwalletsExclusively: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        includeStakingContracts: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        includeStakingContractsExclusively: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        type: "NFT_BALANCE";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        contractAddress: string;
        collectionName: string;
        standard: "CW_721" | "ERC-721" | "ERC-1155" | "METAPLEX" | "METAPLEX_CNFT" | "METAPLEX_CORE" | "SG_BADGE" | "UNKNOWN";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minAmount?: number | null | undefined;
        maxAmount?: number | null | undefined;
        tokenIds?: string | null | undefined;
        attributes?: {
            value: string;
            key: string;
        }[] | null | undefined;
        attributesOperator?: "and" | "or" | null | undefined;
        includeFlipwallets?: boolean | null | undefined;
        includeFlipwalletsExclusively?: boolean | null | undefined;
        includeStakingContracts?: boolean | null | undefined;
        includeStakingContractsExclusively?: boolean | null | undefined;
    }, {
        type: "NFT_BALANCE";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        contractAddress: string;
        collectionName: string;
        standard: "CW_721" | "ERC-721" | "ERC-1155" | "METAPLEX" | "METAPLEX_CNFT" | "METAPLEX_CORE" | "SG_BADGE" | "UNKNOWN";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minAmount?: number | null | undefined;
        maxAmount?: number | null | undefined;
        tokenIds?: string | null | undefined;
        attributes?: {
            value: string;
            key: string;
        }[] | null | undefined;
        attributesOperator?: "and" | "or" | null | undefined;
        includeFlipwallets?: boolean | null | undefined;
        includeFlipwalletsExclusively?: boolean | null | undefined;
        includeStakingContracts?: boolean | null | undefined;
        includeStakingContractsExclusively?: boolean | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"NUMBER_INPUT">;
        label: z.ZodString;
        description: z.ZodString;
        isInteger: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        prefix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        suffix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        minValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        maxValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        type: "NUMBER_INPUT";
        description: string;
        label: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        isInteger?: boolean | null | undefined;
        prefix?: string | null | undefined;
        suffix?: string | null | undefined;
        minValue?: number | null | undefined;
        maxValue?: number | null | undefined;
    }, {
        type: "NUMBER_INPUT";
        description: string;
        label: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        isInteger?: boolean | null | undefined;
        prefix?: string | null | undefined;
        suffix?: string | null | undefined;
        minValue?: number | null | undefined;
        maxValue?: number | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"POINTS_BALANCE">;
        pointSystemId: z.ZodString;
        minAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        maxAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        type: "POINTS_BALANCE";
        pointSystemId: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minAmount?: number | null | undefined;
        maxAmount?: number | null | undefined;
    }, {
        type: "POINTS_BALANCE";
        pointSystemId: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minAmount?: number | null | undefined;
        maxAmount?: number | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"POINTS_TIP">;
        pointSystemId: z.ZodString;
        minAmount: z.ZodNumber;
        lookbackWindowDays: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        type: "POINTS_TIP";
        minAmount: number;
        pointSystemId: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
    }, {
        type: "POINTS_TIP";
        minAmount: number;
        pointSystemId: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"POLL_INPUT">;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        options: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            id: string;
            description?: string | null | undefined;
        }, {
            label: string;
            id: string;
            description?: string | null | undefined;
        }>, "many">;
        minSelections: z.ZodNumber;
        maxSelections: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        options: {
            label: string;
            id: string;
            description?: string | null | undefined;
        }[];
        type: "POLL_INPUT";
        label: string;
        minSelections: number;
        maxSelections: number;
        description?: string | null | undefined;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }, {
        options: {
            label: string;
            id: string;
            description?: string | null | undefined;
        }[];
        type: "POLL_INPUT";
        label: string;
        minSelections: number;
        maxSelections: number;
        description?: string | null | undefined;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"TOKEN_SWAP">;
        chain: z.ZodOptional<z.ZodNullable<z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>>>;
        tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        minAmount: z.ZodNumber;
        amountUnit: z.ZodEnum<["absolute", "dollar"]>;
        allowedPlatforms: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodEnum<["COWSWAP", "FLIPSUITE", "GAS_ZIP", "HYPERLIQUID", "JUPITER", "LI_FI", "LIQUID_SWAP", "OBSIDIAN", "OKU_TRADE", "ORBITER", "RELAY", "ROCKETX", "SOLANA", "SOMNEX", "SKIP_GO", "SQUID", "STARGATE", "SUSHI_SWAP", "WOLFSWAP", "VVS"]>, "many">>>;
        lookbackWindowDays: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        type: "TOKEN_SWAP";
        minAmount: number;
        amountUnit: "absolute" | "dollar";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        chain?: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
        tokenAddress?: string | null | undefined;
        allowedPlatforms?: ("COWSWAP" | "FLIPSUITE" | "GAS_ZIP" | "HYPERLIQUID" | "JUPITER" | "LI_FI" | "LIQUID_SWAP" | "OBSIDIAN" | "OKU_TRADE" | "ORBITER" | "RELAY" | "ROCKETX" | "SOLANA" | "SOMNEX" | "SKIP_GO" | "SQUID" | "STARGATE" | "SUSHI_SWAP" | "WOLFSWAP" | "VVS")[] | null | undefined;
    }, {
        type: "TOKEN_SWAP";
        minAmount: number;
        amountUnit: "absolute" | "dollar";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        chain?: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
        tokenAddress?: string | null | undefined;
        allowedPlatforms?: ("COWSWAP" | "FLIPSUITE" | "GAS_ZIP" | "HYPERLIQUID" | "JUPITER" | "LI_FI" | "LIQUID_SWAP" | "OBSIDIAN" | "OKU_TRADE" | "ORBITER" | "RELAY" | "ROCKETX" | "SOLANA" | "SOMNEX" | "SKIP_GO" | "SQUID" | "STARGATE" | "SUSHI_SWAP" | "WOLFSWAP" | "VVS")[] | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"TEXT_INPUT">;
        label: z.ZodString;
        description: z.ZodString;
        minLength: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        maxLength: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        regex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        type: "TEXT_INPUT";
        description: string;
        label: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minLength?: number | null | undefined;
        maxLength?: number | null | undefined;
        regex?: string | null | undefined;
    }, {
        type: "TEXT_INPUT";
        description: string;
        label: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minLength?: number | null | undefined;
        maxLength?: number | null | undefined;
        regex?: string | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"TOKEN_TIP">;
        chain: z.ZodOptional<z.ZodNullable<z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>>>;
        tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        minAmount: z.ZodNumber;
        amountUnit: z.ZodEnum<["absolute", "dollar"]>;
        lookbackWindowDays: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        excludedActions: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodEnum<["tip", "airdrop", "raffle"]>, "many">>>;
    }, "strip", z.ZodTypeAny, {
        type: "TOKEN_TIP";
        minAmount: number;
        amountUnit: "absolute" | "dollar";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        chain?: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
        tokenAddress?: string | null | undefined;
        excludedActions?: ("tip" | "airdrop" | "raffle")[] | null | undefined;
    }, {
        type: "TOKEN_TIP";
        minAmount: number;
        amountUnit: "absolute" | "dollar";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        chain?: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
        tokenAddress?: string | null | undefined;
        excludedActions?: ("tip" | "airdrop" | "raffle")[] | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"TOKEN_BALANCE">;
        chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>;
        tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        minAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        maxAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        amountUnit: z.ZodEnum<["absolute", "dollar"]>;
        includeFlipwallets: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        includeFlipwalletsExclusively: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        includeStakingContracts: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        includeStakingContractsExclusively: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        type: "TOKEN_BALANCE";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        amountUnit: "absolute" | "dollar";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minAmount?: number | null | undefined;
        maxAmount?: number | null | undefined;
        includeFlipwallets?: boolean | null | undefined;
        includeFlipwalletsExclusively?: boolean | null | undefined;
        includeStakingContracts?: boolean | null | undefined;
        includeStakingContractsExclusively?: boolean | null | undefined;
        tokenAddress?: string | null | undefined;
    }, {
        type: "TOKEN_BALANCE";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        amountUnit: "absolute" | "dollar";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minAmount?: number | null | undefined;
        maxAmount?: number | null | undefined;
        includeFlipwallets?: boolean | null | undefined;
        includeFlipwalletsExclusively?: boolean | null | undefined;
        includeStakingContracts?: boolean | null | undefined;
        includeStakingContractsExclusively?: boolean | null | undefined;
        tokenAddress?: string | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"TWITTER_ACCOUNT_AGE">;
        minAccountAgeDays: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "TWITTER_ACCOUNT_AGE";
        minAccountAgeDays: number;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }, {
        type: "TWITTER_ACCOUNT_AGE";
        minAccountAgeDays: number;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"TWITTER_ACCOUNT_FOLLOW">;
        accountHandles: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "TWITTER_ACCOUNT_FOLLOW";
        accountHandles: string[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }, {
        type: "TWITTER_ACCOUNT_FOLLOW";
        accountHandles: string[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"TWITTER_ACCOUNT_FOLLOWERS">;
        minFollowers: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        maxFollowers: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        type: "TWITTER_ACCOUNT_FOLLOWERS";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minFollowers?: number | null | undefined;
        maxFollowers?: number | null | undefined;
    }, {
        type: "TWITTER_ACCOUNT_FOLLOWERS";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minFollowers?: number | null | undefined;
        maxFollowers?: number | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"TWITTER_ACCOUNT_SUBSCRIBE">;
        accountHandles: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "TWITTER_ACCOUNT_SUBSCRIBE";
        accountHandles: string[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }, {
        type: "TWITTER_ACCOUNT_SUBSCRIBE";
        accountHandles: string[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"TWITTER_ACCOUNT_VERIFIED">;
    }, "strip", z.ZodTypeAny, {
        type: "TWITTER_ACCOUNT_VERIFIED";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }, {
        type: "TWITTER_ACCOUNT_VERIFIED";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"TWITTER_POST_INTERACTION">;
        postUrl: z.ZodString;
        isLikeRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isBookmarkRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isRepostRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isCommentRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        minLength: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        requiredExactText: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        requiredPhrases: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString, "many">>>;
        isImageRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        type: "TWITTER_POST_INTERACTION";
        postUrl: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minLength?: number | null | undefined;
        isLikeRequired?: boolean | null | undefined;
        isBookmarkRequired?: boolean | null | undefined;
        isRepostRequired?: boolean | null | undefined;
        isCommentRequired?: boolean | null | undefined;
        requiredExactText?: string | null | undefined;
        requiredPhrases?: string[] | null | undefined;
        isImageRequired?: boolean | null | undefined;
    }, {
        type: "TWITTER_POST_INTERACTION";
        postUrl: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minLength?: number | null | undefined;
        isLikeRequired?: boolean | null | undefined;
        isBookmarkRequired?: boolean | null | undefined;
        isRepostRequired?: boolean | null | undefined;
        isCommentRequired?: boolean | null | undefined;
        requiredExactText?: string | null | undefined;
        requiredPhrases?: string[] | null | undefined;
        isImageRequired?: boolean | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"TWITTER_POST_CREATE">;
        requiredPhrases: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString, "many">>>;
        minLikes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        minReposts: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        minReplies: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        minImpressions: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        minLength: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        isImageRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        lookbackWindowDays: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        type: "TWITTER_POST_CREATE";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
        minLength?: number | null | undefined;
        requiredPhrases?: string[] | null | undefined;
        isImageRequired?: boolean | null | undefined;
        minLikes?: number | null | undefined;
        minReposts?: number | null | undefined;
        minReplies?: number | null | undefined;
        minImpressions?: number | null | undefined;
    }, {
        type: "TWITTER_POST_CREATE";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
        minLength?: number | null | undefined;
        requiredPhrases?: string[] | null | undefined;
        isImageRequired?: boolean | null | undefined;
        minLikes?: number | null | undefined;
        minReposts?: number | null | undefined;
        minReplies?: number | null | undefined;
        minImpressions?: number | null | undefined;
    }>, z.ZodObject<{
        isOptional: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isReviewRequired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        skipsReview: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        rewardBoost: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rewardBoostMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MAX", "CUMULATIVE", "GLOBAL"]>>>;
        type: z.ZodLiteral<"WALLET_INPUT">;
        label: z.ZodString;
        description: z.ZodString;
        chains: z.ZodArray<z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "WALLET_INPUT";
        description: string;
        label: string;
        chains: ("Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos")[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }, {
        type: "WALLET_INPUT";
        description: string;
        label: string;
        chains: ("Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos")[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    }>]>, "many">;
    rewards: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"FIXED">;
        strategy: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"EVERYONE">;
        }, "strip", z.ZodTypeAny, {
            type: "EVERYONE";
        }, {
            type: "EVERYONE";
        }>, z.ZodObject<{
            type: z.ZodLiteral<"FCFS">;
            maxClaims: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "FCFS";
            maxClaims: number;
        }, {
            type: "FCFS";
            maxClaims: number;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"RAFFLE">;
            maxWinners: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "RAFFLE";
            maxWinners: number;
        }, {
            type: "RAFFLE";
            maxWinners: number;
        }>]>;
        item: z.ZodUnion<[z.ZodObject<{
            type: z.ZodLiteral<"POINTS">;
            pointSystemId: z.ZodString;
            amount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "POINTS";
            pointSystemId: string;
            amount: number;
        }, {
            type: "POINTS";
            pointSystemId: string;
            amount: number;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"TOKEN">;
            chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>;
            tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            amount: z.ZodNumber;
            amountUnit: z.ZodOptional<z.ZodNullable<z.ZodEnum<["absolute", "dollar"]>>>;
        }, "strip", z.ZodTypeAny, {
            type: "TOKEN";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            amount: number;
            tokenAddress?: string | null | undefined;
            amountUnit?: "absolute" | "dollar" | null | undefined;
        }, {
            type: "TOKEN";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            amount: number;
            tokenAddress?: string | null | undefined;
            amountUnit?: "absolute" | "dollar" | null | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"NFT">;
            chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>;
            tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            tokenId: z.ZodString;
            amount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            type: "NFT";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            tokenId: string;
            tokenAddress?: string | null | undefined;
            amount?: number | null | undefined;
        }, {
            type: "NFT";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            tokenId: string;
            tokenAddress?: string | null | undefined;
            amount?: number | null | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"ROLE">;
            roleId: z.ZodString;
            duration: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            type: "ROLE";
            roleId: string;
            duration?: number | null | undefined;
        }, {
            type: "ROLE";
            roleId: string;
            duration?: number | null | undefined;
        }>]>;
    }, "strip", z.ZodTypeAny, {
        type: "FIXED";
        strategy: {
            type: "EVERYONE";
        } | {
            type: "FCFS";
            maxClaims: number;
        } | {
            type: "RAFFLE";
            maxWinners: number;
        };
        item: {
            type: "POINTS";
            pointSystemId: string;
            amount: number;
        } | {
            type: "TOKEN";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            amount: number;
            tokenAddress?: string | null | undefined;
            amountUnit?: "absolute" | "dollar" | null | undefined;
        } | {
            type: "NFT";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            tokenId: string;
            tokenAddress?: string | null | undefined;
            amount?: number | null | undefined;
        } | {
            type: "ROLE";
            roleId: string;
            duration?: number | null | undefined;
        };
    }, {
        type: "FIXED";
        strategy: {
            type: "EVERYONE";
        } | {
            type: "FCFS";
            maxClaims: number;
        } | {
            type: "RAFFLE";
            maxWinners: number;
        };
        item: {
            type: "POINTS";
            pointSystemId: string;
            amount: number;
        } | {
            type: "TOKEN";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            amount: number;
            tokenAddress?: string | null | undefined;
            amountUnit?: "absolute" | "dollar" | null | undefined;
        } | {
            type: "NFT";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            tokenId: string;
            tokenAddress?: string | null | undefined;
            amount?: number | null | undefined;
        } | {
            type: "ROLE";
            roleId: string;
            duration?: number | null | undefined;
        };
    }>, z.ZodObject<{
        type: z.ZodLiteral<"RANDOM">;
        strategy: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"EVERYONE">;
        }, "strip", z.ZodTypeAny, {
            type: "EVERYONE";
        }, {
            type: "EVERYONE";
        }>, z.ZodObject<{
            type: z.ZodLiteral<"FCFS">;
            maxClaims: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "FCFS";
            maxClaims: number;
        }, {
            type: "FCFS";
            maxClaims: number;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"RAFFLE">;
            maxWinners: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "RAFFLE";
            maxWinners: number;
        }, {
            type: "RAFFLE";
            maxWinners: number;
        }>]>;
        rewardPoolId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "RANDOM";
        strategy: {
            type: "EVERYONE";
        } | {
            type: "FCFS";
            maxClaims: number;
        } | {
            type: "RAFFLE";
            maxWinners: number;
        };
        rewardPoolId: string;
    }, {
        type: "RANDOM";
        strategy: {
            type: "EVERYONE";
        } | {
            type: "FCFS";
            maxClaims: number;
        } | {
            type: "RAFFLE";
            maxWinners: number;
        };
        rewardPoolId: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"SHARED">;
        strategy: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"EVERYONE">;
        }, "strip", z.ZodTypeAny, {
            type: "EVERYONE";
        }, {
            type: "EVERYONE";
        }>, z.ZodObject<{
            type: z.ZodLiteral<"FCFS">;
            maxClaims: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "FCFS";
            maxClaims: number;
        }, {
            type: "FCFS";
            maxClaims: number;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"RAFFLE">;
            maxWinners: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "RAFFLE";
            maxWinners: number;
        }, {
            type: "RAFFLE";
            maxWinners: number;
        }>]>;
        item: z.ZodUnion<[z.ZodObject<{
            type: z.ZodLiteral<"POINTS">;
            pointSystemId: z.ZodString;
            amount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "POINTS";
            pointSystemId: string;
            amount: number;
        }, {
            type: "POINTS";
            pointSystemId: string;
            amount: number;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"TOKEN">;
            chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Intergaze", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "Zaar", "zkCronos"]>;
            tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            amount: z.ZodNumber;
            amountUnit: z.ZodOptional<z.ZodNullable<z.ZodEnum<["absolute", "dollar"]>>>;
        }, "strip", z.ZodTypeAny, {
            type: "TOKEN";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            amount: number;
            tokenAddress?: string | null | undefined;
            amountUnit?: "absolute" | "dollar" | null | undefined;
        }, {
            type: "TOKEN";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            amount: number;
            tokenAddress?: string | null | undefined;
            amountUnit?: "absolute" | "dollar" | null | undefined;
        }>]>;
    }, "strip", z.ZodTypeAny, {
        type: "SHARED";
        strategy: {
            type: "EVERYONE";
        } | {
            type: "FCFS";
            maxClaims: number;
        } | {
            type: "RAFFLE";
            maxWinners: number;
        };
        item: {
            type: "POINTS";
            pointSystemId: string;
            amount: number;
        } | {
            type: "TOKEN";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            amount: number;
            tokenAddress?: string | null | undefined;
            amountUnit?: "absolute" | "dollar" | null | undefined;
        };
    }, {
        type: "SHARED";
        strategy: {
            type: "EVERYONE";
        } | {
            type: "FCFS";
            maxClaims: number;
        } | {
            type: "RAFFLE";
            maxWinners: number;
        };
        item: {
            type: "POINTS";
            pointSystemId: string;
            amount: number;
        } | {
            type: "TOKEN";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            amount: number;
            tokenAddress?: string | null | undefined;
            amountUnit?: "absolute" | "dollar" | null | undefined;
        };
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    shortDescription: string;
    fullDescription: string;
    recurrence: "ONCE" | "DAILY" | "WEEKLY" | "MONTHLY" | "CUSTOM";
    visibility: "SHARED" | "PRIVATE" | "PUBLIC";
    tasks: ({
        type: "API";
        name: string;
        description: string;
        endpoint: string;
        userIdMethods: ("discord" | "twitter" | "wallets")[];
        walletChains?: ("Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos")[] | null | undefined;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    } | {
        type: "DISCORD_ACCOUNT_AGE";
        minAccountAgeDays: number;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    } | {
        type: "DISCORD_SERVER_ROLES";
        serverId: string;
        roleIds: string[];
        operator: "and" | "or";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        serverInviteLink?: string | null | undefined;
    } | {
        type: "DISCORD_USERS";
        userIds: string[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    } | {
        type: "FILE_UPLOAD";
        description: string;
        label: string;
        fileTypes: ("IMAGE" | "VIDEO" | "AUDIO" | "PDF")[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    } | {
        type: "NFT_BALANCE";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        contractAddress: string;
        collectionName: string;
        standard: "CW_721" | "ERC-721" | "ERC-1155" | "METAPLEX" | "METAPLEX_CNFT" | "METAPLEX_CORE" | "SG_BADGE" | "UNKNOWN";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minAmount?: number | null | undefined;
        maxAmount?: number | null | undefined;
        tokenIds?: string | null | undefined;
        attributes?: {
            value: string;
            key: string;
        }[] | null | undefined;
        attributesOperator?: "and" | "or" | null | undefined;
        includeFlipwallets?: boolean | null | undefined;
        includeFlipwalletsExclusively?: boolean | null | undefined;
        includeStakingContracts?: boolean | null | undefined;
        includeStakingContractsExclusively?: boolean | null | undefined;
    } | {
        type: "NUMBER_INPUT";
        description: string;
        label: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        isInteger?: boolean | null | undefined;
        prefix?: string | null | undefined;
        suffix?: string | null | undefined;
        minValue?: number | null | undefined;
        maxValue?: number | null | undefined;
    } | {
        type: "POINTS_BALANCE";
        pointSystemId: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minAmount?: number | null | undefined;
        maxAmount?: number | null | undefined;
    } | {
        type: "POINTS_TIP";
        minAmount: number;
        pointSystemId: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
    } | {
        options: {
            label: string;
            id: string;
            description?: string | null | undefined;
        }[];
        type: "POLL_INPUT";
        label: string;
        minSelections: number;
        maxSelections: number;
        description?: string | null | undefined;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    } | {
        type: "TOKEN_SWAP";
        minAmount: number;
        amountUnit: "absolute" | "dollar";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        chain?: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
        tokenAddress?: string | null | undefined;
        allowedPlatforms?: ("COWSWAP" | "FLIPSUITE" | "GAS_ZIP" | "HYPERLIQUID" | "JUPITER" | "LI_FI" | "LIQUID_SWAP" | "OBSIDIAN" | "OKU_TRADE" | "ORBITER" | "RELAY" | "ROCKETX" | "SOLANA" | "SOMNEX" | "SKIP_GO" | "SQUID" | "STARGATE" | "SUSHI_SWAP" | "WOLFSWAP" | "VVS")[] | null | undefined;
    } | {
        type: "TEXT_INPUT";
        description: string;
        label: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minLength?: number | null | undefined;
        maxLength?: number | null | undefined;
        regex?: string | null | undefined;
    } | {
        type: "TOKEN_TIP";
        minAmount: number;
        amountUnit: "absolute" | "dollar";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        chain?: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
        tokenAddress?: string | null | undefined;
        excludedActions?: ("tip" | "airdrop" | "raffle")[] | null | undefined;
    } | {
        type: "TOKEN_BALANCE";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        amountUnit: "absolute" | "dollar";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minAmount?: number | null | undefined;
        maxAmount?: number | null | undefined;
        includeFlipwallets?: boolean | null | undefined;
        includeFlipwalletsExclusively?: boolean | null | undefined;
        includeStakingContracts?: boolean | null | undefined;
        includeStakingContractsExclusively?: boolean | null | undefined;
        tokenAddress?: string | null | undefined;
    } | {
        type: "TWITTER_ACCOUNT_AGE";
        minAccountAgeDays: number;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    } | {
        type: "TWITTER_ACCOUNT_FOLLOW";
        accountHandles: string[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    } | {
        type: "TWITTER_ACCOUNT_FOLLOWERS";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minFollowers?: number | null | undefined;
        maxFollowers?: number | null | undefined;
    } | {
        type: "TWITTER_ACCOUNT_SUBSCRIBE";
        accountHandles: string[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    } | {
        type: "TWITTER_ACCOUNT_VERIFIED";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    } | {
        type: "TWITTER_POST_INTERACTION";
        postUrl: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minLength?: number | null | undefined;
        isLikeRequired?: boolean | null | undefined;
        isBookmarkRequired?: boolean | null | undefined;
        isRepostRequired?: boolean | null | undefined;
        isCommentRequired?: boolean | null | undefined;
        requiredExactText?: string | null | undefined;
        requiredPhrases?: string[] | null | undefined;
        isImageRequired?: boolean | null | undefined;
    } | {
        type: "TWITTER_POST_CREATE";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
        minLength?: number | null | undefined;
        requiredPhrases?: string[] | null | undefined;
        isImageRequired?: boolean | null | undefined;
        minLikes?: number | null | undefined;
        minReposts?: number | null | undefined;
        minReplies?: number | null | undefined;
        minImpressions?: number | null | undefined;
    } | {
        type: "WALLET_INPUT";
        description: string;
        label: string;
        chains: ("Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos")[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    })[];
    rewards: ({
        type: "FIXED";
        strategy: {
            type: "EVERYONE";
        } | {
            type: "FCFS";
            maxClaims: number;
        } | {
            type: "RAFFLE";
            maxWinners: number;
        };
        item: {
            type: "POINTS";
            pointSystemId: string;
            amount: number;
        } | {
            type: "TOKEN";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            amount: number;
            tokenAddress?: string | null | undefined;
            amountUnit?: "absolute" | "dollar" | null | undefined;
        } | {
            type: "NFT";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            tokenId: string;
            tokenAddress?: string | null | undefined;
            amount?: number | null | undefined;
        } | {
            type: "ROLE";
            roleId: string;
            duration?: number | null | undefined;
        };
    } | {
        type: "RANDOM";
        strategy: {
            type: "EVERYONE";
        } | {
            type: "FCFS";
            maxClaims: number;
        } | {
            type: "RAFFLE";
            maxWinners: number;
        };
        rewardPoolId: string;
    } | {
        type: "SHARED";
        strategy: {
            type: "EVERYONE";
        } | {
            type: "FCFS";
            maxClaims: number;
        } | {
            type: "RAFFLE";
            maxWinners: number;
        };
        item: {
            type: "POINTS";
            pointSystemId: string;
            amount: number;
        } | {
            type: "TOKEN";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            amount: number;
            tokenAddress?: string | null | undefined;
            amountUnit?: "absolute" | "dollar" | null | undefined;
        };
    })[];
    status?: "DRAFT" | "ACTIVE" | null | undefined;
    bannerUrl?: string | null | undefined;
    recurrenceInterval?: number | null | undefined;
    maxIterations?: number | null | undefined;
    maxIterationCompletions?: number | null | undefined;
    maxTotalCompletions?: number | null | undefined;
}, {
    name: string;
    shortDescription: string;
    fullDescription: string;
    recurrence: "ONCE" | "DAILY" | "WEEKLY" | "MONTHLY" | "CUSTOM";
    visibility: "SHARED" | "PRIVATE" | "PUBLIC";
    tasks: ({
        type: "API";
        name: string;
        description: string;
        endpoint: string;
        userIdMethods: ("discord" | "twitter" | "wallets")[];
        walletChains?: ("Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos")[] | null | undefined;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    } | {
        type: "DISCORD_ACCOUNT_AGE";
        minAccountAgeDays: number;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    } | {
        type: "DISCORD_SERVER_ROLES";
        serverId: string;
        roleIds: string[];
        operator: "and" | "or";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        serverInviteLink?: string | null | undefined;
    } | {
        type: "DISCORD_USERS";
        userIds: string[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    } | {
        type: "FILE_UPLOAD";
        description: string;
        label: string;
        fileTypes: ("IMAGE" | "VIDEO" | "AUDIO" | "PDF")[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    } | {
        type: "NFT_BALANCE";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        contractAddress: string;
        collectionName: string;
        standard: "CW_721" | "ERC-721" | "ERC-1155" | "METAPLEX" | "METAPLEX_CNFT" | "METAPLEX_CORE" | "SG_BADGE" | "UNKNOWN";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minAmount?: number | null | undefined;
        maxAmount?: number | null | undefined;
        tokenIds?: string | null | undefined;
        attributes?: {
            value: string;
            key: string;
        }[] | null | undefined;
        attributesOperator?: "and" | "or" | null | undefined;
        includeFlipwallets?: boolean | null | undefined;
        includeFlipwalletsExclusively?: boolean | null | undefined;
        includeStakingContracts?: boolean | null | undefined;
        includeStakingContractsExclusively?: boolean | null | undefined;
    } | {
        type: "NUMBER_INPUT";
        description: string;
        label: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        isInteger?: boolean | null | undefined;
        prefix?: string | null | undefined;
        suffix?: string | null | undefined;
        minValue?: number | null | undefined;
        maxValue?: number | null | undefined;
    } | {
        type: "POINTS_BALANCE";
        pointSystemId: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minAmount?: number | null | undefined;
        maxAmount?: number | null | undefined;
    } | {
        type: "POINTS_TIP";
        minAmount: number;
        pointSystemId: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
    } | {
        options: {
            label: string;
            id: string;
            description?: string | null | undefined;
        }[];
        type: "POLL_INPUT";
        label: string;
        minSelections: number;
        maxSelections: number;
        description?: string | null | undefined;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    } | {
        type: "TOKEN_SWAP";
        minAmount: number;
        amountUnit: "absolute" | "dollar";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        chain?: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
        tokenAddress?: string | null | undefined;
        allowedPlatforms?: ("COWSWAP" | "FLIPSUITE" | "GAS_ZIP" | "HYPERLIQUID" | "JUPITER" | "LI_FI" | "LIQUID_SWAP" | "OBSIDIAN" | "OKU_TRADE" | "ORBITER" | "RELAY" | "ROCKETX" | "SOLANA" | "SOMNEX" | "SKIP_GO" | "SQUID" | "STARGATE" | "SUSHI_SWAP" | "WOLFSWAP" | "VVS")[] | null | undefined;
    } | {
        type: "TEXT_INPUT";
        description: string;
        label: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minLength?: number | null | undefined;
        maxLength?: number | null | undefined;
        regex?: string | null | undefined;
    } | {
        type: "TOKEN_TIP";
        minAmount: number;
        amountUnit: "absolute" | "dollar";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        chain?: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
        tokenAddress?: string | null | undefined;
        excludedActions?: ("tip" | "airdrop" | "raffle")[] | null | undefined;
    } | {
        type: "TOKEN_BALANCE";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
        amountUnit: "absolute" | "dollar";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minAmount?: number | null | undefined;
        maxAmount?: number | null | undefined;
        includeFlipwallets?: boolean | null | undefined;
        includeFlipwalletsExclusively?: boolean | null | undefined;
        includeStakingContracts?: boolean | null | undefined;
        includeStakingContractsExclusively?: boolean | null | undefined;
        tokenAddress?: string | null | undefined;
    } | {
        type: "TWITTER_ACCOUNT_AGE";
        minAccountAgeDays: number;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    } | {
        type: "TWITTER_ACCOUNT_FOLLOW";
        accountHandles: string[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    } | {
        type: "TWITTER_ACCOUNT_FOLLOWERS";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minFollowers?: number | null | undefined;
        maxFollowers?: number | null | undefined;
    } | {
        type: "TWITTER_ACCOUNT_SUBSCRIBE";
        accountHandles: string[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    } | {
        type: "TWITTER_ACCOUNT_VERIFIED";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    } | {
        type: "TWITTER_POST_INTERACTION";
        postUrl: string;
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        minLength?: number | null | undefined;
        isLikeRequired?: boolean | null | undefined;
        isBookmarkRequired?: boolean | null | undefined;
        isRepostRequired?: boolean | null | undefined;
        isCommentRequired?: boolean | null | undefined;
        requiredExactText?: string | null | undefined;
        requiredPhrases?: string[] | null | undefined;
        isImageRequired?: boolean | null | undefined;
    } | {
        type: "TWITTER_POST_CREATE";
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
        lookbackWindowDays?: number | null | undefined;
        minLength?: number | null | undefined;
        requiredPhrases?: string[] | null | undefined;
        isImageRequired?: boolean | null | undefined;
        minLikes?: number | null | undefined;
        minReposts?: number | null | undefined;
        minReplies?: number | null | undefined;
        minImpressions?: number | null | undefined;
    } | {
        type: "WALLET_INPUT";
        description: string;
        label: string;
        chains: ("Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos")[];
        isOptional?: boolean | null | undefined;
        isReviewRequired?: boolean | null | undefined;
        skipsReview?: boolean | null | undefined;
        rewardBoost?: number | null | undefined;
        rewardBoostMode?: "MAX" | "CUMULATIVE" | "GLOBAL" | null | undefined;
    })[];
    rewards: ({
        type: "FIXED";
        strategy: {
            type: "EVERYONE";
        } | {
            type: "FCFS";
            maxClaims: number;
        } | {
            type: "RAFFLE";
            maxWinners: number;
        };
        item: {
            type: "POINTS";
            pointSystemId: string;
            amount: number;
        } | {
            type: "TOKEN";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            amount: number;
            tokenAddress?: string | null | undefined;
            amountUnit?: "absolute" | "dollar" | null | undefined;
        } | {
            type: "NFT";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            tokenId: string;
            tokenAddress?: string | null | undefined;
            amount?: number | null | undefined;
        } | {
            type: "ROLE";
            roleId: string;
            duration?: number | null | undefined;
        };
    } | {
        type: "RANDOM";
        strategy: {
            type: "EVERYONE";
        } | {
            type: "FCFS";
            maxClaims: number;
        } | {
            type: "RAFFLE";
            maxWinners: number;
        };
        rewardPoolId: string;
    } | {
        type: "SHARED";
        strategy: {
            type: "EVERYONE";
        } | {
            type: "FCFS";
            maxClaims: number;
        } | {
            type: "RAFFLE";
            maxWinners: number;
        };
        item: {
            type: "POINTS";
            pointSystemId: string;
            amount: number;
        } | {
            type: "TOKEN";
            chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Intergaze" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "Zaar" | "zkCronos";
            amount: number;
            tokenAddress?: string | null | undefined;
            amountUnit?: "absolute" | "dollar" | null | undefined;
        };
    })[];
    status?: "DRAFT" | "ACTIVE" | null | undefined;
    bannerUrl?: string | null | undefined;
    recurrenceInterval?: number | null | undefined;
    maxIterations?: number | null | undefined;
    maxIterationCompletions?: number | null | undefined;
    maxTotalCompletions?: number | null | undefined;
}>;
export type CreateQuestInput = z.infer<typeof createQuestInput>;
export declare const getQuestShape: {
    questId: z.ZodString;
};
export declare const listQuestsShape: {
    statuses: z.ZodOptional<z.ZodArray<z.ZodEnum<["DRAFT", "TEMPLATE", "ACTIVE", "PAUSED", "REVIEW", "ENDED", "ARCHIVED"]>, "many">>;
    recurrenceTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["ONCE", "DAILY", "WEEKLY", "MONTHLY", "CUSTOM"]>, "many">>;
    visibilityTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["PRIVATE", "PUBLIC", "SHARED"]>, "many">>;
    offset: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
};
export declare const getQuestCompletionsShape: {
    questId: z.ZodOptional<z.ZodString>;
    iteration: z.ZodOptional<z.ZodNumber>;
    userId: z.ZodOptional<z.ZodString>;
    startTime: z.ZodOptional<z.ZodNumber>;
    endTime: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
};
