export enum ServiceType {
  GAS = 'GAS',
  ELECTRICITY = 'ELECTRICITY',
  WATER = 'WATER',
  TELECOMS = 'TELECOMS'
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  link: string;
}

export interface SEOArticle {
  title: string;
  content: string;
  keywords: string[];
}

export interface Testimonial {
  author: string;
  company: string;
  text: string;
  rating: number;
}
