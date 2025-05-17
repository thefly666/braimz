import { GridPatternCard, GridPatternCardBody } from "@/components/ui/card-with-grid-pattern"

export function GridPatternCardDemo() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <GridPatternCard>
        <GridPatternCardBody>
         <h3 className="text-3xl sm:text-4xl font-bold mb-2 text-[#558dca]">
            Square Grid Pattern
          </h3>
         <p className="text-wrap text-lg text-neutral-400 leading-relaxed">
            A clean and structured pattern featuring a grid of squares. 
            The minimal design creates a subtle texture that adds depth 
            without overwhelming the content.
          </p>
        </GridPatternCardBody>
      </GridPatternCard>
    </div>
  )
}