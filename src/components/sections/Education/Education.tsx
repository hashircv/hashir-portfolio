import { GraduationCap } from "lucide-react";
import { education } from "../../../data/education";
import { Card } from "../../ui/Card";
import { Section } from "../../ui/Section";
import { SectionHeading } from "../../ui/SectionHeading";
export function Education() {
  if (!education.length) return null;
  return (
    <Section id="education">
      <SectionHeading
        eyebrow="05 / Education"
        title="The academic foundation."
      />
      <div className="grid gap-5 lg:ml-[180px] md:grid-cols-2">
        {education.map((item) => (
          <Card key={item.id} className="p-6 sm:p-8">
            <GraduationCap className="mb-8 text-accent-500" size={28} />
            <p className="text-sm font-medium text-accent-600">{item.field}</p>
            <h3 className="mt-2 font-display text-3xl text-ink-950">
              {item.degree}
            </h3>
            {item.institution && (
              <p className="mt-3 text-ink-800/75">{item.institution}</p>
            )}
            {(item.startYear || item.endYear || item.location) && (
              <p className="mt-2 text-sm text-ink-800/50">
                {[
                  item.location,
                  [item.startYear, item.endYear].filter(Boolean).join(" — "),
                ]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            )}
            {item.description && (
              <p className="mt-5 text-sm leading-6 text-ink-800/65">
                {item.description}
              </p>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
