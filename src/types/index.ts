export interface Screenshot {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export interface CaseStudy {
  problem: string;
  solution: string;
  impact: string[];
  features: string[];
  stack: string[];
  screenshots?: Screenshot[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  language: string;
  githubUrl?: string;
  demoUrl?: string;
  private?: boolean;
  featured: boolean;
  category: 'web' | 'automation' | 'other';
  year: number;
  caseStudy?: CaseStudy;
}
