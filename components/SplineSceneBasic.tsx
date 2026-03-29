"use client";

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { useEffect, useState } from "react";

export function SplineSceneBasic() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="relative w-full bg-black overflow-hidden"
      style={{ minHeight: "min(80vh, 700px)" }}
    >
      <Spotlight className="-top-40 left-1/2 lg:-top-20" fill="white" />

      {/* mouse-follow radial glow */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition duration-300"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(85,141,202,0.07), transparent 60%)`,
        }}
      />

      {/* Robot — absolutely fills the right 58% of the section, clipped by overflow-hidden */}
      <div className="absolute right-0 top-0 bottom-0 w-[58%] hidden lg:block">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Text — takes 42% of width on desktop, full width on mobile */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 h-full">
        <div className="w-full lg:w-[42%] flex flex-col justify-center items-center lg:items-start py-16 lg:py-20 min-h-[inherit]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/Briamz Logo White.png"
            alt="Braimz Logo"
            className="h-10 w-auto object-contain mb-8 mx-auto lg:mx-0"
          />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#558dca] text-center lg:text-left leading-tight">
            We Think Ahead
          </h1>
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-neutral-300 text-center lg:text-left max-w-lg leading-relaxed">
            Braimz sits at the intersection of AI oversight and software
            development. We build our own products, direct emerging technology,
            and help businesses navigate what&apos;s coming before it arrives.
          </p>
          <div className="mt-8 lg:mt-10 mx-auto lg:mx-0">
            <a
              href="mailto:hello@braimz.com?subject=Inquiry"
              className="inline-block px-10 py-3 bg-[#558dca] text-white rounded-lg font-medium transition-colors hover:bg-[#558dca]/70 text-base lg:text-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
