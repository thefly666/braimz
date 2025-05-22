import { Card } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

export function Footerdemo() {
  return (
    <footer className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto">
        <Card className="bg-black/50 border-neutral-800 hover:border-[#558dca]/50 transition-colors duration-300">
          <div className="p-8 flex flex-col items-center">
            <img 
              src="/assets/images/Briamz Logo White.png"
              alt="Braimz Logo"
              className="h-12 w-auto object-contain mb-8"
            />
            <div className="flex flex-col items-center gap-4">
              <a 
                href="tel:+1234567890" 
                className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(123) 456-7890</span>
              </a>
              <a 
                href="mailto:contact@braimz.ai" 
                className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contact@braimz.ai</span>
              </a>
            </div>
            <p className="mt-8 text-white/60 text-center">
              © 2024 Braimz. All rights reserved.
            </p>
          </div>
        </Card>
      </div>
    </footer>
  )
}