import { Card } from "@/components/ui/card"

export function AboutUsSection() {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white/50 mb-6">About Us</h2>
          <Card className="bg-black/50 border-neutral-800 p-8 sm:p-10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-[#558dca] mb-6 text-center">
              Unleashing Brilliance with Braimz
            </h3>
            <p className="text-white/60 text-lg sm:text-xl leading-relaxed">
              We're a rapidly growing AI consultancy specializing in tailored, innovative solutions that drive measurable results. Our team thrives on transforming businesses through AI, and due to overwhelming demand, we currently work exclusively with referred clients. This ensures we can dedicate our expertise to delivering exceptional, personalized outcomes. Our minimalist website reflects our philosophy, focusing on impactful service rather than flashy design. For inquiries from referred clients, please connect.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}