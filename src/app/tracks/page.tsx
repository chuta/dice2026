import { tracks } from "@/content/site-data";
import { TrackCard } from "@/components/cards/track-card";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Conference Tracks",
  description: "Seven conference tracks spanning agentic AI, tokenized markets, programmable finance, and government digital infrastructure.",
  path: "/tracks",
  keywords: ["AI blockchain conference tracks", "Web3 conference Africa"],
});

export default function TracksPage() {
  return (
    <>
      <PageHero
        eyebrow="Tracks"
        title="Seven Programmes. One Economic Vision."
        description="Each track delivers institutional-depth programming designed for policymakers, investors, enterprise leaders, and technical builders."
        cta={{ label: "Buy Your Pass", href: "/tickets" }}
      />
      <Section variant="base">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track) => (
            <TrackCard key={track.slug} track={track} />
          ))}
        </div>
      </Section>
    </>
  );
}
