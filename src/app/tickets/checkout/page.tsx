import Link from "next/link";
import { notFound } from "next/navigation";
import { ticketTiers } from "@/content/site-data";
import { TicketCheckoutForm } from "@/components/forms/ticket-checkout-form";
import { PageHero } from "@/components/layout/page-hero";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";
import { getTierById } from "@/lib/tickets/pricing";

export const metadata = createMetadata({
  title: "Ticket Checkout",
  description: "Complete your DICE 2026 registration and proceed to secure payment.",
  path: "/tickets/checkout",
  noIndex: true,
});

interface CheckoutPageProps {
  searchParams: Promise<{ tier?: string }>;
}

export default async function TicketCheckoutPage({ searchParams }: CheckoutPageProps) {
  const { tier: tierId } = await searchParams;
  const tier = tierId ? getTierById(ticketTiers, tierId) : undefined;

  if (!tier) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Checkout"
        title={`Register — ${tier.name}`}
        description="Enter your details below. We will reserve your pass and guide you through payment on Korapay."
      />
      <Section variant="base">
        <div className="mx-auto max-w-lg">
          <GlassCard>
            <TicketCheckoutForm tier={tier} />
          </GlassCard>
          <p className="mt-6 text-center text-sm text-text-muted">
            <Link href="/tickets" className="text-primary hover:text-accent-cyan">
              ← Back to all passes
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
}
