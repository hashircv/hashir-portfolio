export interface Education {
  id: string;
  degree: string;
  field: string;
  institution?: string;
  location?: string;
  startYear?: string;
  endYear?: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}
