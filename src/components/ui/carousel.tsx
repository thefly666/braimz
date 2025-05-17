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
    <div className="w-full py-12 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden">
          <div className="animate-scroll flex space-x-16 py-12">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={`/logos/${logo}`}
                alt={`Partner Logo ${index + 1}`}
                className="h-8 w-auto object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            ))}
            {logos.map((logo, index) => (
              <img
                key={`duplicate-${index}`}
                src={`/logos/${logo}`}
                alt={`Partner Logo ${index + 1}`}
                className="h-8 w-auto object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}