import { useEffect, useRef } from "react";

const logos = [
  { src: "/logos/logo_authentica.png", alt: "Authentica Logo" },
  { src: "/logos/logo_codeverify.png", alt: "CodeVerify Logo" },
  { src: "/logos/logo_leadlink.png", alt: "LeadLink Logo" },
  { src: "/logos/logo_trendswap.png", alt: "TrendSwap Logo" },
  { src: "/logos/logo_wanted.png", alt: "Wanted Logo" },
  { src: "/logos/logo_youtubecondensed.png", alt: "YouTube Condensed Logo" },
  { src: "/logos/logo_zapai.png", alt: "ZapAI Logo" }
];

export function Carousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Clone logos for seamless scrolling
    const content = scrollContainer.querySelector('.scroll-content');
    if (content) {
      const clone = content.cloneNode(true);
      scrollContainer.appendChild(clone);
    }
  }, []);

  return (
    <div className="w-full bg-black/50 backdrop-blur-sm py-12 overflow-hidden">
      <div 
        ref={scrollRef}
        className="relative w-full overflow-hidden"
      >
        <div className="scroll-content flex animate-scroll">
          {logos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex-shrink-0 mx-8 hover:opacity-80 transition-opacity duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}