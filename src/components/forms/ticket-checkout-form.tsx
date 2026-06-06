"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import {
  EARLY_BIRD_DISCOUNT_RATE,
  formatNgn,
  getEarlyBirdPrice,
} from "@/lib/tickets/pricing";
import type { TicketTier } from "@/types/content";

interface TicketCheckoutFormData {
  name: string;
  email: string;
  website?: string;
}

interface TicketCheckoutFormProps {
  tier: TicketTier;
}

export function TicketCheckoutForm({ tier }: TicketCheckoutFormProps) {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<TicketCheckoutFormData>();

  const earlyBirdPrice = getEarlyBirdPrice(tier.fullPriceNgn);
  const discountPercent = Math.round(EARLY_BIRD_DISCOUNT_RATE * 100);

  const onSubmit = async (data: TicketCheckoutFormData) => {
    if (data.website) return;

    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/tickets/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tierId: tier.id,
          name: data.name,
          email: data.email,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setSubmitError(result.error ?? "Unable to start checkout. Please try again.");
        return;
      }

      if (result.instructionsUrl) {
        window.location.href = result.instructionsUrl as string;
        return;
      }

      setSubmitError("Unable to continue to payment instructions. Please try again.");
    } catch {
      setSubmitError("Unable to start checkout. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-[10px] border border-white/10 bg-surface-raised px-4 py-3.5 text-text-primary placeholder:text-text-muted focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/20";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="rounded-[12px] border border-white/10 bg-surface-raised/60 p-5">
        <p className="text-sm text-text-muted">Selected pass</p>
        <p className="mt-1 font-headline text-xl font-semibold">{tier.name}</p>
        <div className="mt-3 flex items-baseline gap-3">
          <span className="font-mono text-sm text-text-muted line-through">
            {formatNgn(tier.fullPriceNgn)}
          </span>
          <span className="font-mono text-2xl font-medium text-accent-cyan">
            {formatNgn(earlyBirdPrice)}
          </span>
        </div>
        <p className="mt-1 text-xs text-ecosystem-green">Early bird — {discountPercent}% off</p>
      </div>

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-secondary">
          Full name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="John Doe"
          className={inputClass}
          {...register("name", { required: "Name is required." })}
        />
        {errors.name && (
          <p className="mt-1.5 text-sm text-error">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-secondary">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="email@example.com"
          className={inputClass}
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address.",
            },
          })}
        />
        {errors.email && (
          <p className="mt-1.5 text-sm text-error">{errors.email.message}</p>
        )}
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
          <ExclamationCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0" />
          <p>{submitError}</p>
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" showArrow disabled={isSubmitting}>
        {isSubmitting ? "Preparing payment…" : "Continue to payment"}
      </Button>

      <p className="text-center text-xs text-text-muted">
        You will receive step-by-step payment instructions, then complete checkout on Korapay.
      </p>
    </form>
  );
}
