import React from 'react';

const Registry: React.FC = () => {
  return (
    <section className="py-24 text-center min-h-[60vh] flex flex-col justify-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-script text-5xl mb-12 text-theme-text">Gift Registry</h2>
        <p className="font-serif text-lg mb-12 text-theme-text/80">
          Your presence is the greatest gift of all. However, if you wish to honor us with a gift, 
          we have registered at the following stores:
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-8">
           <a href="#" className="group relative overflow-hidden inline-block border border-theme-text py-4 px-12 hover:bg-theme-text transition-colors duration-300">
              <span className="relative z-10 font-sans text-xs uppercase tracking-[0.25em] group-hover:text-white transition-colors">Crate & Barrel</span>
           </a>
           <a href="#" className="group relative overflow-hidden inline-block border border-theme-text py-4 px-12 hover:bg-theme-text transition-colors duration-300">
              <span className="relative z-10 font-sans text-xs uppercase tracking-[0.25em] group-hover:text-white transition-colors">Zola</span>
           </a>
        </div>
      </div>
    </section>
  );
};

export default Registry;