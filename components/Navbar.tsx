
import React, { useState, useEffect } from 'react';
import { TBLogo } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRegistration = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('registration');
    if (element) {
      const offset = 100; // Offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 group" aria-label="Home">
          <TBLogo className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
          <span className="font-black text-xl tracking-tighter uppercase hidden sm:block">Trailblazers</span>
        </a>
        
        <a 
          href="#registration" 
          onClick={scrollToRegistration}
          className="bg-white text-black px-8 py-3 text-xs font-black uppercase tracking-[0.2em] hover:bg-[#ff0080] hover:text-white transition-all duration-300 inline-block shadow-xl"
        >
          Join Club
        </a>
      </div>
    </nav>
  );
};

export default Navbar;