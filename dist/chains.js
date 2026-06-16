import { z } from "zod";
/**
 * Chain keys supported by FlipSuite.
 * Mirrors the `key` enum returned by GET /v1/chains and used throughout
 * the Community API (quest tasks and rewards). Synced with the live
 * `get_supported_chains` response (2026-06-16). If FlipSuite adds or removes
 * chains, regenerate this list from that endpoint.
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
    "Linea",
    "Mitosis",
    "Nano",
    "Nibiru",
    "Optimism",
    "Osmosis",
    "Pepecoin",
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
    "zkCronos",
];
export const ChainKey = z.enum(CHAIN_KEYS);
//# sourceMappingURL=chains.js.map