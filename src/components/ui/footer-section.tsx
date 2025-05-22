import { Mail, MapPin, Phone } from "lucide-react";

export function Footerdemo() {
  return (
    <footer className="w-full bg-black py-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 px-4 sm:px-6">
        {/* Logo and Description */}
        <div className="md:col-span-5">
          <img 
            src="/assets/images/Briamz Logo White.png"
            alt="Braimz Logo"
            className="h-12 w-auto mb-6"
          />
          <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
            Braimz is a leading AI consultancy delivering innovative solutions in strategy, integration, and content systems. We transform businesses with tailored AI expertise, working exclusively with referred clients to ensure exceptional results.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3">
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="text-neutral-400 hover:text-[#558dca] transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="text-neutral-400 hover:text-[#558dca] transition-colors">
                Our Services
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
        <div className="md:col-span-4">
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#558dca]" />
              <span className="text-neutral-400">
                123 AI Innovation Drive<br />
                San Francisco, CA 94105
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#558dca]" />
              <span className="text-neutral-400">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#558dca]" />
              <span className="text-neutral-400">contact@braimz.ai</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 pt-8 border-t border-neutral-800">
        <p className="text-neutral-400 text-sm">
          © 2025 Braimz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}