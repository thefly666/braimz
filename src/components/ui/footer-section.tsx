import { Mail, Phone } from "lucide-react";

export function Footerdemo() {
  return (
    <footer className="w-full py-12 border-t border-neutral-800">
      <div className="flex flex-col items-center justify-center space-y-4">
        <img 
          src="/assets/images/Briamz Logo White.png"
          alt="Braimz Logo"
          className="h-8 w-auto mb-4"
        />
        
        <div className="flex flex-col items-center space-y-2">
          <a 
            href="tel:+12892129006" 
            className="flex items-center text-neutral-400 hover:text-[#558dca] transition-colors"
          >
            <Phone className="w-4 h-4 mr-2" />
            (289) 212-9006
          </a>
          
          <a 
            href="mailto:hello@braimz.com?subject=Inquiry" 
            className="flex items-center text-neutral-400 hover:text-[#558dca] transition-colors"
          >
            <Mail className="w-4 h-4 mr-2" />
            hello@braimz.com
          </a>
        </div>

        <p className="text-neutral-500 text-sm">
          © 2025 Braimz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}