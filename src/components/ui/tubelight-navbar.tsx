import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: React.ElementType
}

interface NavBarProps {
  items: NavItem[]
}

export function NavBar({ items }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full flex justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex items-center justify-center h-16">
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-12">
            {items.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className="group relative px-4 py-2 text-base text-neutral-400 transition-colors hover:text-neutral-50"
              >
                <span className="flex items-center gap-2">
                  {item.name}
                  <item.icon className="w-4 h-4" />
                </span>
                <div className="absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-neutral-500/70 to-transparent scale-x-0 transition-transform group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-300 hover:text-white focus:outline-none absolute right-4"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={cn(
              "absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm md:hidden transition-all duration-300 ease-in-out",
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            )}
          >
            <div className="px-4 py-3">
              {items.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between space-x-2 rounded-lg p-3 text-sm font-medium text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-50"
                >
                  <span>{item.name}</span>
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}