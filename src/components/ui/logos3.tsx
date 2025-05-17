import { cn } from "@/lib/utils";
import { Factory } from "lucide-react";

const logos = [
  { src: "/images/logos/logo_codeverify.png", alt: "CodeVerify" },
  { src: "/images/logos/logo_trendswap.png", alt: "TrendSwap" },
  { src: "/images/logos/logo_hometrics.png", alt: "Hometrics" },
  { src: "/images/logos/logo_wanted.png", alt: "Wanted" },
  { src: "/images/logos/logo_leadlink.png", alt: "LeadLink" },
  { src: "/images/logos/logo_authentica.png", alt: "AuthenticaAI" },
  { src: "/images/logos/logo_zapai.png", alt: "ZapAI" },
  { src: "/images/logos/logo_youtubecondensed.png", alt: "YouTube Condensed" }
];

export function Logos3() {
  return (
    <section className="w-full bg-black py-32 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Factory className="w-8 h-8 text-neutral-400" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#558dca] leading-tight">In Production</h2>
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <div className="animate-scroll flex space-x-16 items-center">
            {logos.map((logo) => (
              <div key={logo.name} className="flex-none">
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className={cn(
                    "h-8 w-auto object-contain grayscale opacity-50 hover:opacity-100 transition-opacity duration-300",
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}