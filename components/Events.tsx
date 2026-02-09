
import React from 'react';
import Section from './Section';
import { TBLogo } from '../constants';

const SCHEDULE_ITEMS = [
  {
    occurrence: "1st Friday",
    time: "06:30 PM",
    title: "The Launchpad",
    description: "End your first week with pure momentum. Positive vibes to set the tone for a powerful few weeks ahead.",
    accent: "bg-[#ff0080]"
  },
  {
    occurrence: "2nd Friday",
    time: "06:30 PM",
    title: "The Social Sprint",
    description: "Finish your week with our social end-of-week 5km. Leave the desk behind and transition into the weekend.",
    accent: "bg-[#ff8c00]"
  },
  {
    occurrence: "3rd Monday",
    time: "6:30 PM",
    title: "The Mid-Month Surge",
    description: "Keep the fire burning. Re-connect, re-focus, and re-energize with the collective as we hit mid-month stride.",
    accent: "bg-[#8000ff]"
  },
  {
    occurrence: "4th Friday",
    time: "06:30 PM",
    title: "The Victory Lap",
    description: "The final push. A celebratory social run to wrap up the month's progress before we reset for the next chapter.",
    accent: "bg-white"
  }
];

const Events: React.FC = () => {
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
    <Section id="events" className="bg-zinc-950">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-white/40 mb-4 block">
            [ Monthly Rhythm ]
          </span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
            The<br />Schedule
          </h2>
        </div>
        <div className="max-w-xs">
          <p className="text-sm text-white/40 font-medium uppercase tracking-wider leading-relaxed">
            Four pillars of movement. Fixed points in your calendar to ensure you never lose momentum.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
        {SCHEDULE_ITEMS.map((item, index) => (
          <div key={index} className="group relative bg-black p-8 md:p-10 flex flex-col min-h-[400px] overflow-hidden">
            {/* Background Motif */}
            <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all duration-700 pointer-events-none">
               <TBLogo className="w-64 h-64 text-white" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-12">
                <span className="text-5xl font-black tracking-tighter opacity-20 font-mono">
                  0{index + 1}
                </span>
                <div className={`w-2 h-2 rounded-full ${item.accent} group-hover:scale-[3] transition-transform duration-500`} />
              </div>

              <div className="mt-auto">
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-white/40 mb-2">
                  {item.occurrence} • {item.time}
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-6 group-hover:gradient-text transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center">
                <a 
                  href="#registration" 
                  onClick={scrollToRegistration}
                  className="text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-white transition-colors"
                >
                  Reserve Spot
                </a>
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* Hover Gradient Border Effect */}
            <div className="absolute inset-x-0 bottom-0 h-1 tb-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
      
      <div className="mt-16 flex justify-center py-12 border-t border-white/5 font-mono text-[10px] text-white/30 uppercase tracking-[0.3em]">
        <div>All paces welcome</div>
      </div>
    </Section>
  );
};

export default Events;
