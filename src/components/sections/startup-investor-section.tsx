import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

export function StartupInvestorSection() {
  return (
    <Section id="startup-investor" variant="deep">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <SectionHeader
          eyebrow="Startup & Investor Ecosystem"
          title="Where Capital Meets Africa's Most Promising Builders"
          description="100+ startups and 50+ qualified investors in a curated environment designed for institutional deal flow — not demo-day volume."
        />
        <GlassCard>
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "100+", label: "Startups" },
              { value: "50+", label: "Investors" },
              { value: "200+", label: "Meetings" },
              { value: "$50M+", label: "Pipeline Target" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-2xl font-medium text-ecosystem-green">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-silver">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/startup-pavilion" size="sm" showArrow>
              Apply for Startup Pavilion
            </Button>
            <Button href="/investor-forum" variant="secondary" size="sm">
              Request Investor Access
            </Button>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}
