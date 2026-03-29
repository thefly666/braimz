const logos = [
  { src: "/assets/images/logos/logo_authentica.png", alt: "AuthenticaAI" },
  { src: "/assets/images/logos/logo_codeverify.png", alt: "CodeVerify" },
  { src: "/assets/images/logos/logo_hometrics.png", alt: "Hometrics" },
  { src: "/assets/images/logos/logo_leadlink.png", alt: "LeadLink" },
  { src: "/assets/images/logos/logo_trendswap.png", alt: "TrendSwap" },
  { src: "/assets/images/logos/logo_vidvana.svg", alt: "VidVana" },
  { src: "/assets/images/logos/logo_wanted.png", alt: "Wanted" },
  { src: "/assets/images/logos/logo_youtubecondensed.png", alt: "YouTube Condensed" },
  { src: "/assets/images/logos/logo_zapai.png", alt: "ZapAI" },
];

export function Logos3() {
  return (
    <div className="w-full bg-black py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <p className="text-center text-neutral-600 text-sm font-medium tracking-widest uppercase mb-6">
          What we&apos;re building
        </p>

        {/* Scrolling strip */}
        <div className="relative overflow-hidden rounded-xl border border-neutral-800">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10"
            style={{ background: "linear-gradient(to right, black, transparent)" }} />
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10"
            style={{ background: "linear-gradient(to left, black, transparent)" }} />

          {/* Two identical rows side-by-side; translate -50% loops seamlessly */}
          <div className="flex animate-scroll-fast md:animate-scroll py-8">
            {[...logos, ...logos].map((logo, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="h-7 w-auto object-contain opacity-30 hover:opacity-60 transition-opacity duration-300 mx-10 shrink-0 brightness-0 invert"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
