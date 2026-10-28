import { Code2, Layers3, Smartphone } from "lucide-react";
import { profile } from "../../../data/profile";
import { Section } from "../../ui/Section";
import { SectionHeading } from "../../ui/SectionHeading";

const principles = [
  {
    icon: Code2,
    title: "Maintainable by design",
    text: "Clear component boundaries and typed data that keep products easier to extend.",
  },
  {
    icon: Smartphone,
    title: "Responsive from the start",
    text: "Interfaces designed intentionally for real devices, not reduced from desktop.",
  },
  {
    icon: Layers3,
    title: "Full-stack perspective",
    text: "Product thinking across the interface, API, and database layers.",
  },
];

export function About() {
  return (
    <Section id="about" className="bg-paper-50">
      <SectionHeading
        eyebrow="01 / Profile"
        title="Practical engineering, thoughtful execution."
      />
      <div className="grid gap-12 lg:grid-cols-[180px_minmax(0,1fr)]">
        <p className="text-sm font-semibold uppercase tracking-[.16em] text-ink-800/50">
          How I work
        </p>
        <div>
          <p className="max-w-3xl font-display text-3xl leading-[1.25] tracking-[-.025em] text-ink-950 sm:text-4xl">
            {profile.bio}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-ink-800/70">
            My background in Information Technology and full-stack development
            helps me approach products as connected systems—from responsive
            interfaces to backend services and data.
          </p>
          <div className="mt-12 grid gap-8 border-t border-ink-950/10 pt-8 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon size={22} className="text-accent-500" />
                <h3 className="mt-5 font-semibold text-ink-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-800/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
