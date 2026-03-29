import { Card } from "@/components/ui/card";
import { Layers, ScanEye, Rocket } from "lucide-react";

const pillars = [
  {
    title: "We Build",
    description:
      "We design and develop our own AI-powered software products from the ground up. VidVana and others in our pipeline are built in-house, giving us deep, real-world insight into what it takes to ship AI products that work.",
    icon: Layers,
  },
  {
    title: "We Oversee",
    description:
      "We continuously monitor the AI and emerging software landscape so our clients don't have to. Our team tracks what's maturing, what's hype, and what's genuinely worth adopting — then translates that into clear direction.",
    icon: ScanEye,
  },
  {
    title: "We Deploy",
    description:
      "We take the right technologies and integrate them into real business environments. From initial assessment to full implementation, we make sure AI actually lands — not just in theory, but in practice.",
    icon: Rocket,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-white/50 mb-4">
            How We Operate
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {pillars.map((s) => (
            <Card
              key={s.title}
              className="bg-black/50 border-neutral-800 hover:border-[#558dca]/50 transition-colors duration-300"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <s.icon className="w-6 h-6 text-[#558dca] shrink-0" />
                  <h3 className="text-xl font-semibold text-neutral-200">
                    {s.title}
                  </h3>
                </div>
                <p className="text-white/55 text-sm sm:text-base leading-relaxed">
                  {s.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
