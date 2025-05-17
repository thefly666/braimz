"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: React.ElementType
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)

  return (
    <nav className="w-full py-6">
      <div className="max-w-fit mx-auto px-8">
        <div className="flex items-center justify-center gap-2">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <a
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative px-4 py-2 rounded-lg transition-colors duration-200",
                  "hover:bg-white/5",
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                )}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                </span>
                {isActive && (
                  <motion.div
                    layoutId="bubble"
                    className="absolute inset-0 bg-white/10 rounded-lg -z-0"
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6
                    }}
                  />
                )}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}