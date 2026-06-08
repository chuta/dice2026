import type { TrackPillar } from "@/types/content";

export const tokenizedMarketsThesis = {
  headline: "Intelligence. Capital. Trust.",
  body:
    "Every economy ultimately runs on intelligence, capital, and trust. Real-world asset tokenization is the capital layer of Africa's autonomous digital economy, unlocking productive assets for institutional markets, cross-border flows, and asset-backed financial ecosystems.",
  alignment:
    "This track aligns naturally with organisations advancing tokenized gold, commodity markets, investment infrastructure, and policy frameworks for Africa's real-economy assets.",
} as const;

export const tokenizedMarketsPillars: TrackPillar[] = [
  {
    title: "Digital Assets & Stablecoins",
    topics: ["Digital assets", "Stablecoins"],
  },
  {
    title: "Real-World Asset Tokenization",
    topics: ["Gold", "Silver", "Commodities", "Carbon credits", "Real estate"],
  },
  {
    title: "Institutional Digital Finance",
    topics: ["Banks", "Exchanges", "Asset managers"],
  },
  {
    title: "Cross-Border Capital Markets",
    topics: ["Investment flows", "Trade finance", "Settlement infrastructure"],
  },
];
