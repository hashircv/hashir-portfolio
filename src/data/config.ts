import type { NavItem, SectionConfig } from '../types/portfolio';

export const sectionConfig: SectionConfig = { about: true, skills: true, experience: true, projects: true, education: true, certifications: false, contact: true };
export const navigation: NavItem[] = [
  { id: 'about', label: 'About' }, { id: 'skills', label: 'Skills' }, { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' }, { id: 'education', label: 'Education' }, { id: 'certifications', label: 'Certifications' }, { id: 'contact', label: 'Contact' }
];
