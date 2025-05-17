import React from 'react';

const logos = [
  'logo_authentica.png',
  'logo_codeverify.png',
  'logo_hometrics.png',
  'logo_leadlink.png',
  'logo_trendswap.png',
  'logo_wanted.png',
  'logo_youtubecondensed.png',
  'logo_zapai.png',
];

export function Carousel() {
  return (
    <div className="w-full py-12 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="logo-carousel overflow-hidden w-full">
          <div className="logo-track flex animate-scroll">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <img
                key={index}
                src={`/logos/${logo}`}
                alt={`Client Logo ${index + 1}`}
                className="h-12 mx-8 object-contain opacity-50 hover:opacity-100 transition-opacity"
              />
            ))}
            {/* Duplicate set for seamless scrolling */}
            {logos.map((logo, index) => (
              <img
                key={`duplicate-${index}`}
                src={`/logos/${logo}`}
                alt={`Client Logo ${index + 1}`}
                className="h-12 mx-8 object-contain opacity-50 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}