"use client"

import { useEffect, useState, useMemo } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, TrendingUp, ArrowRight, CheckCircle, Star, ChevronDown, MapPin, Hotel, LayoutTemplate } from "lucide-react"

// --- CONSTANTS (Data) ---
const rotatingServices = [
  "Custom Web Development",
  "Software Development",
  "Tour Agency Management",
  "Hotel Booking Management"
]

const servicesData = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Custom Web Development",
    description: "We build blazing fast, highly scalable, and custom-designed websites using Next.js, React, and Tailwind CSS. Perfect for modern businesses looking to stand out.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Software Development",
    description: "Tailored enterprise-grade software engineered to solve your specific business bottlenecks. From custom dashboards to API integrations.",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Tour Agency Management",
    description: "Complete digital transformation for travel agencies. We manage your TripAdvisor, Viator, and GetYourGuide profiles alongside advanced SEO strategies.",
  },
  {
    icon: <Hotel className="h-6 w-6" />,
    title: "Hotel Booking Management",
    description: "Professional hotel listings and booking engine setups on Booking.com, Airbnb, Agoda, and centralized channel management systems.",
  },
]

const techStack = [
  { name: "Next.js", icon: <LayoutTemplate className="h-8 w-8" /> },
  { name: "React", icon: <Code className="h-8 w-8" /> },
  { name: "Node.js", icon: <Globe className="h-8 w-8" /> },
  { name: "AWS", icon: <TrendingUp className="h-8 w-8" /> },
  { name: "Tailwind CSS", icon: <LayoutTemplate className="h-8 w-8" /> },
  { name: "MongoDB", icon: <Code className="h-8 w-8" /> },
]

const clients = [
  "Ceylon Best Travels", "The Islanders", "Crown Tours Sri Lanka", 
  "Kumaru Lanka Tours", "Gaveesha Tour Kandy", "Sachi Mountain Villa"
]

const testimonials = [
  { name: "Indika", role: "Ceylon Best Travels", content: "Thank you very much Malli, you did a great job, everyone said it was great.", rating: 5 },
  { name: "Ayesh", role: "The Islanders", content: "They helped us get listed on all major booking platforms. Professional service and excellent results.", rating: 5 },
  { name: "Anuradha", role: "Crown Tours Sri Lanka", content: "He is a very visionary person and an excellent service. I give him my highest praise.", rating: 5 },
  { name: "Sapumal Manage", role: "Kumaru Lanka Tours", content: "Professional and reliable service. They helped manage our online bookings across Get Your Guide smoothly.", rating: 5 },
  { name: "Mangala Rathnayake", role: "Gaveesha Tour Kandy", content: "Return Zero IT Solutions built a clean website for our travel business and optimized our profile perfectly.", rating: 5 },
  { name: "Dammika Perera", role: "Sachi Mountain Villa 360", content: "Helped set up our Booking.com and Airbnb accounts perfectly. Very professional service.", rating: 5 },
]

const col1 = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)]
const col2 = [...testimonials.slice(3, 6), ...testimonials.slice(3, 6)]

export default function HomePage() {
  // 1. Typewriter Animation State
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter Effect Logic
  useEffect(() => {
    let timeout: NodeJS.Timeout
    const currentWord = rotatingServices[currentServiceIndex]
    
    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1))
        }, 40)
      } else {
        setIsDeleting(false)
        setCurrentServiceIndex((prev) => (prev + 1) % rotatingServices.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentServiceIndex])

  // 2. Interactive Services State
  const [activeTab, setActiveTab] = useState(0)

  // 3. Memoized Triangles (Meken triangles flicker wena eka nathi wenawa)
  const memoizedTriangles = useMemo(() => {
    return [...Array(15)].map((_, i) => {
      const size = Math.random() * 20 + 10
      return (
        <motion.div
          key={i}
          className="absolute"
          style={{
            borderLeft: `${size}px solid transparent`,
            borderRight: `${size}px solid transparent`,
            borderBottom: `${size * 1.7}px solid rgba(245, 158, 11, 0.15)`,
            left: `${Math.random() * 100}%`,
            bottom: "-10%",
          }}
          animate={{
            y: ["0vh", "-120vh"],
            x: Math.random() > 0.5 ? [0, 50, -50, 0] : [0, -50, 50, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      )
    })
  }, [])

  return (
    <div className="bg-slate-950 text-slate-50 overflow-hidden selection:bg-brand-yellow selection:text-slate-950">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Live Animated Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {memoizedTriangles}
        </div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[128px] -z-10 animate-pulse"></div>
        <div className="absolute inset-0 z-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-6 bg-white/5 text-brand-yellow border border-brand-yellow/30 px-5 py-2 text-sm backdrop-blur-md rounded-full">
              ✨ Premier IT & Travel Tech Partner
            </Badge>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight leading-tight"
          >
            Return Zero <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-300">
              Solutions
            </span>
          </motion.h1>

          {/* FIXED: Typewriter Text Animation with Fixed Width */}
          <div className="h-16 md:h-20 mb-8 flex justify-center items-center w-full max-w-4xl mx-auto">
            <span className="text-xl md:text-3xl text-slate-400 font-light mr-3 hidden sm:block whitespace-nowrap">
              We specialize in
            </span>
            <div className="text-lg md:text-2xl font-bold bg-white/10 px-4 py-3 rounded-lg backdrop-blur-sm flex items-center justify-start border border-white/5 shadow-inner w-[280px] md:w-[420px] overflow-hidden">
              {/* Typewriter Text (Yellow + Mono Font) */}
              <span className="text-brand-yellow font-mono tracking-tight whitespace-nowrap">
                {displayText}
              </span>
              {/* Blinking Cursor */}
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="text-white font-light ml-1"
              >
                |
              </motion.span>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-brand-yellow hover:bg-yellow-400 text-slate-950 font-bold px-8 py-6 rounded-full shadow-[0_0_40px_rgba(245,158,11,0.3)] transform hover:scale-105 transition-all">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. CLIENTS LOGO BANNER */}
      <section className="py-8 border-y border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden flex flex-col items-center">
        <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-6">Trusted by 50+ Sri Lankan Travel Brands</p>
        <motion.div 
          className="flex whitespace-nowrap gap-16 px-8 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {clients.concat(clients).map((client, i) => (
            <div key={i} className="text-xl font-bold text-slate-500 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                <Star className="h-4 w-4 text-slate-600" />
              </div>
              {client}
            </div>
          ))}
        </motion.div>
      </section>

      {/* 3. INTERACTIVE SERVICES SECTION */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-slate-400">Click to explore how we can elevate your business.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Side: Clickable Tabs */}
            <div className="space-y-4">
              {servicesData.map((service, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`p-6 rounded-2xl cursor-pointer border transition-all duration-300 flex items-center justify-between ${
                    activeTab === index 
                    ? "bg-brand-yellow/10 border-brand-yellow shadow-[0_0_20px_rgba(245,158,11,0.1)]" 
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${activeTab === index ? "bg-brand-yellow text-slate-900" : "bg-white/10 text-white"}`}>
                      {service.icon}
                    </div>
                    <h3 className={`text-xl font-bold ${activeTab === index ? "text-brand-yellow" : "text-white"}`}>
                      {service.title}
                    </h3>
                  </div>
                  <ChevronDown className={`transition-transform duration-300 ${activeTab === index ? "rotate-180 text-brand-yellow" : "text-slate-500"}`} />
                </div>
              ))}
            </div>

            {/* Right Side: Dynamic Content Reveal */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 h-full min-h-[300px] flex items-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/20 rounded-full blur-[100px] -z-10"></div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="mb-6 p-4 inline-block rounded-2xl bg-brand-yellow text-slate-900">
                    {servicesData[activeTab].icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{servicesData[activeTab].title}</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {servicesData[activeTab].description}
                  </p>
                  <Link href="/contact">
                    <Button className="mt-8 bg-transparent border border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-slate-900 rounded-full">
                      Learn More
                    </Button>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECH STACK MARQUEE WITH LOGOS */}
      <section className="py-20 bg-slate-900 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-10">
          <h2 className="text-2xl font-bold text-white">Powered By Modern Technologies</h2>
        </div>
        <div className="flex">
          <motion.div 
            className="flex whitespace-nowrap gap-16 px-8 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          >
            {techStack.concat(techStack).map((tech, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <div className="p-3 bg-slate-800 rounded-xl">
                  {tech.icon}
                </div>
                <span className="text-2xl font-bold tracking-wider">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. AUTO-SCROLLING REVIEWS GRID */}
      <section className="py-32 relative overflow-hidden bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Success Stories</h2>
            <p className="text-xl text-slate-400">Hear from the businesses we've transformed.</p>
          </div>

          <div className="h-[600px] overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
              
              {/* Column 1 - Scrolls Up */}
              <motion.div 
                className="flex flex-col gap-8"
                animate={{ y: ["0%", "-50%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {col1.map((testimonial, i) => (
                  <Card key={i} className="bg-white/5 backdrop-blur-md border-white/10 hover:border-brand-yellow/30 transition-colors shrink-0">
                    <CardContent className="p-8">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, j) => (
                          <Star key={j} className="h-4 w-4 text-brand-yellow fill-brand-yellow" />
                        ))}
                      </div>
                      <p className="text-slate-300 mb-6 italic text-lg">"{testimonial.content}"</p>
                      <div>
                        <div className="font-bold text-white">{testimonial.name}</div>
                        <div className="text-sm text-brand-yellow">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>

              {/* Column 2 - Scrolls Down */}
              <motion.div 
                className="flex flex-col gap-8 hidden md:flex"
                animate={{ y: ["-50%", "0%"] }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              >
                {col2.map((testimonial, i) => (
                  <Card key={i} className="bg-white/5 backdrop-blur-md border-white/10 hover:border-brand-yellow/30 transition-colors shrink-0">
                    <CardContent className="p-8">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, j) => (
                          <Star key={j} className="h-4 w-4 text-brand-yellow fill-brand-yellow" />
                        ))}
                      </div>
                      <p className="text-slate-300 mb-6 italic text-lg">"{testimonial.content}"</p>
                      <div>
                        <div className="font-bold text-white">{testimonial.name}</div>
                        <div className="text-sm text-brand-yellow">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow to-yellow-600"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-slate-950 mb-8 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <a href="https://wa.me/94719089368?text=Hi%20I%20am%20interested%20in%20starting%20a%20project" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-slate-950 hover:bg-slate-900 text-white font-bold px-10 py-7 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all">
              Get Free Consultation
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}