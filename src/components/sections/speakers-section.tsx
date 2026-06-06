import { speakers } from "@/content/site-data";
import { SpeakerCard } from "@/components/cards/speaker-card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { CTA } from "@/lib/constants";

export function SpeakersSection() {
  const featured = speakers.filter((s) => s.featured);
  return (
    <Section id="speakers" variant="base">
      <SectionHeader
        eyebrow="Featured Speakers"
        title="50+ Global Leaders. Voices That Define the Conversation."
        description="Join policymakers, investors, enterprise executives, and pioneering builders on the DICE 2026 stage."
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
