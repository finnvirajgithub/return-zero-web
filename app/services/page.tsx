"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  Code,
  TrendingUp,
  Smartphone,
  Search,
  Users,
  Building,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  MessageCircle
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Helper function to generate WhatsApp links dynamically
  const getWhatsAppLink = (serviceName: string) => {
    const message = `Hi Return Zero, I am interested in your ${serviceName} services. Can I get more details?`
    return `https://wa.me/94719089368?text=${encodeURIComponent(message)}`
  }

  const mainServices = [
    {
      icon: <Globe className="h-12 w-12" />,
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
      icon: <Code className="h-12 w-12" />,
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
      icon: <Globe className="h-8 w-8" />,
      title: "Travel Agency Websites",
      description: "Professional, conversion-optimized travel agency websites with integrated direct booking systems.",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Travel SEO Optimization",
      description: "Advanced search engine strategies to rank your tours higher and attract global customers.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Business Management CRM",
      description: "Complete digital business handling, automated workflows, and customer relationship management.",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "TripAdvisor Setup",
      description: "Professional creation, claiming, and optimization of your TripAdvisor business profile.",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "OTA Platform Integration",
      description: "Seamless integration and tour structuring with major travel platforms like Viator & GetYourGuide.",
    },
  ]

  const hotelServices = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Booking.com Listing",
      description: "End-to-end professional setup, content optimization, and visibility boosting on Booking.com.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Airbnb Management",
      description: "Complete Airbnb listing creation, photography guidelines, and host profile management.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Hostelworld Integration",
      description: "Strategic property listing and inventory management on the Hostelworld platform.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Revenue Optimization",
      description: "Dynamic pricing strategies and market analysis to maximize your daily booking revenue.",
    },
    {
      icon: <Star className="h-8 w-8" />,
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
    {
      step: "01",
      title: "Consultation",
      description: "Deep dive into your business goals, target audience, and digital requirements.",
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Architecting a detailed project roadmap with clear timelines and technical milestones.",
    },
    {
      step: "03",
      title: "Development",
      description: "Building your custom solution utilizing industry best practices and modern tech.",
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Rigorous testing across devices and platforms to ensure flawless performance.",
    },
    {
      step: "05",
      title: "Launch & Scale",
      description: "Smooth deployment followed by continuous support, analytics tracking, and scaling.",
    },
  ]

  const floatingLogos = [
    { src: "/logos/airbnb.png", alt: "Airbnb", className: "icon-1", size: 60 },
    { src: "/logos/booking.png", alt: "Booking.com", className: "icon-2", size: 70 },
    { src: "/logos/tripadvisor.png", alt: "TripAdvisor", className: "icon-3", size: 55 },
    { src: "/logos/viator.png", alt: "Viator", className: "icon-4", size: 65 },
    { src: "/logos/gyg.png", alt: "GetYourGuide", className: "icon-5", size: 75 },
    { src: "/logos/agoda.png", alt: "Agoda", className: "icon-6", size: 50 },
    { src: "/logos/expedia.png", alt: "Expedia", className: "icon-7", size: 65 },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-brand-yellow/10 to-white overflow-hidden">
        
        {/* Animated Floating Logos Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <style jsx>{`
            @keyframes floatLogo {
              0% { transform: translateY(100vh) rotate(-10deg) scale(0.8); opacity: 0; }
              15% { opacity: 0.6; }
              85% { opacity: 0.6; }
              100% { transform: translateY(-150px) rotate(10deg) scale(1.1); opacity: 0; }
            }
            .floating-logo-container {
              position: absolute;
              display: flex;
              align-items: center;
              justify-content: center;
              animation: floatLogo linear infinite;
              filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.1));
            }
            .icon-1 { left: 8%; animation-duration: 14s; animation-delay: 0s; }
            .icon-2 { left: 22%; animation-duration: 18s; animation-delay: 4s; }
            .icon-3 { left: 35%; animation-duration: 12s; animation-delay: 1s; }
            .icon-4 { left: 52%; animation-duration: 16s; animation-delay: 6s; }
            .icon-5 { left: 70%; animation-duration: 20s; animation-delay: 2s; }
            .icon-6 { left: 82%; animation-duration: 15s; animation-delay: 8s; }
            .icon-7 { left: 15%; animation-duration: 17s; animation-delay: 7s; }
          `}</style>

          {floatingLogos.map((logo, index) => (
            <div key={index} className={`floating-logo-container ${logo.className}`}>
              <div className="relative" style={{ width: logo.size, height: logo.size }}>
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in translate-y-0" : "opacity-0 translate-y-10"}`}>
            <Badge className="mb-4 bg-brand-yellow/10 text-brand-yellow border-brand-yellow px-4 py-1 text-sm font-bold uppercase tracking-wider">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-6 tracking-tight">
              Comprehensive Digital Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed mb-10">
              From enterprise software engineering to specialized travel tech integrations, we provide end-to-end solutions to scale your business.
            </p>
            <div className="flex justify-center">
              <a href="#core-services">
                <Button size="lg" className="bg-brand-dark hover:bg-brand-dark/90 text-white rounded-full px-8">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section id="core-services" className="py-24 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Software & IT Engineering</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">High-performance digital products engineered for modern businesses</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <Card key={index} className="flex flex-col h-full hover:shadow-2xl transition-all duration-300 border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-brand-yellow/10 rounded-2xl text-brand-yellow">{service.icon}</div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-brand-dark">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-lg mt-4 text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-brand-yellow flex-shrink-0" />
                            <span className="text-sm text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-3">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="border-brand-dark text-brand-dark bg-gray-50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-6 border-t border-gray-100 mt-auto">
                  <a href={getWhatsAppLink(service.title)} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full bg-brand-yellow text-brand-dark hover:bg-brand-yellow/90 font-bold group">
                      <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Inquire About {service.title}
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Agent Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Travel Tech Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized digital infrastructure and OTA management for travel agencies and tour operators
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelServices.map((service, index) => (
              <Card key={index} className="flex flex-col h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-white">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-brand-yellow/10 rounded-full text-brand-yellow group-hover:bg-brand-yellow group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-center text-base text-gray-600">{service.description}</CardDescription>
                </CardContent>
                <CardFooter className="mt-auto pb-6">
                  <a href={getWhatsAppLink(service.title)} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white group-hover:border-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-dark transition-all">
                      Inquire Now
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Hotel Platform Integration</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dominate major booking platforms, enhance visibility, and maximize your property's revenue
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotelServices.map((service, index) => (
              <Card key={index} className="flex flex-col h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-100">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-brand-yellow/10 rounded-full text-brand-yellow group-hover:bg-brand-yellow group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-center text-base text-gray-600">{service.description}</CardDescription>
                </CardContent>
                <CardFooter className="mt-auto pb-6">
                  <a href={getWhatsAppLink(service.title)} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white group-hover:border-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-dark transition-all">
                      Inquire Now
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Integrations Content & Logos Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* SEO Content Block */}
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              OTA Profile Setup & Optimization
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Maximize your bookings and digital footprint with our expert Online Travel Agency (OTA) management services. 
              We specialize in creating, optimizing, and managing business profiles across top global travel platforms. 
              By utilizing strategic SEO techniques, high-converting tour descriptions, and effective review management, 
              we ensure your travel agency or hotel ranks higher on search results. Whether it is increasing your visibility 
              on TripAdvisor, driving more tour sales on Viator and GetYourGuide, or boosting room occupancy through Booking.com, 
              Airbnb, Agoda, and Expedia, we provide the complete digital infrastructure for your tourism business to thrive.
            </p>
          </div>

          {/* Logos */}
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
              Platforms We Optimize & Manage
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
            {platforms.map((platform, index) => (
              <div 
                key={index} 
                className="w-40 h-20 md:w-52 md:h-24 relative flex items-center justify-center transition-transform duration-300 hover:scale-110 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={platform.logo}
                  alt={`${platform.name} Optimization Services`}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'block';
                  }}
                />
                <span className="hidden font-bold text-gray-400 text-lg">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Agile Process</h2>
            <p className="text-xl text-gray-300">A proven engineering methodology to deliver exceptional results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative group">
                {/* Connector line for desktop */}
                {index !== process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-gray-700 -z-10 group-hover:bg-brand-yellow transition-colors duration-500"></div>
                )}
                <div className="mx-auto mb-6 w-16 h-16 bg-brand-dark border-2 border-brand-yellow rounded-full flex items-center justify-center text-brand-yellow font-black text-2xl group-hover:bg-brand-yellow group-hover:text-brand-dark transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-yellow relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">Ready to Get Started?</h2>
          <p className="text-xl md:text-2xl text-brand-dark/80 mb-10 font-medium">
            Let's build a modern, high-converting digital presence for your business.
          </p>
          <a
            href="https://wa.me/94719089368?text=Hi%20Return%20Zero,%20I%20am%20interested%20in%20starting%20a%20new%20project%20with%20you!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-brand-dark hover:bg-brand-dark/90 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl transform hover:-translate-y-1 transition-all">
              <MessageCircle className="mr-2 h-6 w-6" />
              Chat With Us on WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}