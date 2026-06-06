import { Button } from "@/components/ui/button";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function PageHero({ eyebrow, title, description, cta, secondaryCta }: PageHeroProps) {
  return (
    <section className="hero-atmosphere border-b border-white/[0.06] pb-16 pt-28 md:pb-20 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
          {description && (
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">{description}</p>
          )}
          {(cta || secondaryCta) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {cta && <Button href={cta.href} showArrow>{cta.label}</Button>}
              {secondaryCta && <Button href={secondaryCta.href} variant="secondary">{secondaryCta.label}</Button>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
