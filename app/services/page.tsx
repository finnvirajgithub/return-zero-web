"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
} from "lucide-react"

export default function ServicesPage() {
  const mainServices = [
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies",
      features: [
        "Responsive Design",
        "E-commerce Solutions",
        "Content Management Systems",
        "Progressive Web Apps",
        "API Integration",
        "Performance Optimization",
      ],
      technologies: ["React", "Next.js", "Node.js", "WordPress", "Shopify"],
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "Software Development",
      description: "Tailored software solutions to streamline your business operations",
      features: [
        "Custom Applications",
        "Database Design",
        "Cloud Solutions",
        "Mobile Applications",
        "System Integration",
        "Maintenance & Support",
      ],
      technologies: ["Python", "Java", "React Native", "AWS", "MongoDB"],
    },
  ]

  const travelServices = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Website Development",
      description: "Professional travel agency websites with booking systems",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimization",
      description: "Improve your search rankings and attract more customers",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Business Management",
      description: "Complete business handling and customer relationship management",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "TripAdvisor Setup",
      description: "Create and optimize your TripAdvisor business profile",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Platform Integration",
      description: "Integration with major travel booking platforms",
    },
  ]

  const hotelServices = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Booking.com Listing",
      description: "Professional setup and optimization on Booking.com",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Airbnb Management",
      description: "Complete Airbnb listing creation and management",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Hostelworld Integration",
      description: "Get your property listed on Hostelworld platform",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Revenue Optimization",
      description: "Strategies to maximize your booking revenue",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Review Management",
      description: "Monitor and improve your online reputation",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "We discuss your needs and goals to understand your requirements",
    },
    {
      step: "02",
      title: "Planning",
      description: "Create a detailed project plan with timelines and milestones",
    },
    {
      step: "03",
      title: "Development",
      description: "Build your solution using best practices and modern technologies",
    },
    {
      step: "04",
      title: "Testing",
      description: "Thorough testing to ensure quality and performance",
    },
    {
      step: "05",
      title: "Launch",
      description: "Deploy your solution and provide ongoing support",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-yellow/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-brand-yellow/10 text-brand-yellow border-brand-yellow">Our Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">Comprehensive Digital Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From web development to specialized travel and hospitality services, we provide end-to-end solutions to grow
            your business
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Core Services</h2>
            <p className="text-xl text-gray-600">Professional development services for modern businesses</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-brand-yellow/10 rounded-full text-brand-yellow">{service.icon}</div>
                    <div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-lg mt-2">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-3">Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-brand-yellow" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="border-brand-yellow text-brand-yellow">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Agent Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Travel Agent Services</h2>
            <p className="text-xl text-gray-600">
              Specialized digital solutions for travel agencies and tour operators
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-brand-yellow/10 rounded-full text-brand-yellow group-hover:bg-brand-yellow group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Hotel Platform Integration</h2>
            <p className="text-xl text-gray-600">
              Get your hotel listed on major booking platforms and maximize your revenue
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotelServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-brand-yellow/10 rounded-full text-brand-yellow group-hover:bg-brand-yellow group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-300">A proven methodology to deliver exceptional results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-brand-dark/80 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and get a free consultation
          </p>
          <a
            href="https://wa.me/94719089368?text=Hi%20I%20am%20interested%20in%20starting%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-brand-dark hover:bg-brand-dark/90 text-white">
            Get Free Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          </a>
          
        </div>
      </section>
    </div>
  )
}
