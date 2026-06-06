import { speakers } from "@/content/site-data";
import { SpeakerCard } from "@/components/cards/speaker-card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { CTA, FEATURED_SPEAKERS_COUNT, STATS } from "@/lib/constants";

export function SpeakersSection() {
  const featured = speakers.filter((s) => s.featured);
  return (
    <Section id="speakers" variant="base">
      <SectionHeader
        eyebrow="Featured Faculty"
        title={`${FEATURED_SPEAKERS_COUNT} Confirmed · Targeting ${STATS[1].value} Global Leaders`}
        description="Regulators, enterprise executives, and policy architects already confirmed. The full speaker faculty continues to expand."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((speaker) => (
          <SpeakerCard key={speaker.slug} speaker={speaker} />
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button href="/speakers" variant="secondary">View All Speakers</Button>
        <Button href={CTA.speak.href} showArrow>{CTA.speak.label}</Button>
      </div>
    </Section>
  );
}
