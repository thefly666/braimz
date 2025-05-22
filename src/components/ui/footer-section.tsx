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

export default function Footerdemo() {
  return (
    <footer className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Newsletter */}
          <div className="col-span-1">
            <img 
              src="/assets/images/Briamz Logo White.png"
              alt="Braimz Logo"
              className="h-12 w-auto mb-6"
            />
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Subscribe to our newsletter</h3>
              <p className="text-neutral-400">Stay updated with our latest news and updates.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-black/50 border border-neutral-800 rounded-lg text-white"
                />
                <button className="px-6 py-2 bg-[#558dca] text-white rounded-lg hover:bg-[#558dca]/80 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-neutral-400">
                <a href="tel:+12892129006" className="no-underline text-neutral-400 hover:text-[#558dca]">
                  Phone: (289) 212-9006
                </a>
              </p>
              <p className="text-neutral-400">
                <a href="mailto:hello@braimz.com?subject=Inquiry" className="no-underline text-neutral-400 hover:text-[#558dca]">
                  Email: hello@braimz.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-[#558dca]">LinkedIn</a>
              <a href="#" className="text-neutral-400 hover:text-[#558dca]">Twitter</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <p className="text-neutral-400 text-left">© 2025 Braimz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}