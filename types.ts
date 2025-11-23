export type Language = 'vn' | 'en';

export interface Tour {
  id: string;
  title: string;
  image: string;
  price: string;
  duration: string;
  rating: number;
  location: string;
  description: string;
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  count: number;
  category: 'asia' | 'europe' | 'americas' | 'other';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum SectionId {
  HERO = 'hero',
  FEATURED = 'featured',
  DESTINATIONS = 'destinations',
  AI_PLANNER = 'ai-planner',
  TESTIMONIALS = 'testimonials',
  ABOUT = 'about',
  CONTACT = 'contact',
}
