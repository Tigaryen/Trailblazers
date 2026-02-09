
import React, { useState, useEffect } from 'react';
import Section from './Section';
import { TBLogo } from '../constants';
import { GoogleGenAI } from "@google/genai";

const PROMPTS = [
  "High-end sports fashion editorial photography. Diverse group of runners in their 20s and 30s jogging through an urban Manchester park. 35mm lens, shallow depth of field, sharp focus on faces, sun flare, premium athletic wear, cinematic color grade, high energy.",
  "Commercial running brand photography. Action shot of diverse group of young adults laughing while running towards camera. Ultra-high resolution, crisp details, sweat-glinted skin, vibrant city park background, athletic fashion aesthetic.",
  "Professional sports lifestyle photography. A group of young runners giving piggyback rides and laughing at dusk. Moody cinematic lighting, motion blur on background, high-end running gear, sharp focus on group joy, 8k quality."
];

const Gallery: React.FC = () => {
  const INSTAGRAM_URL = "https://www.instagram.com/trailblazersc/";
  const INSTAGRAM_HANDLE = "@trailblazersc";
  
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateGalleryImages = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

        const results = await Promise.all(
          PROMPTS.map(prompt =>
            ai.models.generateContent({
              model: 'gemini-2.5-flash-image',
              contents: { parts: [{ text: prompt }] },
              config: { imageConfig: { aspectRatio: "3:4" } }
            })
          )
        );

        const generatedImages = results
          .map(response => {
            const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
            return part?.inlineData ? `data:image/png;base64,${part.inlineData.data}` : null;
          })
          .filter((img): img is string => img !== null);

        if (generatedImages.length < 3) throw new Error("Missing images");
        setImages(generatedImages);
        setLoading(false);
      } catch (err) {
        setImages([
          "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=1200",
          "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=1200",
          "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=1200"
        ]);
        setLoading(false);
      }
    };

    generateGalleryImages();
  }, []);

  return (
    <Section id="gallery" className="bg-[#0a0a0a]" noPadding>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full overflow-hidden min-h-[700px]">
        {loading ? (
          [0, 1, 2].map((i) => (
            <div key={i} className="aspect-[3/4] bg-zinc-900 flex flex-col items-center justify-center p-12 border-r border-white/5 last:border-r-0">
               <div className="w-16 h-16 tb-gradient rounded-full blur-2xl animate-pulse mb-8" />
               <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/20 animate-pulse">Capturing Scene 0{i+1}</p>
            </div>
          ))
        ) : (
          images.map((imgUrl, index) => (
            <a 
              key={index} 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative aspect-[3/4] overflow-hidden block"
            >
              <img 
                src={imgUrl} 
                alt="Trailblazers Session"
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                style={{ transitionDelay: `${index * 100}ms` }}
              />
              
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center">
                 <div className="bg-white p-6 rounded-full shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.351-.2 6.78-2.618 6.981-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.353-2.612-6.785-6.981-6.981C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                 </div>
                 <span className="mt-6 text-white text-[10px] font-mono uppercase tracking-[0.5em] translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">View Shot</span>
              </div>
            </a>
          )
        )}
      </div>
      
      {/* Instagram Handle CTA */}
      <div className="w-full bg-black py-32 md:py-48 text-center relative overflow-hidden group">
        <a 
          href={INSTAGRAM_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center group relative z-10"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.6em] text-white/40 mb-8 group-hover:text-white transition-colors">Manchester Collective</span>
          <h3 className="text-5xl md:text-[8vw] font-black uppercase tracking-tighter gradient-text leading-none transition-transform duration-700 group-hover:scale-105">
            {INSTAGRAM_HANDLE}
          </h3>
          <div className="mt-16 flex items-center gap-12">
             <div className="w-24 h-[1px] bg-white/10 group-hover:w-48 group-hover:bg-[#ff0080] transition-all duration-1000" />
             <TBLogo className="w-32 h-32 text-white/20 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-1000" />
             <div className="w-24 h-[1px] bg-white/10 group-hover:w-48 group-hover:bg-[#8000ff] transition-all duration-1000" />
          </div>
        </a>
        {/* Animated Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.02] text-[30vw] font-black leading-none uppercase whitespace-nowrap group-hover:scale-110 transition-transform duration-1000">
          STAY ACTIVE
        </div>
      </div>
    </Section>
  );
};

export default Gallery;
