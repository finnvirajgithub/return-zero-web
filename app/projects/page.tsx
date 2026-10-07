"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Users, TrendingUp, CheckCircle, ArrowRight, MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Helper function for client inquiries
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

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const categories = ["All", "Travel Agency", "Hotel", "Software Development", "Restaurant"]
  
  const stats = [
    { number: "70+", label: "Projects Delivered", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "50+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "5+", label: "Years Experience", icon: <Calendar className="h-6 w-6" /> },
    { number: "300%", label: "Average ROI Growth", icon: <TrendingUp className="h-6 w-6" /> },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/cover.jpg')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent"></div>
        
        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${isVisible ? "animate-fade-in translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Badge className="mb-6 bg-brand-yellow text-brand-dark hover:bg-brand-yellow/90 px-4 py-1 text-sm font-bold uppercase tracking-wider">
            Our Portfolio
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Real Results for <span className="text-brand-yellow">Real Businesses</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            See how we've helped hotels and travel agencies scale their operations, dominate OTA platforms, and multiply their digital revenue.
          </p>
        </div>
      </section>

      {/* Stats Section (ROI Focused) */}
      <section className="py-12 bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-black text-brand-dark mb-2 tracking-tighter">{stat.number}</div>
                <div className="text-brand-dark/80 font-bold text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study - HIGH CONVERSION SECTION */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-yellow/20 rounded-2xl transform -rotate-2"></div>
              <Image
                src="/images/ceylonbesttravels.png"
                alt="Paradise Travel Agency Website"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl relative z-10 object-cover border border-gray-200"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-red-100 text-red-600 border-red-200 hover:bg-red-100 px-3 py-1">
                Featured Case Study
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
                300% Booking Growth for Ceylon Best Travels
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A complete digital transformation that resulted in a massive surge in online bookings and established the agency as a top-rated travel service provider on TripAdvisor.
              </p>
              <div className="space-y-4 mb-10 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-yellow flex-shrink-0" />
                  <span className="text-gray-800 font-medium">Custom booking system with seamless UX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-yellow flex-shrink-0" />
                  <span className="text-gray-800 font-medium">SEO optimization achieving top 3 local rankings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-yellow flex-shrink-0" />
                  <span className="text-gray-800 font-medium">TripAdvisor mastery generating 50+ 5-star reviews</span>
                </div>
              </div>
              <a href="https://wa.me/94719089368?text=Hi%20Return%20Zero,%20I%20want%20to%20achieve%20results%20like%20Ceylon%20Best%20Travels.%20Can%20we%20talk?" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-brand-dark hover:bg-brand-dark/90 text-white font-bold rounded-full px-8 shadow-lg">
                  I Want These Results
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600">Browse through our successful partnerships</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                className={`rounded-full px-6 font-medium transition-all ${
                  category === selectedCategory 
                  ? "bg-brand-dark text-brand-yellow hover:bg-brand-dark shadow-md" 
                  : "border-gray-200 text-gray-600 hover:border-brand-dark hover:text-brand-dark"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group flex flex-col h-full hover:shadow-2xl transition-all duration-500 overflow-hidden border-gray-100 bg-white">
                <div className="relative overflow-hidden h-56">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-brand-yellow text-brand-dark font-bold hover:bg-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          Visit Live Site <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-brand-dark hover:bg-white font-semibold backdrop-blur-sm shadow-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="flex-grow">
                  <CardTitle className="text-xl font-bold text-brand-dark group-hover:text-brand-yellow transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <div className="text-xs text-gray-400 font-medium mb-3 uppercase tracking-wider">{project.client}</div>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-5">
                  {/* Results - Highlighted for Clients */}
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-sm text-brand-dark mb-3 uppercase tracking-wider flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-brand-yellow" />
                      Key Results
                    </h4>
                    <ul className="space-y-2">
                      {project.results.slice(0, 2).map((result, idx) => (
                        <li key={idx} className="text-sm text-gray-700 font-medium flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-gray-100 text-gray-600 hover:bg-gray-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-4 pb-6 border-t border-gray-50 mt-auto px-6">
                  <a href={getInquiryLink(project.title)} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white transition-all font-semibold group/btn">
                      <MessageCircle className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Build a Similar Project
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-gray-50 rounded-2xl mt-8">
              <p className="text-gray-500 text-xl mb-6">No projects found for the "{selectedCategory}" category yet.</p>
              <Button
                onClick={() => setSelectedCategory("All")}
                size="lg"
                className="bg-brand-dark hover:bg-brand-dark/90 text-brand-yellow font-bold rounded-full"
              >
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-brand-dark text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Want Your Business on This List?</h2>
          <p className="text-xl text-gray-300 mb-10 font-light max-w-2xl mx-auto">
            Stop losing bookings to your competitors. Let us set up your digital infrastructure and OTA platforms today.
          </p>
          <a
            href="https://wa.me/94719089368?text=Hi%20Return%20Zero,%20I%20am%20ready%20to%20start%20my%20project!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark font-bold px-10 py-6 text-lg rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)] transform hover:-translate-y-1 transition-all">
              Claim Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}