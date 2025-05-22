import { Mail, Phone } from "lucide-react";

export function Footerdemo() {
  return (
    <footer className="w-full py-12 bg-black">
      <div className="flex flex-col items-center justify-center space-y-6">
        <img 
          src="/assets/images/Briamz Logo White.png"
          alt="Braimz Logo"
          className="h-8 w-auto"
        />
        
        <div className="flex flex-col items-center space-y-3">
          <a 
            href="tel:+12892129006" 
            className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>(289) 212-9006</span>
          </a>
          
          <a 
            href="mailto:hello@braimz.com?subject=Inquiry" 
            className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>hello@braimz.com</span>
          </a>
        </div>

        <div className="text-white/60 text-sm">
          © 2024 Braimz. All rights reserved.
        </div>
      </div>
    </footer>
  );
}