export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack MERN' | 'React.js' | 'Utility Tool';
  role: string;
  description: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  metrics?: string;
  featured: boolean;
  accentColor: string;
}

export interface ShowcaseSite {
  id: string;
  name: string;
  client: string;
  technology: 'React.js' | 'WordPress' | 'MERN Stack' | 'E-Commerce';
  category: 'Agency' | 'Travel & Hospitality' | 'E-Commerce' | 'Corporate' | 'EdTech';
  description: string;
  liveUrl: string;
  role: string;
  deliverables: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    highlight: string;
    icon: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  type: 'internship' | 'education';
  highlights: string[];
  technologies?: string[];
}
