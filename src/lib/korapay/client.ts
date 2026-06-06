import { createHmac } from "crypto";
import { SITE } from "@/lib/constants";

const KORAPAY_API_BASE = "https://api.korapay.com/merchant/api/v1";

export interface KorapayInitializeInput {
  amount: number;
  currency: string;
  reference: string;
  customer: { email: string; name?: string };
  redirectUrl: string;
  notificationUrl: string;
  narration?: string;
  metadata?: Record<string, string>;
}

export interface KorapayInitializeResponse {
  reference: string;
  checkout_url: string;
}

export interface KorapayVerifyResponse {
  reference: string;
  status: "success" | "failed" | "processing" | "pending" | "expired";
  amount: string;
  amount_paid: string | number;
  fee?: string;
  currency: string;
  payment_method?: string;
  description?: string;
}

export interface KorapayWebhookPayload {
  event: string;
  data: {
    reference: string;
    amount: number;
    fee?: number;
    currency: string;
    status: "success" | "failed";
    payment_method?: string;
    payment_reference?: string;
  };
}

function getSecretKey() {
  const key = process.env.KORAPAY_SECRET_KEY;
  if (!key) {
    throw new Error("KORAPAY_SECRET_KEY is not configured.");
  }
  return key;
}

async function korapayRequest<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${KORAPAY_API_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${getSecretKey()}`,
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  const body = await response.json();

  if (!response.ok || body.status !== true) {
    const message = body.message ?? "Korapay request failed.";
    throw new Error(message);
  }

  return body.data as T;
}

export function isKorapayConfigured() {
  return Boolean(process.env.KORAPAY_SECRET_KEY);
}

export function getKorapayWebhookUrl() {
  return `${SITE.url}/api/webhooks/korapay`;
}

export function getTicketRedirectUrl() {
  return `${SITE.url}/tickets/success`;
}

export async function initializeKorapayCharge(input: KorapayInitializeInput) {
  return korapayRequest<KorapayInitializeResponse>("/charges/initialize", {
    method: "POST",
    body: JSON.stringify({
      amount: input.amount,
      currency: input.currency,
      reference: input.reference,
      customer: input.customer,
      redirect_url: input.redirectUrl,
      notification_url: input.notificationUrl,
      narration: input.narration,
      metadata: input.metadata,
    }),
  });
}

export async function verifyKorapayCharge(reference: string) {
  return korapayRequest<KorapayVerifyResponse>(`/charges/${encodeURIComponent(reference)}`, {
    method: "GET",
  });
}

export function verifyKorapayWebhookSignature(
  payload: KorapayWebhookPayload,
  signature: string | null
) {
  if (!signature || !process.env.KORAPAY_SECRET_KEY) {
    return false;
  }

  const hash = createHmac("sha256", process.env.KORAPAY_SECRET_KEY)
    .update(JSON.stringify(payload.data))
    .digest("hex");

  return hash === signature;
}
