import { NavBarDemo } from "@/components/NavBarDemo";
import { SplineSceneBasic } from "@/components/SplineSceneBasic";
import { Logos3 } from "@/components/ui/logos3";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutUsSection } from "@/components/AboutUsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      <NavBarDemo />

      <main>
        {/* Hero — ErrorBoundary only wraps Spline so a crash doesn't hide the rest */}
        <ErrorBoundary>
          <SplineSceneBasic />
        </ErrorBoundary>

        <Logos3 />
        <ProjectsSection />
        <AboutUsSection />
        <ServicesSection />
        <PricingSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
