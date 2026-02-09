
import React from 'react';
import { TBLogo } from '../constants';

const Footer: React.FC = () => {
  const INSTAGRAM_URL = "https://www.instagram.com/trailblazersc/";

  return (
    <footer className="bg-black pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-8">
               <TBLogo className="w-20 h-20 text-white" />
               <div className="flex flex-col">
                  <span className="text-4xl font-black uppercase tracking-tighter leading-none">Trail</span>
                  <span className="text-4xl font-black uppercase tracking-tighter leading-none">blazers</span>
               </div>
            </div>
            <p className="text-white/40 text-sm font-mono uppercase tracking-widest leading-loose">
              Sweatworking for the north.<br />
              Powered by passion.<br />
              Fuelled by change.
            </p>
          </div>
          
          <div className="md:col-span-7 flex flex-col justify-center">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-8">Contact & Connect</h4>
            <div className="flex flex-col gap-6">
              <a 
                href="mailto:trailblazerscuk@gmail.com" 
                className="text-2xl md:text-3xl font-black uppercase tracking-tighter hover:text-[#ff0080] transition-colors break-all"
              >
                trailblazerscuk@gmail.com
              </a>
              <p className="text-white/40 text-sm font-mono uppercase tracking-widest max-w-sm">
                Follow us on <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#8000ff] underline decoration-[#8000ff] underline-offset-4">Instagram</a> for latest news and events.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-white/20 uppercase tracking-widest pt-12 border-t border-white/5">
          <div className="flex items-center gap-8">
             <span>53.4808° N, 2.2426° W</span>
             <span>Manchester, UK</span>
          </div>
          <div>&copy; {new Date().getFullYear()} Trailblazers Sweatworking Club</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
