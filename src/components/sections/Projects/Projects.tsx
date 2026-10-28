import { projects } from '../../../data/projects';
import { Section } from '../../ui/Section';
import { SectionHeading } from '../../ui/SectionHeading';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading eyebrow="04 / Selected work" title="Products built for real use." description="A selection of full-stack and frontend projects spanning commerce, customer relationship management, and property management." />
      {projects.length ? <div className="lg:ml-[180px]">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div> : <p className="text-ink-800/60">New projects are being prepared.</p>}
    </Section>
  );
}
