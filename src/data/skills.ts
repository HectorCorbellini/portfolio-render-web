import { Skill } from '../types';

export const skills: Skill[] = [
  // Languages
  { name: 'Java', level: 95, category: 'languages' },
  { name: 'TypeScript', level: 85, category: 'languages' },
  { name: 'Python', level: 75, category: 'languages' },
  { name: 'SQL', level: 90, category: 'languages' },

  // Frontend
  { name: 'React', level: 80, category: 'frontend' },
  { name: 'Angular', level: 75, category: 'frontend' },
  { name: 'HTML/CSS', level: 85, category: 'frontend' },
  { name: 'JavaFX', level: 90, category: 'frontend' },

  // Backend
  { name: 'Spring Boot', level: 95, category: 'backend' },
  { name: 'Hibernate', level: 90, category: 'backend' },
  { name: 'Node.js', level: 70, category: 'backend' },
  { name: 'Express', level: 65, category: 'backend' },

  // Database
  { name: 'PostgreSQL', level: 85, category: 'database' },
  { name: 'MongoDB', level: 80, category: 'database' },
  { name: 'MySQL', level: 90, category: 'database' },
  { name: 'Redis', level: 60, category: 'database' },

  // Tools
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'Docker', level: 80, category: 'tools' },
  { name: 'Jenkins', level: 75, category: 'tools' },
  { name: 'JUnit', level: 90, category: 'tools' }
];