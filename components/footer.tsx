import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/images/logo.jpg" alt="Return Zero Solutions" width={40} height={40} className="rounded-lg" />
              <span className="font-bold text-xl">Return Zero Solutions</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering businesses with cutting-edge web solutions, software development, and comprehensive digital
              marketing services for travel and hospitality industries.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=61561737224959" className="text-gray-300 hover:text-brand-yellow transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/return-zero-solutions/" className="text-gray-300 hover:text-brand-yellow transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-brand-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-brand-yellow transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-brand-yellow transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-brand-yellow transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-yellow" />
                <span className="text-gray-300">contact@returnzeroitsolutions.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand-yellow" />
                <span className="text-gray-300">+94 71 908 9368</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-brand-yellow" />
                <span className="text-gray-300">Ampitiya road, Kandy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} Return Zero Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
