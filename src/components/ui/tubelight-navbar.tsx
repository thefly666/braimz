import React from 'react'
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: React.ReactNode
}

interface NavBarProps {
  items: NavItem[]
}

export function NavBar({ items }: NavBarProps) {
  return (
    <nav className="fixed top-0 inset-x-0 h-16 bg-black/50 backdrop-blur-sm z-30">
      <div className="mx-auto max-w-7xl h-full">
        <div className="flex h-full items-center justify-center">
          <div className="hidden lg:flex items-center space-x-6">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className={cn(
                  "text-sm font-medium text-neutral-300 transition-colors hover:text-white flex items-center",
                  "relative py-2 px-4 rounded-full hover:bg-black/50"
                )}
              >
                <span className="flex items-center">
                  {item.icon}
                  <span>{item.name}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}