import { cn } from "@/lib/utils";
import { Factory } from "lucide-react";

const logos = [
  { src: "/images/logos/logo_authentica.png", alt: "Authentica" },
  { src: "/images/logos/logo_codeverify.png", alt: "CodeVerify" },
  { src: "/images/logos/logo_hometrics.png", alt: "Hometrics" },
  { src: "/images/logos/logo_leadlink.png", alt: "LeadLink" },
  { src: "/images/logos/logo_trendswap.png", alt: "TrendSwap" },
  { src: "/images/logos/logo_wanted.png", alt: "Wanted" },
  { src: "/images/logos/logo_youtubecondensed.png", alt: "YouTube Condensed" },
  { src: "/images/logos/logo_zapai.png", alt: "ZapAI" }
];

export function Logos3() {
  return (
    <div className="w-full py-12 bg-black overflow-hidden">
      <div className="relative w-full">
        <div className="flex space-x-8 animate-scroll whitespace-nowrap">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-8 w-auto object-contain opacity-50 hover:opacity-75 transition-opacity"
            />
          ))}
          {logos.map((logo, i) => (
            <img
              key={`repeat-${i}`}
              src={logo.src}
              alt={logo.alt}
              className="h-8 w-auto object-contain opacity-50 hover:opacity-75 transition-opacity"
            />
          ))}
        </div>
      </div>
    </div>
  )
}