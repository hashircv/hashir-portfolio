export type SkillCategory = 'Frontend' | 'Backend' | 'Databases' | 'Tools';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
}

export interface SkillGroup {
  id: string;
  category: SkillCategory;
  label: string;
  headline: string;
  description: string;
}
