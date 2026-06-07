"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  ArrowDownTrayIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { SPONSOR_DECK } from "@/lib/downloads";

interface SponsorDeckGateData {
  email: string;
  website?: string;
}

export function SponsorDeckGateForm() {
  const pathname = usePathname();
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<SponsorDeckGateData>();

  const onSubmit = async (data: SponsorDeckGateData) => {
    if (data.website) return;

    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/downloads/sponsor-deck", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          sourcePath: pathname,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setSubmitError(result.error ?? "Unable to continue. Please try again.");
        return;
      }

      setDownloadUrl(result.downloadUrl as string);
    } catch {
      setSubmitError("Unable to continue. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-[10px] border border-white/10 bg-surface-raised px-4 py-3.5 text-text-primary placeholder:text-text-muted focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/20";

  if (downloadUrl) {
    return (
      <div className="flex flex-col items-center py-6 text-center">
        <CheckCircleIcon className="h-12 w-12 text-success" />
        <h3 className="mt-4 font-headline text-xl font-semibold">Your download is ready</h3>
        <p className="mt-2 max-w-md text-sm text-text-secondary">
          Thank you for your interest in partnering with DICE 2026. You&apos;ve been added to our
          programme updates list.
        </p>
        <Button
          href={downloadUrl}
          size="lg"
          className="mt-6"
          showArrow
          download={SPONSOR_DECK.filename}
        >
          <ArrowDownTrayIcon className="h-5 w-5" />
          Download Sponsorship Deck
        </Button>
        <p className="mt-4 text-xs text-text-muted">
          {SPONSOR_DECK.title} · PDF
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <p className="text-sm text-text-secondary">
        Enter your email to receive programme updates and access the DICE 2026 sponsorship deck.
      </p>

      <div>
        <label htmlFor="sponsor-deck-email" className="mb-2 block text-sm font-medium text-text-secondary">
          Email address
        </label>
        <input
          id="sponsor-deck-email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          disabled={isSubmitting}
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
          <ExclamationCircleIcon className="mt-0.5 h-5 w-5 shrink-0" />
          <p>{submitError}</p>
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" showArrow disabled={isSubmitting}>
        {isSubmitting ? "Processing…" : "Subscribe & download deck"}
      </Button>
    </form>
  );
}
