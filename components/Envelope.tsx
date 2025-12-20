import React, { useState } from 'react';

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    // Wait for envelope open animation then trigger fade
    setTimeout(() => {
      setIsFading(true);
      // Wait for fade out then unmount
      setTimeout(onOpen, 800);
    }, 1000);
  };

  if (isFading && !isOpen) return null; // Should not happen but safety check

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-theme-bg transition-opacity duration-1000 ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      <div className="relative perspective-1000 cursor-pointer group" onClick={handleOpen}>
        <div className="relative w-[300px] h-[200px] md:w-[500px] md:h-[350px] transform-style-3d transition-transform duration-500 hover:scale-105">
          
          {/* Envelope Body (Back) */}
          <div className="absolute inset-0 bg-[#d8c8b8] shadow-2xl rounded-sm"></div>

          {/* Letter Inside */}
          <div 
            className={`absolute left-4 right-4 top-2 bottom-2 bg-white flex flex-col items-center justify-center p-4 shadow-sm transition-transform duration-1000 ease-in-out ${isOpen ? '-translate-y-24 md:-translate-y-32 z-10' : 'translate-y-0 z-0'}`}
          >
             <h1 className="font-script text-3xl md:text-5xl text-theme-text mb-2">N & G</h1>
             <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-theme-accent">October 10, 2026</p>
          </div>

          {/* Envelope Bottom Flap */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#e6d6c6] z-20" style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}></div>
          <div className="absolute left-0 top-0 bottom-0 w-1/6 bg-[#dfcfbf] z-20" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 50%)' }}></div>
          <div className="absolute right-0 top-0 bottom-0 w-1/6 bg-[#dfcfbf] z-20" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 50%)' }}></div>

          {/* Envelope Top Flap */}
          <div 
            className={`absolute top-0 left-0 right-0 h-1/2 bg-[#d8c8b8] z-30 origin-top transition-transform duration-700 ease-in-out ${isOpen ? 'rotate-x-180' : 'rotate-x-0 group-hover:rotate-x-[15deg]'}`} 
            style={{ clipPath: 'polygon(0 0, 50% 100%, 100% 0)' }}
          >
             {/* Wax Seal */}
             {!isOpen && (
               <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-[#8c7668] rounded-full shadow-md flex items-center justify-center border border-[#7a6558]">
                 <span className="font-script text-white text-lg md:text-xl pt-1">NG</span>
               </div>
             )}
          </div>
          
          {!isOpen && (
             <div className="absolute -bottom-16 left-0 right-0 text-center animate-pulse">
                <span className="font-sans text-xs uppercase tracking-widest text-theme-text/60">Tap to Open</span>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Envelope;