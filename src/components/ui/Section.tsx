import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp } from '../../lib/motion';
import { Container } from './Container';

export function Section({ id, children, className = '' }: { id: string; children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .1 }}><Container>{children}</Container></motion.section>;
}
