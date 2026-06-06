import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { TicketConfirmForm } from "@/components/forms/ticket-confirm-form";
import { PageHero } from "@/components/layout/page-hero";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";
import { getTicketOrderByReference } from "@/lib/tickets/orders";

export const metadata = createMetadata({
  title: "Confirm Payment",
  description: "Confirm your DICE 2026 ticket payment with your Korapay reference.",
  path: "/tickets/confirm",
  noIndex: true,
});

interface ConfirmPageProps {
  searchParams: Promise<{ order?: string }>;
}

export default async function TicketConfirmPage({ searchParams }: ConfirmPageProps) {
  const { order: orderReference } = await searchParams;

  if (!orderReference) {
    redirect("/tickets");
  }

  const order = await getTicketOrderByReference(orderReference.toUpperCase());

  if (!order) {
    notFound();
  }

  if (order.status === "success") {
    redirect(`/tickets/success?reference=${encodeURIComponent(order.reference)}`);
  }

  return (
    <>
      <PageHero
        eyebrow="Confirmation"
        title="Confirm your payment"
        description="Enter the payment reference from your Korapay receipt to complete registration."
      />
      <Section variant="base">
        <div className="mx-auto max-w-lg">
          <GlassCard>
            <TicketConfirmForm
              orderReference={order.reference}
              tierName={order.tier_name}
              amountNgn={order.amount_ngn}
            />
          </GlassCard>
          <p className="mt-6 text-center text-sm text-text-muted">
            <Link
              href={`/tickets/pay/${encodeURIComponent(order.reference)}`}
              className="text-primary hover:text-accent-cyan"
            >
              ← Back to payment instructions
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
}
