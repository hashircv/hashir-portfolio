import { ArrowUpRight, Code2, KeyRound } from 'lucide-react';
import type { Project } from '../../../types';
import { Badge } from '../../ui/Badge';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="grid gap-7 border-t border-ink-950/15 py-10 first:border-t-0 first:pt-0 lg:grid-cols-[110px_minmax(0,.9fr)_minmax(300px,1.1fr)] lg:gap-10">
      <div className="font-display text-4xl text-ink-950/20">{String(index + 1).padStart(2, '0')}</div>
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[.18em] text-accent-500">{project.featured ? 'Featured project' : 'Project'}</p>
        <h3 className="mt-3 font-display text-4xl leading-tight tracking-[-.03em] text-ink-950">{project.title}</h3>
        <p className="mt-4 max-w-lg text-sm leading-6 text-ink-800/70">{project.description}</p>
        {project.links && project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => {
              const isLive = link.type === 'live';

              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper-100 ${
                    isLive
                      ? 'border-accent-600 bg-accent-600 text-white shadow-soft hover:border-ink-950 hover:bg-ink-950'
                      : 'border-ink-950/15 text-ink-950 hover:border-accent-500 hover:text-accent-600'
                  }`}
                  aria-label={`${link.label} for ${project.title} (opens in a new tab)`}
                >
                  {isLive ? <ArrowUpRight size={16} /> : <Code2 size={16} />}
                  {link.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
      <div className="rounded-2xl border border-ink-950/10 bg-paper-50 p-6 sm:p-7">
        {project.technologies.length > 0 && <div className="flex flex-wrap gap-2">{project.technologies.map((tech) => <Badge key={tech}>{tech}</Badge>)}</div>}
        {project.features.length > 0 && <ul className={`${project.technologies.length ? 'mt-6 border-t border-ink-950/10 pt-6' : ''} grid gap-x-6 gap-y-3 text-sm text-ink-800/75 sm:grid-cols-2`}>{project.features.slice(0, 8).map((feature) => <li key={feature} className="flex items-start gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-500" />{feature}</li>)}</ul>}
        {project.demoCredentials?.map((credentials) => <div key={credentials.label} className="mt-6 border-t border-ink-950/10 pt-5 text-xs"><p className="flex items-center gap-2 font-semibold text-accent-600"><KeyRound size={14} />{credentials.label}</p><dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-ink-800/60"><dt>Email</dt><dd className="min-w-0 break-all font-mono text-ink-950">{credentials.email}</dd><dt>Password</dt><dd className="font-mono text-ink-950">{credentials.password}</dd></dl></div>)}
      </div>
    </article>
  );
}
