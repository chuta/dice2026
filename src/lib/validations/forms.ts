import { z } from "zod";

const honeypot = z
  .string()
  .optional()
  .refine((value) => !value, { message: "Invalid submission." });

export const contactSubmissionSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  subject: z.string().trim().min(1).max(100),
  message: z.string().trim().min(10).max(5000),
  website: honeypot,
  sourcePath: z.string().trim().max(500).optional(),
});

export const newsletterSubmissionSchema = z.object({
  email: z.string().trim().email().max(254),
  website: honeypot,
  sourcePath: z.string().trim().max(500).optional(),
});

export type ContactSubmissionInput = z.infer<typeof contactSubmissionSchema>;
export type NewsletterSubmissionInput = z.infer<typeof newsletterSubmissionSchema>;
