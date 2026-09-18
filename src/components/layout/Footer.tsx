import { ArrowUp } from 'lucide-react';
import { profile } from '../../data/profile';
import { Container } from '../ui/Container';
export function Footer() { return <footer className="border-t border-white/[.07] py-8"><Container className="flex flex-col items-start justify-between gap-5 text-sm text-slate-500 sm:flex-row sm:items-center"><p>© {new Date().getFullYear()} {profile.name}. Built with care.</p><a href="#main-content" className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400">Back to top <ArrowUp size={16} /></a></Container></footer>; }
