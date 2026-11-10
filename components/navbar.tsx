"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-700 ease-out ${
          scrolled ? "top-4" : "top-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          
          {/* Main Glass Navbar */}
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className={`flex justify-between items-center transition-all duration-500 rounded-full border relative overflow-hidden ${
              scrolled 
                ? "bg-slate-950/70 backdrop-blur-2xl border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] py-2 px-4 w-full md:w-[90%]" 
                : "bg-slate-900/40 backdrop-blur-md border-white/5 py-3 px-6 w-full shadow-lg"
            }`}
          >
            {/* Subtle animated gradient background inside the navbar */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow/0 via-brand-yellow/5 to-brand-yellow/0 translate-x-[-100%] animate-[shimmer_5s_infinite] pointer-events-none" />

            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 group relative z-10">
              <div className="overflow-hidden rounded-xl shadow-sm transition-transform duration-500 group-hover:rotate-[360deg] border border-white/10 bg-white/5 p-1">
                <Image src="/images/logo.jpg" alt="Return Zero Solutions" width={scrolled ? 28 : 32} height={scrolled ? 28 : 32} className="object-cover rounded-lg transition-all" />
              </div>
              <span className={`font-black tracking-tight text-white transition-all duration-300 ${scrolled ? "text-lg" : "text-xl"}`}>
                Return <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-300">Zero</span>
              </span>
            </Link>

            {/* Desktop Navigation (Vercel Style Sliding Pill) */}
            <div className="hidden md:flex items-center space-x-1 relative z-10">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-5 py-2 text-sm font-semibold transition-colors duration-300 rounded-full group ${
                      isActive ? "text-slate-950" : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-pill"
                        className="absolute inset-0 bg-brand-yellow rounded-full shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                )
              })}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center z-10">
              <Button 
                className="group relative flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 px-6 hover:bg-brand-yellow text-white hover:text-slate-950 font-bold transition-all duration-500"
                onClick={() => window.open("https://wa.me/94719089368?text=Hi%2C%20I'm%20interested%20in%20getting%20a%20quote", "_blank")}
              >
                <Sparkles className="h-4 w-4 text-brand-yellow group-hover:text-slate-950 transition-colors" />
                Let's Talk
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center z-50">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-white/10 text-white relative z-50"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Full-Screen Blur Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: { delay: 0.2 } }}
            className="fixed inset-0 z-40 bg-slate-950/80 md:hidden flex flex-col justify-center items-center"
          >
            {/* Glowing background orb for mobile menu */}
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-brand-yellow/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col items-center space-y-6 w-full px-8 relative z-10">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1, duration: 0.4, type: "spring" }}
                  className="w-full text-center"
                >
                  <Link
                    href={item.href}
                    className={`block w-full py-4 text-3xl font-black tracking-tight transition-colors ${
                      pathname === item.href 
                        ? "text-brand-yellow" 
                        : "text-slate-400 hover:text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: navItems.length * 0.1, duration: 0.4 }}
                className="w-full pt-8"
              >
                <a
                  href="https://wa.me/94719089368"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-yellow px-5 py-5 text-xl font-bold text-slate-950 shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all active:scale-95"
                  onClick={() => setIsOpen(false)}
                >
                  <Sparkles className="h-5 w-5" />
                  Start a Project
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global shimmer animation for the navbar */}
      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  )
}