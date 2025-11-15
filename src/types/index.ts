export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  color: string;
  gradient: string;
  category: 'web' | 'mobile' | 'design' | 'other';
  year: number;
}

export interface TechStack {
  name: string;
  color: string;
  icon?: string;
}
