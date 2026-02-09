
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Events from './components/Events';
import Impact from './components/Impact';
import FAQ from './components/FAQ';
import Registration from './components/Registration';
import InstagramSection from './components/InstagramSection';
import Footer from './components/Footer';
import { MOTIF_BG } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-[#ff0080] selection:text-white">
      {/* Subtle Motif in Background */}
      <div className={MOTIF_BG}>
         <svg viewBox="0 0 24 24" className="w-[120vw] h-[120vw] text-white" fill="currentColor">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
         </svg>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Mission />
        <Events />
        <Impact />
        <FAQ />
        <Registration />
        <InstagramSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
