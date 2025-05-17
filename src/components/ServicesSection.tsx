import { Card } from "@/components/ui/card"
import { Brain, Target, Database, MousePointer, FileText, Video, Share2, PresentationIcon, Lightbulb } from "lucide-react"

const services = [
  {
    title: "Brand Intelligence",
    description: "Craft a brand strategy fueled by AI-driven market analysis, customer sentiment tracking, and predictive consumer insights. We deliver brand architectures that are deeply informed, adaptive, and built for future growth.",
    icon: Brain, 
    span: "md:col-span-2 md:row-start-1 md:col-start-1"
  },
  {
    title: "Campaign Optimization",
    description: "Transform your marketing campaigns with AI-driven audience targeting, creative testing, and real-time performance optimization, ensuring maximum impact across every channel.",
    icon: Target,
    span: "md:col-span-1 md:row-start-1 md:col-start-3"
  },
  {
    title: "RAG Systems",
    description: "Unlock unparalleled information retrieval capabilities. We build custom RAG (Retrieval-Augmented Generation) pipelines that combine private knowledge bases and live data sources, delivering AI outputs grounded in verifiable facts — tailored for your business.",
    icon: Database,
    span: "md:col-span-1 md:row-start-1 md:col-start-4"
  },
  {
    title: "Predictive UX Design",
    description: "Design customer journeys powered by AI behaviour prediction. Our approach uses machine learning to shape websites, landing pages, and digital experiences that adapt dynamically to each visitor.",
    icon: MousePointer,
    span: "md:col-span-2 md:row-start-2 md:col-start-3"
  },
  {
    title: "AI Content Systems",
    description: "Deploy AI platforms that generate brand-aligned articles, email sequences, social content, and more. Every word and image is tuned to your voice, optimized for engagement, and scaled effortlessly.",
    icon: FileText,
    span: "md:col-span-1 md:row-start-2 md:col-start-1"
  },
  {
    title: "AI Video Production",
    description: "Bring your brand to life with cinematic AI video production. We combine AI scripting, voiceovers, editing, and enhancement tools to deliver custom videos faster — and with a human-quality finish.",
    icon: Video,
    span: "md:col-span-1 md:row-start-2 md:col-start-2"
  },
  {
    title: "Social Growth AI",
    description: "Harness AI to unlock organic and paid social media growth. We manage content creation, trend detection, scheduling, and optimization, ensuring your brand remains visible and relevant.",
    icon: Share2,
    span: "md:col-span-2 md:row-start-3 md:col-start-1"
  },
  {
    title: "Executive Presentations",
    description: "Develop persuasive pitch decks and keynote presentations with AI-assisted storytelling, design precision, and audience targeting strategies — elevating every executive interaction.",
    icon: PresentationIcon,
    span: "md:col-span-1 md:row-start-3 md:col-start-3"
  },
  {
    title: "Innovation Labs",
    description: "Partner with us to explore new product ideas, service innovations, and market expansion strategies using AI-assisted ideation, competitive intelligence, and go-to-market simulations.",
    icon: Lightbulb,
    span: "md:col-span-1 md:row-start-3 md:col-start-4"
  }
]

export function ServicesSection() {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white/50 mb-6">Our Services</h2>
          <p className="text-white/60 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive creative solutions tailored to your brand's unique needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-[repeat(3,minmax(320px,1fr))] gap-4 sm:gap-6">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className={`${service.span} bg-black/50 border-neutral-800 hover:border-[#558dca]/50 transition-colors duration-300`}
            >
              <div className="h-full p-8 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  {service.icon && <service.icon className="w-8 h-8 text-[#558dca]" />}
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-white/60 text-base leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}