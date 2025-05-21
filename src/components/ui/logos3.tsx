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
    <section className="w-full bg-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="flex gap-8 animate-scroll">
          <div className="flex-none flex gap-8">
            <div className="w-48 h-12 flex items-center justify-center">
              {logos.map((logo, index) => (
                <div key={index} className="w-48 h-12 flex items-center justify-center">
                  <img src={logo.src} alt={logo.alt} className="h-12 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}