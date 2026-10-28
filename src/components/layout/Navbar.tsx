import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigation, sectionConfig } from '../../data/config';
import { profile } from '../../data/profile';
import { sectionEnabled } from '../../lib/utils';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { Container } from '../ui/Container';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const items = useMemo(() => navigation.filter(({ id }) => sectionEnabled(id, sectionConfig)), []);
  const active = useScrollSpy(items.map(({ id }) => id));
  useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); }; document.addEventListener('keydown', close); return () => document.removeEventListener('keydown', close); }, []);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-950/10 bg-paper-100/90 backdrop-blur-xl"><Container className="flex h-18 items-center justify-between"><a href="#main-content" className="font-display text-xl font-semibold tracking-[-.02em] text-ink-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500">{profile.shortName}<span className="text-accent-500">.</span></a><nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">{items.map((item) => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined} className={`rounded-full px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 ${active === item.id ? 'bg-ink-950 text-white' : 'text-ink-800/70 hover:text-ink-950'}`}>{item.label}</a>)}</nav><button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} className="grid size-11 place-items-center rounded-full border border-ink-950/15 text-ink-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 lg:hidden">{open ? <X size={20} /> : <Menu size={20} />}</button></Container><AnimatePresence>{open && <motion.nav id="mobile-menu" aria-label="Mobile navigation" initial={reduce ? undefined : { opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={reduce ? undefined : { opacity: 0, height: 0 }} className="overflow-hidden border-t border-ink-950/10 bg-paper-50 lg:hidden"><Container className="grid gap-1 py-4">{items.map((item) => <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-base text-ink-800 hover:bg-paper-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500">{item.label}</a>)}</Container></motion.nav>}</AnimatePresence></header>;
}
