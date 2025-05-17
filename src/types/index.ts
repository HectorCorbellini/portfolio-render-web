export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoPath: string;
  detailedDescription: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'languages';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}