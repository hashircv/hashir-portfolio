import { experience } from "../../../data/experience";
import { Badge } from "../../ui/Badge";
import { Section } from "../../ui/Section";
import { SectionHeading } from "../../ui/SectionHeading";

export function Experience() {
  if (!experience.length) return null;
  return (
    <Section id="experience" className="bg-paper-50">
      <SectionHeading
        eyebrow="03 / Experience"
        title="Professional experience."
        description="Hands-on full-stack development across modern web technologies."
      />
      <div className="lg:ml-[180px]">
        {experience.map((item) => (
          <article
            key={item.id}
            className="grid gap-6 border-t border-ink-950/10 py-8 first:border-t-0 first:pt-0 md:grid-cols-[190px_minmax(0,1fr)]"
          >
            <div>
              <p className="text-sm font-semibold text-accent-500">
                {item.duration}
              </p>
              <p className="mt-2 text-sm text-ink-800/60">{item.company}</p>
            </div>
            <div>
              <h3 className="font-display text-3xl text-ink-950">
                {item.role}
              </h3>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[.18em] text-ink-800/40">
                Technology stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((technology) => (
                  <Badge key={technology}>{technology}</Badge>
                ))}
              </div>
              {item.responsibilities.length > 0 && (
                <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-6 text-ink-800/70">
                  {item.responsibilities.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
