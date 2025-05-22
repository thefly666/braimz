"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react"

function SplineSceneBasic() {
  return (
    <footer className="w-full bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-neutral-400">
                <a href="tel:+12892129006" className="no-underline hover:text-[#558dca] transition-colors">
                  Phone: (289) 212-9006
                </a>
              </p>
              <p className="text-neutral-400">
                <a href="mailto:hello@braimz.com?subject=Inquiry" className="no-underline hover:text-[#558dca] transition-colors">
                  Email: hello@braimz.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-[#558dca] transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-[#558dca] transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <p className="text-center text-neutral-400">
            © {new Date().getFullYear()} Braimz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { SplineSceneBasic }