
import React from 'react';

export const BRAND_COLORS = {
  primary: '#ff0080',
  secondary: '#ff8c00',
  accent: '#8000ff',
  black: '#0a0a0a',
  white: '#ffffff',
};

export const TBLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <div className={`relative flex flex-col items-center justify-center ${className}`}>
    {/* Flame */}
    <svg viewBox="0 0 24 24" className="w-1/3 h-1/3 text-inherit mb-0.5" fill="currentColor">
      <path d="M12 2c0 0-3.5 4.5-3.5 7.5C8.5 12.5 10.5 14 12 14s3.5-1.5 3.5-4.5C15.5 6.5 12 2 12 2z" />
      <path d="M12 6c0 0-2 2.5-2 4 0 1.5 1 2.5 2 2.5s2-1 2-2.5c0-1.5-2-4-2-4z" opacity="0.5" />
    </svg>
    {/* TB Text */}
    <span className="text-2xl font-black leading-none tracking-tighter">TB</span>
    {/* Lightning Bolt */}
    <svg viewBox="0 0 24 24" className="w-1/3 h-1/3 text-inherit mt-0.5" fill="currentColor">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  </div>
);

export const MOTIF_BG = "opacity-5 pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden select-none";
