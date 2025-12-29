import React, { useState, useEffect } from 'react';

interface PasswordGateProps {
  children: React.ReactNode;
}

const PasswordGate: React.FC<PasswordGateProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isFading, setIsFading] = useState(false);

  // Check session storage on mount to keep user logged in during refresh
  useEffect(() => {
    const auth = sessionStorage.getItem('wedding_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const getValidPassword = () => {
    // Default fallback
    let validPassword = '1234';

    const isValid = (val: any) => typeof val === 'string' && val.length > 0;

    // 1. Check Vite (Standard for this project structure)
    // The variable in Netlify MUST be named VITE_WEDDING_PASSWORD
    try {
      // @ts-ignore
      if (typeof import.meta !== 'undefined' && import.meta.env) {
        // @ts-ignore
        if (isValid(import.meta.env.VITE_WEDDING_PASSWORD)) {
          // @ts-ignore
          return import.meta.env.VITE_WEDDING_PASSWORD;
        }
      }
    } catch (e) {
      // Ignore
    }

    // 2. Fallback checks (Legacy/CRA/Process)
    try {
      if (typeof process !== 'undefined' && process.env) {
        if (isValid(process.env.VITE_WEDDING_PASSWORD)) return process.env.VITE_WEDDING_PASSWORD;
        if (isValid(process.env.REACT_APP_WEDDING_PASSWORD)) return process.env.REACT_APP_WEDDING_PASSWORD;
      }
    } catch (e) {
      // Ignore
    }

    return validPassword;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validPassword = getValidPassword();

    // Debug log to help you verify what the app is seeing
    console.log('Environment Check:', {
      // @ts-ignore
      hasViteEnv: typeof import.meta !== 'undefined' && !!import.meta.env,
      // @ts-ignore
      viteVal: import.meta.env?.VITE_WEDDING_PASSWORD ? 'Loaded' : 'Missing',
      expected: validPassword
    });

    if (password === validPassword) {
      sessionStorage.setItem('wedding_auth', 'true');
      setIsFading(true);
      setTimeout(() => {
        setIsAuthenticated(true);
      }, 500); // Wait for fade out animation
    } else {
      setError(true);
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-theme-bg flex flex-col items-center justify-center p-4 transition-opacity duration-1000 ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        {/* Card Container - Made wider (max-w-2xl) and more padded */}
        <div className="bg-white w-full max-w-2xl p-12 md:p-20 shadow-2xl relative mx-auto">
          {/* Decorative Corner Borders */}
          <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-theme-text/20"></div>
          <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-theme-text/20"></div>
          <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-theme-text/20"></div>
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-theme-text/20"></div>

          <div className="relative z-10 text-center">
            {/* Header */}
            <div className="mb-12 space-y-6">
              {/* Made text bigger and tracking wider */}
              <span className="font-sans text-xs md:text-sm uppercase tracking-[0.4em] text-theme-accent block">
                Welcome to the Wedding of
              </span>

              {/* Names - Balanced size relative to card */}
              <h1 className="font-script text-4xl md:text-5xl text-theme-text py-2">
                Nicolle & Greg
              </h1>

              {/* Date - Made bigger */}
              <p className="font-serif italic text-theme-text/70 text-lg md:text-xl tracking-wide">
                October 10, 2026
              </p>
            </div>

            {/* Password Form */}
            <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-[280px] mx-auto mt-8">
              <div className="w-full relative mb-10">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  placeholder="ENTER PASSWORD"
                  className="w-full bg-transparent border-b border-theme-text/20 py-3 text-center font-sans tracking-[0.3em] text-theme-text focus:outline-none focus:border-theme-accent transition-all placeholder:text-theme-text/20 text-base"
                  autoFocus
                />

                {/* Error Message */}
                <div className={`absolute -bottom-8 left-0 right-0 transition-opacity duration-300 ${error ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-red-900/60 text-[10px] font-sans uppercase tracking-widest">
                    Incorrect Password
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 border border-theme-text/30 hover:border-theme-text hover:bg-theme-text hover:text-white text-theme-text font-sans text-[10px] uppercase tracking-[0.3em] transition-all duration-500"
              >
                Enter Site
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGate;