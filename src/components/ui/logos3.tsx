import { useEffect, useRef } from "react"

export function Logos3() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    const container = containerRef.current
    
    if (!scrollContainer || !container) return

    // Clone the content for seamless scrolling
    const content = container.innerHTML
    container.innerHTML = content + content

    const scroll = () => {
      if (scrollContainer.scrollLeft >= container.clientWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-black/50 backdrop-blur-sm py-8 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={scrollRef}
          className="overflow-x-hidden whitespace-nowrap"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div 
            ref={containerRef}
            className="inline-block whitespace-nowrap"
          >
            <img src="/assets/images/logos/logo_hometrics.png" alt="Hometrics" className="h-8 inline-block mx-12 opacity-50 hover:opacity-100 transition-opacity" />
            <img src="/assets/images/logos/logo_leadlink.png" alt="LeadLink" className="h-8 inline-block mx-12 opacity-50 hover:opacity-100 transition-opacity" />
            <img src="/assets/images/logos/logo_trendswap.png" alt="TrendSwap" className="h-8 inline-block mx-12 opacity-50 hover:opacity-100 transition-opacity" />
            <img src="/assets/images/logos/logo_wanted.png" alt="Wanted" className="h-8 inline-block mx-12 opacity-50 hover:opacity-100 transition-opacity" />
            <img src="/assets/images/logos/logo_youtubecondensed.png" alt="YouTube Condensed" className="h-8 inline-block mx-12 opacity-50 hover:opacity-100 transition-opacity" />
            <img src="/assets/images/logos/logo_zapai.png" alt="ZapAI" className="h-8 inline-block mx-12 opacity-50 hover:opacity-100 transition-opacity" />
            <img src="/assets/images/logos/logo_authentica.png" alt="Authentica" className="h-8 inline-block mx-12 opacity-50 hover:opacity-100 transition-opacity" />
            <img src="/assets/images/logos/logo_codeverify.png" alt="CodeVerify" className="h-8 inline-block mx-12 opacity-50 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </div>
  )
}