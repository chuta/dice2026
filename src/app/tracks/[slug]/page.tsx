import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTrackBySlug, tracks } from "@/content/site-data";
import { rwaSummit } from "@/content/rwa-summit";
import {
  tokenizedMarketsPillars,
  tokenizedMarketsThesis,
} from "@/content/tokenized-markets";
import { TrackPillarsGrid } from "@/components/cards/track-pillars-grid";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { createMetadata } from "@/lib/seo";
import { CTA } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tracks.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const track = getTrackBySlug(slug);
  if (!track) return {};
  return createMetadata({
    title: track.title,
    description: track.description,
    path: `/tracks/${slug}`,
    keywords: [track.shortTitle, "DICE 2026 track"],
  });
}

export default async function TrackDetailPage({ params }: Props) {
  const { slug } = await params;
  const track = getTrackBySlug(slug);
  if (!track) notFound();

  const Icon = track.icon;
  const isTokenizedMarkets = slug === "tokenized-markets";

  return (
    <>
      <PageHero
        eyebrow="Conference Track"
        title={track.title}
        description={track.description}
        cta={CTA.register}
        secondaryCta={{ label: "View Agenda", href: "/agenda" }}
      />
      <Section variant="base">
        <GlassCard>
          <div className="flex items-center gap-4">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-xl"
              style={{ backgroundColor: `${track.color}20` }}
            >
              <Icon className="h-8 w-8" style={{ color: track.color }} />
            </div>
            <div>
              <p className="font-mono text-sm text-accent-cyan">{track.sessionCount} sessions planned</p>
              <p className="mt-1 text-text-secondary">Full session schedule publishing as speakers are confirmed.</p>
            </div>
          </div>
        </GlassCard>
      </Section>

      {isTokenizedMarkets && (
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
      )}

      {!isTokenizedMarkets && (
        <Section variant="deep" containerClassName="text-center">
          <Link href="/tracks" className="text-sm text-accent-cyan hover:underline">
            ← All conference tracks
          </Link>
        </Section>
      )}
    </>
  );
}
