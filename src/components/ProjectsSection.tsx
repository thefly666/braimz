import { Card } from "@/components/ui/card"
import { Briefcase, LineChart, ClipboardCheck, ListTodo } from "lucide-react"

const strategies = [
  {
    title: "Impact Analysis",
    description: "Identify your key workflows and content types, which steps in your workflows benefit the most from generative AI and the level of efficiency improvement you can expect.",
    icon: LineChart
  },
  {
    title: "Readiness Assessment",
    description: "Determine your organization's aptitude for adopting Generative AI and which teams are best positioned to pilot the adoption of AI. We evaluate your infrastructure, team skills, and processes to ensure successful AI adoption.",
    icon: ClipboardCheck
  },
  {
    title: "Prioritized Action Plan",
    description: "Evaluate and select AI tools based on the most impactful workflows, integration requirements and your company's data strategy. We focus on scalability and seamless integration to align with your business goals.",
    icon: ListTodo
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white/50 mb-6">AI Strategy</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
          {strategies.map((strategy) => (
            <Card key={strategy.title} className="bg-black/50 border-neutral-800 overflow-hidden group hover:border-[#558dca]/50 transition-colors duration-300">
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <strategy.icon className="w-6 h-6 text-[#558dca]" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-neutral-200 leading-snug">
                    {strategy.title}
                  </h3>
                </div>
                <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                  {strategy.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}