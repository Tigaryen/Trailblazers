
import React from 'react';

export const BRAND_COLORS = {
  primary: '#ff0080',
  secondary: '#ff8c00',
  accent: '#8000ff',
  black: '#0a0a0a',
  white: '#ffffff',
};

export const TBLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <img
    src="/images/tb-logo-white.png"
    alt="Trailblazers Logo"
    className={`object-contain ${className}`}
  />
);

export const MOTIF_BG = "opacity-5 pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden select-none";
