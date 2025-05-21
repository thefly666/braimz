import './App.css';
import { SplineSceneBasic } from './components/SplineSceneBasic';
import { NavBarDemo } from './components/NavBarDemo';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutUsSection } from './components/AboutUsSection';
import { Footer } from './components/Footer';
import { Logos3 } from './components/ui/logos3';
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
          <Logos3 />
        </main>
      </ErrorBoundary>
      <ProjectsSection />
      <AboutUsSection />
      <ServicesSection />
      <PricingSection />
      <Footer />
    </div>
  );
}

export default App;