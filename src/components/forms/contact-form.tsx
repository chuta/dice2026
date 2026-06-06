"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  website?: string;
}

interface ContactFormProps {
  defaultSubject?: string;
  subjects?: string[];
}

export function ContactForm({
  defaultSubject = "General Inquiry",
  subjects = ["General Inquiry", "Sponsorship", "Speaker Application", "Exhibitor", "Media", "Government Delegation"],
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    defaultValues: { subject: defaultSubject },
  });

  const onSubmit = (data: ContactFormData) => {
    if (data.website) return;
    console.log("Form submission:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <CheckCircleIcon className="h-12 w-12 text-success" />
        <h3 className="mt-4 font-headline text-xl font-semibold">Message Received</h3>
        <p className="mt-2 max-w-md text-text-secondary">
          Thank you for reaching out. Our team will respond within 48 hours.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-[10px] border border-white/10 bg-surface-raised px-4 py-3.5 text-text-primary placeholder:text-text-muted focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/20";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-2xl space-y-5">
      <input type="text" {...register("website")} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-text-secondary">Full Name</label>
          <input id="name" className={inputClass} {...register("name", { required: "Name is required" })} />
          {errors.name && (
            <p className="mt-1 flex items-center gap-1 text-xs text-error">
              <ExclamationCircleIcon className="h-4 w-4" />{errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-text-secondary">Email</label>
          <input id="email" type="email" className={inputClass} {...register("email", { required: "Email is required" })} />
          {errors.email && (
            <p className="mt-1 flex items-center gap-1 text-xs text-error">
              <ExclamationCircleIcon className="h-4 w-4" />{errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-xs font-medium uppercase tracking-wider text-text-secondary">Company / Organization</label>
        <input id="company" className={inputClass} {...register("company")} />
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-xs font-medium uppercase tracking-wider text-text-secondary">Subject</label>
        <select id="subject" className={inputClass} {...register("subject", { required: true })}>
          {subjects.map((s) => (
            <option key={s} value={s} className="bg-surface-elevated">{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-text-secondary">Message</label>
        <textarea id="message" rows={5} className={inputClass} {...register("message", { required: "Message is required" })} />
        {errors.message && (
          <p className="mt-1 flex items-center gap-1 text-xs text-error">
            <ExclamationCircleIcon className="h-4 w-4" />{errors.message.message}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" showArrow className="w-full md:w-auto">
        Send Message
      </Button>
    </form>
  );
}
