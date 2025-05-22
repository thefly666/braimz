import { Card } from "@/components/ui/card"
import { Phone, Mail } from "lucide-react"

export default function Footerdemo() {
  return (
    <footer className="w-full py-12 bg-black">
      <Card className="bg-black/50 border-neutral-800 p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Description - 5 columns on desktop */}
          <div className="md:col-span-5 space-y-6">
            <img 
              src="/assets/images/Briamz Logo White.png"
              alt="Braimz Logo"
              className="h-8 w-auto"
            />
            <p className="text-white/70 text-sm leading-relaxed pr-4">
              Braimz is a leading AI consultancy delivering innovative solutions in strategy, integration, and content systems. We transform businesses with tailored AI expertise, working exclusively with referred clients to ensure exceptional results.
            </p>
          </div>

          {/* Quick Links - 3 columns on desktop */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/70 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info - 4 columns on desktop */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="tel:+1(555)123-4567" className="flex items-center text-white/70 hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                +1 (555) 123-4567
              </a>
              <a href="mailto:contact@braimz.ai" className="flex items-center text-white/70 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                contact@braimz.ai
              </a>
            </div>
          </div>
        </div>

        {/* Copyright - Full width */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <p className="text-white/70 text-sm">
            © 2025 Braimz. All rights reserved.
          </p>
        </div>
      </Card>
    </footer>
  )
}