import { z } from "zod";
import { ticketTiers } from "@/content/site-data";

const tierIds = ticketTiers.map((tier) => tier.id) as [string, ...string[]];

const honeypot = z
  .string()
  .optional()
  .refine((value) => !value, { message: "Invalid submission." });

export const ticketCheckoutSchema = z.object({
  tierId: z.enum(tierIds),
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  website: honeypot,
});

export type TicketCheckoutInput = z.infer<typeof ticketCheckoutSchema>;

export const ticketConfirmSchema = z.object({
  orderReference: z.string().trim().min(8).max(80),
  korapayReference: z.string().trim().min(4).max(80),
  website: honeypot,
});

export type TicketConfirmInput = z.infer<typeof ticketConfirmSchema>;

export const ticketRelaySchema = z.object({
  korapayReference: z.string().trim().min(4).max(80),
  amount: z.number().int().positive(),
  status: z.enum(["success", "failed"]),
  customerEmail: z.string().trim().email().max(254).optional(),
  paymentMethod: z.string().trim().max(50).optional(),
  fee: z.number().optional(),
});

export type TicketRelayInput = z.infer<typeof ticketRelaySchema>;
