import Link from "next/link";
import { cn } from "@/lib/utils";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60";

const variantStyles: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "bg-forest text-white hover:bg-forest-dark focus-visible:ring-forest shadow-sm shadow-forest/20",
  secondary:
    "bg-transparent text-charcoal border border-charcoal/20 hover:border-charcoal/40 hover:bg-charcoal/[0.03] focus-visible:ring-charcoal/40",
  ghost:
    "bg-white/10 text-white border border-white/30 hover:bg-white/20 focus-visible:ring-white",
};

const sizeStyles: Record<NonNullable<CommonProps["size"]>, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
