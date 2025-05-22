import { Mail, Phone } from "lucide-react";

export function Footerdemo() {
  return (
    <footer className="w-full bg-black py-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <img
              src="/assets/images/Briamz Logo White.png"
              alt="Braimz Logo"
              className="h-8 w-auto mb-4"
            />
            <p className="text-neutral-400 text-sm leading-relaxed">
              Braimz is a leading AI consultancy delivering innovative solutions in strategy, integration, and content systems. We transform businesses with tailored AI expertise, working exclusively with referred clients to ensure exceptional results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-neutral-400 hover:text-[#558dca] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-[#558dca] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-neutral-400 hover:text-[#558dca] transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+12892129006" className="text-neutral-400 hover:text-[#558dca] transition-colors no-underline">
                  Phone: (289) 212-9006
                </a>
              </li>
              <li>
                <a href="mailto:hello@braimz.com?subject=Inquiry" className="text-neutral-400 hover:text-[#558dca] transition-colors no-underline">
                  Email: hello@braimz.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 text-left text-sm text-neutral-400">
        © 2024 Braimz. All rights reserved.
      </div>
    </footer>
  );
}