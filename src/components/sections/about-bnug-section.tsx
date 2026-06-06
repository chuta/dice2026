import Image from "next/image";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { SITE } from "@/lib/constants";

export function AboutBnugSection() {
  return (
    <Section id="about-bnug" variant="base">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="flex justify-center">
          <div className="rounded-2xl bg-white p-8 md:p-12">
            <Image
              src="/images/logos/bnug.png"
              alt={SITE.organizer}
              width={320}
              height={160}
              className="h-auto w-full max-w-xs"
            />
          </div>
        </div>
        <SectionHeader
          compact
          eyebrow="About BNUG"
          title="Organized by Blockchain Nigeria User Group"
          description="BNUG is Africa's leading blockchain and future-technology community, driving institutional adoption, developer education, and policy engagement across the continent. DICE 2026 represents BNUG's 18th global conference convening, since 2017."
          cta={{ label: "Learn About DICE 2026", href: "/about" }}
        />
      </div>
    </Section>
  );
}
