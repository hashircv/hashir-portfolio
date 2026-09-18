import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cn, isExternalUrl } from '../../lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
export function Button({ children, className, variant = 'primary', href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode; variant?: Variant; href: string }) {
  const styles = { primary: 'bg-accent-400 text-ink-950 hover:bg-accent-300', secondary: 'border border-white/15 bg-white/[.04] text-white hover:border-accent-400/50 hover:bg-white/[.07]', ghost: 'text-slate-300 hover:text-white' };
  return <a href={href} className={cn('inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-4 focus-visible:ring-offset-ink-950', styles[variant], className)} {...(isExternalUrl(href) ? { target: '_blank', rel: 'noreferrer' } : {})} {...props}>{children}</a>;
}
