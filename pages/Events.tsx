
import React from 'react';
import { EVENTS } from '../constants';
import { MapPin } from 'lucide-react';
import IMAGES from '../images';

const Events: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl mb-4 text-theme-text">Events</h2>
           {/* Location Photo */}
          <div className="w-full mt-8 mb-12 shadow-sm bg-theme-text/5 relative">
            <img 
              src={IMAGES.events.venue}
              alt="Venue"
              className="w-full h-auto block opacity-90" 
              onError={(e) => {
                (e.target as HTMLImageElement).style.opacity = "0.5"; // fallback visual
              }}
            />
          </div>
        </div>

        <div className="space-y-16">
          {EVENTS.map((event, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start text-center md:text-left border-b border-theme-text/10 pb-12 last:border-0">
              <div className="w-full md:w-1/3 text-right md:border-r md:border-theme-text/20 md:pr-12 flex flex-col items-center md:items-end">
                 <h3 className="font-serif text-3xl text-theme-text italic">{event.title}</h3>
                 <span className="font-sans text-xs uppercase tracking-widest mt-2 text-theme-accent">{event.date}</span>
              </div>
              <div className="w-full md:w-2/3 space-y-3">
                 <p className="font-sans text-sm font-medium tracking-wide">{event.time}</p>
                 <p className="font-serif text-xl font-semibold">{event.location}</p>
                 <a 
                   href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address)}`} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="flex items-center justify-center md:justify-start gap-2 text-theme-text/60 text-sm mb-2 hover:text-theme-accent transition-colors"
                 >
                    <MapPin size={14} />
                    <span className="underline decoration-1 underline-offset-4">{event.address}</span>
                 </a>
                 <p className="text-theme-text/80 leading-relaxed font-light max-w-md mx-auto md:mx-0">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;