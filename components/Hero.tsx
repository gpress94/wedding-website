
import React, { useEffect, useState } from 'react';
import { SectionId } from '../types';
import { WEDDING_DATE, STORY_TEXT } from '../constants';
import IMAGES from '../images';

const HomeSection: React.FC = () => {
  const [daysToGo, setDaysToGo] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2026-10-10T00:00:00');
    const now = new Date();
    const diffTime = targetDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysToGo(diffDays > 0 ? diffDays : 0);
  }, []);

  return (
    <section id={SectionId.HOME} className="w-full pt-4 pb-16">
      
      {/* Hero Photo - Contained */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        {/* 
           Using w-full and h-auto on the image ensures the container height 
           is determined by the natural aspect ratio of the image itself. 
           No cropping (object-cover) or fixed heights are applied.
        */}
        <div className="relative w-full overflow-hidden shadow-xl bg-theme-text/5">
           <img 
             src={IMAGES.home.hero}
             alt="Nicolle and Greg"
             className="w-full h-auto block opacity-90 hover:scale-105 transition-transform duration-[20s]"
             onError={(e) => {
               const target = e.target as HTMLImageElement;
               target.style.display = 'none';
               // Add a fallback height so the container doesn't collapse if image fails
               target.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'h-96');
               const errorMsg = document.createElement('p');
               errorMsg.innerText = 'Image not found: ' + IMAGES.home.hero;
               errorMsg.className = 'text-theme-text/50 font-sans text-sm p-4';
               target.parentElement?.appendChild(errorMsg);
             }}
           />
        </div>
      </div>

      {/* Date & Countdown */}
      <div className="text-center mb-20 fade-in-up px-4">
         <h2 className="text-3xl md:text-4xl font-serif italic mb-4 text-theme-text">{WEDDING_DATE}</h2>
         <div className="inline-block border-t border-b border-theme-text/30 py-2 px-6">
           <p className="text-sm md:text-base uppercase tracking-[0.3em] font-sans">
             {daysToGo} Days To Go
           </p>
         </div>
      </div>

      {/* Our Story */}
      <div className="max-w-3xl mx-auto px-6 text-center mb-12">
        <span className="block font-script text-4xl md:text-5xl mb-6 text-theme-text">Our Story</span>
        <p className="font-serif text-lg md:text-xl leading-loose text-theme-text/80">
          {STORY_TEXT}
        </p>
      </div>

    </section>
  );
};

export default HomeSection;