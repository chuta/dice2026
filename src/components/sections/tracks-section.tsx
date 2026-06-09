import { tracks } from "@/content/site-data";
import { ProposeTrackCard } from "@/components/cards/propose-track-card";
import { TrackCard } from "@/components/cards/track-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

export function TracksSection() {
  return (
    <Section id="tracks" variant="base">
      <SectionHeader
        eyebrow="Conference Tracks"
        title="Seven Programmes Defining Africa's Digital Future"
        description="From agentic AI and economic resilience to digital capital formation and government-as-platform — institutional-depth programming for decision-makers and builders."
        cta={{ label: "Explore All Tracks", href: "/tracks" }}
      />
      <div className="flex gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
        {tracks.map((track) => (
          <TrackCard key={track.slug} track={track} />
        ))}
        <ProposeTrackCard />
      </div>
    </Section>
  );
}
