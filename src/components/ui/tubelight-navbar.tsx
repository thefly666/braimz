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
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-end items-center py-6">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#558dca] transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            {items.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors",
                  activeSection === item.url.slice(1)
                    ? "text-[#558dca]"
                    : "text-white hover:text-[#558dca]"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </a>
            ))}
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
                  className={cn(
                    "flex items-center gap-2 py-2 text-base font-medium transition-colors",
                    activeSection === item.url.slice(1)
                      ? "text-[#558dca]"
                      : "text-white hover:text-[#558dca]"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}