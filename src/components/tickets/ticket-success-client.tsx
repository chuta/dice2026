"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CheckCircleIcon,
  ClockIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { formatNgn } from "@/lib/tickets/pricing";

interface TicketSuccessClientProps {
  reference: string;
}

interface VerifiedOrder {
  reference: string;
  status: "pending" | "success" | "failed";
  tierName: string;
  amountNgn: number;
  customerName: string;
}

export function TicketSuccessClient({ reference }: TicketSuccessClientProps) {
  const [order, setOrder] = useState<VerifiedOrder | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function verifyPayment() {
      try {
        const response = await fetch(`/api/tickets/verify?reference=${encodeURIComponent(reference)}`);
        const result = await response.json();

        if (cancelled) return;

        if (!response.ok || !result.success) {
          setError(result.error ?? "Unable to verify payment.");
          return;
        }

        setOrder(result.order as VerifiedOrder);
      } catch {
        if (!cancelled) {
          setError("Unable to verify payment.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    verifyPayment();

    return () => {
      cancelled = true;
    };
  }, [reference]);

  if (loading) {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <ClockIcon className="h-12 w-12 animate-pulse text-accent-cyan" />
        <h2 className="mt-4 font-headline text-xl font-semibold">Confirming your payment</h2>
        <p className="mt-2 max-w-md text-text-secondary">
          Please wait while we verify your transaction with Korapay.
        </p>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <ExclamationCircleIcon className="h-12 w-12 text-error" />
        <h2 className="mt-4 font-headline text-xl font-semibold">Verification unavailable</h2>
        <p className="mt-2 max-w-md text-text-secondary">
          {error ?? "We could not verify this payment."} If you completed payment, confirmation will arrive by email shortly.
        </p>
        <Button href="/tickets" className="mt-6" variant="secondary">
          Return to tickets
        </Button>
      </div>
    );
  }

  if (order.status === "pending") {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <ClockIcon className="h-12 w-12 text-warm-gold" />
        <h2 className="mt-4 font-headline text-xl font-semibold">Payment processing</h2>
        <p className="mt-2 max-w-md text-text-secondary">
          Your registration for <strong>{order.tierName}</strong> is awaiting payment confirmation.
        </p>
        <p className="mt-4 font-mono text-sm text-text-muted">Reference: {order.reference}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href={`/tickets/confirm?order=${encodeURIComponent(reference)}`} showArrow>
            Confirm payment
          </Button>
          <Button href={`/tickets/pay/${encodeURIComponent(reference)}`} variant="secondary">
            Payment instructions
          </Button>
        </div>
      </div>
    );
  }

  if (order.status === "failed") {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <ExclamationCircleIcon className="h-12 w-12 text-error" />
        <h2 className="mt-4 font-headline text-xl font-semibold">Payment not completed</h2>
        <p className="mt-2 max-w-md text-text-secondary">
          Your payment for <strong>{order.tierName}</strong> was not successful. You can try again from the tickets page.
        </p>
        <Button href="/tickets" className="mt-6" showArrow>
          Try again
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-12 text-center">
      <CheckCircleIcon className="h-12 w-12 text-success" />
      <h2 className="mt-4 font-headline text-2xl font-bold">Registration confirmed</h2>
      <p className="mt-2 max-w-md text-text-secondary">
        Thank you, {order.customerName}. Your <strong>{order.tierName}</strong> is confirmed.
      </p>
      <div className="mt-6 rounded-[12px] border border-white/10 bg-surface-raised/60 px-6 py-4 text-left text-sm">
        <p>
          <span className="text-text-muted">Amount paid:</span>{" "}
          <span className="font-mono text-accent-cyan">{formatNgn(order.amountNgn)}</span>
        </p>
        <p className="mt-2">
          <span className="text-text-muted">Reference:</span>{" "}
          <span className="font-mono">{order.reference}</span>
        </p>
      </div>
      <p className="mt-4 max-w-md text-sm text-text-secondary">
        A confirmation email has been sent. We look forward to seeing you at DICE 2026.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/agenda" variant="secondary">
          View agenda
        </Button>
        <Button href="/" showArrow>
          Back to homepage
        </Button>
      </div>
      <p className="mt-6 text-xs text-text-muted">
        Questions?{" "}
        <Link href="/contact" className="text-primary hover:text-accent-cyan">
          Contact the team
        </Link>
      </p>
    </div>
  );
}
