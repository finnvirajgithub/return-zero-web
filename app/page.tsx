"use client"

import { useEffect, useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, TrendingUp, ArrowRight, Star, ChevronDown, MapPin, Hotel, LayoutTemplate } from "lucide-react"

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

// Tech stack now supports actual image logos or fallback icons
const techStack = [
  { name: "Next.js", icon: <LayoutTemplate className="h-8 w-8" />, image: null }, 
  { name: "React", icon: <Code className="h-8 w-8" />, image: null },
  { name: "Node.js", icon: <Globe className="h-8 w-8" />, image: null },
  { name: "AWS", icon: <TrendingUp className="h-8 w-8" />, image: null },
  { name: "Tailwind CSS", icon: <LayoutTemplate className="h-8 w-8" />, image: null },
  { name: "MongoDB", icon: <Code className="h-8 w-8" />, image: null },
  { name: "Wordpress", icon: <LayoutTemplate className="h-8 w-8" />, image: null }
]

// Clients list with mixed logos and text
const clientsList = [
  { name: "Lanka Go Tours", logo: "/companylogos/lankagologo.webp" },
  { name: "Best Guide Lanka", logo: "/companylogos/bestguidelankalogo.png" },
  { name: "Ceylon Best Travels", logo: "/companylogos/ceylonbestlogo.webp" },
  { name: "The Islanders", logo: "/companylogos/theislanderslogo.png" },
  { name: "Lesley Tuk Tuk Safari", logo: "/companylogos/lesleytuktuklogo.png" },
  { name: "Habarana Jeep Safari", logo: "/companylogos/Habaranajeeplogo.png" },
  { name: "Titan Tours", logo: "/companylogos/titantouslogo.png" },
  { name: "Wicky Tours Kandy", logo: "/companylogos/wickytourslogo.png" },
  { name: "Lux Tour Kandy", logo: "/companylogos/luxtourslogo.png" },
  { name: "Lesley Lanka Horizon Tours", logo: "/companylogos/lesleylankalogo.png" },
  { name: "Kumaru Lanka Tours", logo: null },
  { name: "Gaveesha Tour Kandy", logo: null },
  { name: "Sachi Mountain Villa", logo: null },
  { name: "Habarana Lodge", logo: null },
  { name: "Anuradhapura Tour Guide Chamal", logo: null },
  { name: "Hill Kandyan Lodge", logo: null },
  { name: "Elegent Mist Villa", logo: null }
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
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

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

  // 1. Geometric Scattered Background (Whole Page)
  const geometricBackground = useMemo(() => {
    return [...Array(25)].map((_, i) => {
      const size = Math.random() * 60 + 30 
      const opacityBase = Math.random() * 0.15 + 0.05
      return (
        <motion.div
          key={`geo-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: size,
            height: size,
            rotate: `${Math.random() * 360}deg`,
          }}
          animate={{ opacity: [opacityBase, opacityBase + 0.2, opacityBase] }}
          transition={{
            duration: Math.random() * 3 + 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            <polygon points="0,0 100,0 0,100" fill="#F59E0B" />
            <polygon points="0,40 60,100 0,100" fill="#FEF3C7" fillOpacity="0.3" />
          </svg>
        </motion.div>
      )
    })
  }, [])

  // 2. Small Floating Particles
  const memoizedTriangles = useMemo(() => {
    return [...Array(40)].map((_, i) => {
      const size = Math.random() * 10 + 5
      return (
        <motion.div
          key={`float-${i}`}
          className="absolute"
          style={{
            borderLeft: `${size}px solid transparent`,
            borderRight: `${size}px solid transparent`,
            borderBottom: `${size * 1.7}px solid rgba(245, 158, 11, 0.2)`,
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
    <div className="bg-slate-950 text-slate-50 overflow-hidden selection:bg-brand-yellow selection:text-slate-950 relative">
      
      {/* GLOBAL FIXED BACKGROUND (Covers the whole page) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {geometricBackground}
        {memoizedTriangles}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      </div>
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[128px] -z-10 animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-6 bg-slate-900/80 text-brand-yellow border border-brand-yellow/30 px-5 py-2 text-sm backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(245,158,11,0.2)]">
               Premier IT & Travel Tech Partner
            </Badge>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white mb-2 tracking-tight leading-tight"
          >
            Return Zero; <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-300">
              Solutions
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            <h2 className="text-lg md:text-2xl font-light tracking-[0.25em] text-slate-300 uppercase">
              - Your Vision, <span className="font-semibold text-brand-yellow">Perfected -</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="min-h-[4rem] md:h-20 mb-8 flex flex-col sm:flex-row justify-center items-center w-full max-w-4xl mx-auto gap-3"
          >
            <span className="text-lg sm:text-xl md:text-3xl text-slate-400 font-light whitespace-nowrap">
              We specialize in
            </span>
            <div className="text-lg md:text-2xl font-bold bg-white/10 px-4 py-3 rounded-lg backdrop-blur-sm flex items-center justify-start border border-white/5 shadow-inner w-[280px] md:w-[420px] overflow-hidden">
              <span className="text-brand-yellow font-mono tracking-tight whitespace-nowrap">
                {displayText}
              </span>
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="text-white font-light ml-1"
              >
                |
              </motion.span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6"
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

      {/* 2. CLIENTS LOGO BANNER (Showing BOTH Logo and Text together) */}
      <section className="py-8 border-y border-white/5 bg-slate-900/60 overflow-hidden flex flex-col items-center relative z-10">
        <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-6">Trusted by 50+ Sri Lankan Travel Brands</p>
        <div className="flex overflow-hidden w-full">
          <motion.div 
            className="flex whitespace-nowrap gap-12 px-8 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {clientsList.concat(clientsList).map((client, i) => (
              <div key={i} className="flex items-center gap-4 min-w-max group cursor-default">
                {client.logo ? (
                  // FIXED: Changed bg-white/5 to bg-white so transparent logos show clearly
                  <div className="relative h-10 w-10 md:h-12 md:w-12 flex-shrink-0 bg-white p-1.5 rounded-lg border border-white/10 group-hover:border-brand-yellow/50 transition-colors shadow-sm">
                    <Image 
                      src={client.logo} 
                      alt={client.name} 
                      fill 
                      className="object-contain rounded-md" 
                      onError={(e) => e.currentTarget.style.display = 'none'} 
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 md:h-12 md:w-12 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-brand-yellow/50 transition-colors">
                    <Star className="h-5 w-5 text-slate-500 group-hover:text-brand-yellow transition-colors" />
                  </div>
                )}
                <span className="text-xl font-bold text-slate-400 group-hover:text-brand-yellow transition-colors">
                  {client.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. INTERACTIVE SERVICES SECTION */}
      <section className="py-32 relative z-10 bg-slate-950/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-slate-400">Click to explore how we can elevate your business.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              {servicesData.map((service, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`p-6 rounded-2xl cursor-pointer border transition-all duration-300 flex items-center justify-between bg-slate-900/50 backdrop-blur-sm ${
                    activeTab === index 
                    ? "border-brand-yellow shadow-[0_0_20px_rgba(245,158,11,0.1)]" 
                    : "border-white/10 hover:bg-white/10"
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

            <div className="bg-slate-900/80 border border-white/10 rounded-3xl p-8 md:p-12 h-full min-h-[300px] flex items-center relative overflow-hidden backdrop-blur-md">
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

      {/* 4. TECH STACK MARQUEE */}
      <section className="py-20 bg-slate-900/80 border-b border-white/5 overflow-hidden relative z-10">
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
                {tech.image ? (
                  <div className="relative w-10 h-10 flex-shrink-0 bg-white p-1 rounded-lg">
                     <Image src={tech.image} alt={tech.name} fill className="object-contain rounded-md" />
                  </div>
                ) : (
                  <div className="p-3 bg-slate-800 rounded-xl flex-shrink-0">
                    {tech.icon}
                  </div>
                )}
                <span className="text-2xl font-bold tracking-wider">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. AUTO-SCROLLING REVIEWS GRID */}
      <section className="py-32 relative overflow-hidden bg-slate-950/70 z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Success Stories</h2>
            <p className="text-xl text-slate-400">Hear from the businesses we've transformed.</p>
          </div>

          <div className="h-[600px] overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
              <motion.div 
                className="flex flex-col gap-8"
                animate={{ y: ["0%", "-50%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {col1.map((testimonial, i) => (
                  <Card key={i} className="bg-slate-900/90 backdrop-blur-sm border-white/10 hover:border-brand-yellow/30 transition-colors shrink-0">
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

              <motion.div 
                className="flex flex-col gap-8 hidden md:flex"
                animate={{ y: ["-50%", "0%"] }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              >
                {col2.map((testimonial, i) => (
                  <Card key={i} className="bg-slate-900/90 backdrop-blur-sm border-white/10 hover:border-brand-yellow/30 transition-colors shrink-0">
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
      <section className="py-24 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/90 to-yellow-600"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-slate-950 mb-8 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <a href="https://wa.me/94719089368?text=Hi%20I%20am%20interested%20in%20starting%20a%20project" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-slate-950 hover:bg-slate-900 text-white font-bold px-10 py-7 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all border border-slate-800">
              Get Free Consultation
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}