import Image from "next/image";
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
        <div className="relative aspect-[21/9] min-h-[240px] w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-surface-raised sm:min-h-[320px] lg:min-h-[400px]">
          <Image
            src="/images/exhibition/Civic_Centre_at_night,_Lagos_Nigeria.jpeg"
            alt="The Civic Centre at night, Victoria Island, Lagos, Nigeria"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-deep/95 via-surface-deep/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="font-headline text-xl font-bold text-text-primary md:text-2xl">
              {SITE.venue}
            </p>
            <p className="mt-2 max-w-2xl text-sm text-text-secondary md:text-base">
              A landmark waterfront venue on Ozumba Mbadiwe Avenue — purpose-built for
              institutional conferences, exhibitions, and global convenings in the heart of
              Victoria Island.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
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
