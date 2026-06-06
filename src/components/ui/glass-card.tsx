import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article";
}

export function GlassCard({
  children,
  className,
  hover = true,
  as: Component = "div",
}: GlassCardProps) {
  return (
    <Component
      className={cn(
        "glass-card relative overflow-hidden p-6 md:p-8",
        hover && "glass-card-hover",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {children}
    </Component>
  );
}
