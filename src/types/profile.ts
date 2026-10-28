export interface ContactPhone {
  label: string;
  display: string;
  href: string;
}

export interface Profile {
  name: string;
  shortName: string;
  role: string;
  eyebrow: string;
  headline: string;
  bio: string;
  location: string;
  email: string;
  phones: ContactPhone[];
  resumeUrl: string;
  imageUrl: string;
  avatarUrl?: string;
  imageAlt: string;
  availability: string;
}
