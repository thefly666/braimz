import './App.css';
import { SplineSceneBasic } from './components/SplineSceneBasic';
import { NavBarDemo } from './components/NavBarDemo';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';
import { AISolutionsSection } from './components/AISolutionsSection';
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
      <ServicesSection />
      <AISolutionsSection />
      <PricingSection />
      <Footer />
    </div>
  );
}

export default App;