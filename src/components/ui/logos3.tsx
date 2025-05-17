import { cn } from "@/lib/utils"

export function Logos3() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-black py-20">
      <div className="w-full flex-none">
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none relative flex gap-6 py-4">
            <div className="animate-scroll flex min-w-full shrink-0 items-center justify-around gap-6">
              <img src="/images/logos/logo_authentica.png" alt="Authentica" className="h-8 w-auto object-contain" />
              <img src="/images/logos/logo_codeverify.png" alt="CodeVerify" className="h-8 w-auto object-contain" />
              <img src="/images/logos/logo_hometrics.png" alt="Hometrics" className="h-8 w-auto object-contain" />
              <img src="/images/logos/logo_leadlink.png" alt="LeadLink" className="h-8 w-auto object-contain" />
              <img src="/images/logos/logo_trendswap.png" alt="TrendSwap" className="h-8 w-auto object-contain" />
              <img src="/images/logos/logo_wanted.png" alt="Wanted" className="h-8 w-auto object-contain" />
              <img src="/images/logos/logo_youtubecondensed.png" alt="YouTube Condensed" className="h-8 w-auto object-contain" />
              <img src="/images/logos/logo_zapai.png" alt="ZapAI" className="h-8 w-auto object-contain" />
            </div>
            <div aria-hidden="true" className="animate-scroll flex min-w-full shrink-0 items-center justify-around gap-6">
              <img src="/images/logos/logo_authentica.png" alt="Authentica" className="h-8 w-auto object-contain" />
              <img src="/images/logos/logo_codeverify.png" alt="CodeVerify" className="h-8 w-auto object-contain" />
              <img src="/images/logos/logo_hometrics.png" alt="Hometrics" className="h-8 w-auto object-contain" />
              <img src="/images/logos/logo_leadlink.png" alt="LeadLink" className="h-8 w-auto object-contain" />
              <img src="/images/logos/logo_trendswap.png" alt="TrendSwap" className="h-8 w-auto object-contain" />
              <img src="/images/logos/logo_wanted.png" alt="Wanted" className="h-8 w-auto object-contain" />
              <img src="/images/logos/logo_youtubecondensed.png" alt="YouTube Condensed" className="h-8 w-auto object-contain" />
              <img src="/images/logos/logo_zapai.png" alt="ZapAI" className="h-8 w-auto object-contain" />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black" />
        </div>
      </div>
    </div>
  )
}