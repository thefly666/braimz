import { Card } from "@/components/ui/card"

export function AboutUsSection() {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white/50 mb-6">About Us</h2>
        </div>
        
        <Card className="bg-black/50 border-neutral-800 hover:border-[#558dca]/50 transition-colors duration-300">
          <div className="h-full p-8 flex flex-col items-center">
            <div className="flex-grow">
              <p className="text-white/60 text-base leading-relaxed text-center max-w-7xl mx-auto">
                We're a rapidly growing AI consultancy specializing in tailored, innovative solutions that drive measurable results. Our team thrives on transforming businesses through AI, and due to overwhelming demand, we currently work exclusively with referred clients. This ensures we can dedicate our expertise to delivering exceptional, personalized outcomes. Our minimalist website reflects our philosophy, focusing on impactful service rather than flashy design. For inquiries from referred clients, please connect.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}