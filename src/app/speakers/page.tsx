import { speakers } from "@/content/site-data";
import { SpeakerCard } from "@/components/cards/speaker-card";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Speakers",
  description: "DICE 2026 speakers — 150+ global leaders in AI, blockchain, policy, and digital economy infrastructure.",
  path: "/speakers",
  keywords: ["DICE 2026 speakers", "tech speakers Africa"],
});

export default function SpeakersPage() {
  return (
    <>
      <PageHero
        eyebrow="Speakers"
        title="Voices Shaping Africa's Digital Future"
        description="Policy leaders, investors, enterprise executives, and pioneering builders — the DICE 2026 speaker faculty."
        cta={{ label: "Apply to Speak", href: "/contact" }}
        secondaryCta={{ label: "Register Now", href: "/tickets" }}
      />
      <Section variant="base">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {speakers.map((speaker) => (
            <div key={speaker.slug} id={speaker.slug}>
              <SpeakerCard speaker={speaker} />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
