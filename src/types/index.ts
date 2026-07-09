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
}
