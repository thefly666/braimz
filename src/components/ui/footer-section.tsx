import { Card } from "@/components/ui/card"
import { Phone, Mail } from "lucide-react"

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
            
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-white">(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-white">contact@braimz.ai</span>
              </div>
            </div>

            <p className="text-neutral-400 text-sm">
              © 2024 Braimz. All rights reserved.
            </p>
          </div>
        </Card>
      </div>
    </footer>
  )
}