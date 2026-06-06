import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";
import { ECOSYSTEM_STATS } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Investor Forum",
  description: "Request access to the DICE 2026 Investor Forum. Curated deal flow and private sessions with Africa's top startups.",
  path: "/investor-forum",
  keywords: ["Africa startup investor conference", "VC conference Lagos"],
});

export default function InvestorForumPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor Forum"
        title="Curated Capital. Qualified Deal Flow."
        description={`An application-only forum connecting ${ECOSYSTEM_STATS.investors} institutional investors with ${ECOSYSTEM_STATS.startups} vetted startups building Africa's digital infrastructure.`}
        cta={{ label: "Request Access", href: "#apply" }}
        secondaryCta={{ label: "Startup Pavilion", href: "/startup-pavilion" }}
      />
      <Section variant="base">
        <GlassCard>
          <h2 className="font-headline text-xl font-bold">Forum Programming</h2>
          <ul className="mt-4 space-y-3 text-text-secondary">
            <li>• Private investor briefing sessions</li>
            <li>• 1:1 founder meeting scheduler</li>
            <li>• Sector-focused deal flow presentations</li>
            <li>• Government policy context sessions</li>
            <li>• Exclusive investor lounge access</li>
          </ul>
        </GlassCard>
      </Section>
      <Section id="apply" variant="deep">
        <h2 className="mb-8 text-center font-headline text-2xl font-bold">Investor Forum Application</h2>
        <ContactForm defaultSubject="Investor Forum Application" subjects={["Investor Forum Application"]} />
      </Section>
    </>
  );
}
