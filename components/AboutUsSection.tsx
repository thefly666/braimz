import { GlowingEffect } from "@/components/ui/glowing-effect";

export function AboutUsSection() {
  return (
    <section id="about" className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-white/50 mb-4">
            About Us
          </h2>
        </div>

        <div className="relative rounded-2xl border border-neutral-800 p-2">
          <GlowingEffect
            spread={60}
            glow={true}
            disabled={false}
            proximity={80}
            inactiveZone={0.01}
            borderWidth={2}
          />
          <div className="relative rounded-xl border border-neutral-800 bg-black/50 px-8 py-10 sm:px-14 sm:py-12">
            <p className="text-white/60 text-base sm:text-lg leading-relaxed text-center max-w-4xl mx-auto">
              Braimz is an AI oversight and software development firm. We sit
              at the frontier of artificial intelligence — building our own
              products, tracking what&apos;s emerging, and directing businesses
              toward the technologies that will define their future. We work
              exclusively with referred clients, not because we have to, but
              because deep, focused partnerships are how we do our best work.
              If you&apos;ve been referred, we&apos;re ready to talk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
