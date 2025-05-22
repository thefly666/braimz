import { Home, User, Briefcase, CreditCard } from 'lucide-react'
import { NavBar } from './ui/tubelight-navbar'

export function NavBarDemo() {
  const navItems = [
    { name: 'About', url: '#about', icon: User, iconPosition: 'left' },
    { name: 'Our Services', url: '#services', icon: Briefcase, iconPosition: 'left' },
    { name: 'Pricing', url: '#pricing', icon: CreditCard, iconPosition: 'left' }
  ]

  return <NavBar items={navItems} />
}