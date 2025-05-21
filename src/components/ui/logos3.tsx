import { Card } from "@/components/ui/card"

const logos = [
  { src: "/assets/images/logos/logo_authentica.png", alt: "Authentica" },
  { src: "/assets/images/logos/logo_codeverify.png", alt: "CodeVerify" },
  { src: "/assets/images/logos/logo_hometrics.png", alt: "Hometrics" },
  { src: "/assets/images/logos/logo_leadlink.png", alt: "LeadLink" },
  { src: "/assets/images/logos/logo_trendswap.png", alt: "TrendSwap" },
  { src: "/assets/images/logos/logo_wanted.png", alt: "Wanted" },
  { src: "/assets/images/logos/logo_youtubecondensed.png", alt: "YouTube Condensed" },
  { src: "/assets/images/logos/logo_zapai.png", alt: "ZapAI" }
];

export function Logos3() {
  return (
    <section className="w-full bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Card className="bg-black/50 border-neutral-800 overflow-hidden">
          <div className="relative flex overflow-x-hidden">
            <div className="animate-scroll py-8 flex space-x-16 whitespace-nowrap">
              {logos.concat(logos).map((logo, idx) => (
                <img
                  key={idx}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                />
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}