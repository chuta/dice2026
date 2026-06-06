import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  eyebrowVariant?: "default" | "gold" | "muted";
  title: string;
  description?: string;
  cta?: { label: string; href: string };
  align?: "left" | "center";
  compact?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  eyebrowVariant = "default",
  title,
  description,
  cta,
  align = "left",
  compact = false,
  className,
}: SectionHeaderProps) {
  const eyebrowClass = {
    default: "eyebrow",
    gold: "eyebrow-gold",
    muted: "eyebrow-muted",
  }[eyebrowVariant];

  return (
    <div
      className={cn(
        "max-w-3xl",
        !compact && "mb-12",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className={cn(eyebrowClass, "mb-3")}>{eyebrow}</p>
      <h2 className="font-headline text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-text-secondary">
          {description}
        </p>
      )}
      {cta && (
        <div className={cn("mt-6", align === "center" && "flex justify-center")}>
          <Button href={cta.href} variant="tertiary" showArrow>
            {cta.label}
          </Button>
        </div>
      )}
    </div>
  );
}
