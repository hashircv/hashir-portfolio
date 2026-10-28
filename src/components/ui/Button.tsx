import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn, isExternalUrl } from "../../lib/utils";

type Variant = "primary" | "secondary" | "ghost";
export function Button({
  children,
  className,
  variant = "primary",
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: Variant;
  href: string;
}) {
  const styles = {
    primary: "bg-ink-950 text-white hover:bg-accent-600",
    secondary:
      "border border-ink-950/20 bg-transparent text-ink-950 hover:border-ink-950 hover:bg-white/60",
    ghost: "text-ink-800 hover:text-accent-600",
  };
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-4 focus-visible:ring-offset-paper-100",
        styles[variant],
        className,
      )}
      {...(isExternalUrl(href) ? { target: "_blank", rel: "noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
