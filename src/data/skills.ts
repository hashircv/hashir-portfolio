import type { Skill, SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    category: 'Frontend',
    label: 'Interface engineering',
    headline: 'Responsive interfaces with clear interaction patterns.',
    description:
      'Building component-driven experiences with React, Next.js, TypeScript, and utility-first styling.',
  },
  {
    id: 'backend',
    category: 'Backend',
    label: 'Application services',
    headline: 'Backend foundations for practical product workflows.',
    description: 'Developing server-side functionality and APIs with Node.js and Express.js.',
  },
  {
    id: 'databases',
    category: 'Databases',
    label: 'Data layer',
    headline: 'Structured data for dependable applications.',
    description:
      'Working with PostgreSQL and Supabase for relational data and application services.',
  },
  {
    id: 'tools',
    category: 'Tools',
    label: 'Development workflow',
    headline: 'A focused workflow from local development to version control.',
    description:
      'Using Git, Vite, and Redux to support development, delivery, and predictable state.',
  },
];

export const skills: Skill[] = [
  { id: 'react', name: 'React', category: 'Frontend' }, { id: 'next', name: 'Next.js', category: 'Frontend' },
  { id: 'typescript', name: 'TypeScript', category: 'Frontend' }, { id: 'tailwind', name: 'Tailwind CSS', category: 'Frontend' },
  { id: 'node', name: 'Node.js', category: 'Backend' }, { id: 'express', name: 'Express.js', category: 'Backend' },
  { id: 'postgres', name: 'PostgreSQL', category: 'Databases' }, { id: 'supabase', name: 'Supabase', category: 'Databases' },
  { id: 'git', name: 'Git', category: 'Tools' }, { id: 'vite', name: 'Vite', category: 'Tools' }, { id: 'redux', name: 'Redux', category: 'Tools' }
];
