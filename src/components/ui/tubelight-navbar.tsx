import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

interface NavItem {
  name: string
  url: string
  icon: React.ElementType
}

interface NavBarProps {
  items: NavItem[]
}

export function NavBar({ items }: NavBarProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => 
        document.querySelector(item.url === '#' ? 'header' : item.url)
      )
      
      const scrollPosition = window.scrollY + 100

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.clientHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveIndex(index)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-end md:justify-center items-center h-16">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            {items.map((item, index) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.url}
                  className={`group flex items-center space-x-2 text-sm font-medium relative px-3 py-2 transition-colors ${
                    activeIndex === index ? 'text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {activeIndex === index && (
                    <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-[#558dca]/0 via-[#558dca]/70 to-[#558dca]/0" />
                  )}
                </a>
              )
            })}
          </div>

          {/* Mobile navigation */}
          {isOpen && (
            <div className="absolute top-16 left-0 right-0 bg-black/95 border-b border-neutral-800 md:hidden">
              <div className="px-4 py-2 space-y-1">
                {items.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      className={`flex items-center space-x-2 px-3 py-2 text-base font-medium rounded-md ${
                        activeIndex === index ? 'text-white bg-neutral-800' : 'text-neutral-400'
                      }`}
                      onClick={() => {
                        setActiveIndex(index)
                        setIsOpen(false)
                      }}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}