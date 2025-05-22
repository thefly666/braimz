import { Mail, Phone } from "lucide-react";

export function Footerdemo() {
  return (
    <footer className="w-full bg-black/50 border-t border-neutral-800 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 px-4 sm:px-6">
        {/* Logo and Description */}
        <div className="md:col-span-5">
          <img 
            src="/assets/images/Briamz Logo White.png"
            alt="Braimz Logo" 
            className="h-12 w-auto object-contain mb-6"
          />
          <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
            Braimz is a leading AI consultancy delivering innovative solutions in strategy, integration, and content systems. We transform businesses with tailored AI expertise, working exclusively with referred clients to ensure exceptional results.
          </p>
        </div>

        {/* Contact Links */}
        <div className="md:col-span-4 md:col-start-8">
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <div className="space-y-3">
            <a 
              href="mailto:contact@braimz.com?subject=Inquiry"
              className="flex items-center gap-2 text-neutral-400 hover:text-[#558dca] transition-colors no-underline"
            >
              <Mail className="w-4 h-4" />
              <span>contact@braimz.com</span>
            </a>
            <a 
              href="tel:+1234567890"
              className="flex items-center gap-2 text-neutral-400 hover:text-[#558dca] transition-colors no-underline"
            >
              <Phone className="w-4 h-4" />
              <span>+1 (234) 567-890</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 pt-6 border-t border-neutral-800">
        <p className="text-neutral-400 text-sm">
          © 2025 Braimz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}