
import React from 'react';
import { TBLogo } from '../constants';

const InstagramSection: React.FC = () => {
  const INSTAGRAM_URL = "https://www.instagram.com/trailblazersc/";

  return (
    <section className="bg-black py-40 md:py-64 relative overflow-hidden group border-t border-white/5">
      {/* Background Animated Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000">
        <span className="text-[35vw] font-black uppercase whitespace-nowrap animate-pulse">TRAILBLAZERS</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <a 
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center group/handle w-full"
        >
          <div className="flex flex-col items-center mb-12">
            <span className="text-[10px] font-mono uppercase tracking-[0.8em] text-white/40 mb-4 group-hover/handle:text-[#ff0080] transition-colors duration-500">
              Move • Grow • Do Good
            </span>
            <div className="w-12 h-[1px] bg-white/10 group-hover/handle:w-32 group-hover/handle:bg-[#ff0080] transition-all duration-1000" />
          </div>

          <h3 className="text-5xl sm:text-6xl md:text-[8vw] font-black uppercase tracking-tighter leading-none gradient-text transition-transform duration-700 group-hover/handle:scale-105 group-hover/handle:-rotate-1 break-all md:break-normal">
            @TRAILBLAZERSC
          </h3>

          <div className="mt-16 relative w-24 h-24 flex items-center justify-center">
            <div className="absolute inset-0 border border-white/10 rounded-full group-hover/handle:border-[#8000ff] group-hover/handle:scale-150 group-hover/handle:opacity-0 transition-all duration-1000" />
            <TBLogo className="w-16 h-16 text-white/20 group-hover/handle:text-white group-hover/handle:rotate-[360deg] transition-all duration-1000" />
          </div>
        </a>
      </div>
      
      {/* Kinetic Stripes */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff0080] to-transparent opacity-0 group-hover:opacity-100 translate-y-20 group-hover:translate-y-0 transition-all duration-1000" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8000ff] to-transparent opacity-0 group-hover:opacity-100 -translate-y-20 group-hover:translate-y-0 transition-all duration-1000" />
    </section>
  );
};

export default InstagramSection;
