
import React from 'react';
import Section from './Section';

const Mission: React.FC = () => {
  return (
    <Section id="mission" className="bg-[#0a0a0a]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4">
          <span className="text-xs font-bold tracking-widest uppercase text-white/40 mb-8 block">
            [ A NEW WAY TO BUILD YOUR NETWORK ]
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            Move Together. Grow Together. Give Back.
          </h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-2xl md:text-4xl font-light text-white/90 leading-tight mb-12">
            Trailblazers Sweatworking Club connects founders, creatives and thinkers through <span className="font-bold gradient-text">active networking</span>. We nourish the mind, body and soul — all while doing some good.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="space-y-4 group">
              <div className="w-12 h-[1px] bg-[#ff0080] group-hover:w-full transition-all duration-500" />
              <h3 className="text-xl font-black uppercase">Mind</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Network with fellow entrepreneurs and creators. Exchange ideas while the endorphins flow. No awkward mixers, just real connections.
              </p>
            </div>
            <div className="space-y-4 group">
              <div className="w-12 h-[1px] bg-[#ff8c00] group-hover:w-full transition-all duration-500" />
              <h3 className="text-xl font-black uppercase">Body</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Accessible runs and activities for all fitness levels. We move at a social pace, focusing on consistency and community.
              </p>
            </div>
            <div className="space-y-4 group">
              <div className="w-12 h-[1px] bg-[#8000ff] group-hover:w-full transition-all duration-500" />
              <h3 className="text-xl font-black uppercase">Soul</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Every step powers change. 100% of our sign-up donations go directly to children's charities in Greater Manchester.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Mission;
