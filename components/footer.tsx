import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Mail, Phone, MapPin, ChevronRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-brand-dark text-white overflow-hidden border-t border-white/10">
      
      {/* Subtle Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10 bg-brand-yellow blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Company Info */}
          <div className="md:col-span-12 lg:col-span-5">
            <Link href="/" className="flex items-center space-x-3 mb-6 group inline-flex">
              <div className="overflow-hidden rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Image src="/images/logo.jpg" alt="Return Zero Solutions" width={48} height={48} className="object-cover" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white transition-colors group-hover:text-brand-yellow">
                Return Zero
              </span>
            </Link>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed text-sm md:text-base">
              Empowering businesses with cutting-edge web solutions, software development, and comprehensive digital marketing services for travel and hospitality industries.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://www.facebook.com/profile.php?id=61561737224959" 
                target="_blank"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:bg-brand-yellow hover:border-brand-yellow hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-yellow/20"
              >
                <Facebook className="h-5 w-5 text-gray-400 group-hover:text-brand-dark transition-colors" />
              </Link>
              <Link 
                href="https://www.linkedin.com/company/return-zero-solutions/" 
                target="_blank"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:bg-brand-yellow hover:border-brand-yellow hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-yellow/20"
              >
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-brand-dark transition-colors" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="font-bold text-lg mb-6 text-white flex items-center">
              <span className="w-8 h-1 bg-brand-yellow rounded-full mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Projects', path: '/projects' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="group flex items-center text-gray-400 hover:text-brand-yellow transition-colors text-sm md:text-base w-fit">
                    <ChevronRight className="h-4 w-4 mr-1 opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    <span className="transition-transform duration-300 -translate-x-4 group-hover:translate-x-0">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-6 lg:col-span-4">
            <h3 className="font-bold text-lg mb-6 text-white flex items-center">
              <span className="w-8 h-1 bg-brand-yellow rounded-full mr-3"></span>
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-4 group cursor-default">
                <div className="mt-1 p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-brand-yellow/10 group-hover:border-brand-yellow/30 transition-colors">
                  <Mail className="h-4 w-4 text-brand-yellow" />
                </div>
                <div className="flex flex-col mt-1">
                  <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-0.5">Email Us</span>
                  <a href="mailto:contact@returnzeroitsolutions.com" className="text-gray-300 text-sm md:text-base group-hover:text-white transition-colors">
                    contact@returnzeroitsolutions.com
                  </a>
                </div>
              </li>
              
              <li className="flex items-start space-x-4 group cursor-default">
                <div className="mt-1 p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-brand-yellow/10 group-hover:border-brand-yellow/30 transition-colors">
                  <Phone className="h-4 w-4 text-brand-yellow" />
                </div>
                <div className="flex flex-col mt-1">
                  <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-0.5">Call Us</span>
                  <a href="tel:+94719089368" className="text-gray-300 text-sm md:text-base group-hover:text-white transition-colors">
                    +94 71 908 9368
                  </a>
                </div>
              </li>
              
              <li className="flex items-start space-x-4 group cursor-default">
                <div className="mt-1 p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-brand-yellow/10 group-hover:border-brand-yellow/30 transition-colors">
                  <MapPin className="h-4 w-4 text-brand-yellow" />
                </div>
                <div className="flex flex-col mt-1">
                  <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-0.5">Location</span>
                  <span className="text-gray-300 text-sm md:text-base group-hover:text-white transition-colors">
                    Ampitiya road, Kandy
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Line */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} <span className="font-semibold text-gray-300">Return Zero Solutions</span>. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 font-medium">
            <span className="hover:text-brand-yellow cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-brand-yellow cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}