import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { PaymentInstructions } from "@/components/tickets/payment-instructions";
import { PageHero } from "@/components/layout/page-hero";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";
import { getPaymentLinkForTier, tierHasFixedAmountLink } from "@/lib/tickets/pricing";
import { getTicketOrderByReference } from "@/lib/tickets/orders";

export const metadata = createMetadata({
  title: "Complete Payment",
  description: "Payment instructions for your DICE 2026 registration.",
  path: "/tickets/pay",
  noIndex: true,
});

interface PayPageProps {
  params: Promise<{ reference: string }>;
}

export default async function TicketPayPage({ params }: PayPageProps) {
  const { reference } = await params;
  const order = await getTicketOrderByReference(reference.toUpperCase());

  if (!order) {
    notFound();
  }

  if (order.status === "success") {
    redirect(`/tickets/success?reference=${encodeURIComponent(order.reference)}`);
  }

  return (
    <>
      <PageHero
        eyebrow="Payment"
        title="Complete your registration"
        description="Follow the steps below on Korapay. Your pass is reserved once payment is confirmed."
      />
      <Section variant="base">
        <div className="mx-auto max-w-lg">
          <GlassCard>
            <PaymentInstructions
              orderReference={order.reference}
              tierName={order.tier_name}
              customerName={order.customer_name}
              customerEmail={order.customer_email}
              amountNgn={order.amount_ngn}
              paymentLink={getPaymentLinkForTier(order.tier_id)}
              fixedAmountLink={tierHasFixedAmountLink(order.tier_id)}
            />
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
