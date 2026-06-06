import Image from "next/image";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { STATS } from "@/lib/constants";

export function ExhibitionSection() {
  return (
    <Section id="exhibition" variant="deep">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/[0.06] bg-surface-raised">
          <Image
            src="/images/exhibition/civic-floor-plan.jpeg"
            alt="Exhibition space floor plan at The Civic Centre, Victoria Island"
            fill
            className="object-contain object-center p-2"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <p className="absolute bottom-4 left-4 rounded-md bg-surface-deep/80 px-3 py-1.5 font-mono text-xs text-silver backdrop-blur-sm">
            Exhibition Venue
          </p>
        </div>
        <SectionHeader
          compact
          eyebrow="Exhibition"
          title="Enterprise-Scale Innovation Exhibition"
          description={`Showcase your technology to ${STATS[0].value} delegates including government officials, enterprise buyers, and institutional investors across dedicated exhibition zones.`}
          cta={{ label: "Book Exhibition Space", href: "/exhibition" }}
        />
      </div>
    </Section>
  );
}
