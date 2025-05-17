import { Card } from "@/components/ui/card"
import { Wand2, Sparkles, Palette, MessageSquareText } from "lucide-react"

const solutions = [
  {
    title: "Content Automation",
    description: "Automated content production across channels, segments, and geographies",
    icon: Wand2
  },
  {
    title: "Product Photography",
    description: "Scale product shoots to 1000s of SKUs and integrate into your CMS/DAM system.",
    icon: Sparkles
  },
  {
    title: "Custom Image & Illustration Models",
    description: "Design and create custom image and illustration models, training your designers on how to use these new tools.",
    icon: Palette
  },
  {
    title: "Custom Large Language Models",
    description: "Create custom models for copy that speaks your tone of voice and reflects your style guidelines.",
    icon: MessageSquareText
  }
]

export function AISolutionsSection() {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white/50 mb-6">AI Solutions</h2>
          <p className="text-white/60 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Your people know your brand and your AI should too. We create custom solutions that scale your brand and build the foundations for consistent quality across your visuals and messaging.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {solutions.map((solution) => (
            <Card key={solution.title} className="bg-black/50 border-neutral-800 overflow-hidden group hover:border-[#558dca]/50 transition-colors duration-300">
              <div className="p-6 sm:p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#558dca]/10 flex items-center justify-center mb-6 group-hover:bg-[#558dca]/20 transition-colors duration-300">
                  <solution.icon className="w-8 h-8 text-[#558dca]" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-neutral-200 leading-snug">
                    {solution.title}
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}