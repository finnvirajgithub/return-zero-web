"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Mail, Phone, MapPin, ChevronRight, ArrowUpRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-50 overflow-hidden border-t border-white/5">
      
      {/* 1. Creative Background Elements */}
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0))] opacity-20 pointer-events-none"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-[600px] h-[300px] opacity-20 bg-brand-yellow blur-[150px] pointer-events-none rounded-t-full"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10 bg-blue-500 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        
        {/* Top Call to Action inside Footer */}
        <div className="mb-20 p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow/0 via-brand-yellow/10 to-brand-yellow/0 translate-x-[-100%] group-hover:animate-[shimmer_3s_infinite] pointer-events-none" />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Ready to scale your business?</h2>
            <p className="text-slate-400">Let's build something extraordinary together.</p>
          </div>
          <Link href="/contact">
            <button className="flex items-center gap-2 rounded-full bg-brand-yellow px-8 py-4 text-slate-950 font-bold hover:bg-yellow-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)] whitespace-nowrap">
              Start a Project <ArrowUpRight className="h-5 w-5" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Company Info */}
          <div className="md:col-span-12 lg:col-span-5">
            <Link href="/" className="flex items-center space-x-3 mb-6 group inline-flex">
              <div className="overflow-hidden rounded-xl shadow-sm transition-transform duration-500 group-hover:rotate-[360deg] border border-white/10 bg-white/5 p-1">
                <Image src="/images/logo.jpg" alt="Return Zero Solutions" width={40} height={40} className="object-cover rounded-lg" />
              </div>
              <span className="font-black text-2xl tracking-tight text-white">
                Return <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-300">Zero</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-8 max-w-md leading-relaxed text-sm md:text-base">
              Empowering businesses with cutting-edge web solutions, software development, and comprehensive digital marketing services for the travel and hospitality industries.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://www.facebook.com/profile.php?id=61561737224959" 
                target="_blank"
                className="group flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-brand-yellow hover:border-brand-yellow hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(245,158,11,0.2)]"
              >
                <Facebook className="h-5 w-5 text-slate-400 group-hover:text-slate-950 transition-colors" />
              </Link>
              <Link 
                href="https://www.linkedin.com/company/return-zero-solutions/" 
                target="_blank"
                className="group flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-brand-yellow hover:border-brand-yellow hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(245,158,11,0.2)]"
              >
                <Linkedin className="h-5 w-5 text-slate-400 group-hover:text-slate-950 transition-colors" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-6 lg:col-span-3 lg:pl-10">
            <h3 className="font-bold text-lg mb-6 text-white flex items-center">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Projects', path: '/projects' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="group flex items-center text-slate-400 hover:text-brand-yellow transition-colors text-sm md:text-base w-fit">
                    <ChevronRight className="h-4 w-4 mr-2 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-brand-yellow" />
                    <span className="transition-transform duration-300 -translate-x-6 group-hover:translate-x-0">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-6 lg:col-span-4">
            <h3 className="font-bold text-lg mb-6 text-white">
              Contact Info
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 group cursor-default">
                <div className="mt-1 p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-brand-yellow group-hover:border-brand-yellow transition-all duration-300 group-hover:scale-110">
                  <Mail className="h-5 w-5 text-brand-yellow group-hover:text-slate-950 transition-colors" />
                </div>
                <div className="flex flex-col mt-1">
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Email Us</span>
                  <a href="mailto:contact@returnzeroitsolutions.com" className="text-slate-300 text-sm md:text-base group-hover:text-white transition-colors">
                    contact@returnzeroitsolutions.com
                  </a>
                </div>
              </li>
              
              <li className="flex items-start space-x-4 group cursor-default">
                <div className="mt-1 p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-brand-yellow group-hover:border-brand-yellow transition-all duration-300 group-hover:scale-110">
                  <Phone className="h-5 w-5 text-brand-yellow group-hover:text-slate-950 transition-colors" />
                </div>
                <div className="flex flex-col mt-1">
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Call Us</span>
                  <a href="tel:+94719089368" className="text-slate-300 text-sm md:text-base group-hover:text-white transition-colors">
                    +94 71 908 9368
                  </a>
                </div>
              </li>
              
              <li className="flex items-start space-x-4 group cursor-default">
                <div className="mt-1 p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-brand-yellow group-hover:border-brand-yellow transition-all duration-300 group-hover:scale-110">
                  <MapPin className="h-5 w-5 text-brand-yellow group-hover:text-slate-950 transition-colors" />
                </div>
                <div className="flex flex-col mt-1">
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Location</span>
                  <span className="text-slate-300 text-sm md:text-base group-hover:text-white transition-colors">
                    Ampitiya Road, Kandy, Sri Lanka
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Line */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} <span className="font-bold text-white">Return Zero Solutions</span>. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <span className="hover:text-brand-yellow cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-brand-yellow cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Global Shimmer Keyframe (If not already in Navbar) */}
      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </footer>
  )
}