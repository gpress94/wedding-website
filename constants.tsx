import React from 'react';
import { SectionId, NavItem, EventDetails, Accommodation, FAQItem } from './types';
import IMAGES from './images';

export const WEDDING_DATE = "October 10, 2026";
export const COUPLE_NAMES = "Nicolle & Greg";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'RSVP', href: '/rsvp' },
  { label: 'Events', href: '/events' },
  { label: 'Travel', href: '/travel' },
  { label: 'Registry', href: '/registry' },
  { label: 'FAQ', href: '/faq' },
];

export const EVENTS: EventDetails[] = [
  {
    title: "Welcome Drinks",
    date: "Friday, October 9, 2026",
    time: "7:00 PM - 9:00 PM",
    location: "TBD",
    address: "Greenwich, CT",
    description: "Kick off the weekend with cocktails and light bites."
  },
  {
    title: "The Ceremony",
    date: "Saturday, October 10, 2026",
    time: "4:00 PM",
    location: "The Foundation House",
    address: "124 Old Mill Road, Greenwich, CT 06831",
    description: "Join us for our vows. Please arrive by 3:30 PM."
  },
  {
    title: "Reception",
    date: "Saturday, October 10, 2026",
    time: "5:30 PM - 11:00 PM",
    location: "The Foundation House",
    address: "124 Old Mill Road, Greenwich, CT 06831",
    description: "Dinner, dancing, and celebration immediately following the ceremony."
  }
];

export const ACCOMMODATIONS: Accommodation[] = [
  {
    name: "Delamar Greenwich Harbor",
    address: "500 Steamboat Rd, Greenwich, CT 06830",
    phone: "(203) 661-9800",
    website: "#",
    groupCode: "NG2026",
    note: "Luxury waterfront accommodations. Shuttle pick-up location."
  },
  {
    name: "Hyatt Regency Greenwich",
    address: "1800 E Putnam Ave, Old Greenwich, CT 06870",
    phone: "(203) 637-1234",
    website: "#",
    groupCode: "NICGREG",
    note: "Convenient location with shuttle service."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "When is the RSVP deadline?",
    answer: "Please RSVP by September 1, 2026 so we can have an accurate headcount."
  },
  {
    question: "What is the dress code?",
    answer: "We'd love to see you in Black Tie Optional. Tuxes and gowns are welcome, as are suits and cocktail dresses."
  },
  {
    question: "Are kids welcome?",
    answer: "We love your little ones, but this will be an adults-only celebration."
  },
  {
    question: "Is there parking?",
    answer: "Yes, valet parking is complimentary at the venue."
  }
];

export const STORY_TEXT = `
  We met in the most unexpected way—reaching for the same coffee order at a busy downtown cafe. 
  What started as an awkward laugh turned into a conversation that lasted for hours. 
  Five years, three apartments, and two dogs later, Greg proposed on a quiet hike in the mountains 
  where we had our first anniversary trip. We are so excited to celebrate our next chapter with you.
`;

export const FAQ_CONTEXT_FOR_AI = `
Wedding Details:
Date: ${WEDDING_DATE}
Couple: ${COUPLE_NAMES}

Events:
${EVENTS.map(e => `- ${e.title}: ${e.date}, ${e.time} @ ${e.location} (${e.address}). ${e.description}`).join('\n')}

Accommodations:
${ACCOMMODATIONS.map(a => `- ${a.name}: ${a.address}. ${a.note}. Code: ${a.groupCode}`).join('\n')}

FAQs:
${FAQS.map(f => `Q: ${f.question} A: ${f.answer}`).join('\n')}

Story:
${STORY_TEXT}
`;