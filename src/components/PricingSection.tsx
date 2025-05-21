import { Card } from "@/components/ui/card"
import { Check, CreditCard } from "lucide-react"

const features = [
  "Access to all creative services",
  "Dedicated creative project manager and customer success",
  "Turnaround times starting at 12 hours",
  "Global timezone coverage",
  "AI-enhanced services",
  "Unlimited API calls to integrations",
  "Unlimited users and asset storage",
  "Support for multiple brands",
  "Access to Superspace platform"
]

export function PricingSection() {
  return (
    <section id="pricing" className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white/50 mb-6">Pricing</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Pricing info */}
          <Card className="bg-black/50 border-neutral-800 p-8 sm:p-10 group hover:border-[#558dca]/50 transition-colors duration-300">
            <div className="inline-block px-4 py-1 rounded-full bg-[#558dca]/10 text-[#558dca] text-sm font-medium mb-6 group-hover:bg-[#558dca]/20 transition-colors duration-300">
              STARTING AT $6,000 PER MONTH
            </div>
            
            <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Flexible plans for every business
            </h3>
            
            <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-8">
              From basic asset production and motion graphics to video ads and brand strategy, 
              a Superside subscription lets you choose how you want to use your budget every 
              month based on your business needs.
            </p>
            
            <p className="text-white/60 text-base mb-8">
              Typical subscriptions range from $6,000 to $100,000 USD/month.
            </p>
            
            <button className="w-full py-4 bg-[#558dca] hover:bg-[#558dca]/80 text-white font-medium rounded-lg transition-colors">
              Get in touch
            </button>
          </Card>

          {/* Right side - Features */}
          <Card className="bg-black/50 border-neutral-800 p-8 sm:p-10 group hover:border-[#558dca]/50 transition-colors duration-300">
            <h4 className="text-neutral-200 text-2xl font-semibold mb-2">Included in <em>all plans</em>:</h4>
            
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#558dca] flex-shrink-0" />
                  <span className="text-neutral-400">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}