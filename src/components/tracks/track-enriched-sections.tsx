import Image from "next/image";
import { TrackPillarsGrid } from "@/components/cards/track-pillars-grid";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import {
  aiEmploymentResiliencePillars,
  aiEmploymentResilienceThesis,
} from "@/content/ai-employment-resilience";
import { rwaSummit } from "@/content/rwa-summit";
import {
  tokenizedMarketsPillars,
  tokenizedMarketsThesis,
} from "@/content/tokenized-markets";

export function TokenizedMarketsSections() {
  return (
    <>
      <Section variant="deep">
        <SectionHeader
          eyebrow="Track Thesis"
          title={tokenizedMarketsThesis.headline}
          description={tokenizedMarketsThesis.body}
          className="mb-10"
        />
        <GlassCard>
          <p className="text-sm leading-relaxed text-text-secondary">{tokenizedMarketsThesis.alignment}</p>
        </GlassCard>
      </Section>

      <Section variant="base">
        <SectionHeader
          eyebrow="Programme Structure"
          title="Four Pillars of Digital Capital Formation"
          description="Programming organised across the asset, institutional, and infrastructure layers of Africa's tokenized economy."
          className="mb-10"
        />
        <TrackPillarsGrid pillars={tokenizedMarketsPillars} />
      </Section>

      <Section variant="deep">
        <GlassCard className="border-warm-gold/20">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="eyebrow-gold">Dedicated Sub-Forum</p>
              <h2 className="mt-2 font-headline text-2xl font-bold">{rwaSummit.title}</h2>
              <p className="mt-1 text-sm text-warm-gold">Powered by {rwaSummit.poweredBy}</p>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">{rwaSummit.description}</p>
              <div className="mt-6">
                <Button href={rwaSummit.path} showArrow>
                  Explore the Summit
                </Button>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[200px] rounded-2xl bg-white p-6 lg:mx-0">
              <Image
                src={rwaSummit.poweredByLogo}
                alt={rwaSummit.poweredBy}
                width={180}
                height={72}
                className="h-auto w-full"
              />
            </div>
          </div>
        </GlassCard>
      </Section>
    </>
  );
}

export function AiEmploymentResilienceSections() {
  return (
    <>
      <Section variant="deep">
        <SectionHeader
          eyebrow="Track Thesis"
          title={aiEmploymentResilienceThesis.headline}
          description={aiEmploymentResilienceThesis.body}
          className="mb-10"
        />
        <GlassCard>
          <p className="text-sm leading-relaxed text-text-secondary">{aiEmploymentResilienceThesis.imperative}</p>
          <p className="mt-4 text-sm leading-relaxed text-text-secondary">{aiEmploymentResilienceThesis.alignment}</p>
        </GlassCard>
      </Section>

      <Section variant="base">
        <SectionHeader
          eyebrow="Programme Structure"
          title="Pathways to an Inclusive Autonomous Economy"
          description="Sessions explore how Africa can move from technology consumption to economic agency — across workforce, infrastructure, policy, capital, and participation."
          className="mb-10"
        />
        <TrackPillarsGrid pillars={aiEmploymentResiliencePillars} />
      </Section>

      <Section variant="deep">
        <GlassCard>
          <p className="eyebrow-muted">Related Programme</p>
          <h3 className="mt-2 font-headline text-lg font-semibold">Future of Work in Autonomous Economies</h3>
          <p className="mt-2 text-sm text-text-secondary">
            This track addresses national and institutional strategy. The Future of Work track focuses on talent,
            skills, and enterprise-level human-AI collaboration — together forming DICE&apos;s employment and
            resilience agenda.
          </p>
        </GlassCard>
      </Section>
    </>
  );
}
