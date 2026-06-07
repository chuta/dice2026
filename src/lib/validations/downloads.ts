import { z } from "zod";

const honeypot = z
  .string()
  .optional()
  .refine((value) => !value, { message: "Invalid submission." });

export const sponsorDeckDownloadSchema = z.object({
  email: z.string().trim().email().max(254),
  website: honeypot,
  sourcePath: z.string().trim().max(500).optional(),
});

export type SponsorDeckDownloadInput = z.infer<typeof sponsorDeckDownloadSchema>;
