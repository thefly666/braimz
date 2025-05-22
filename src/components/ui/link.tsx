import * as React from "react"
import { cn } from "@/lib/utils"

const Link = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, children, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(
        "transition-colors hover:text-foreground/80",
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
})
Link.displayName = "Link"

export { Link }