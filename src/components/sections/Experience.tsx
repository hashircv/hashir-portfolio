import { BriefcaseBusiness } from "lucide-react";
import { experience } from "../../data/experience";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
export function Experience() {
  if (!experience.length) return null;
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="03 / Experience"
        title="Where I’ve put my skills to work."
      />
      <div className="relative space-y-5 before:absolute before:bottom-8 before:left-[1.35rem] before:top-8 before:w-px before:bg-white/10">
        {experience.map((item) => (
          <Card key={item.id} className="relative ml-0 p-6 sm:ml-16 sm:p-8">
            <div className="absolute -left-[4.65rem] top-7 hidden size-11 place-items-center rounded-full border border-accent-400/30 bg-ink-900 text-accent-300 sm:grid">
              <BriefcaseBusiness size={18} />
            </div>
            <div className="flex flex-col justify-between gap-3 sm:flex-row">
              <div>
                <p className="text-sm font-medium text-accent-300">
                  {item.company}
                </p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">
                  {item.role}
                </h3>
              </div>
              <p className="text-sm text-slate-400">{item.duration}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.technologies.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </div>
            {item.responsibilities.length > 0 && (
              <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-400">
                {item.responsibilities.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
