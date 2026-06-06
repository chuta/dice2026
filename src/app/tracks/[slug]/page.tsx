import { notFound } from "next/navigation";
import { getTrackBySlug, tracks } from "@/content/site-data";
import { PageHero } from "@/components/layout/page-hero";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";

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

  return (
    <>
      <PageHero
        eyebrow="Conference Track"
        title={track.title}
        description={track.description}
        cta={{ label: "Register Now", href: "/tickets" }}
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
    </>
  );
}
