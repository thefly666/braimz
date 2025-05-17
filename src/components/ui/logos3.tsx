import { cn } from "@/lib/utils";

const logos = [
  {
    src: "/images/logos/logo_authentica.png",
    alt: "Authentica Logo"
  },
  {
    src: "/images/logos/logo_codeverify.png",
    alt: "CodeVerify Logo"
  },
  {
    src: "/images/logos/logo_hometrics.png",
    alt: "Hometrics Logo"
  },
  {
    src: "/images/logos/logo_leadlink.png",
    alt: "LeadLink Logo"
  },
  {
    src: "/images/logos/logo_trendswap.png",
    alt: "TrendSwap Logo"
  },
  {
    src: "/images/logos/logo_wanted.png",
    alt: "Wanted Logo"
  },
  {
    src: "/images/logos/logo_youtubecondensed.png",
    alt: "YouTube Condensed Logo"
  },
  {
    src: "/images/logos/logo_zapai.png",
    alt: "ZapAI Logo"
  }
];

export function Logos3() {
  return (
    <div className="w-full bg-black py-12 overflow-hidden">
      <div className="relative w-full">
        <div className="flex space-x-16 animate-scroll">
          {logos.concat(logos).map((logo, idx) => (
            <div
              key={idx}
              className="flex-none w-[200px] h-[100px] flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={cn(
                  "max-w-[160px] max-h-[60px] object-contain",
                  "opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}