import { skillGroups, skills } from '../../../data/skills';
import { Section } from '../../ui/Section';
import { SectionHeading } from '../../ui/SectionHeading';
import { SkillGroup } from './SkillGroup';

export function Skills() {
  if (!skills.length) return null;

  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="02 / Capabilities"
        title="Capabilities shaped around the complete product."
        description="From interface architecture to backend services and data, each area supports the same goal: clear, dependable software."
      />

      <div className="border-y border-ink-950/15">
        {skillGroups.map((group, index) => {
          const entries = skills.filter((skill) => skill.category === group.category);

          return entries.length ? (
            <SkillGroup key={group.id} group={group} skills={entries} index={index} />
          ) : null;
        })}
      </div>
    </Section>
  );
}
