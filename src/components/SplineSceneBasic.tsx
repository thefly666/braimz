import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { useEffect, useState } from "react"
 
export function SplineSceneBasic() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Card className="w-full min-h-[500px] sm:h-[65vh] bg-black relative overflow-hidden border-0 mx-auto px-8 sm:px-9 pt-20 pb-16">
      <Spotlight
        className="-top-40 left-1/2 md:-top-20"
        fill="white" 
      />
      <div
        className="pointer-events-none absolute inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.3), transparent 30%)`,
        }}
      />
      
      <div className="flex flex-col md:flex-row h-full max-w-7xl mx-auto">
        {/* Left content - Text */}
        <div className="w-full md:w-[40%] p-4 sm:p-6 md:p-8 flex flex-col justify-center items-center">
          <img 
            src="/assets/images/Braimz_Logo_White.png" 
            alt="Braimz Logo" 
            className="h-20 w-auto max-h-[80px] object-contain mb-8"
          />
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#558dca] text-center leading-tight">
            We Think Ahead
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-300 text-center max-w-lg leading-relaxed">
            We are an AI consulting firm that seamlessly integrates artificial intelligence into existing technologies and workflows, enhancing efficiency and maximizing ROI.
          </p>
          <button
            className="mt-8 sm:mt-[50px] px-8 sm:px-12 py-2.5 sm:py-3 bg-[#558dca] text-white rounded-lg font-medium transition-colors hover:bg-[#558dca]/70 text-base sm:text-lg"
          >
            Get in Touch
          </button>
        </div>
        
        {/* Right content - 3D Scene */}
        <div className="w-full md:w-[60%] relative flex items-center justify-center overflow-visible mt-8 md:mt-0 md:pl-8">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full object-contain scale-110 transform-gpu"
          />
        </div>
      </div>
    </Card>
  )
}