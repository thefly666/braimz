import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  url: string;
  icon: React.ElementType;
}

interface NavBarProps {
  items: NavItem[];
}

export function NavBar({ items }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-white font-bold text-xl">
              braimz
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {items.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-400 hover:text-white p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {items.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  className="text-neutral-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}