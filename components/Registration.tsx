
import React, { useState } from 'react';
import Section from './Section';
import { TBLogo } from '../constants';

const Registration: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);
  
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnjbnzaq";
  const JUST_GIVING_URL = "https://www.justgiving.com/page/trailblazers-sweatworking-club-2?utm_medium=FR&utm_source=CL";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setError(false);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          message: "New member joined the Trailblazers Crew via website sign-up."
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        // Reset success state after a delay to allow for more sign-ups
        setTimeout(() => setSubmitted(false), 8000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      console.error("Submission failed", err);
      setError(true);
      // Fallback to mailto if Formspree fails for some reason
      const subject = encodeURIComponent("Join Trailblazers Crew");
      const body = encodeURIComponent(`Hi Trailblazers, I want to join the crew! Email: ${email}`);
      window.location.href = `mailto:trailblazerscuk@gmail.com?subject=${subject}&body=${body}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="registration" className="bg-black text-white py-0 overflow-hidden" noPadding>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
        
        {/* Registration Form Column */}
        <div className="relative p-12 md:p-24 pt-24 md:pt-32 flex flex-col items-start border-b lg:border-b-0 lg:border-r border-white/5 group">
          <div className="relative z-10 w-full max-w-lg flex flex-col flex-1">
            <div className="flex items-center gap-4 mb-12">
               <div className="w-2 h-2 rounded-full tb-gradient animate-pulse" />
               <span className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-white/40">
                 Join the Movement
               </span>
            </div>
            
            <div>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-12">
                Join The<br />
                <span className="gradient-text">Crew</span>
              </h2>
              <p className="text-white/60 text-lg mb-16 font-medium leading-relaxed max-w-sm">
                Sign up to hear about upcoming sessions and the moments we’re creating across Manchester.
              </p>
            </div>

            <div className="mt-auto pt-12 w-full">
              {submitted ? (
                <div className="bg-white/5 p-8 border border-[#ff0080]/30 rounded-sm animate-reveal h-[200px] flex flex-col justify-center">
                  <p className="text-2xl font-black uppercase tracking-tight text-[#ff0080] mb-2">You're on the list.</p>
                  <p className="text-sm font-mono text-white/40 uppercase tracking-widest">Welcome to the movement. We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col h-full space-y-16">
                  <div className="relative">
                    <input 
                      type="email" 
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="YOUR EMAIL ADDRESS"
                      required
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b-4 border-white py-8 text-3xl md:text-4xl font-black uppercase tracking-tighter placeholder:text-white/30 outline-none focus:border-[#ff0080] focus:placeholder:text-white transition-all duration-500 disabled:opacity-50"
                    />
                    <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#ff0080] group-focus-within:w-full transition-all duration-700" />
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center gap-6 px-12 py-8 bg-white text-black font-black uppercase tracking-[0.2em] text-sm hover:bg-[#ff0080] hover:text-white transition-all duration-500 overflow-hidden w-full md:w-auto justify-center shadow-2xl disabled:bg-white/50"
                    >
                      <span className="relative z-10">
                        {isSubmitting ? 'SECURE CONNECTION...' : 'Sign Up Now'}
                      </span>
                      {!isSubmitting && (
                        <svg className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      )}
                    </button>
                    {error && (
                      <p className="text-[10px] font-mono uppercase text-[#ff0080]">Connection issue. Opening your email app instead...</p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="absolute -left-20 -bottom-20 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-1000 pointer-events-none">
             <TBLogo className="w-[650px] h-[650px]" />
          </div>
        </div>

        {/* Donation CTA Column */}
        <div className="relative p-12 md:p-24 pt-24 md:pt-32 flex flex-col items-start bg-[#0d0d0d] overflow-hidden group">
          <div className="relative z-10 w-full max-w-lg flex flex-col flex-1">
             <div className="flex items-center gap-4 mb-12">
               <div className="w-2 h-2 rounded-full bg-white opacity-20" />
               <span className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-white/40">
                 Power the Change
               </span>
            </div>

            <div>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-12">
                Do<br />
                <span className="gradient-text">Good.</span>
              </h2>
              <p className="text-white/60 text-lg mb-16 font-medium leading-relaxed max-w-sm">
                Join our mission to support local children. 100% of our sign-up donations go to Francis House Hospice.
              </p>
            </div>

            <div className="mt-auto pt-12 flex flex-col justify-end w-full">
              <div className="h-[200px] flex items-end">
                <a 
                  href={JUST_GIVING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center gap-6 px-12 py-8 border-4 border-white/20 font-black uppercase tracking-[0.2em] text-sm hover:border-[#ff0080] hover:bg-[#ff0080] transition-all duration-500 w-full md:w-auto justify-center"
                >
                  <div className="relative z-10 flex items-center gap-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    Donate via JustGiving
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000 flex items-center justify-center">
             <svg viewBox="0 0 24 24" className="w-[120%] h-[120%] text-white rotate-12 group-hover:rotate-0 transition-transform duration-[2000ms]" fill="currentColor">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
             </svg>
          </div>

          <div className="absolute bottom-0 right-0 w-32 h-32 tb-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
               style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} 
          />
        </div>

      </div>
    </Section>
  );
};

export default Registration;
