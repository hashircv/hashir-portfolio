export type SocialPlatform = 'github' | 'linkedin' | 'email';

export interface SocialLink {
  id: string;
  platform: SocialPlatform;
  label: string;
  href: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface SectionConfig {
  about: boolean;
  skills: boolean;
  experience: boolean;
  projects: boolean;
  education: boolean;
  certifications: boolean;
  contact: boolean;
}
