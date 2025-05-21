import { Card } from "@/components/ui/card"

export function Logos3() {
  const logos = [
    "/assets/images/logos/logo_authentica.png",
    "/assets/images/logos/logo_codeverify.png",
    "/assets/images/logos/logo_hometrics.png",
    "/assets/images/logos/logo_leadlink.png",
    "/assets/images/logos/logo_trendswap.png",
    "/assets/images/logos/logo_wanted.png",
    "/assets/images/logos/logo_youtubecondensed.png",
    "/assets/images/logos/logo_zapai.png"
  ];

  return (
    <div className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Card className="w-full bg-black/50 border-neutral-800 overflow-hidden">
          <div className="relative flex overflow-x-hidden">
            <div className="py-12 animate-scroll flex space-x-16 whitespace-nowrap">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="h-8 w-auto object-contain opacity-50"
                />
              ))}
              {logos.map((logo, index) => (
                <img
                  key={`duplicate-${index}`}
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="h-8 w-auto object-contain opacity-50"
                />
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}