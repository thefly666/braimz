import { Card } from "@/components/ui/card";
import {
  Layers,
  Lightbulb,
  Map,
  ScanEye,
  Database,
  FileJson,
} from "lucide-react";

const services = [
  {
    title: "Software Development",
    description:
      "We build custom AI-powered software and applications for clients from the ground up. Whether you have a fully formed idea or just a direction, we take it from concept to a working, deployable product.",
    icon: Layers,
    wide: false,
  },
  {
    title: "Idea Generation & Validation",
    description:
      "We help surface, shape, and stress-test product ideas before a single line of code is written. Our process filters out what won't work and sharpens what will, saving time and resources from day one.",
    icon: Lightbulb,
    wide: false,
  },
  {
    title: "Product Strategy",
    description:
      "We define what to build and why, grounded in real AI landscape knowledge. Our strategic direction ensures your product investments align with where technology is actually heading, not where it was.",
    icon: Map,
    wide: false,
  },
  {
    title: "AI Oversight & Direction",
    description:
      "We monitor the AI landscape continuously and translate it into clear, actionable guidance for your business. You stay ahead of what's emerging without having to track it yourself.",
    icon: ScanEye,
    wide: false,
  },
  {
    title: "AI System Integration",
    description:
      "We connect AI capabilities to your existing tools, systems, and workflows with minimal disruption. Every integration is built for scalability so it grows with your business rather than against it.",
    icon: Database,
    wide: false,
  },
  {
    title: "Data Strategy & Cleanup",
    description:
      "We organize, clean, and structure your data so AI systems can actually use it. Good AI output starts with good data — we make sure the foundation is solid before anything else is built on top.",
    icon: FileJson,
    wide: false,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-white/50 mb-4">
            Our Services
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            From idea to deployment — we cover the full spectrum.
          </p>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {services.slice(0, 3).map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.slice(3, 6).map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  wide: boolean;
}) {
  return (
    <Card className="bg-black/50 border-neutral-800 hover:border-[#558dca]/50 transition-colors duration-300 h-full">
      <div className="p-6 sm:p-8 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <Icon className="w-8 h-8 text-[#558dca] shrink-0" />
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            {title}
          </h3>
        </div>
        <p className="text-white/55 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
}
