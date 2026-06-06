import { ticketTiers } from "@/content/site-data";
import { TicketTierCard } from "@/components/cards/ticket-tier-card";
import { PageHero } from "@/components/layout/page-hero";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";
import { CTA } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Tickets",
  description: "Register for DICE 2026 — conference passes from Standard to Institutional. August 21–22, Lagos.",
  path: "/tickets",
  keywords: ["DICE 2026 tickets", "tech conference tickets Lagos"],
});

export default function TicketsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tickets"
        title="Register for DICE 2026"
        description="Pricing opens soon. Select your pass tier and register interest for priority access when tickets go live."
        secondaryCta={CTA.sponsor}
      />
      <Section variant="base">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {ticketTiers.map((tier) => (
            <TicketTierCard key={tier.id} tier={tier} />
          ))}
        </div>
      </Section>
      <Section variant="deep">
        <GlassCard className="mx-auto max-w-xl text-center">
          <h2 className="font-headline text-xl font-bold">Early Bird Alerts</h2>
          <p className="mt-2 text-text-secondary">Be first to know when tickets go on sale.</p>
          <div className="mt-6 flex justify-center">
            <NewsletterForm />
          </div>
        </GlassCard>
      </Section>
    </>
  );
}
