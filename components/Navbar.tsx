import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="w-full py-6 border-t border-theme-text/10 border-b border-theme-text/10 bg-theme-bg relative z-50">
      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center space-x-12">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link 
              key={item.label} 
              to={item.href}
              className={`text-sm tracking-[0.2em] uppercase transition-colors font-sans font-medium ${isActive ? 'text-theme-accent' : 'text-theme-text hover:text-theme-accent'}`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-center">
         <button 
           onClick={() => setIsOpen(!isOpen)}
           className="flex items-center gap-2 uppercase tracking-widest text-sm text-theme-text"
         >
           {isOpen ? <X size={20} /> : <Menu size={20} />}
           <span>Menu</span>
         </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-theme-bg border-b border-theme-text/10 shadow-lg py-6 flex flex-col items-center space-y-6 z-50">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.label} 
              to={item.href}
              className="text-sm tracking-[0.2em] uppercase text-theme-text hover:text-theme-accent"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;