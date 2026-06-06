import { SITE } from "@/lib/constants";

export function getDaysUntilEvent(): number {
  const event = new Date(SITE.dateISO.start);
  const now = new Date();
  return Math.max(0, Math.ceil((event.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
}
