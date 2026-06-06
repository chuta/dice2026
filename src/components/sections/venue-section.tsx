import { MapPinIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { CTA, SITE } from "@/lib/constants";

export function VenueSection() {
  return (
    <Section id="venue" variant="base">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-midnight-blue to-surface-deep">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <MapPinIcon className="h-12 w-12 text-accent-cyan" />
            <p className="mt-4 font-headline text-xl font-semibold">{SITE.venue}</p>
            <p className="mt-2 text-sm text-text-secondary">Victoria Island, Lagos, Nigeria</p>
          </div>
        </div>
        <SectionHeader
          compact
          eyebrow="Venue"
          title="The Civic Centre, Victoria Island"
          description="A world-class convening space in the heart of Lagos's financial district — accessible, prestigious, and equipped for institutional-scale events."
          cta={{ label: "Plan Your Visit", href: "/venue" }}
        />
      </div>
      <div className="mt-6 flex justify-center lg:hidden">
        <Button href={CTA.register.href} showArrow>{CTA.register.label}</Button>
      </div>
    </Section>
  );
}
