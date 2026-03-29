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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Braimz",
  url: "https://braimz.com",
  logo: "https://braimz.com/assets/images/Briamz Logo White.png",
  description:
    "Braimz is an AI oversight and software development firm. We build our own products, direct emerging technology, and help businesses navigate what's coming before it arrives.",
  email: "hello@braimz.com",
  sameAs: ["https://github.com/thefly666/braimz"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@braimz.com",
    contactType: "customer service",
  },
};

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
