
import React, { useState, useEffect } from 'react';
import { TBLogo } from '../constants';
import { GoogleGenAI } from "@google/genai";

const Hero: React.FC = () => {
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateHero = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ 
              text: "Hyper-realistic close-up of athletic legs in motion, running through a vibrant urban city street. Cinematic golden hour lighting, warm glow, artistic motion blur to convey high speed and energy, premium running shoes hitting the pavement, high-contrast urban textures, 8k resolution, professional sports photography, high-energy atmosphere." 
            }],
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9"
            }
          }
        });

        const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
        if (part?.inlineData) {
          setHeroImage(`data:image/png;base64,${part.inlineData.data}`);
        }
      } catch (err) {
        console.error("Hero generation failed", err);
        setHeroImage("https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=2000");
      } finally {
        setLoading(false);
      }
    };

    generateHero();
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-end bg-black overflow-hidden group">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {loading ? (
          <div className="w-full h-full bg-zinc-900 animate-pulse flex items-center justify-center">
            <div className="text-white/20 font-mono text-xs tracking-[0.5em] uppercase">Visualizing Momentum...</div>
          </div>
        ) : (
          <img 
            src={heroImage || ""} 
            alt="Trailblazers Community"
            className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2500ms] ease-out"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center gap-4 text-xs font-mono tracking-tighter uppercase text-white/60 mb-6">
              <span className="hover:text-[#ff0080] transition-colors duration-300">[ Sweatworking Club ]</span>
              <span className="w-12 h-[1px] bg-[#ff0080] group-hover:w-24 transition-all duration-700" />
              <span className="hover:text-[#8000ff] transition-colors duration-300">[ Est. 2025 ]</span>
            </div>
            <h1 className="text-[14vw] md:text-[12vw] font-black leading-[0.8] tracking-tighter uppercase mb-4 transition-colors duration-500 hover:text-[#ff0080] cursor-default select-none">
              Trail<br />blazers
            </h1>
          </div>
          <div className="flex-none max-w-xs mb-4">
            <p className="text-sm md:text-base text-white/80 font-medium leading-relaxed mb-8 border-l-2 border-[#ff0080] pl-6 py-2 hover:border-[#8000ff] transition-colors duration-500">
              A friendly & fun community of founders, creatives and thinkers coming together to connect meaningfully, grow intentionally and give back purposefully.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-white/40">
              <span className="hover:text-white cursor-crosshair hover:scale-105 transition-all">53.4808° N, 2.2426° W</span>
              <span className="tb-gradient w-2 h-2 rounded-full animate-ping shadow-[0_0_15px_#ff0080]" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 w-full h-[2px] tb-gradient origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />

      <div className="absolute bottom-10 right-12 animate-bounce hidden md:block group/scroll cursor-pointer">
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20 rotate-90 mb-8 translate-x-4 group-hover/scroll:text-white transition-colors">Scroll</span>
          <svg className="w-6 h-6 text-white/40 group-hover/scroll:text-[#ff0080] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
