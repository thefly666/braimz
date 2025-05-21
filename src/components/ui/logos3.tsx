import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

export function Logos3() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPos = 0;
    const scrollWidth = scrollContainer.scrollWidth / 2;

    const scroll = () => {
      scrollPos += 0.5;
      if (scrollPos >= scrollWidth) {
        scrollPos = 0;
      }
      if (scrollContainer) {
        scrollContainer.style.transform = `translateX(-${scrollPos}px)`;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const logos = [
    "/assets/images/logos/logo_authentica.png",
    "/assets/images/logos/logo_codeverify.png",
    "/assets/images/logos/logo_hometrics.png",
    "/assets/images/logos/logo_leadlink.png",
    "/assets/images/logos/logo_trendswap.png",
    "/assets/images/logos/logo_wanted.png",
    "/assets/images/logos/logo_youtubecondensed.png",
    "/assets/images/logos/logo_zapai.png",
  ];

  return (
    <Card className="w-full bg-black border-neutral-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div ref={containerRef} className="w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="flex items-center gap-12 whitespace-nowrap"
            style={{ width: "fit-content" }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="w-32 h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              >
                <img
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}