"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

interface NewsletterData {
  email: string;
  website?: string;
}

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<NewsletterData>();

  const onSubmit = (data: NewsletterData) => {
    if (data.website) return;
    console.log("Newsletter signup:", data.email);
    setSubmitted(true);
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
        className="flex-1 rounded-[10px] border border-white/10 bg-surface-raised px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/20"
        {...register("email", { required: "Email required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
      />
      <Button type="submit" size="sm">Subscribe</Button>
      {errors.email && <p className="text-xs text-error sm:absolute sm:mt-12">{errors.email.message}</p>}
    </form>
  );
}
