import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  cta?: { label: string; href: string };
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  cta,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="eyebrow mb-3">{eyebrow}</p>
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
