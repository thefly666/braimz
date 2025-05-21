import { Home, User, Briefcase, CreditCard } from 'lucide-react'
import { NavBar } from './ui/tubelight-navbar'

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Projects', url: '#', icon: Briefcase },
    { name: 'Pricing', url: '#pricing', icon: CreditCard }
  ]

  return <NavBar items={navItems} />
}