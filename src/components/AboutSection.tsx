import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-black/90 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Box className="h-4 w-4" />}
            title="Full Stack Developer"
            description="Experienced in building modern web applications with React, Node.js, and cloud technologies."
          />
          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Settings className="h-4 w-4" />}
            title="Problem Solver"
            description="Passionate about finding elegant solutions to complex technical challenges."
          />
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Lock className="h-4 w-4" />}
            title="Security Focused"
            description="Implementing best practices for secure and scalable applications."
          />
          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Sparkles className="h-4 w-4" />}
            title="UI/UX Enthusiast"
            description="Creating beautiful and intuitive user interfaces with modern design principles."
          />
          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Search className="h-4 w-4" />}
            title="Continuous Learner"
            description="Always exploring new technologies and staying up-to-date with industry trends."
          />
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-neutral-800 bg-black/50 p-6 shadow-sm md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-neutral-800 bg-black/50 p-2 text-neutral-300">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-2xl leading-tight font-semibold font-sans tracking-[-0.04em] md:text-3xl md:leading-snug text-balance text-neutral-200">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-base leading-relaxed md:text-lg md:leading-relaxed text-neutral-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};