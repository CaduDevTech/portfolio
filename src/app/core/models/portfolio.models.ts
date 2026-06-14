export type ProjectCategory = 'all' | 'Full Stack' | 'Frontend' | 'Backend';

export type SkillLevel = 'Intermediário' | 'Avançado' | 'Básico';

export interface UnavailableMessage {
  title: string;
  descriptionHtml: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescriptionHtml: string;
  media: string[];
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  category: Exclude<ProjectCategory, 'all'>;
  unavailable: UnavailableMessage;
}

export interface Skill {
  name: string;
  level: SkillLevel;
  iconAsset: string;
}

export interface TechnologyGroup {
  category: string;
  description: string;
  skills: Skill[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  image: string;
  url: string;
}
