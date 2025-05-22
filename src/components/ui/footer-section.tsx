import { Mail, Phone } from "lucide-react";

export default function Footerdemo() {
  return (
    <footer className="w-full bg-black py-12 border-t border-neutral-800">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Logo and Newsletter */}
        <div className="md:col-span-4">
          <img 
            src="/assets/images/Briamz Logo White.png"
            alt="Braimz Logo"
            className="h-8 w-auto mb-6"
          />
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Subscribe to our newsletter</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-black border border-neutral-800 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#558dca]"
              />
              <button className="px-4 py-2 bg-[#558dca] text-white rounded-lg hover:bg-[#558dca]/80 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-4">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="text-neutral-400 hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="text-neutral-400 hover:text-white transition-colors">
                Our Services
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-neutral-400 hover:text-white transition-colors">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-4">
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-neutral-400">
              <Phone className="w-5 h-5" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <Mail className="w-5 h-5" />
              <span>contact@braimz.ai</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-8 border-t border-neutral-800">
        <p className="text-neutral-400">© 2025 Braimz. All rights reserved.</p>
      </div>
    </footer>
  );
}