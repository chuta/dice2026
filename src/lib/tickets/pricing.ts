import type { TicketTier } from "@/types/content";

/** Early bird discount applied to all tiers */
export const EARLY_BIRD_DISCOUNT_RATE = 0.4;

/**
 * Korapay passes transaction fees to the customer at checkout.
 * Paid amount may exceed the ticket price by up to this rate.
 */
export const KORAPAY_FEE_TOLERANCE_RATE = Number(
  process.env.KORAPAY_FEE_TOLERANCE_RATE ?? "0.015"
);

export function getMaxAcceptablePaidAmount(expectedAmountNgn: number) {
  return Math.ceil(expectedAmountNgn * (1 + KORAPAY_FEE_TOLERANCE_RATE));
}

/** Returns true when paid amount covers the ticket price within Korapay fee tolerance. */
export function isPaidAmountAcceptable(paidAmountNgn: number, expectedAmountNgn: number) {
  return (
    paidAmountNgn >= expectedAmountNgn &&
    paidAmountNgn <= getMaxAcceptablePaidAmount(expectedAmountNgn)
  );
}

/** Fallback variable-amount link (unused when tier-specific links are configured) */
export const KORAPAY_PAYMENT_LINK =
  process.env.KORAPAY_PAYMENT_LINK_URL ?? "https://checkout.korapay.com/pay/dice2026";

/** Tier-specific Korapay payment links with fixed early bird amounts */
const TIER_PAYMENT_LINKS: Record<string, string> = {
  standard:
    process.env.KORAPAY_LINK_STANDARD ?? "https://checkout.korapay.com/pay/StandardPass",
  executive:
    process.env.KORAPAY_LINK_EXECUTIVE ?? "https://checkout.korapay.com/pay/ExecutivePass",
  institutional:
    process.env.KORAPAY_LINK_INSTITUTIONAL ?? "https://checkout.korapay.com/pay/Institutional",
  group: process.env.KORAPAY_LINK_GROUP ?? "https://checkout.korapay.com/pay/Group",
};

export function getPaymentLinkForTier(tierId: string) {
  return TIER_PAYMENT_LINKS[tierId] ?? KORAPAY_PAYMENT_LINK;
}

export function tierHasFixedAmountLink(tierId: string) {
  return tierId in TIER_PAYMENT_LINKS;
}

export function getEarlyBirdPrice(fullPriceNgn: number) {
  return Math.round(fullPriceNgn * (1 - EARLY_BIRD_DISCOUNT_RATE));
}

export function formatNgn(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getTierById(tiers: TicketTier[], tierId: string) {
  return tiers.find((tier) => tier.id === tierId);
}

export function generateTicketReference(tierId: string) {
  const stamp = Date.now().toString(36);
  const random = Math.random().toString(36).slice(2, 8);
  return `DICE26-${tierId}-${stamp}-${random}`.toUpperCase();
}
