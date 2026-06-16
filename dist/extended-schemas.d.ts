import { z } from "zod";
export declare const getSupportedChainsShape: {};
export declare const getUserFlipwalletsShape: {
    platform: z.ZodDefault<z.ZodLiteral<"discord">>;
    user: z.ZodString;
};
export declare const getUserShape: {
    userId: z.ZodString;
};
export declare const listPointSystemsShape: {
    query: z.ZodOptional<z.ZodString>;
    statuses: z.ZodOptional<z.ZodArray<z.ZodEnum<["ACTIVE", "ARCHIVED", "SUSPENDED"]>, "many">>;
    permission: z.ZodOptional<z.ZodEnum<["VIEW", "TRANSFER", "SPEND", "PRINT"]>>;
    includeShared: z.ZodOptional<z.ZodBoolean>;
    offset: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
};
export declare const getPointsBalanceShape: {
    pointSystemId: z.ZodString;
    userIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    sortBy: z.ZodOptional<z.ZodEnum<["balance-desc", "balance-asc"]>>;
    offset: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
};
export declare const updatePointsBalanceShape: {
    pointSystemId: z.ZodString;
    changes: z.ZodArray<z.ZodObject<{
        platform: z.ZodDefault<z.ZodLiteral<"discord">>;
        userId: z.ZodString;
        amount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        amount: number;
        platform: "discord";
        userId: string;
    }, {
        amount: number;
        userId: string;
        platform?: "discord" | undefined;
    }>, "many">;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>>>;
};
export declare const getTippingWalletBalanceShape: {
    chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Pepecoin", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "zkCronos"]>;
};
export declare const getTippingWalletInventoryShape: {
    chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Pepecoin", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "zkCronos"]>;
};
export declare const sendTipShape: {
    channelId: z.ZodString;
    recipientId: z.ZodString;
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
        chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Pepecoin", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "zkCronos"]>;
        tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        amount: z.ZodNumber;
        amountUnit: z.ZodOptional<z.ZodNullable<z.ZodEnum<["absolute", "dollar"]>>>;
    }, "strip", z.ZodTypeAny, {
        type: "TOKEN";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Pepecoin" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "zkCronos";
        amount: number;
        tokenAddress?: string | null | undefined;
        amountUnit?: "absolute" | "dollar" | null | undefined;
    }, {
        type: "TOKEN";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Pepecoin" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "zkCronos";
        amount: number;
        tokenAddress?: string | null | undefined;
        amountUnit?: "absolute" | "dollar" | null | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"NFT">;
        chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Pepecoin", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "zkCronos"]>;
        tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        tokenId: z.ZodString;
        amount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        type: "NFT";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Pepecoin" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "zkCronos";
        tokenId: string;
        tokenAddress?: string | null | undefined;
        amount?: number | null | undefined;
    }, {
        type: "NFT";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Pepecoin" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "zkCronos";
        tokenId: string;
        tokenAddress?: string | null | undefined;
        amount?: number | null | undefined;
    }>]>;
    comment: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hideNotification: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
};
export declare const transferAssetShape: {
    channelId: z.ZodString;
    recipientAddress: z.ZodString;
    item: z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"TOKEN">;
        chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Pepecoin", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "zkCronos"]>;
        tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        amount: z.ZodNumber;
        amountUnit: z.ZodOptional<z.ZodNullable<z.ZodEnum<["absolute", "dollar"]>>>;
    }, "strip", z.ZodTypeAny, {
        type: "TOKEN";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Pepecoin" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "zkCronos";
        amount: number;
        tokenAddress?: string | null | undefined;
        amountUnit?: "absolute" | "dollar" | null | undefined;
    }, {
        type: "TOKEN";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Pepecoin" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "zkCronos";
        amount: number;
        tokenAddress?: string | null | undefined;
        amountUnit?: "absolute" | "dollar" | null | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"NFT">;
        chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Pepecoin", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "zkCronos"]>;
        tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        tokenId: z.ZodString;
        amount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        type: "NFT";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Pepecoin" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "zkCronos";
        tokenId: string;
        tokenAddress?: string | null | undefined;
        amount?: number | null | undefined;
    }, {
        type: "NFT";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Pepecoin" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "zkCronos";
        tokenId: string;
        tokenAddress?: string | null | undefined;
        amount?: number | null | undefined;
    }>]>;
    comment: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hideNotification: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
};
export declare const createAirdropShape: {
    channelId: z.ZodString;
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
        chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Pepecoin", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "zkCronos"]>;
        tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        amount: z.ZodNumber;
        amountUnit: z.ZodOptional<z.ZodNullable<z.ZodEnum<["absolute", "dollar"]>>>;
    }, "strip", z.ZodTypeAny, {
        type: "TOKEN";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Pepecoin" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "zkCronos";
        amount: number;
        tokenAddress?: string | null | undefined;
        amountUnit?: "absolute" | "dollar" | null | undefined;
    }, {
        type: "TOKEN";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Pepecoin" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "zkCronos";
        amount: number;
        tokenAddress?: string | null | undefined;
        amountUnit?: "absolute" | "dollar" | null | undefined;
    }>]>;
    countdown: z.ZodNumber;
    maxEntries: z.ZodNumber;
    comment: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    allowedRoleIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString, "many">>>;
    allowedUserIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString, "many">>>;
    forbiddenRoleIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString, "many">>>;
    forbiddenUserIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString, "many">>>;
};
export declare const createRaffleShape: {
    channelId: z.ZodString;
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
        chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Pepecoin", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "zkCronos"]>;
        tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        amount: z.ZodNumber;
        amountUnit: z.ZodOptional<z.ZodNullable<z.ZodEnum<["absolute", "dollar"]>>>;
    }, "strip", z.ZodTypeAny, {
        type: "TOKEN";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Pepecoin" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "zkCronos";
        amount: number;
        tokenAddress?: string | null | undefined;
        amountUnit?: "absolute" | "dollar" | null | undefined;
    }, {
        type: "TOKEN";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Pepecoin" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "zkCronos";
        amount: number;
        tokenAddress?: string | null | undefined;
        amountUnit?: "absolute" | "dollar" | null | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"NFT">;
        chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Pepecoin", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "zkCronos"]>;
        tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        tokenId: z.ZodString;
        amount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        type: "NFT";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Pepecoin" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "zkCronos";
        tokenId: string;
        tokenAddress?: string | null | undefined;
        amount?: number | null | undefined;
    }, {
        type: "NFT";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Pepecoin" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "zkCronos";
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
    countdown: z.ZodNumber;
    maxEntries: z.ZodNumber;
    maxWinners: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    comment: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    allowedRoleIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString, "many">>>;
    allowedUserIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString, "many">>>;
    forbiddenRoleIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString, "many">>>;
    forbiddenUserIds: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString, "many">>>;
};
export declare const burnAssetShape: {
    channelId: z.ZodString;
    item: z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"TOKEN">;
        chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Pepecoin", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "zkCronos"]>;
        tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        amount: z.ZodNumber;
        amountUnit: z.ZodOptional<z.ZodNullable<z.ZodEnum<["absolute", "dollar"]>>>;
    }, "strip", z.ZodTypeAny, {
        type: "TOKEN";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Pepecoin" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "zkCronos";
        amount: number;
        tokenAddress?: string | null | undefined;
        amountUnit?: "absolute" | "dollar" | null | undefined;
    }, {
        type: "TOKEN";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Pepecoin" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "zkCronos";
        amount: number;
        tokenAddress?: string | null | undefined;
        amountUnit?: "absolute" | "dollar" | null | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"NFT">;
        chain: z.ZodEnum<["Abstract", "ApeChain", "Arbitrum", "Atto", "Avalanche", "Base", "Berachain", "Blast", "BSC", "CosmosHub", "Cronos", "Ethereum", "Harmony", "HyperCore", "HyperEvm", "Initia", "Injective", "Linea", "Mitosis", "Nano", "Nibiru", "Optimism", "Osmosis", "Pepecoin", "Plasma", "Polygon", "SEDA", "Sei", "SeiEvm", "Solana", "Somnia", "Sonic", "Stargaze", "Terra", "Unichain", "Yominet", "zkCronos"]>;
        tokenAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        tokenId: z.ZodString;
        amount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        type: "NFT";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Pepecoin" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "zkCronos";
        tokenId: string;
        tokenAddress?: string | null | undefined;
        amount?: number | null | undefined;
    }, {
        type: "NFT";
        chain: "Abstract" | "ApeChain" | "Arbitrum" | "Atto" | "Avalanche" | "Base" | "Berachain" | "Blast" | "BSC" | "CosmosHub" | "Cronos" | "Ethereum" | "Harmony" | "HyperCore" | "HyperEvm" | "Initia" | "Injective" | "Linea" | "Mitosis" | "Nano" | "Nibiru" | "Optimism" | "Osmosis" | "Pepecoin" | "Plasma" | "Polygon" | "SEDA" | "Sei" | "SeiEvm" | "Solana" | "Somnia" | "Sonic" | "Stargaze" | "Terra" | "Unichain" | "Yominet" | "zkCronos";
        tokenId: string;
        tokenAddress?: string | null | undefined;
        amount?: number | null | undefined;
    }>]>;
    comment: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hideNotification: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
};
