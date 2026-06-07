import { PartnerLogoGrid } from "@/components/cards/partner-logo-grid";
import { ticketProcessingPartners } from "@/content/partners";

export function TicketProcessingPartners() {
  return (
    <div className="mt-12 text-center">
      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
        Ticket Processing Partners
      </p>
      <div className="mx-auto mt-6 max-w-lg">
        <PartnerLogoGrid partners={ticketProcessingPartners} columns={2} />
      </div>
    </div>
  );
}
