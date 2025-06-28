"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, Smartphone, TrendingUp, ArrowRight, CheckCircle, Star } from "lucide-react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Software Solutions",
      description: "Tailored software development for your business needs",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Travel Agent Services",
      description: "Complete digital solutions for travel agencies including SEO and platform management",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Hotel Platform Integration",
      description: "Get your hotel listed on Booking.com, Airbnb, and other major platforms",
    },
  ]

  const stats = [
    { number: "20+", label: "Projects Completed" },
    { number: "10+", label: "Happy Clients" },
    { number: "2+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ]

  const testimonials = [
    {
      name: "Indika",
      role: "Ceylon Best Travels Owner",
      content: "Thank you very much Malli, you did a great job, everyone said it was great.",
      rating: 5,
    },
    {
      name: "Ayesh",
      role: "The Islanders Owner",
      content: "They helped us get listed on all major booking platforms. Professional service and excellent results.",
      rating: 5,
    },
    {
      name: "Dhanushka",
      role: "Sri Lanka Vivid Tours Owner",
      content: "They Succesfully claimed my tripadvisor account. Highly recommend their services!",
      rating: 5,
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/cover.jpg" alt="Return Zero Solutions Cover" fill className="object-cover opacity-10" />
        </div>

        {/* Animated Triangles Background */}
        <div className="absolute inset-0 z-0">
          <style jsx>{`
            @keyframes floatUp {
              0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
              }
              10% {
                opacity: 1;
              }
              90% {
                opacity: 1;
              }
              100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
              }
            }
            .triangle {
              position: absolute;
              width: 0;
              height: 0;
              animation: floatUp linear infinite;
            }
            .triangle-1 {
              border-left: 15px solid transparent;
              border-right: 15px solid transparent;
              border-bottom: 26px solid #f59e0b;
              left: 10%;
              animation-duration: 8s;
              animation-delay: 0s;
            }
            .triangle-2 {
              border-left: 20px solid transparent;
              border-right: 20px solid transparent;
              border-bottom: 35px solid #f59e0b;
              left: 25%;
              animation-duration: 10s;
              animation-delay: 2s;
            }
            .triangle-3 {
              border-left: 12px solid transparent;
              border-right: 12px solid transparent;
              border-bottom: 21px solid #f59e0b;
              left: 40%;
              animation-duration: 7s;
              animation-delay: 1s;
            }
            .triangle-4 {
              border-left: 18px solid transparent;
              border-right: 18px solid transparent;
              border-bottom: 31px solid #f59e0b;
              left: 55%;
              animation-duration: 9s;
              animation-delay: 3s;
            }
            .triangle-5 {
              border-left: 14px solid transparent;
              border-right: 14px solid transparent;
              border-bottom: 24px solid #f59e0b;
              left: 70%;
              animation-duration: 8.5s;
              animation-delay: 1.5s;
            }
            .triangle-6 {
              border-left: 22px solid transparent;
              border-right: 22px solid transparent;
              border-bottom: 38px solid #f59e0b;
              left: 85%;
              animation-duration: 11s;
              animation-delay: 4s;
            }
            .triangle-7 {
              border-left: 16px solid transparent;
              border-right: 16px solid transparent;
              border-bottom: 28px solid #f59e0b;
              left: 15%;
              animation-duration: 9.5s;
              animation-delay: 5s;
            }
            .triangle-8 {
              border-left: 13px solid transparent;
              border-right: 13px solid transparent;
              border-bottom: 23px solid #f59e0b;
              left: 35%;
              animation-duration: 7.5s;
              animation-delay: 2.5s;
            }
            .triangle-9 {
              border-left: 19px solid transparent;
              border-right: 19px solid transparent;
              border-bottom: 33px solid #f59e0b;
              left: 60%;
              animation-duration: 10.5s;
              animation-delay: 3.5s;
            }
            .triangle-10 {
              border-left: 17px solid transparent;
              border-right: 17px solid transparent;
              border-bottom: 29px solid #f59e0b;
              left: 80%;
              animation-duration: 8.8s;
              animation-delay: 0.5s;
            }
          `}</style>

          <div className="triangle triangle-1"></div>
          <div className="triangle triangle-2"></div>
          <div className="triangle triangle-3"></div>
          <div className="triangle triangle-4"></div>
          <div className="triangle triangle-5"></div>
          <div className="triangle triangle-6"></div>
          <div className="triangle triangle-7"></div>
          <div className="triangle triangle-8"></div>
          <div className="triangle triangle-9"></div>
          <div className="triangle triangle-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <Badge className="mb-4 bg-brand-yellow/10 text-brand-yellow border-brand-yellow">
              Professional Digital Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-dark mb-6">
              Return Zero
              <span className="text-brand-yellow"> Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge web development, software solutions, and comprehensive digital
              marketing services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
              <Button
                size="lg"
                className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark transform hover:scale-105 transition-transform"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              </a>
              
              <a href="/projects" className="inline-block">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white bg-transparent transform hover:scale-105 transition-transform"
                >
                View Our Work
                </Button>
              </a>
              
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive digital solutions to help your business thrive in the digital age
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
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

      {/* Stats Section */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-brand-yellow mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">Why Choose Return Zero Solutions?</h2>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in creating digital solutions that drive real business results. Our expertise spans web
                development, software creation, and specialized services for the travel and hospitality industries.
              </p>
              <div className="space-y-4">
                {[
                  "Expert team with 5+ years of experience",
                  "Specialized in travel and hospitality sectors",
                  "End-to-end digital solutions",
                  "24/7 support and maintenance",
                  "Proven track record of success",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-yellow" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/front.png?height=400&width=500"
                alt="Team working"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-brand-yellow fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-brand-dark">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-brand-dark/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals and grow your business online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/94719089368?text=Hi%20I%20am%20interested%20in%20starting%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-brand-dark hover:bg-brand-dark/90 text-white">
              Get Free Consultation
              </Button>
            </a>
            
            <a href="/projects">
            <Button
              size="lg"
              variant="outline"
              className="border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white bg-transparent"
            >
              View Portfolio
            </Button>
            </a>
            
          </div>
        </div>
      </section>
    </div>
  )
}
