"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";

interface NewsletterData {
  email: string;
  website?: string;
}

export function NewsletterForm() {
  const pathname = usePathname();
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<NewsletterData>();

  const onSubmit = async (data: NewsletterData) => {
    if (data.website) return;

    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          sourcePath: pathname,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setSubmitError(result.error ?? "Unable to subscribe. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError("Unable to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return <p className="text-sm text-ecosystem-green">You&apos;re subscribed. Programme updates coming soon.</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input type="text" {...register("website")} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
      <input
        id="newsletter-email"
        type="email"
        placeholder="Get programme updates"
        disabled={isSubmitting}
        className="flex-1 rounded-[10px] border border-white/10 bg-surface-raised px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/20"
        {...register("email", { required: "Email required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
      />
      <Button type="submit" size="sm" disabled={isSubmitting}>
        {isSubmitting ? "..." : "Subscribe"}
      </Button>
      {(errors.email || submitError) && (
        <p className="flex items-center gap-1 text-xs text-error sm:col-span-full">
          <ExclamationCircleIcon className="h-3.5 w-3.5" />
          {submitError ?? errors.email?.message}
        </p>
      )}
    </form>
  );
}
