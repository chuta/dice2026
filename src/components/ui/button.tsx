import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  showArrow?: boolean;
  external?: boolean;
  download?: string;
  disabled?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-br from-primary to-[#0052CC] text-white shadow-lg hover:from-primary-hover hover:to-[#0052CC] hover:shadow-[0_0_40px_rgba(27,110,255,0.2)] active:scale-[0.98]",
  secondary:
    "border border-white/10 bg-transparent text-text-primary hover:border-accent-cyan/50 hover:bg-accent-cyan/[0.06]",
  tertiary:
    "bg-transparent text-primary hover:text-accent-cyan underline-offset-4 hover:underline",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-base",
  lg: "px-9 py-4 text-lg",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  showArrow = false,
  external = false,
  download,
  disabled = false,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-[10px] font-headline font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-surface-deep",
    variants[variant],
    sizes[size],
    disabled && "pointer-events-none opacity-50",
    className
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} download={download}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
