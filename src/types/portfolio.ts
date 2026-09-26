export interface Profile {
  name: string;
  shortName: string;
  role: string;
  eyebrow: string;
  headline: string;
  bio: string;
  location: string;
  email: string;
  resumeUrl: string;
  imageUrl: string;
  imageAlt: string;
  availability: string;
}

export type SkillCategory = 'Frontend' | 'Backend' | 'Databases' | 'Tools';
export interface Skill { id: string; name: string; category: SkillCategory; }
export type ProjectLinkType = 'repository' | 'live';
export interface ProjectLink { id: string; label: string; url: string; type: ProjectLinkType; }
export interface DemoCredentials { label: string; email: string; password: string; }
export interface Project { id: string; title: string; description: string; technologies: string[]; features: string[]; image?: string; links?: ProjectLink[]; demoCredentials?: DemoCredentials[]; featured?: boolean; }
export interface Experience { id: string; company: string; role: string; duration: string; technologies: string[]; responsibilities: string[]; }
export interface Education { id: string; degree: string; field: string; institution?: string; location?: string; startYear?: string; endYear?: string; description?: string; }
export interface Certification { id: string; name: string; issuer: string; date?: string; credentialUrl?: string; }
export type SocialPlatform = 'github' | 'linkedin' | 'email';
export interface SocialLink { id: string; platform: SocialPlatform; label: string; href: string; }
export interface NavItem { id: string; label: string; }
export interface SectionConfig { about: boolean; skills: boolean; experience: boolean; projects: boolean; education: boolean; certifications: boolean; contact: boolean; }
