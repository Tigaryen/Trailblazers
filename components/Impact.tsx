
import React, { useState, useEffect, useRef } from 'react';
import Section from './Section';

const Ticker: React.FC<{ end: number; suffix?: string; prefix?: string }> = ({ end, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      }
    }, { threshold: 0.5 });

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={countRef}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const Impact: React.FC = () => {
  return (
    <Section id="impact" className="relative bg-white text-black py-32 md:py-48">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-6xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter mb-12">
            Build. Grow.<br />Give <span className="gradient-text">Back.</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium leading-relaxed mb-12 max-w-md">
            We don't just run for ourselves. 100% of our sign-up donations power children's charities in Greater Manchester. 
            
            Our mission is to make this a nationwide movement building the biggest community of founders, creatives and thinkers that helps each other and creates positive change in other peoples lives.
          </p>
          <div className="flex flex-col gap-8">
            <div className="flex items-baseline justify-between border-b-4 border-black pb-6 group overflow-hidden">
              <span className="text-7xl md:text-8xl font-black group-hover:translate-x-4 transition-transform duration-500">
                <Ticker end={100} suffix="%" />
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">To Charity</span>
            </div>
            <div className="flex items-baseline justify-between border-b-4 border-black pb-6 group overflow-hidden">
              <span className="text-7xl md:text-8xl font-black group-hover:translate-x-4 transition-transform duration-500">
                <Ticker end={50} prefix="£" suffix="K+" />
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">2026 Goal</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] bg-black p-12 flex flex-col justify-between overflow-hidden group hover:scale-[1.02] transition-transform duration-700">
            <div className="flex justify-between items-start relative z-10">
              <div className="w-24 h-24 tb-gradient rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
              <div className="text-white text-[10px] font-mono uppercase tracking-[0.4em] opacity-40">
                [ Local Impact ]
              </div>
            </div>
            <div className="space-y-4 relative z-10">
              <div className="text-white text-7xl font-black tracking-tighter leading-none">FRANCIS<br />HOUSE</div>
              <p className="text-white/60 text-sm font-mono max-w-[280px] leading-relaxed">Providing amazing care for Manchester's children and their families. Every £ makes a huge difference. </p>
            </div>
            {/* Massive motif watermark */}
            <div className="absolute -right-20 -bottom-20 opacity-[0.05] group-hover:opacity-20 group-hover:rotate-12 transition-all duration-1000 pointer-events-none">
               <svg viewBox="0 0 24 24" className="w-[500px] h-[500px] text-white" fill="currentColor">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
               </svg>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Impact;
