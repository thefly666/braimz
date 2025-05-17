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
    <div className="w-full bg-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="animate-scroll flex space-x-16 py-12">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={`/logos/${logo}`}
              alt={`Logo ${index + 1}`}
              className="max-h-12 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}