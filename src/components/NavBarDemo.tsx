import { Home, User, Briefcase, CreditCard } from 'lucide-react'
import { NavBar } from './ui/tubelight-navbar'

interface NavItem {
  name: string;
  url: string;
  icon: React.ElementType;
}

export function NavBarDemo() {
  const navItems: NavItem[] = [
    { name: 'About', url: '#about', icon: User },
    { name: 'Our Services', url: '#services', icon: Briefcase },
    { name: 'Pricing', url: '#pricing', icon: CreditCard }
  ]

  return <NavBar items={navItems} />
}