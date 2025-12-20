
import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import IMAGES from '../images';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen font-serif selection:bg-theme-accent/20 flex flex-col">
       {/* HEADER */}
       <header className="pt-8 pb-4 md:pt-8 md:pb-4 relative overflow-hidden w-full">
        <div className="w-full max-w-6xl mx-auto px-4">
          
          {/* Flex container with equal-width side columns to keep center text perfectly centered */}
          <div className="flex items-center justify-between relative z-10">
             
             {/* Left Header Art - Flexible width, aligns image to the end (next to text) */}
             <div className="flex-1 flex justify-end pr-4 md:pr-8 opacity-80 min-w-0">
               <img 
                 src={IMAGES.header.left} 
                 alt="" 
                 className="h-20 md:h-36 w-auto max-w-none object-contain"
                 onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
               />
             </div>

             {/* Center Text - Fixed visual center */}
             {/* Changed: flex-col (mobile) to md:flex-row (desktop) with gap adjustment */}
             <div className="flex-shrink-0 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:gap-4 text-center transition-all duration-300">
                <h1 className="font-script text-[38px] md:text-[42px] text-theme-text leading-tight whitespace-nowrap">Nicolle</h1>
                <span className="font-script text-[16px] md:text-[22px] text-theme-accent md:pt-2">and</span>
                <h1 className="font-script text-[38px] md:text-[42px] text-theme-text leading-tight whitespace-nowrap">Greg</h1>
             </div>

             {/* Right Header Art - Flexible width, aligns image to the start (next to text) */}
             <div className="flex-1 flex justify-start pl-4 md:pl-8 opacity-80 min-w-0">
               <img 
                 src={IMAGES.header.right} 
                 alt="" 
                 className="h-20 md:h-36 w-auto max-w-none object-contain"
                 onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
               />
             </div>
          </div>
        </div>
      </header>

      {/* NAV BAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="relative mt-20 pt-16 pb-12 bg-theme-bg text-theme-text text-center">
        {/* Shadow Overlay for Depth Effect */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/10 to-transparent pointer-events-none"></div>

        {/* Torn Edge Decoration acting as a shadow caster */}
        <div className="paper-edge-top text-black/20"></div>
        
        <h2 className="font-script text-3xl md:text-4xl mb-4 relative z-10">Nicolle & Greg</h2>
        <div className="w-16 h-px bg-theme-text/20 mx-auto mb-6 relative z-10"></div>
        <p className="font-serif italic opacity-70 relative z-10">Made with love for October 10, 2026</p>
      </footer>
    </div>
  );
};

export default Layout;
