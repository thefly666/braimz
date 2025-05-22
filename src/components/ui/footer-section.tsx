import { Card } from "@/components/ui/card"
import { Phone, Mail } from "lucide-react"

export function Footerdemo() {
  return (
    <footer className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto">
        <Card className="bg-black/50 border-neutral-800 overflow-hidden group hover:border-[#558dca]/50 transition-colors duration-300">
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="tel:+12892129006" 
                      className="flex items-center text-white hover:text-white/80 transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      (289) 212-9006
                    </a>
                  </li>
                  <li>
                    <a 
                      href="mailto:hello@braimz.com?subject=Inquiry" 
                      className="flex items-center text-white hover:text-white/80 transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      hello@braimz.com
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#about" className="text-white hover:text-white/80 transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-white hover:text-white/80 transition-colors">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="text-white hover:text-white/80 transition-colors">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-white hover:text-white/80 transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-white/80 transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-neutral-800">
              <p className="text-white/60 text-center">
                © {new Date().getFullYear()} Braimz. All rights reserved.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </footer>
  )
}