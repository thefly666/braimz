import { User, Briefcase, CreditCard } from 'lucide-react'
import { NavBar } from './ui/tubelight-navbar'

export function NavBarDemo() {
  const navItems = [
    {
      name: 'About',
      url: '#about',
      icon: <User className="h-4 w-4 mr-2" />
    },
    {
      name: 'Our Services',
      url: '#services',
      icon: <Briefcase className="h-4 w-4 mr-2" />
    },
    {
      name: 'Pricing',
      url: '#pricing',
      icon: <CreditCard className="h-4 w-4 mr-2" />
    }
  ]

  return <NavBar items={navItems} />
}