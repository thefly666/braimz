import { Brain } from "lucide-react";
import { Link } from "@/components/ui/link";

function Footerdemo() {
  return (
    <footer className="w-full py-12 border-t border-neutral-800">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Logo and Description */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-[#558dca]" />
            <span className="text-2xl font-bold text-white">braimz</span>
          </div>
          <p className="text-white/70 text-base leading-relaxed pr-4">
    <footer className="w-full bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="text-white/70">+1 (555) 123-4567</li>
            <li className="text-white/70">contact@braimz.ai</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12">
        <p className="text-white/70 text-sm">© 2025 Braimz. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footerdemo;
  )
}