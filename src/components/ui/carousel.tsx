import React from 'react';
import logoAuthentica from '@/assets/logos/logo_authentica.png';
import logoCodeVerify from '@/assets/logos/logo_codeverify.png';
import logoHometrics from '@/assets/logos/logo_hometrics.png';
import logoLeadLink from '@/assets/logos/logo_leadlink.png';
import logoTrendSwap from '@/assets/logos/logo_trendswap.png';
import logoWanted from '@/assets/logos/logo_wanted.png';
import logoYouTubeCondensed from '@/assets/logos/logo_youtubecondensed.png';
import logoZapAI from '@/assets/logos/logo_zapai.png';

const logos = [
  { src: logoAuthentica, alt: 'Authentica' },
  { src: logoCodeVerify, alt: 'CodeVerify' },
  { src: logoHometrics, alt: 'Hometrics' },
  { src: logoLeadLink, alt: 'LeadLink' },
  { src: logoTrendSwap, alt: 'TrendSwap' },
  { src: logoWanted, alt: 'Wanted' },
  { src: logoYouTubeCondensed, alt: 'YouTubeCondensed' },
  { src: logoZapAI, alt: 'ZapAI' }
];

export function Carousel() {
  return (
    <div className="w-full bg-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="animate-scroll flex space-x-16 py-12">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="max-h-12 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}