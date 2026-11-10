"use client"

import { useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Globe, Code, TrendingUp, Smartphone, Search, Users, Building, 
  MapPin, Star, CheckCircle, ArrowRight, MessageCircle, Sparkles
} from "lucide-react"

export default function ServicesPage() {
  const getWhatsAppLink = (serviceName: string) => {
    const message = `Hi Return Zero, I am interested in your ${serviceName} services. Can I get more details?`
    return `https://wa.me/94719089368?text=${encodeURIComponent(message)}`
  }

  const mainServices = [
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Web Development",
      description: "Custom websites and highly scalable web applications built with cutting-edge technologies to drive digital growth.",
      features: [
        "Responsive & Modern Design",
        "E-commerce Solutions",
        "Content Management Systems",
        "Progressive Web Apps",
        "API Integration & Security",
        "Performance Optimization",
      ],
      technologies: ["React", "Next.js", "Node.js", "WordPress", "Shopify"],
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Software Engineering",
      description: "Enterprise-grade tailored software solutions designed to streamline your business operations and automate workflows.",
      features: [
        "Custom Web Applications",
        "Database Architecture",
        "Cloud Deployment Solutions",
        "Mobile Applications",
        "Third-party System Integration",
        "24/7 Maintenance & Support",
      ],
      technologies: ["Python", "Java", "React Native", "AWS", "MongoDB"],
    },
  ]

  const travelServices = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Travel Agency Websites",
      description: "Professional, conversion-optimized travel agency websites with integrated direct booking systems.",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Travel SEO Optimization",
      description: "Advanced search engine strategies to rank your tours higher and attract global customers.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Business Management CRM",
      description: "Complete digital business handling, automated workflows, and customer relationship management.",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "TripAdvisor Setup",
      description: "Professional creation, claiming, and optimization of your TripAdvisor business profile.",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "OTA Platform Integration",
      description: "Seamless integration and tour structuring with major travel platforms like Viator & GetYourGuide.",
    },
  ]

  const hotelServices = [
    {
      icon: <Building className="h-6 w-6" />,
      title: "Booking.com Listing",
      description: "End-to-end professional setup, content optimization, and visibility boosting on Booking.com.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Airbnb Management",
      description: "Complete Airbnb listing creation, photography guidelines, and host profile management.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Hostelworld Integration",
      description: "Strategic property listing and inventory management on the Hostelworld platform.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Revenue Optimization",
      description: "Dynamic pricing strategies and market analysis to maximize your daily booking revenue.",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Review Management",
      description: "Proactive monitoring, guest communication, and strategies to improve your online reputation.",
    },
  ]

  const platforms = [
    { name: "TripAdvisor", logo: "/logos/tripadvisor.png" },
    { name: "Viator", logo: "/logos/viator.png" },
    { name: "GetYourGuide", logo: "/logos/gyg.png" },
    { name: "Booking.com", logo: "/logos/booking.png" },
    { name: "Airbnb", logo: "/logos/airbnb.png" },
    { name: "Agoda", logo: "/logos/agoda.png" },
    { name: "Expedia", logo: "/logos/expedia.png" },
  ]

  const process = [
    { step: "01", title: "Consultation", description: "Deep dive into your business goals, target audience, and digital requirements." },
    { step: "02", title: "Strategy & Planning", description: "Architecting a detailed project roadmap with clear timelines and technical milestones." },
    { step: "03", title: "Development", description: "Building your custom solution utilizing industry best practices and modern tech." },
    { step: "04", title: "Quality Assurance", description: "Rigorous testing across devices and platforms to ensure flawless performance." },
    { step: "05", title: "Launch & Scale", description: "Smooth deployment followed by continuous support, analytics tracking, and scaling." },
  ]

  // Data for Framer Motion Floating Logos
  const floatingLogos = [
    { src: "/logos/airbnb.png", alt: "Airbnb", left: "8%", duration: 14, delay: 0, size: 60 },
    { src: "/logos/booking.png", alt: "Booking.com", left: "22%", duration: 18, delay: 4, size: 70 },
    { src: "/logos/tripadvisor.png", alt: "TripAdvisor", left: "35%", duration: 12, delay: 1, size: 55 },
    { src: "/logos/viator.png", alt: "Viator", left: "52%", duration: 16, delay: 6, size: 65 },
    { src: "/logos/gyg.png", alt: "GetYourGuide", left: "70%", duration: 20, delay: 2, size: 75 },
    { src: "/logos/agoda.png", alt: "Agoda", left: "82%", duration: 15, delay: 8, size: 50 },
    { src: "/logos/expedia.png", alt: "Expedia", left: "15%", duration: 17, delay: 7, size: 65 },
  ]

  const marqueeItems = [
    "Custom Web Development", "OTA Management", "TripAdvisor SEO", 
    "Software Engineering", "Booking.com Integration", "Revenue Optimization"
  ]

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const memoizedDots = useMemo(() => {
    return [...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-brand-yellow/30 rounded-full"
        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
        animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: Math.random() * 3 + 3, repeat: Infinity, ease: "easeInOut" }}
      />
    ))
  }, [])

  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen pt-20 selection:bg-brand-yellow selection:text-slate-950 overflow-hidden">
      
      {/* Global Background */}
      <div className="fixed inset-0 z-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0))] opacity-20 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 z-10 bg-slate-900/40 backdrop-blur-xl">
        <div className="absolute inset-0 z-0 pointer-events-none">{memoizedDots}</div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-yellow/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        {/* FIXED: Animated Floating Logos Background (Framer Motion) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80 overflow-hidden">
          {floatingLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="absolute flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/5 p-2"
              style={{
                left: logo.left,
                width: logo.size + 20,
                height: logo.size + 20,
                filter: "drop-shadow(0px 0px 15px rgba(245,158,11,0.2))",
              }}
              // y: "120vh" starts it strictly below the screen, avoiding the stuck flicker
              initial={{ y: "120vh", rotate: -10, scale: 0.8, opacity: 0 }}
              animate={{
                y: ["120vh", "-20vh"],
                rotate: [-10, 10],
                scale: [0.8, 1.1],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: logo.duration,
                repeat: Infinity,
                delay: logo.delay,
                ease: "linear",
                times: [0, 0.15, 0.85, 1] // Controls when opacity fades in and out smoothly
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <Badge className="mb-6 bg-white/5 text-brand-yellow border border-brand-yellow/30 px-5 py-2 text-sm font-bold tracking-widest uppercase rounded-full backdrop-blur-md">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
            Comprehensive <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-300">Digital Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            From enterprise software engineering to specialized travel tech integrations, we provide end-to-end solutions to scale your business.
          </p>
          <div className="flex justify-center">
            <a href="#core-services">
              <Button size="lg" className="bg-brand-yellow hover:bg-yellow-400 text-slate-950 font-bold rounded-full px-8 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-105 transition-all">
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Scrolling Marquee Banner */}
      <div className="w-full bg-brand-yellow py-3 overflow-hidden border-y border-brand-yellow/50 relative z-20 flex">
        <motion.div 
          className="flex whitespace-nowrap gap-10 px-4 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        >
          {marqueeItems.concat(marqueeItems).concat(marqueeItems).map((item, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="text-slate-950 font-bold tracking-widest uppercase text-sm md:text-base">
                {item}
              </span>
              <Sparkles className="h-4 w-4 text-slate-900/50" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Services (Software & Web) */}
      <section id="core-services" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-4">Software & IT Engineering</motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-2xl mx-auto">High-performance digital products engineered for modern businesses</motion.p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {mainServices.map((service, index) => (
              <motion.div key={index} variants={fadeInUp} className="h-full">
                <Card className="flex flex-col h-full bg-slate-900/50 backdrop-blur-xl border-white/5 hover:border-brand-yellow/50 transition-all duration-500 overflow-hidden relative group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/0 via-transparent to-brand-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <CardHeader>
                    <div className="flex items-center space-x-5">
                      <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-brand-yellow shadow-inner group-hover:bg-brand-yellow group-hover:text-slate-950 transition-all duration-500">
                        {service.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-white group-hover:text-brand-yellow transition-colors">{service.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-lg mt-4 text-slate-400 leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow space-y-8 mt-4">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/5 group-hover:border-white/10 transition-colors">
                      <h4 className="font-bold text-sm text-slate-300 mb-4 uppercase tracking-wider flex items-center">
                        <Sparkles className="w-4 h-4 mr-2 text-brand-yellow" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-300 font-medium leading-tight">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-500 mb-3 uppercase tracking-wider">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="border-white/10 text-slate-300 bg-slate-950 group-hover:border-brand-yellow/30 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-6 border-t border-white/10 mt-auto bg-slate-900/30">
                    <a href={getWhatsAppLink(service.title)} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full bg-brand-yellow text-slate-950 hover:bg-yellow-400 font-bold group/btn shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                        <MessageCircle className="mr-2 h-5 w-5 group-hover/btn:scale-110 transition-transform" />
                        Inquire About {service.title}
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Travel Tech Solutions Grid */}
      <section className="py-24 bg-slate-900 relative z-10 border-y border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-4">Travel Tech Solutions</motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-2xl mx-auto">Specialized digital infrastructure and OTA management for travel agencies and tour operators</motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {travelServices.map((service, index) => (
              <motion.div key={index} variants={fadeInUp} className="h-full">
                <Card className="flex flex-col h-full group transition-all duration-300 border-white/5 bg-slate-950 hover:bg-slate-900 hover:border-brand-yellow/50 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-4 bg-white/5 border border-white/5 rounded-2xl text-brand-yellow group-hover:bg-brand-yellow group-hover:text-slate-950 transition-all duration-300 shadow-inner group-hover:scale-110">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-center text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="mt-auto pb-6">
                    <a href={getWhatsAppLink(service.title)} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" className="w-full border-white/10 text-slate-300 hover:text-slate-950 group-hover:border-brand-yellow group-hover:bg-brand-yellow font-bold transition-all rounded-xl">
                        Inquire Now
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hotel Platform Integration Grid */}
      <section className="py-24 relative z-10">
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-4">Hotel Platform Integration</motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-2xl mx-auto">Dominate major booking platforms, enhance visibility, and maximize your property's revenue</motion.p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {hotelServices.map((service, index) => (
              <motion.div key={index} variants={fadeInUp} className="h-full">
                <Card className="flex flex-col h-full group transition-all duration-300 border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-brand-yellow/50 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-4 bg-slate-900 border border-white/5 rounded-2xl text-brand-yellow group-hover:bg-brand-yellow group-hover:text-slate-950 transition-all duration-300 shadow-inner group-hover:scale-110">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-center text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="mt-auto pb-6">
                    <a href={getWhatsAppLink(service.title)} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" className="w-full border-white/20 text-slate-300 hover:text-slate-950 group-hover:border-brand-yellow group-hover:bg-brand-yellow font-bold transition-all rounded-xl">
                        Inquire Now
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section (Agile Timeline) */}
      <section className="py-24 bg-slate-900 border-y border-white/5 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-4">Our Agile Process</motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-2xl mx-auto">A proven engineering methodology to deliver exceptional results</motion.p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-5 gap-8"
          >
            {process.map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center relative group">
                {index !== process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-white/10 -z-10 group-hover:bg-brand-yellow/50 transition-colors duration-500"></div>
                )}
                <div className="mx-auto mb-6 w-16 h-16 bg-slate-950 border-2 border-brand-yellow rounded-full flex items-center justify-center text-brand-yellow font-black text-2xl group-hover:bg-brand-yellow group-hover:text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-yellow transition-colors">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OTA Logos Wall */}
      <section className="py-20 bg-slate-950 relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-10">Platforms We Optimize & Manage</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {platforms.map((platform, index) => (
              <div 
                key={index} 
                className="w-32 h-12 md:w-48 md:h-16 relative flex items-center justify-center transition-all duration-500 hover:scale-110 opacity-80 hover:opacity-100 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] cursor-pointer"
              >
                <Image src={platform.logo} alt={platform.name} fill className="object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Ready to Get Started?</h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light">
            Let's build a modern, high-converting digital presence for your business.
          </p>
          <a href="https://wa.me/94719089368?text=Hi%20Return%20Zero,%20I%20am%20interested%20in%20starting%20a%20new%20project%20with%20you!" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-brand-yellow hover:bg-yellow-400 text-slate-950 font-bold px-10 py-7 text-xl rounded-full shadow-[0_0_30px_rgba(245,158,11,0.3)] transform hover:scale-105 transition-all">
              <MessageCircle className="mr-3 h-6 w-6" /> Chat With Us on WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}