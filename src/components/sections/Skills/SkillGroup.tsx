import type { Skill, SkillGroup as SkillGroupData } from '../../../types';

interface SkillGroupProps {
  group: SkillGroupData;
  skills: Skill[];
  index: number;
}

export function SkillGroup({ group, skills, index }: SkillGroupProps) {
  return (
    <article className="group grid gap-5 border-t border-ink-950/15 py-9 first:border-t-0 first:pt-0 md:grid-cols-[5rem_minmax(0,1fr)] md:gap-8 md:py-12">
      <span
        className="font-display text-5xl leading-none text-ink-950/15 transition-colors duration-300 group-hover:text-accent-500/60 md:text-6xl"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,0.55fr)] lg:gap-14">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-500">
            {group.label}
          </p>
          <h3 className="mt-4 max-w-xl font-display text-2xl leading-tight text-ink-950 sm:text-3xl">
            {group.headline}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-800/70 sm:text-base">
            {group.description}
          </p>
        </div>

        <div className="lg:border-l lg:border-ink-950/10 lg:pl-8">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-ink-800/45">
            Core technologies
          </p>
          <ul className="flex flex-wrap gap-2" aria-label={`${group.category} technologies`}>
            {skills.map((skill) => (
              <li
                key={skill.id}
                className="rounded-full border border-earth-900 bg-earth-900 px-3.5 py-2 text-xs font-semibold text-earth-100 shadow-sm transition-colors duration-200 group-hover:bg-earth-800"
              >
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
