"use client";

import { User, Briefcase, Handshake } from "lucide-react";
import { NavBar } from "./ui/tubelight-navbar";

export function NavBarDemo() {
  const navItems = [
    { name: "About", url: "#about", icon: User },
    { name: "Our Services", url: "#services", icon: Briefcase },
    { name: "Engagements", url: "#pricing", icon: Handshake },
  ];

  return <NavBar items={navItems} />;
}
