"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "top-2" : "top-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Floating Glassmorphism Container */}
        <div className={`flex justify-between items-center transition-all duration-500 rounded-full px-6 py-3 border ${
          scrolled 
            ? "bg-white/80 backdrop-blur-xl border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.08)]" 
            : "bg-white/50 backdrop-blur-md border-white/20 shadow-sm"
        }`}>
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="overflow-hidden rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Image src="/images/logo.jpg" alt="Return Zero Solutions" width={40} height={40} className="object-cover" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-brand-dark transition-colors group-hover:text-brand-yellow">
              Return Zero
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full ${
                  pathname === item.href 
                    ? "bg-gray-100 text-brand-dark" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-brand-dark"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Button 
              className="group relative flex items-center gap-2 rounded-full bg-brand-yellow px-6 hover:bg-brand-yellow/90 text-brand-dark font-bold shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              onClick={() => window.open("https://wa.me/94719089368?text=Hi%2C%20I'm%20interested%20in%20getting%20a%20quote", "_blank", "noopener,noreferrer")}
            >
              Get Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-gray-100 text-brand-dark"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={`md:hidden absolute left-4 right-4 mt-3 transition-all duration-300 origin-top ${isOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'}`}>
          <div className="p-4 space-y-2 bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl border border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-5 py-3 rounded-2xl text-base font-semibold transition-colors ${
                  pathname === item.href 
                    ? "bg-gray-100 text-brand-dark" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-brand-dark"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <a
                href="https://wa.me/94719089368?text=Hi%2C%20I'm%20interested%20in%20getting%20a%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-yellow px-5 py-4 text-base font-bold text-brand-dark shadow-md transition-all active:scale-95"
              >
                Get Quote
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}