import { Card } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import { Link } from "@/components/ui/link"

export function Footerdemo() {
  return (
    <footer className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto">
        <Card className="bg-black/50 border-neutral-800 p-8 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-4">
              <img 
                src="/assets/images/Briamz Logo White.png"
                alt="Braimz Logo"
                className="h-12 w-auto mb-6"
              />
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                We are an AI consulting firm that seamlessly integrates artificial intelligence into existing technologies and workflows, enhancing efficiency and maximizing ROI.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-white/60 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/60 hover:text-white transition-colors">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-white/60 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-5">
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#558dca] mt-1" />
                  <p className="text-white/60">
                    123 AI Innovation Drive<br />
                    Silicon Valley, CA 94025
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#558dca]" />
                  <p>
                    <a href="tel:+12892129006" className="hover:text-[#558dca] transition-colors">
                      Phone: (289) 212-9006
                    </a>
                  </p>
                  <p>
                    <a 
                      href="mailto:hello@braimz.com?subject=Inquiry" 
                      className="hover:text-[#558dca] transition-colors"
                    >
                      Email: hello@braimz.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-neutral-800">
            <p className="text-white/60 text-sm">
              © 2025 Braimz. All rights reserved.
            </p>
          </div>
        </Card>
      </div>
    </footer>
  )
}