import logoAuthentica from '@/assets/logos/logo_authentica.png';
import logoCodeVerify from '@/assets/logos/logo_codeverify.png';
import logoHometrics from '@/assets/logos/logo_hometrics.png';
import logoLeadLink from '@/assets/logos/logo_leadlink.png';
import logoTrendSwap from '@/assets/logos/logo_trendswap.png';
import logoWanted from '@/assets/logos/logo_wanted.png';
import logoYouTubeCondensed from '@/assets/logos/logo_youtubecondensed.png';
import logoZapAI from '@/assets/logos/logo_zapai.png';

export function Logos3() {
  return (
    <div className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          <img src={logoAuthentica} alt="Authentica" className="h-8 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
          <img src={logoCodeVerify} alt="CodeVerify" className="h-8 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
          <img src={logoHometrics} alt="Hometrics" className="h-8 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
          <img src={logoLeadLink} alt="LeadLink" className="h-8 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
          <img src={logoTrendSwap} alt="TrendSwap" className="h-8 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
          <img src={logoWanted} alt="Wanted" className="h-8 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
          <img src={logoYouTubeCondensed} alt="YouTubeCondensed" className="h-8 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
          <img src={logoZapAI} alt="ZapAI" className="h-8 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
}