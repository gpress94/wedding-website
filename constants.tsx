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
  { label: 'Explore', href: '/explore' },
];

export const EVENTS: EventDetails[] = [
  {
    title: "The Ceremony",
    date: "Saturday, October 10, 2026",
    time: "4:30 PM - 5:00 PM",
    location: "The Foundation House",
    address: "124 Old Mill Road, Greenwich, CT 06831",
    description: "Join us for our vows."
  },
  {
    title: "Cocktail Hour",
    date: "Saturday, October 10, 2026",
    time: "5:00 PM - 6:00 PM",
    location: "The Foundation House",
    address: "124 Old Mill Road, Greenwich, CT 06831",
    description: "Drinks and hors d'oeuvres on the terrace."
  },
  {
    title: "Reception",
    date: "Saturday, October 10, 2026",
    time: "6:00 PM - 10:00 PM",
    location: "The Foundation House",
    address: "124 Old Mill Road, Greenwich, CT 06831",
    description: "Dinner, dancing, and celebration."
  }
];

export const ACCOMMODATIONS: Accommodation[] = [
  {
    name: "Delamar Greenwich Harbor",
    address: "500 Steamboat Rd, Greenwich, CT 06830",
    phone: "(203) 661-9800",
    website: "#",
    groupCode: "TBD",
    note: "Luxury waterfront accommodations."
  },
  {
    name: "Hyatt Regency Greenwich",
    address: "1800 E Putnam Ave, Old Greenwich, CT 06870",
    phone: "(203) 637-1234",
    website: "#",
    groupCode: "TBD",
    note: "Convenient location."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What is the dress code?",
    answer: "We'd love to see you in Black Tie Optional. Tuxes and gowns are welcome, as are suits and cocktail dresses."
  },
  {
    question: "How do I get to the venue?",
    answer: "Please check the Travel page for detailed directions."
  },
  {
    question: "Are there accommodations nearby?",
    answer: "Yes, we have room blocks at local hotels. Please see the Travel page for details."
  },
  {
    question: "Will transportation be provided?",
    answer: "TBD"
  },
  {
    question: "Is there parking available near your wedding venue?",
    answer: "Yes, valet parking is complimentary at the venue."
  },
  {
    question: "Where are you registered?",
    answer: "TBD"
  },
  {
    question: "What is on the menu?",
    answer: "TBD"
  },
  {
    question: "What will the weather be like this time of year?",
    answer: "In early October, Greenwich typically experiences crisp, cool autumn weather with highs around 65°F (18°C) and lows around 45°F (7°C)."
  },
  {
    question: "What’s the best airport to use?",
    answer: "Westchester County Airport (HPN) is the closest option. However, LaGuardia (LGA), JFK, and Newark (EWR) are all viable options depending on your flight preferences."
  },
  {
    question: "What date should I RSVP by?",
    answer: "TBD"
  },
  {
    question: "What is the wedding day itinerary?",
    answer: "Please check the Events page for the full schedule."
  }
];

export const STORY_TEXT = `
  We met in Stamford in the summer of 2021, and from the very beginning, it was the simple moments that brought us together. 
  Long walks and hikes through local parks with Minnie, annual weekend escapes to the Hudson Valley, and quiet nights filled 
  with movies and games quickly became the rhythm of our days and the foundation of our relationship.

  Along the way, those everyday moments were filled with bigger adventures, ski trips with friends, family vacations to 
  Florida and Michigan, and travels that took us around the world. No matter how far we went, what mattered most was 
  always the comfort of coming home together.

  In July 2025, Greg proposed on a walk at Foundation House, a place that had become special to us and one we’re thrilled 
  to return to as we celebrate our wedding.

  We can’t wait to share this next chapter with our family and friends.
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