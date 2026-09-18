import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Return Zero Solutions - Web Development & Digital Services",
  description:
    "Professional web development, software solutions, and digital marketing services for travel agents and hotels.",
  generator: "v0.dev",
  icons: {
    icon: "/images/logo.jpg", 
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />

        {/* Update කරපු Google Analytics ID එක */}
        <GoogleAnalytics gaId="G-S8Y9B5N5LG" />
        
      </body>
    </html>
  )
}