import { ArrowUp, ArrowUpRight, Download, Mail, Phone } from 'lucide-react';
import { navigation, sectionConfig } from '../../data/config';
import { profile } from '../../data/profile';
import { socialLinks } from '../../data/social';
import { sectionEnabled } from '../../lib/utils';
import { Container } from '../ui/Container';

const linkClass =
  'inline-flex min-h-11 items-center gap-2 text-sm text-earth-100/75 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300 focus-visible:ring-offset-2 focus-visible:ring-offset-earth-900';

export function Footer() {
  const navigationItems = navigation.filter(({ id }) => sectionEnabled(id, sectionConfig));

  return (
    <footer className="border-t border-white/10 bg-earth-900 text-earth-100">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_.9fr_.7fr_.8fr] lg:gap-10">
          <div className="max-w-md sm:col-span-2 lg:col-span-1">
            <a
              href="#main-content"
              className="font-display text-3xl font-semibold tracking-[-.03em] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300"
            >
              {profile.name}<span className="text-accent-500">.</span>
            </a>
            <p className="mt-4 text-sm leading-7 text-earth-100/65">{profile.bio}</p>
            <p className="mt-5 text-[10px] font-bold uppercase tracking-[.18em] text-accent-300">
              {profile.availability}
            </p>
          </div>

          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[.2em] text-earth-100/45">
              Contact
            </h2>
            <div className="mt-4 grid">
              {profile.phones.map((phone) => (
                <a key={phone.href} href={phone.href} className={linkClass} aria-label={phone.label}>
                  <Phone size={16} aria-hidden="true" />
                  {phone.display}
                </a>
              ))}
              {profile.email && (
                <a href={`mailto:${profile.email}`} className={`${linkClass} min-w-0`}>
                  <Mail size={16} className="shrink-0" aria-hidden="true" />
                  <span className="break-all">{profile.email}</span>
                </a>
              )}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-[11px] font-bold uppercase tracking-[.2em] text-earth-100/45">
              Explore
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 sm:grid-cols-1">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[.2em] text-earth-100/45">
              Connect
            </h2>
            <ul className="mt-4 grid">
              {socialLinks
                .filter(({ platform, href }) => platform !== 'email' && href)
                .map((link) => (
                  <li key={link.id}>
                    <a href={link.href} target="_blank" rel="noreferrer" className={linkClass}>
                      {link.label} <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              {profile.resumeUrl && (
                <li>
                  <a href={profile.resumeUrl} download className={linkClass}>
                    Resume <Download size={15} aria-hidden="true" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-earth-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <a href="#main-content" className={linkClass}>
            Back to top <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
