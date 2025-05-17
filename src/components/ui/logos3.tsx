import logoAuthentica from '../../assets/logos/logo_authentica.png';
import logoCodeVerify from '../../assets/logos/logo_codeverify.png';
import logoHometrics from '../../assets/logos/logo_hometrics.png';
import logoLeadLink from '../../assets/logos/logo_leadlink.png';
import logoTrendSwap from '../../assets/logos/logo_trendswap.png';
import logoWanted from '../../assets/logos/logo_wanted.png';
import logoYouTubeCondensed from '../../assets/logos/logo_youtubecondensed.png';
import logoZapAI from '../../assets/logos/logo_zapai.png';

export function Logos3() {
  return (
    <div className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-scroll flex space-x-16 py-12">
            <img src={logoAuthentica} alt="Authentica" className="max-h-12 w-auto object-contain" />
            <img src={logoCodeVerify} alt="CodeVerify" className="max-h-12 w-auto object-contain" />
            <img src={logoHometrics} alt="Hometrics" className="max-h-12 w-auto object-contain" />
            <img src={logoLeadLink} alt="LeadLink" className="max-h-12 w-auto object-contain" />
            <img src={logoTrendSwap} alt="TrendSwap" className="max-h-12 w-auto object-contain" />
            <img src={logoWanted} alt="Wanted" className="max-h-12 w-auto object-contain" />
            <img src={logoYouTubeCondensed} alt="YouTube Condensed" className="max-h-12 w-auto object-contain" />
            <img src={logoZapAI} alt="ZapAI" className="max-h-12 w-auto object-contain" />
          </div>
          <div className="animate-scroll flex space-x-16 py-12" aria-hidden="true">
            <img src={logoAuthentica} alt="Authentica" className="max-h-12 w-auto object-contain" />
            <img src={logoCodeVerify} alt="CodeVerify" className="max-h-12 w-auto object-contain" />
            <img src={logoHometrics} alt="Hometrics" className="max-h-12 w-auto object-contain" />
            <img src={logoLeadLink} alt="LeadLink" className="max-h-12 w-auto object-contain" />
            <img src={logoTrendSwap} alt="TrendSwap" className="max-h-12 w-auto object-contain" />
            <img src={logoWanted} alt="Wanted" className="max-h-12 w-auto object-contain" />
            <img src={logoYouTubeCondensed} alt="YouTube Condensed" className="max-h-12 w-auto object-contain" />
            <img src={logoZapAI} alt="ZapAI" className="max-h-12 w-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}