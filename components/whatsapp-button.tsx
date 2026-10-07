"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const phoneNumber = "+94719089368"
  const message = "Hello! I'm interested in your services. Can you help me? හෙලෝ! මම ඔබේ සේවාවන් ගැන උනන්දුයි. ඔබට මට උදව් කළ හැකිද?"

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      
      {/* Modern Glassmorphism Tooltip */}
      <div className="absolute bottom-full right-0 mb-4 opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none origin-bottom-right">
        <div className="bg-white/95 backdrop-blur-xl text-gray-800 font-semibold text-sm px-4 py-3 rounded-2xl shadow-xl border border-gray-100 whitespace-nowrap flex items-center gap-2.5">
          {/* Active Status Dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
          </span>
          Chat with us on WhatsApp
        </div>
      </div>

      {/* Button with Smooth Pulse Effect */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
        <button
          onClick={handleWhatsAppClick}
          className="relative flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_8px_30px_rgb(37,211,102,0.35)] hover:shadow-[0_8px_30px_rgb(37,211,102,0.5)] transition-all duration-300 hover:-translate-y-1"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>
      
    </div>
  )
}