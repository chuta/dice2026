"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { formatNgn } from "@/lib/tickets/pricing";

interface TicketConfirmFormData {
  korapayReference: string;
  website?: string;
}

interface TicketConfirmFormProps {
  orderReference: string;
  tierName: string;
  amountNgn: number;
}

export function TicketConfirmForm({ orderReference, tierName, amountNgn }: TicketConfirmFormProps) {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<TicketConfirmFormData>();

  const onSubmit = async (data: TicketConfirmFormData) => {
    if (data.website) return;

    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/tickets/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderReference,
          korapayReference: data.korapayReference.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setSubmitError(result.error ?? "Unable to confirm payment. Please try again.");
        return;
      }

      router.push(`/tickets/success?reference=${encodeURIComponent(orderReference)}`);
    } catch {
      setSubmitError("Unable to confirm payment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-[10px] border border-white/10 bg-surface-raised px-4 py-3.5 text-text-primary placeholder:text-text-muted focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/20";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="rounded-[12px] border border-white/10 bg-surface-raised/60 p-5 text-sm">
        <p className="text-text-muted">Registration reference</p>
        <p className="mt-1 font-mono">{orderReference}</p>
        <p className="mt-3 text-text-muted">Pass</p>
        <p className="mt-1 font-headline text-lg font-semibold">{tierName}</p>
        <p className="mt-3 text-text-muted">Expected amount</p>
        <p className="mt-1 font-mono text-accent-cyan">{formatNgn(amountNgn)}</p>
      </div>

      <div>
        <label htmlFor="korapayReference" className="mb-2 block text-sm font-medium text-text-secondary">
          Korapay payment reference
        </label>
        <input
          id="korapayReference"
          type="text"
          placeholder="From your Korapay receipt or confirmation"
          className={inputClass}
          {...register("korapayReference", {
            required: "Payment reference is required.",
            minLength: { value: 4, message: "Enter a valid payment reference." },
          })}
        />
        {errors.korapayReference && (
          <p className="mt-1.5 text-sm text-error">{errors.korapayReference.message}</p>
        )}
        <p className="mt-2 text-xs text-text-muted">
          This is the reference Korapay assigns after payment — not your DICE registration reference above.
        </p>
      </div>

      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        {...register("website")}
      />

      {submitError && (
        <div className="flex items-start gap-2 rounded-[10px] border border-error/30 bg-error/10 px-4 py-3 text-sm text-error">
          <ExclamationCircleIcon className="mt-0.5 h-5 w-5 shrink-0" />
          <p>{submitError}</p>
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" showArrow disabled={isSubmitting}>
        {isSubmitting ? "Verifying payment…" : "Confirm registration"}
      </Button>

      <div className="flex items-start gap-2 rounded-[10px] border border-white/10 bg-surface-raised/40 px-4 py-3 text-xs text-text-muted">
        <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-ecosystem-green" />
        <p>
          We verify your payment directly with Korapay. Confirmation emails are sent once payment is validated.
        </p>
      </div>
    </form>
  );
}
