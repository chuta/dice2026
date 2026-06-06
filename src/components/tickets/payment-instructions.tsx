"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { formatNgn } from "@/lib/tickets/pricing";

interface PaymentInstructionsProps {
  orderReference: string;
  tierName: string;
  customerName: string;
  customerEmail: string;
  amountNgn: number;
  paymentLink: string;
  fixedAmountLink: boolean;
}

export function PaymentInstructions({
  orderReference,
  tierName,
  customerName,
  customerEmail,
  amountNgn,
  paymentLink,
  fixedAmountLink,
}: PaymentInstructionsProps) {
  const [copied, setCopied] = useState(false);
  const amountLabel = formatNgn(amountNgn);
  const amountDigits = String(amountNgn);

  const copyAmount = async () => {
    try {
      await navigator.clipboard.writeText(amountDigits);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-[12px] border border-accent-cyan/20 bg-accent-cyan/5 p-5">
        <p className="text-sm text-text-muted">Registration reference</p>
        <p className="mt-1 font-mono text-sm text-text-primary">{orderReference}</p>
        <p className="mt-4 text-sm text-text-muted">Pass</p>
        <p className="mt-1 font-headline text-xl font-semibold">{tierName}</p>
        <p className="mt-4 text-sm text-text-muted">Amount to pay</p>
        <div className="mt-1 flex flex-wrap items-center gap-3">
          <p className="font-mono text-3xl font-medium text-accent-cyan">{amountLabel}</p>
          {!fixedAmountLink && (
            <button
              type="button"
              onClick={copyAmount}
              className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-3 py-1.5 text-xs font-medium text-text-secondary transition hover:border-accent-cyan/40 hover:text-accent-cyan"
            >
              {copied ? (
                <>
                  <ClipboardDocumentCheckIcon className="h-4 w-4" />
                  Copied
                </>
              ) : (
                <>
                  <ClipboardDocumentIcon className="h-4 w-4" />
                  Copy amount
                </>
              )}
            </button>
          )}
        </div>
      </div>

      <ol className="space-y-4 text-sm text-text-secondary">
        <li className="flex gap-3">
          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
            1
          </span>
          <span>
            Open Korapay and pay using <strong className="text-text-primary">{customerName}</strong> and{" "}
            <strong className="text-text-primary">{customerEmail}</strong>.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
            2
          </span>
          <span>
            {fixedAmountLink ? (
              <>
                The early bird amount (<strong className="font-mono text-accent-cyan">{amountLabel}</strong>) is
                pre-filled for this pass on Korapay.
              </>
            ) : (
              <>
                Enter <strong className="font-mono text-accent-cyan">{amountLabel}</strong> exactly in the amount
                field. Do not round up or down.
              </>
            )}
          </span>
        </li>
        <li className="flex gap-3">
          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
            3
          </span>
          <span>Complete payment via card, bank transfer, or your preferred method.</span>
        </li>
        <li className="flex gap-3">
          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
            4
          </span>
          <span>
            After payment, return here and confirm using your Korapay payment reference from the receipt or
            confirmation screen.
          </span>
        </li>
      </ol>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href={paymentLink} external size="lg" className="flex-1" showArrow>
          Open Korapay payment page
        </Button>
        <Button
          href={`/tickets/confirm?order=${encodeURIComponent(orderReference)}`}
          variant="secondary"
          size="lg"
          className="flex-1"
        >
          I&apos;ve paid — confirm registration
        </Button>
      </div>

      <p className="text-center text-xs text-text-muted">
        Payment instructions were also sent to <span className="text-text-secondary">{customerEmail}</span>.
        Questions?{" "}
        <Link href="/contact" className="text-primary hover:text-accent-cyan">
          Contact support
        </Link>
      </p>
    </div>
  );
}
