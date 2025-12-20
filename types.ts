export interface EventDetails {
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  description: string;
}

export interface Accommodation {
  name: string;
  address: string;
  phone: string;
  website: string;
  groupCode?: string;
  note?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export enum SectionId {
  HOME = 'home',
  RSVP = 'rsvp',
  EVENTS = 'events',
  TRAVEL = 'travel',
  REGISTRY = 'registry',
  FAQ = 'faq',
}