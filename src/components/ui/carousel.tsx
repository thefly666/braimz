import * as React from "react";

const logos = [
  "/logos/logo_authentica.png",
  "/logos/logo_codeverify.png",
  "/logos/logo_hometrics.png",
  "/logos/logo_leadlink.png",
  "/logos/logo_trendswap.png",
  "/logos/logo_wanted.png",
  "/logos/logo_youtubecondensed.png",
  "/logos/logo_zapai.png"
];

export function Carousel() {
  return (
    <div className="w-full py-12 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-16">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-none w-[150px] h-[60px] flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}