import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script" // මෙන්න මේක අලුතින් import කළා
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
    icon: "/images/logo.jpg", // This will use the favicon in the public folder
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
        
        {/* Google Analytics Scripts ටික පටන් ගන්නේ මෙතනින් */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DYKRNND4XJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-DYKRNND4XJ');
          `}
        </Script>
        {/* Google Analytics Scripts ටික ඉවරයි */}

        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}