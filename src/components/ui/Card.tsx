import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) { return <div className={cn('rounded-3xl border border-white/[.09] bg-white/[.035] shadow-glow', className)} {...props} />; }
