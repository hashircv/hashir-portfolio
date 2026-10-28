export type ProjectLinkType = 'repository' | 'live';

export interface ProjectLink {
  id: string;
  label: string;
  url: string;
  type: ProjectLinkType;
}

export interface DemoCredentials {
  label: string;
  email: string;
  password: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image?: string;
  links?: ProjectLink[];
  demoCredentials?: DemoCredentials[];
  featured?: boolean;
}
