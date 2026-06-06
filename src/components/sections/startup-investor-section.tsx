import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ECOSYSTEM_STATS } from "@/lib/constants";

export function StartupInvestorSection() {
  return (
    <Section id="startup-investor" variant="deep">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <SectionHeader
          compact
          eyebrow="Startup & Investor Ecosystem"
          title="Where Capital Meets Africa's Most Promising Builders"
          description={`${ECOSYSTEM_STATS.startups} startups and ${ECOSYSTEM_STATS.investors} qualified investors in a curated environment designed for institutional deal flow — not demo-day volume.`}
        />
        <GlassCard>
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: ECOSYSTEM_STATS.startups, label: "Startups" },
              { value: ECOSYSTEM_STATS.investors, label: "Investors" },
              { value: ECOSYSTEM_STATS.curatedMeetings, label: "Curated Meetings" },
              { value: "2 Days", label: "Deal Flow Window" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-2xl font-medium text-ecosystem-green">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-silver">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/startup-pavilion" showArrow>
              Apply for Startup Pavilion
            </Button>
            <Button href="/investor-forum" variant="secondary">
              Request Investor Access
            </Button>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}
