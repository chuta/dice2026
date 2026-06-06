import { redirect } from "next/navigation";
import { TicketSuccessClient } from "@/components/tickets/ticket-success-client";
import { PageHero } from "@/components/layout/page-hero";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Registration Status",
  description: "Your DICE 2026 ticket registration status.",
  path: "/tickets/success",
  noIndex: true,
});

interface SuccessPageProps {
  searchParams: Promise<{ reference?: string }>;
}

export default async function TicketSuccessPage({ searchParams }: SuccessPageProps) {
  const { reference } = await searchParams;

  if (!reference) {
    redirect("/tickets");
  }

  return (
    <>
      <PageHero
        eyebrow="Registration"
        title="Payment status"
        description="We are confirming your transaction with our payment provider."
      />
      <Section variant="base">
        <GlassCard className="mx-auto max-w-xl">
          <TicketSuccessClient reference={reference} />
        </GlassCard>
      </Section>
    </>
  );
}
