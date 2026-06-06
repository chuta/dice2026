import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

export function GovernmentSection() {
  return (
    <Section id="government" variant="base">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <SectionHeader
          eyebrow="Government & Policy Forum"
          title="Institutional Dialogue on Africa's Digital Economy Governance"
          description="20+ government agencies convene for policy alignment on AI regulation, digital assets, identity infrastructure, and cross-border economic coordination."
        />
        <GlassCard className="border-silver/20">
          <p className="text-lg italic leading-relaxed text-text-secondary">
            &ldquo;The intersection of policy and technology requires convenings built for institutional outcomes — DICE provides that platform for Africa.&rdquo;
          </p>
          <p className="mt-4 text-sm text-silver">— Policy Leader (Announcing Soon)</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/government-forum" showArrow>
              Register Delegation
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Policy Team
            </Button>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}
