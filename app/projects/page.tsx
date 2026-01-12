"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Users, TrendingUp } from "lucide-react"
import { useState } from "react"
import { link } from "fs"

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const projects = [
    {
      id: 1,
      title: "Ceylon Best Travels",
      category: "Travel Agency",
      description:
        "Complete digital transformation including website development, SEO optimization, and TripAdvisor management.",
      link: "https://ceylonbesttravels.com",
      image: "/images/ceylonbesttravels.png?height=300&width=400",
      technologies: ["Web Hosting","Tripadvisor", "SEO"],
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
      id: 2,
      title: "The Islanders",
      category: "Hotel",
      description:
        "Successfully integrated hotel with Booking.com, Airbnb, and Hostelworld, resulting in 250% revenue increase.",
      image: "/images/islanders.jpg?height=300&width=400",
      technologies: ["Booking.com", "Airbnb", "Agoda", "Tripadvisor", "SEO"],
      results: ["Listed on 5 major booking platforms", "250% increase in revenue", "95% occupancy rate achieved"],
      year: "2025",
      client: "The Islanders | Ahangama, Sri Lanka",
      duration: "1 Week",
    },
    {
      id: 3,
      title: "Ceylon MS Tours",
      category: "Travel Agency",
      description:
        "End-to-end digital transformation covering website design, SEO, and TripAdvisor management.",
      link: "https://ceylonmstours.com",
      image: "/images/ceylonms.jpg?height=300&width=400",
      technologies: ["Free Web Hosting","Tripadvisor", "SEO"],
      results: ["300% surge in online reservations", "Consistently in the top 3 for local travel searches", "More than 50 excellent TripAdvisor ratings"],
      year: "2025",
      client: "Ceylon MS Tours | Seeduwa, Sri Lanka",
      duration: "4 Week",
    },
    {
      id: 4,
      title: "Crown tours and travels",
      category: "Travel Agency",
      description:
        "Book unforgettable tours with Crown Tours & Travels through Viator’s trusted platform.",
      link: "https://www.crowntourssrianka.com",
      image: "/images/crowntours.jpg?height=300&width=400",
      technologies: ["Web Hosting","Viator","Tripadvisor"],
      results: ["Expanded global reach with increased online bookings via Viator", "Enhanced credibility through a verified and professional digital presence"],
      year: "2025",
      client: "Crown tours & travels | Kalpitiya, Sri Lanka",
      duration: "2 days",
    },
    {
      id: 5,
      title: "Lesley Tuk Tuk Safari",
      category: "Travel Agency",
      description:
        "Lesley Tuk Tuk Safari now available on Viator and GetYourGuide platforms.",
      link: "https://www.tripadvisor.com/Attraction_Review-g304138-d16758844-Reviews-Lesley_tuk_tuk_Safari-Kandy_Kandy_District_Central_Province.html",
      image: "/images/lesley.jpg?height=300&width=400",
      technologies: ["Viator","Tripadvisor","GetYourGuide"],
      results: ["Strengthened digital presence with multiple global booking platforms integration", "Increased customer reach and visibility in international travel markets"],
      year: "2025",
      client: "Lesley Tuk Tuk Safari | Kandy, Sri Lanka",
      duration: "4 days",
    },
    {
      id: 6,
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
      id: 7,
      title: "Coffee Dose Kandy",
      category: "Restaurant",
      description: "Created Google Business Profile and TripAdvisor account for Coffee Dose Kandy.",
      image: "/images/coffeedose.jpg?height=300&width=400",
      link: "https://share.google/7NxhQNEt2FHVeoSKK",
      technologies: ["Google business", "Tripadvisor"],
      results: ["Improved local visibility with accurate business listing and customer reviews", "Strengthened brand presence to attract more tourists and coffee lovers"],
      year: "2025",
      client: "Coffee Dose | Kandy, Sri Lanka",
      duration: "2 days",
    },
    {
      id: 8,
      title: "Danu Resort",
      category: "Hotel",
      description: "Created official TripAdvisor account to boost Danu Resort’s online presence.",
      image: "/images/danuresort.jpg?height=300&width=400",
      link: "https://www.tripadvisor.com/Hotel_Review-g1514867-d33399321-Reviews-Danu_Resort-Inamaluwa_Central_Province.html?m=19905",
      technologies: ["Tripadvisor"],
      results: ["Enhanced global visibility through trusted travel review platform", "Built credibility to attract more bookings and positive guest engagement"],
      year: "2025",
      client: "Danu Resort | Sigiriya, Sri Lanka",
      duration: "2 days",
    },
  ]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const categories = ["All", "Travel Agency", "Hotel", "Software Development", "Restaurant"]
  const stats = [
    { number: "20+", label: "Projects Completed", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "10+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "2+", label: "Years Experience", icon: <Calendar className="h-6 w-6" /> },
    { number: "98%", label: "Success Rate", icon: <TrendingUp className="h-6 w-6" /> },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-yellow/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-brand-yellow/10 text-brand-yellow border-brand-yellow">Our Portfolio</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">Past Projects & Success Stories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects and see how we've helped businesses achieve their digital
            transformation goals
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 text-brand-yellow">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-brand-yellow mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                className={
                  category === selectedCategory ? "bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark" : ""
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-brand-yellow text-brand-dark">{project.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl group-hover:text-brand-yellow transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mt-2">{project.description}</CardDescription>
                    </div>
                    <a
                      href={project.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="icon"
                        variant="ghost"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-sm text-brand-dark mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-semibold text-sm text-brand-dark mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {project.results.slice(0, 2).map((result, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full mr-2"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Info */}
                    <div className="flex justify-between text-sm text-gray-500 pt-2 border-t">
                      <span>{project.year}</span>
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found for "{selectedCategory}" category.</p>
              <Button
                onClick={() => setSelectedCategory("All")}
                className="mt-4 bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark"
              >
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Case Study Highlight
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-brand-yellow/10 text-brand-yellow border-brand-yellow">
                Featured Case Study
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                Paradise Travel Agency Transformation
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A complete digital transformation that resulted in a 300% increase in online bookings and established
                the agency as a top-rated travel service provider in their region.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                  <span>Custom booking system with real-time availability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                  <span>SEO optimization achieving top 3 local rankings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                  <span>TripAdvisor management with 50+ positive reviews</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                  <span>Mobile-responsive design with 95% user satisfaction</span>
                </div>
              </div>
              <Button className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark">View Full Case Study</Button>
            </div>
            <div className="relative">
              <Image
                src="/images/services.png?height=500&width=600"
                alt="Paradise Travel Agency Website"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Ready to Start Your Success Story?</h2>
          <p className="text-xl text-brand-dark/80 mb-8 max-w-2xl mx-auto">
            Join our growing list of successful clients and transform your business with our proven solutions
          </p>
          <a
            href="https://wa.me/94719089368?text=Hi%20I%20am%20interested%20in%20starting%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-brand-dark hover:bg-brand-dark/90 text-white">
              Start Your Project Today
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
