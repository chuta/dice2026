import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

export function ExhibitionSection() {
  return (
    <Section id="exhibition" variant="deep">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-midnight to-surface-raised">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-3 p-8">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="h-16 rounded-lg border border-white/5 bg-white/[0.03]" />
              ))}
            </div>
          </div>
          <p className="absolute bottom-4 left-4 font-mono text-xs text-silver">Floor plan — coming soon</p>
        </div>
        <SectionHeader
          eyebrow="Exhibition"
          title="Enterprise-Scale Innovation Exhibition"
          description="Showcase your technology to 5,000+ delegates including government officials, enterprise buyers, and institutional investors across dedicated exhibition zones."
          cta={{ label: "Book Exhibition Space", href: "/exhibition" }}
        />
      </div>
    </Section>
  );
}
