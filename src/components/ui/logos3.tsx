import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from 'embla-carousel-auto-scroll'

const logos = [
  { src: "/src/assets/images/logos/logo_authentica.png", alt: "Authentica" },
  { src: "/src/assets/images/logos/logo_codeverify.png", alt: "CodeVerify" },
  { src: "/src/assets/images/logos/logo_hometrics.png", alt: "Hometrics" },
  { src: "/src/assets/images/logos/logo_leadlink.png", alt: "LeadLink" },
  { src: "/src/assets/images/logos/logo_trendswap.png", alt: "TrendSwap" },
  { src: "/src/assets/images/logos/logo_wanted.png", alt: "Wanted" },
  { src: "/src/assets/images/logos/logo_youtubecondensed.png", alt: "YouTube Condensed" },
  { src: "/src/assets/images/logos/logo_zapai.png", alt: "ZapAI" }
]

export function Logos3() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [AutoScroll()])

  return (
    <div className="w-full bg-black py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black/50 border border-neutral-800 hover:border-[#558dca]/50 transition-colors duration-300 rounded-lg p-8">
          <div className="flex justify-center items-center gap-8 overflow-hidden">
            <div className="flex items-center gap-8 animate-scroll">
              {logos.map((Logo, index) => (
                <div className="w-48 h-12 flex items-center justify-center">
                  <img src="/src/assets/images/logos/logo_authentica.png" alt="Authentica" className="h-12 w-auto object-contain" />
                </div>
                <div className="w-48 h-12 flex items-center justify-center">
                  <img src="/src/assets/images/logos/logo_codeverify.png" alt="CodeVerify" className="h-12 w-auto object-contain" />
                </div>
                <div className="w-48 h-12 flex items-center justify-center">
                  <img src="/src/assets/images/logos/logo_hometrics.png" alt="Hometrics" className="h-12 w-auto object-contain" />
                </div>
                <div className="w-48 h-12 flex items-center justify-center">
                  <img src="/src/assets/images/logos/logo_leadlink.png" alt="LeadLink" className="h-12 w-auto object-contain" />
                </div>
                <div className="w-48 h-12 flex items-center justify-center">
                  <img src="/src/assets/images/logos/logo_trendswap.png" alt="TrendSwap" className="h-12 w-auto object-contain" />
                </div>
                <div className="w-48 h-12 flex items-center justify-center">
                  <img src="/src/assets/images/logos/logo_wanted.png" alt="Wanted" className="h-12 w-auto object-contain" />
                </div>
                <div className="w-48 h-12 flex items-center justify-center">
                  <img src="/src/assets/images/logos/logo_youtubecondensed.png" alt="YouTube Condensed" className="h-12 w-auto object-contain" />
                </div>
                <div className="w-48 h-12 flex items-center justify-center">
                  <img src="/src/assets/images/logos/logo_zapai.png" alt="ZapAI" className="h-12 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}