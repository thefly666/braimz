import { cn } from "@/lib/utils"

const logos = [
  { src: "/images/logos/logo_authentica.png", alt: "Authentica" },
  { src: "/images/logos/logo_codeverify.png", alt: "CodeVerify" },
  { src: "/images/logos/logo_hometrics.png", alt: "Hometrics" },
  { src: "/images/logos/logo_leadlink.png", alt: "LeadLink" },
  { src: "/images/logos/logo_trendswap.png", alt: "TrendSwap" },
  { src: "/images/logos/logo_wanted.png", alt: "Wanted" },
  { src: "/images/logos/logo_youtubecondensed.png", alt: "YouTube Condensed" },
  { src: "/images/logos/logo_zapai.png", alt: "ZapAI" }
]

export function Logos3() {
  return (
    <div className="w-full bg-black/90 py-12 overflow-hidden">
      <div className="relative w-full">
        {/* First row of logos */}
        <div className="flex space-x-12 animate-scroll">
          {logos.concat(logos).map((logo, idx) => (
            <div
              key={idx}
              className={cn(
                "shrink-0 flex items-center justify-center",
                "w-[200px] h-[80px] rounded-lg"
              )}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-[160px] max-h-[60px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}