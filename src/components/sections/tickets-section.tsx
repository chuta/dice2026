import { ticketTiers } from "@/content/site-data";
import { TicketTierCard } from "@/components/cards/ticket-tier-card";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

export function TicketsSection() {
  return (
    <Section id="tickets" variant="deep">
      <SectionHeader
        eyebrow="Tickets"
        title="Secure Your Place at DICE 2026"
        description="Select the pass aligned with your objectives. Pricing releases soon — register your interest to receive early access."
        align="center"
        className="mx-auto text-center"
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {ticketTiers.map((tier) => (
          <TicketTierCard key={tier.id} tier={tier} />
        ))}
      </div>
      <GlassCard className="mx-auto mt-10 max-w-xl text-center" hover={false}>
        <h3 className="font-headline text-lg font-semibold">Get Early Access to Pricing</h3>
        <p className="mt-2 text-sm text-text-secondary">
          Be first to know when passes go on sale and receive priority allocation.
        </p>
        <div className="mt-6 flex justify-center">
          <NewsletterForm />
        </div>
      </GlassCard>
    </Section>
  );
}
