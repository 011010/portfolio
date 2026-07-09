export interface CaseStudy {
  problem: string;
  solution: string;
  impact: string[];
  features: string[];
  stack: string[];
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
