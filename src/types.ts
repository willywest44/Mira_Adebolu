export type ProjectCategory = 'All' | 'Branding' | 'Social Media' | 'Posters' | 'UI Design' | 'Print Design';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  year: string;
  client: string;
  thumbnail: string;
  heroImage: string;
  galleryImages: string[];
  summary: string;
  challenge: string;
  process: string;
  solution: string;
  impact: string;
  tools: string[];
  deliverables: string[];
  featured?: boolean;
  externalLink?: string;
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  tagline: string;
  description: string;
  deliverables: string[];
  color: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  keyOutputs: string[];
  iconName: string;
}

export interface SkillItem {
  name: string;
  category: 'Software' | 'Core Skill' | 'Specialty';
  icon?: string;
  level: number; // 0-100
  years: string;
  description: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  projectType: string;
}

export interface ClientBrand {
  id: string;
  name: string;
  industry: string;
  logoText: string;
  symbol?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  details: string;
}
