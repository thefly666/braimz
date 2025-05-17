import logoAuthentica from '../../assets/logos/logo_authentica.png'
import logoCodeVerify from '../../assets/logos/logo_codeverify.png'
import logoHometrics from '../../assets/logos/logo_hometrics.png'
import logoLeadLink from '../../assets/logos/logo_leadlink.png'
import logoTrendSwap from '../../assets/logos/logo_trendswap.png'
import logoWanted from '../../assets/logos/logo_wanted.png'
import logoYouTubeCondensed from '../../assets/logos/logo_youtubecondensed.png'
import logoZapAI from '../../assets/logos/logo_zapai.png'

export function Logos3() {
  return (
    <div className="w-full bg-black overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex gap-8 items-center">
          <div className="flex gap-8 items-center">
            <img src={logoAuthentica} alt="Authentica" className="h-12 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src={logoCodeVerify} alt="CodeVerify" className="h-12 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src={logoHometrics} alt="Hometrics" className="h-12 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src={logoLeadLink} alt="LeadLink" className="h-12 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src={logoTrendSwap} alt="TrendSwap" className="h-12 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src={logoWanted} alt="Wanted" className="h-12 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src={logoYouTubeCondensed} alt="YouTubeCondensed" className="h-12 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src={logoZapAI} alt="ZapAI" className="h-12 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
          </div>
        </div>
      </div>
    </div>
  )
}