import './App.css';
import { SplineSceneBasic } from './components/SplineSceneBasic';
import { NavBarDemo } from './components/NavBarDemo';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';
import { AISolutionsSection } from './components/AISolutionsSection';
import { Carousel } from './components/ui/carousel';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      <NavBarDemo />
      <ErrorBoundary>
        <main>
          <SplineSceneBasic />
          <Carousel />
        </main>
      </ErrorBoundary>
      <ProjectsSection />
      <ServicesSection />
      <AISolutionsSection />
      <PricingSection />
      <Footer />
    </div>
  );
}