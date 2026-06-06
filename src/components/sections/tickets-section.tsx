import { ticketTiers } from "@/content/site-data";
import { TicketTierCard } from "@/components/cards/ticket-tier-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

export function TicketsSection() {
  return (
    <Section id="tickets" variant="deep">
      <SectionHeader
        eyebrow="Tickets"
        title="Secure Your Place at DICE 2026"
        description="Select the pass aligned with your objectives, from full conference access to institutional and executive programmes."
        align="center"
        className="mx-auto text-center"
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {ticketTiers.map((tier) => (
          <TicketTierCard key={tier.id} tier={tier} />
        ))}
      </div>
    </Section>
  );
}
