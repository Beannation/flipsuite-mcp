import { z } from "zod";
/**
 * Chain keys supported by FlipSuite.
 * Mirrors the `key` enum returned by GET /v1/chains and used throughout
 * the Community API (quest tasks and rewards).
 */
export const CHAIN_KEYS = [
    "Abstract",
    "ApeChain",
    "Arbitrum",
    "Atto",
    "Avalanche",
    "Base",
    "Berachain",
    "Blast",
    "BSC",
    "CosmosHub",
    "Cronos",
    "Ethereum",
    "Harmony",
    "HyperCore",
    "HyperEvm",
    "Initia",
    "Injective",
    "Intergaze",
    "Linea",
    "Mitosis",
    "Nano",
    "Nibiru",
    "Optimism",
    "Osmosis",
    "Plasma",
    "Polygon",
    "SEDA",
    "Sei",
    "SeiEvm",
    "Solana",
    "Somnia",
    "Sonic",
    "Stargaze",
    "Terra",
    "Unichain",
    "Yominet",
    "Zaar",
    "zkCronos",
];
export const ChainKey = z.enum(CHAIN_KEYS);
//# sourceMappingURL=chains.js.map