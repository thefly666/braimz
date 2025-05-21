import { Card } from "@/components/ui/card"

const logos = [
  {
    name: "LeadLink",
    url: "https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "TrendSwap",
    url: "https://images.pexels.com/photos/2312371/pexels-photo-2312371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Wanted",
    url: "https://images.pexels.com/photos/2312372/pexels-photo-2312372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "YouTube Condensed",
    url: "https://images.pexels.com/photos/2312373/pexels-photo-2312373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "ZapAI",
    url: "https://images.pexels.com/photos/2312374/pexels-photo-2312374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
]

export function Logos3() {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Card className="bg-black/50 border-neutral-800 overflow-hidden">
          <div className="relative flex overflow-x-hidden">
            <div className="py-12 animate-scroll flex space-x-8 whitespace-nowrap">
              {logos.concat(logos).map((logo, idx) => (
                <div key={idx} className="w-48 h-12 flex items-center justify-center">
                  <img 
                    src={logo.url} 
                    alt={logo.name} 
                    className="h-8 w-auto object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}