
import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Remove focus to help prevent sticky states on touch devices
    e.currentTarget.blur();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[100] p-4 rounded-full bg-watt-accent text-white shadow-2xl shadow-lime-500/40 border-2 border-white/20 backdrop-blur-sm transition-all duration-500 transform flex items-center justify-center active:bg-watt-dark hover:scale-110 active:scale-95 group
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      aria-label="Scroll to top"
    >
      <Icons.ArrowUp size={24} strokeWidth={3} className="group-hover:-translate-y-1 transition-transform duration-300" />
    </button>
  );
};
