import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { socialLinks } from '../../data/social';

const icons = { github: FaGithub, linkedin: FaLinkedinIn, email: Mail };
export function SocialLinks({ showLabels = false }: { showLabels?: boolean }) {
  if (!socialLinks.length) return null;
  return <div className="flex flex-wrap gap-3" aria-label="Social links">{socialLinks.filter(({ href }) => href).map((link) => { const Icon = icons[link.platform]; return <a key={link.id} href={link.href} target={link.platform === 'email' ? undefined : '_blank'} rel={link.platform === 'email' ? undefined : 'noreferrer'} aria-label={link.label} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3.5 text-sm text-slate-300 transition hover:border-accent-400/40 hover:text-accent-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"><Icon size={17} aria-hidden="true" />{showLabels && link.label}</a>; })}</div>;
}
