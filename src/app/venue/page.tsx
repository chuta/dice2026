import { MapPinIcon, ClockIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";
import { CTA, SITE } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Venue & Travel",
  description: "The Civic Centre, Victoria Island, Lagos. Venue details, travel guidance, and accommodation for DICE 2026.",
  path: "/venue",
  keywords: ["Civic Centre Lagos conference", "Victoria Island event venue"],
});

export default function VenuePage() {
  return (
    <>
      <PageHero
        eyebrow="Venue & Travel"
        title={SITE.venue}
        description="Victoria Island, Lagos. Africa's financial capital. World-class convening facilities in the heart of the city's business district."
        cta={CTA.register}
      />
      <Section variant="base">
        <div className="grid gap-6 md:grid-cols-3">
          <GlassCard>
            <MapPinIcon className="h-6 w-6 text-accent-cyan" />
            <h3 className="mt-4 font-headline font-semibold">Address</h3>
            <p className="mt-2 text-sm text-text-secondary">{SITE.venueAddress}</p>
          </GlassCard>
          <GlassCard>
            <ClockIcon className="h-6 w-6 text-accent-cyan" />
            <h3 className="mt-4 font-headline font-semibold">Event Hours</h3>
            <p className="mt-2 text-sm text-text-secondary">{SITE.date}<br />{SITE.time}</p>
          </GlassCard>
          <GlassCard>
            <BuildingOffice2Icon className="h-6 w-6 text-accent-cyan" />
            <h3 className="mt-4 font-headline font-semibold">Getting There</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Murtala Muhammed International Airport (LOS), approximately 45 minutes to Victoria Island. Ride-hailing and hotel shuttles available.
            </p>
          </GlassCard>
        </div>
      </Section>
      <Section variant="deep">
        <h2 className="font-headline text-2xl font-bold">Accommodation</h2>
        <p className="mt-4 max-w-2xl text-text-secondary">
          Victoria Island offers a range of international-standard hotels within minutes of The Civic Centre.
          Preferred hotel partners and delegate rates will be announced closer to the event.
        </p>
        <div className="mt-8">
          <Button href="/contact" variant="secondary">Request Travel Assistance</Button>
        </div>
      </Section>
    </>
  );
}
