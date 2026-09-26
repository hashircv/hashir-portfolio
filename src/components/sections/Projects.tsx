import { ArrowUpRight, Code2, KeyRound, Layers3 } from "lucide-react";
import { projects } from "../../data/projects";
import type { Project } from "../../types/portfolio";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Card className="group flex h-full min-w-0 flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-accent-400/25">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/[.07] bg-[radial-gradient(circle_at_30%_20%,rgba(94,234,212,.16),transparent_36%),linear-gradient(135deg,#102033,#091321)]">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="size-full object-cover"
          />
        ) : (
          <div className="flex size-full items-end justify-between p-6">
            <Layers3 className="text-accent-400/80" size={36} />
            <span className="font-mono text-5xl font-bold text-white/[.07]">
              0{index + 1}
            </span>
          </div>
        )}
        <span className="absolute left-5 top-5 rounded-full bg-ink-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-300 backdrop-blur">
          {project.featured ? "Featured build" : "Project"}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          {project.description}
        </p>
        {project.technologies.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        )}
        {project.features.length > 0 && (
          <ul className="mt-6 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
            {project.features.slice(0, 6).map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-400" />
                {feature}
              </li>
            ))}
          </ul>
        )}
        {project.demoCredentials?.map((credentials) => (
          <div
            key={credentials.label}
            className="mt-6 rounded-2xl border border-white/[.08] bg-ink-950/50 p-4 text-xs"
          >
            <p className="flex items-center gap-2 font-semibold text-accent-300">
              <KeyRound size={14} />
              {credentials.label}
            </p>
            <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-slate-400">
              <dt>Email</dt>
              <dd className="min-w-0 break-all font-mono text-slate-200">
                {credentials.email}
              </dd>
              <dt>Password</dt>
              <dd className="font-mono text-slate-200">
                {credentials.password}
              </dd>
            </dl>
          </div>
        ))}
        {project.links && project.links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-x-5 gap-y-1 pt-7">
            {project.links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex min-h-11 items-center gap-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 ${link.type === "live" ? "text-accent-300 hover:text-accent-400" : "text-slate-300 hover:text-white"}`}
              >
                {link.type === "live" ? (
                  <ArrowUpRight size={17} />
                ) : (
                  <Code2 size={17} />
                )}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="04 / Selected work"
        title="Projects made for real-world use."
        description="Full-stack products shaped around clear interfaces, reusable foundations, and purposeful functionality."
      />
      {projects.length ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      ) : (
        <Card className="p-8 text-center text-slate-400">
          New projects are being prepared.
        </Card>
      )}
    </Section>
  );
}
