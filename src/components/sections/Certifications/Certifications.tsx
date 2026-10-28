import { Award, ExternalLink } from "lucide-react";
import { certifications } from "../../../data/certifications";
import { Card } from "../../ui/Card";
import { Section } from "../../ui/Section";
import { SectionHeading } from "../../ui/SectionHeading";
export function Certifications() {
  if (!certifications.length) return null;
  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="06 / Certifications"
        title="Continuous learning, documented."
      />
      <div className="grid gap-5 lg:ml-[180px] md:grid-cols-2">
        {certifications.map((item) => (
          <Card key={item.id} className="p-6">
            <Award className="text-accent-500" />
            <h3 className="mt-5 text-lg font-semibold text-ink-950">
              {item.name}
            </h3>
            <p className="mt-1 text-sm text-ink-800/65">
              {item.issuer}
              {item.date ? ` · ${item.date}` : ""}
            </p>
            {item.credentialUrl && (
              <a
                href={item.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm text-accent-600"
              >
                View credential <ExternalLink size={15} />
              </a>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
