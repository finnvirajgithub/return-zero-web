"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Users, TrendingUp, CheckCircle, ArrowRight, MessageCircle, Sparkles } from "lucide-react"

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const getInquiryLink = (projectName: string) => {
    const message = `Hi Return Zero, I saw the "${projectName}" project in your portfolio and I'm interested in building something similar for my business. Can we discuss?`
    return `https://wa.me/94719089368?text=${encodeURIComponent(message)}`
  }

  const projects = [
    {
      id: 1,
      title: "Travel Agency & Tour Operator",
      category: "Travel Agency",
      description: "Complete digital presence optimization including custom static blog architecture, local SEO schema integration, high-performance caching setup, and official TripAdvisor listing management.",
      link: "https://lankagotours.com",
      image: "/images/lankagotourspost.png?height=300&width=400",
      technologies: ["WordPress", "Hostinger CDN", "TripAdvisor Optimization", "Local SEO Schema", "HTML/CSS"],
      results: [
        "Successfully created and optimized the official TripAdvisor listing",
        "Significantly improved mobile and desktop PageSpeed performance",
        "Optimized Local SEO schema and business address visibility"
      ],
      year: "2026",
      client: "Lanka Go Tours | Ella, Sri Lanka",
      duration: "1 months",
    },
    {
      id: 2,
      title: "Ceylon Best Travels",
      category: "Travel Agency",
      description: "Complete digital transformation including website development, SEO optimization, and TripAdvisor management.",
      link: "https://ceylonbesttravels.com",
      image: "/images/ceylonbesttravels.png?height=300&width=400",
      technologies: ["Web Hosting", "Tripadvisor", "SEO"],
      results: [
        "300% increase in online bookings",
        "Top 3 ranking for local travel searches",
        "50+ positive TripAdvisor reviews",
      ],
      year: "2025",
      client: "Ceylon Best Travels | Colombo, Sri Lanka",
      duration: "1 months",
    },
    {
      id: 3,
      title: "The Islanders",
      category: "Hotel",
      description: "Successfully integrated hotel with Booking.com, Airbnb, and Hostelworld, resulting in massive revenue growth.",
      image: "/images/islanders.jpg?height=300&width=400",
      technologies: ["Booking.com", "Airbnb", "Agoda", "Tripadvisor", "SEO"],
      results: ["Listed on 5 major platforms", "250% increase in revenue", "95% occupancy rate achieved"],
      year: "2025",
      client: "The Islanders | Ahangama, Sri Lanka",
      duration: "1 Week",
    },
    {
      id: 4,
      title: "Ceylon MS Tours",
      category: "Travel Agency",
      description: "End-to-end digital transformation covering website design, SEO, and TripAdvisor management.",
      link: "https://ceylonmstours.com",
      image: "/images/ceylonms.jpg?height=300&width=400",
      technologies: ["Free Web Hosting", "Tripadvisor", "SEO"],
      results: ["300% surge in online reservations", "Top 3 for local travel searches", "50+ excellent TripAdvisor ratings"],
      year: "2025",
      client: "Ceylon MS Tours | Seeduwa, Sri Lanka",
      duration: "4 Week",
    },
    {
      id: 5,
      title: "Crown Tours and Travels",
      category: "Travel Agency",
      description: "Book unforgettable tours with Crown Tours & Travels through Viator’s trusted platform.",
      link: "https://www.crowntourssrianka.com",
      image: "/images/crowntours.jpg?height=300&width=400",
      technologies: ["Web Hosting", "Viator", "Tripadvisor"],
      results: ["Expanded global reach via Viator", "Enhanced credibility through verified presence"],
      year: "2025",
      client: "Crown tours & travels | Kalpitiya, Sri Lanka",
      duration: "2 days",
    },
    {
      id: 6,
      title: "Lesley Tuk Tuk Safari",
      category: "Travel Agency",
      description: "Lesley Tuk Tuk Safari now available on Viator and GetYourGuide platforms.",
      link: "https://www.tripadvisor.com/Attraction_Review-g304138-d16758844-Reviews-Lesley_tuk_tuk_Safari-Kandy_Kandy_District_Central_Province.html",
      image: "/images/lesley.jpg?height=300&width=400",
      technologies: ["Viator", "Tripadvisor", "GetYourGuide"],
      results: ["Multiple global booking integrations", "Increased customer reach globally"],
      year: "2025",
      client: "Lesley Tuk Tuk Safari | Kandy, Sri Lanka",
      duration: "4 days",
    },
    {
      id: 7,
      title: "Roam Sri Lanka Tours",
      category: "Travel Agency",
      description: "Comprehensive booking platform for adventure tour operator.",
      image: "/images/roamsrilanka.png?height=300&width=400",
      link: "https://roamsrilanka.lk",
      technologies: ["HTML5", "Google business", "Tripadvisor", "SEO"],
      results: ["200% increase in tour bookings", "Mobile app with 4.8-star rating", "Streamlined booking process"],
      year: "2025",
      client: "Roam Sri Lanka Tours | Colombo, Sri Lanka",
      duration: "1 months",
    },
    {
      id: 8,
      title: "Coffee Dose Kandy",
      category: "Restaurant",
      description: "Created Google Business Profile and TripAdvisor account for Coffee Dose Kandy.",
      image: "/images/coffeedose.jpg?height=300&width=400",
      link: "https://share.google/7NxhQNEt2FHVeoSKK",
      technologies: ["Google business", "Tripadvisor"],
      results: ["Improved local visibility", "Strengthened brand presence for tourists"],
      year: "2025",
      client: "Coffee Dose | Kandy, Sri Lanka",
      duration: "2 days",
    },
    {
      id: 9,
      title: "Danu Resort",
      category: "Hotel",
      description: "Created official TripAdvisor account to boost Danu Resort’s online presence.",
      image: "/images/danuresort.jpg?height=300&width=400",
      link: "https://www.tripadvisor.com/Hotel_Review-g1514867-d33399321-Reviews-Danu_Resort-Inamaluwa_Central_Province.html?m=19905",
      technologies: ["Tripadvisor"],
      results: ["Enhanced global visibility", "Built credibility to attract more bookings"],
      year: "2025",
      client: "Danu Resort | Sigiriya, Sri Lanka",
      duration: "2 days",
    },
    {
      id: 10,
      title: "Kumaru Lanka Tours",
      category: "Travel Agency",
      description: "Created Get Your Guide account and Tripadvisor account for Kumaru Lanka Tours.",
      image: "/images/kumaru.png?height=300&width=400",
      link: "https://gyg.me/9BfQre5f",
      technologies: ["Get Your Guide", "Tripadvisor", "Tour Management"],
      results: ["200% increase in tour bookings", "Streamlined booking process"],
      year: "2026",
      client: "Kumaru Lanka Tours | Hiriketiya, Sri Lanka",
      duration: "2 Weeks",
    },
    {
      id: 11,
      title: "Titan Tours Sri Lanka",
      category: "Travel Agency",
      description: "Created Get Your Guide account and Products for Titan Tours Sri Lanka.",
      image: "/images/Titan.png?height=300&width=400",
      link: "https://www.getyourguide.com/dambulla-l104454/sri-lanka-10-day-tour-with-sigiriya-kandy-ella-t1042213/?preview=PCDYK9B56NOGAQX4EOCOPE3UHGJXOT9S&utm_medium=sharing&utm_campaign=activity_details_desktop&sharing_exp=hem-adp-share-modal-shortlinks-desktop_a",
      technologies: ["Get Your Guide", "Tour Management"],
      results: ["200% increase in tour bookings", "Streamlined booking process"],
      year: "2026",
      client: "Titan Tours Sri Lanka | Nuwara-Eliya, Sri Lanka",
      duration: "2 Weeks",
    },
    {
      id: 12,
      title: "Sachi Mountain Villa 360°",
      category: "Hotel",
      description: "Successfully integrated hotel with Booking.com, Airbnb, and Agoda, resulting in increased bookings.",
      image: "/images/sachi.png?height=300&width=400",
      link: "https://www.google.com/search?q=Sachi+Mountain+Villa+360%C2%B0",
      technologies: ["Booking.com", "Airbnb", "Agoda", "Google business"],
      results: ["Listed on 3 major booking platforms", "250% increase in revenue", "95% occupancy rate achieved"],
      year: "2026",
      client: "Sachi Mountain Villa 360° | Kandy, Sri Lanka",
      duration: "1 Week",
    },
    {
      id: 13,
      title: "Wicky Tours Kandy",
      category: "Travel Agency",
      description: "Strategic Viator Product Creation and Listing Optimization.",
      image: "/images/wicky.png?height=300&width=400",
      link: "https://www.tripadvisor.com/AttractionProductReview-g304138-d34129344-Kandy_City_Tour_with_Temples_Culture_and_Scenic_Viewpoints-Kandy_Kandy_District_Ce.html",
      technologies: ["Viator"],
      results: ["Listed on Viator", "250% increase in revenue"],
      year: "2026",
      client: "Wicky Tours Kandy | Kandy, Sri Lanka",
      duration: "1 Week",
    },
    {
      id: 14,
      title: "Best Guide Lanka Tours Kandy",
      category: "Travel Agency",
      description: "Professional Viator Product integration to maximize international tourist reach.",
      image: "/images/bestguidelanka.png?height=300&width=400",
      link: "https://www.tripadvisor.com/AttractionProductReview-g304138-d33878831-Kandy_City_Tour_By_Best_Guide_Lanka_Tours-Kandy_Kandy_District_Central_Province.html",
      technologies: ["Viator"],
      results: ["Listed on Viator", "250% increase in Bookings"],
      year: "2026",
      client: "Best Guide Lanka Tours Kandy | Kandy, Sri Lanka",
      duration: "1 Week",
    },
  ]

  // Update this array anytime to add/remove clients or logos
  const allClientsList = [
    { name: "Lanka Go Tours", logo: null },
    { name: "Ceylon Best Travels", logo: "/images/ceylonbesttravels.png" }, 
    { name: "The Islanders", logo: null },
    { name: "Ceylon MS Tours", logo: null },
    { name: "Crown Tours & Travels", logo: "/images/crowntours.jpg" },
    { name: "Lesley Tuk Tuk Safari", logo: null },
    { name: "Roam Sri Lanka", logo: "/images/roamsrilanka.png" },
    { name: "Coffee Dose Kandy", logo: null },
    { name: "Danu Resort", logo: null },
    { name: "Kumaru Lanka Tours", logo: "/images/kumaru.png" },
    { name: "Titan Tours", logo: "/images/Titan.png" },
    { name: "Sachi Mountain Villa", logo: "/images/sachi.png" },
    { name: "Wicky Tours", logo: "/images/wicky.png" },
    { name: "Best Guide Lanka", logo: "/images/bestguidelanka.png" }
  ]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const categories = ["All", "Travel Agency", "Hotel", "Restaurant"]
  
  const stats = [
    { number: "70+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "300%", label: "Avg. ROI Growth" },
  ]

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  }

  const memoizedParticles = useMemo(() => {
    return [...Array(20)].map((_, i) => {
      const size = Math.random() * 15 + 5
      return (
        <motion.div
          key={i}
          className="absolute rounded-full bg-brand-yellow/20 blur-[1px]"
          style={{ width: size, height: size, left: `${Math.random() * 100}%`, bottom: "-20%" }}
          animate={{
            y: ["0vh", "-150vh"],
            x: Math.random() > 0.5 ? [0, 50, -50, 0] : [0, -50, 50, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: Math.random() * 15 + 15, repeat: Infinity, ease: "linear", delay: Math.random() * 10 }}
        />
      )
    })
  }, [])

  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen pt-20 pb-20 selection:bg-brand-yellow selection:text-slate-950">
      
      <div className="fixed inset-0 z-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0))] opacity-20 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden z-10 border-b border-white/5 bg-slate-900/50 backdrop-blur-xl">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {memoizedParticles}
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-yellow/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <Badge className="mb-6 bg-white/5 text-brand-yellow border border-brand-yellow/30 px-5 py-2 text-sm font-bold tracking-widest uppercase rounded-full backdrop-blur-md">
            Our Portfolio
          </Badge>
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight text-white">
            Real Results for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-300">Real Businesses</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            See how we've helped hotels and travel agencies scale their operations, dominate OTA platforms, and multiply their digital revenue.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-brand-yellow relative z-10 border-y border-white/10">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl font-black text-slate-950 mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-slate-900/70 font-bold text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Trust Grid (Wall of Fame) WITH LOGO & TEXT TOGETHER */}
      <section className="py-20 relative z-10 overflow-hidden bg-slate-950">
        <div className="absolute left-0 top-1/2 w-[300px] h-[300px] bg-brand-yellow/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">Trusted by Sri Lanka's Finest</h3>
            <p className="text-slate-400 mt-2">Partnered with 50+ travel & hospitality brands</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {allClientsList.map((client, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center justify-center p-4 h-32 text-center rounded-2xl bg-white/5 border border-white/10 hover:border-brand-yellow/50 hover:bg-brand-yellow/10 transition-colors duration-300 cursor-default group shadow-lg overflow-hidden relative gap-2"
              >
                {client.logo && (
                  <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center mb-1">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                )}
                <span className={`font-bold text-slate-300 group-hover:text-brand-yellow transition-colors leading-tight ${client.logo ? 'text-xs md:text-sm' : 'text-sm md:text-base'}`}>
                  {client.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-24 border-y border-white/5 relative z-10 overflow-hidden bg-slate-900/30">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-brand-yellow/20 rounded-3xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/ceylonbesttravels.png"
                  alt="Ceylon Best Travels Showcase"
                  width={600}
                  height={400}
                  className="object-cover w-full group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-red-500/10 text-red-400 border border-red-500/30 px-3 py-1 font-bold">
                <Sparkles className="w-3 h-3 mr-2 inline" /> Featured Case Study
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                300% Booking Growth for <br/> <span className="text-brand-yellow">Ceylon Best Travels</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                A complete digital transformation that resulted in a massive surge in online bookings and established the agency as a top-rated travel service provider on TripAdvisor.
              </p>
              
              <div className="space-y-4 mb-10 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-brand-yellow flex-shrink-0" />
                  <span className="text-slate-300 font-medium">Custom booking system with seamless UX</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-brand-yellow flex-shrink-0" />
                  <span className="text-slate-300 font-medium">SEO optimization achieving top 3 local rankings</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-brand-yellow flex-shrink-0" />
                  <span className="text-slate-300 font-medium">TripAdvisor mastery generating 50+ 5-star reviews</span>
                </div>
              </div>
              
              <a href="https://wa.me/94719089368?text=Hi%20Return%20Zero,%20I%20want%20to%20achieve%20results%20like%20Ceylon%20Best%20Travels.%20Can%20we%20talk?" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-brand-yellow hover:bg-yellow-400 text-slate-950 font-bold rounded-full px-8 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:scale-105 transition-all">
                  I Want These Results
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Explore Our Work</h2>
            <p className="text-xl text-slate-400">Browse through our successful partnerships</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                  category === selectedCategory 
                  ? "bg-brand-yellow border-brand-yellow text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]" 
                  : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            variants={staggerContainer} initial="hidden" animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id} layout variants={cardVariant} initial="hidden" animate="visible" exit="exit"
                  className="h-full"
                >
                  <Card className="group flex flex-col h-full bg-slate-900/50 backdrop-blur-sm border-white/5 hover:border-brand-yellow/30 transition-all duration-500 overflow-hidden relative">
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/0 via-transparent to-brand-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <div className="relative overflow-hidden h-56 border-b border-white/5">
                      <Image
                        src={project.image || "/images/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                      
                      {project.link && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[2px]">
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <Button className="bg-brand-yellow text-slate-950 font-bold hover:bg-yellow-400 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 rounded-full shadow-lg">
                              Visit Live Site <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                          </a>
                        </div>
                      )}
                      
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-slate-950/80 text-brand-yellow border border-brand-yellow/20 font-semibold backdrop-blur-md">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader className="flex-grow pt-6 relative z-10">
                      <CardTitle className="text-xl font-bold text-white group-hover:text-brand-yellow transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <div className="text-xs text-slate-500 font-bold mb-3 uppercase tracking-wider">{project.client}</div>
                      <CardDescription className="text-slate-400 text-sm leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-5 relative z-10 pb-4">
                      <div className="bg-white/5 p-4 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
                        <h4 className="font-bold text-xs text-slate-300 mb-3 uppercase tracking-wider flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2 text-brand-yellow" />
                          Key Results
                        </h4>
                        <ul className="space-y-2">
                          {project.results.slice(0, 2).map((result, idx) => (
                            <li key={idx} className="text-sm text-slate-400 font-medium flex items-start">
                              <CheckCircle className="w-4 h-4 text-brand-yellow mr-2 flex-shrink-0 mt-0.5" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-slate-800 text-slate-300 border border-white/5">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="pt-4 pb-6 border-t border-white/5 mt-auto relative z-10">
                      <a href={getInquiryLink(project.title)} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button variant="outline" className="w-full border-white/10 text-slate-300 hover:bg-brand-yellow hover:text-slate-950 hover:border-brand-yellow transition-all font-bold group/btn rounded-xl">
                          <MessageCircle className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                          Build a Similar Project
                        </Button>
                      </a>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-center py-20 bg-white/5 border border-white/10 rounded-3xl mt-8 backdrop-blur-sm"
            >
              <p className="text-slate-400 text-xl mb-6">No projects found for the "{selectedCategory}" category yet.</p>
              <Button
                onClick={() => setSelectedCategory("All")}
                size="lg"
                className="bg-brand-yellow hover:bg-yellow-400 text-slate-950 font-bold rounded-full shadow-[0_0_15px_rgba(245,158,11,0.2)]"
              >
                View All Projects
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative z-10 text-center px-4 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-yellow/5"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">Want Your Business on This List?</h2>
          <p className="text-xl text-slate-400 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Stop losing bookings to your competitors. Let us set up your digital infrastructure and OTA platforms today.
          </p>
          <a href="https://wa.me/94719089368?text=Hi%20Return%20Zero,%20I%20am%20ready%20to%20start%20my%20project!" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-brand-yellow hover:bg-yellow-400 text-slate-950 font-bold px-10 py-7 text-xl rounded-full shadow-[0_0_30px_rgba(245,158,11,0.3)] transform hover:scale-105 transition-all">
              Claim Your Free Consultation
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}