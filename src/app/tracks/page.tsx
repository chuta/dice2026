import { tracks } from "@/content/site-data";
import { ProposeTrackCard } from "@/components/cards/propose-track-card";
import { TrackCard } from "@/components/cards/track-card";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";
import { CTA } from "@/lib/constants";

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
        cta={CTA.register}
      />
      <Section variant="base">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tracks.map((track) => (
            <TrackCard key={track.slug} track={track} />
          ))}
          <ProposeTrackCard />
        </div>
      </Section>
    </>
  );
}
