"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, Smartphone, TrendingUp, ArrowRight, CheckCircle, Star, Briefcase } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom websites and fast, scalable web applications built with modern technologies like React & Next.js",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Software Solutions",
      description: "Tailored, enterprise-grade software development engineered for your specific business needs",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Travel Tech Services",
      description: "Complete digital transformation for travel agencies, including advanced SEO and platform management",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Hotel Platform Integration",
      description: "Professional hotel listings and booking engine setups on Booking.com, Airbnb, and other major OTAs",
    },
  ]

  const stats = [
    { number: "70+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
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
    {
      name: "Anuradha",
      role: "Crown Tours Sri Lanka Owner",
      content: "He is a very visionary person and an excellent service. I give him my highest praise.",
      rating: 5,
    },
    {
      name: "Aseem Mohamed",
      role: "Shabith Tours owner",
      content: "Good company. I recommended excellent work.",
      rating: 5,
    },
    {
      name: "Mohamed Kaleel",
      role: "Kaleel Tours Owner",
      content: "Great service....!",
      rating: 5,
    },
    {
      name: "Gamini Santha",
      role: "Gama Tuk Tuk Tours Owner",
      content: "Excellent company",
      rating: 5,
    },
    {
      name: "Sapumal Manage",
      role: "Kumaru Lanka Tours Owner",
      content: "Professional and reliable service. They helped manage our online bookings across Get Your Guide smoothly. Great experience working with them.",
      rating: 5,
    },
    {
      name: "Mangala Rathnayake",
      role: "Gaveesha Tour Kandy Owner",
      content: "Return Zero IT Solutions built a clean website for our travel business and optimized our Viator profile perfectly. Highly satisfied.",
      rating: 5,
    },
    {
      name: "Athula Monarawilage",
      role: "Best Guide Lanka Tours Owner",
      content: "Very helpful team. They set up our tour listings on GetYourGuide and Tripadvisor quickly. Excellent service and good communication.",
      rating: 5,
    },
    {
      name: "Dammika Perera",
      role: "Sachi Mountain Villa 360 Owner",
      content: "Return Zero IT Solutions helped set up our Booking.com and Airbnb accounts perfectly. Very professional service and excellent support throughout the whole process.",
      rating: 5,
    },
    {
      name: "Ashan",
      role: "Ashan's Adventure Owner",
      content: "Great service from Return 0 IT Solutions! They created our website and managed our Tripadvisor listing professionally. Highly recommended team.",
      rating: 5,
    },
    {
      name: "Mogan",
      role: "Moga Tours Owner",
      content: "Wonderfull service. Very helpful for tour agents ❤️",
      rating: 5,
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-white">
          <Image src="/images/cover.jpg" alt="Return Zero Solutions Cover" fill className="object-cover opacity-5" />
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
            .triangle-1 { border-left: 15px solid transparent; border-right: 15px solid transparent; border-bottom: 26px solid #f59e0b; left: 10%; animation-duration: 8s; animation-delay: 0s; }
            .triangle-2 { border-left: 20px solid transparent; border-right: 20px solid transparent; border-bottom: 35px solid #f59e0b; left: 25%; animation-duration: 10s; animation-delay: 2s; }
            .triangle-3 { border-left: 12px solid transparent; border-right: 12px solid transparent; border-bottom: 21px solid #f59e0b; left: 40%; animation-duration: 7s; animation-delay: 1s; }
            .triangle-4 { border-left: 18px solid transparent; border-right: 18px solid transparent; border-bottom: 31px solid #f59e0b; left: 55%; animation-duration: 9s; animation-delay: 3s; }
            .triangle-5 { border-left: 14px solid transparent; border-right: 14px solid transparent; border-bottom: 24px solid #f59e0b; left: 70%; animation-duration: 8.5s; animation-delay: 1.5s; }
            .triangle-6 { border-left: 22px solid transparent; border-right: 22px solid transparent; border-bottom: 38px solid #f59e0b; left: 85%; animation-duration: 11s; animation-delay: 4s; }
            .triangle-7 { border-left: 16px solid transparent; border-right: 16px solid transparent; border-bottom: 28px solid #f59e0b; left: 15%; animation-duration: 9.5s; animation-delay: 5s; }
            .triangle-8 { border-left: 13px solid transparent; border-right: 13px solid transparent; border-bottom: 23px solid #f59e0b; left: 35%; animation-duration: 7.5s; animation-delay: 2.5s; }
            .triangle-9 { border-left: 19px solid transparent; border-right: 19px solid transparent; border-bottom: 33px solid #f59e0b; left: 60%; animation-duration: 10.5s; animation-delay: 3.5s; }
            .triangle-10 { border-left: 17px solid transparent; border-right: 17px solid transparent; border-bottom: 29px solid #f59e0b; left: 80%; animation-duration: 8.8s; animation-delay: 0.5s; }
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
            <Badge className="mb-4 bg-brand-yellow/10 text-brand-yellow border-brand-yellow px-4 py-1 text-sm">
              Premier IT & Travel Tech Partner
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold text-brand-dark mb-6 tracking-tight">
              Return Zero
              <span className="text-brand-yellow"> Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses with cutting-edge software engineering and comprehensive digital solutions for the modern travel industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark font-semibold transform hover:scale-105 transition-transform"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <Link href="/projects" className="w-full sm:w-auto inline-block">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white bg-transparent font-semibold transform hover:scale-105 transition-transform"
                >
                  View Portfolio
                </Button>
              </Link>

              <Link href="/careers" className="w-full sm:w-auto inline-block">
                <Button
                  size="lg"
                  variant="ghost"
                  className="w-full text-brand-dark hover:bg-gray-100 font-semibold"
                >
                  <Briefcase className="mr-2 h-4 w-4 text-brand-yellow" />
                  Join Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bridging the gap between robust software engineering and seamless hospitality management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-200">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto mb-4 p-4 bg-brand-yellow/10 rounded-2xl text-brand-yellow group-hover:bg-brand-yellow group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl md:text-6xl font-black text-brand-yellow mb-3 tracking-tighter">{stat.number}</div>
                <div className="text-gray-300 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">Why Choose Return Zero Solutions?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We are a modern tech company building digital solutions that drive real business results. From architecting scalable web applications using the latest tech stacks to optimizing OTA platforms for the global tourism sector, we deliver excellence.
              </p>
              <div className="space-y-5">
                {[
                  "Expert engineering with modern tech (Next.js, React, Node)",
                  "End-to-end travel & hospitality OTA integrations",
                  "Data-driven SEO & digital marketing strategies",
                  "Proven track record with 50+ successful businesses",
                  "Mentorship-driven culture for emerging tech talents",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-brand-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-yellow/20 rounded-2xl transform rotate-3 scale-105"></div>
              <Image
                src="/images/front.png?height=500&width=600"
                alt="Modern Tech Team working"
                width={600}
                height={500}
                className="rounded-xl shadow-2xl relative z-10 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it - hear from our successful partners</p>
          </div>
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full pb-10"
          >
            <CarouselContent className="px-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-6">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-gray-200 bg-white">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-brand-yellow fill-brand-yellow" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-8 flex-grow text-lg italic leading-relaxed">"{testimonial.content}"</p>
                      <div className="mt-auto pt-6 border-t border-gray-100">
                        <div className="font-bold text-brand-dark text-lg">{testimonial.name}</div>
                        <div className="text-sm font-medium text-brand-yellow mt-1">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-yellow relative overflow-hidden">
        {/* Subtle background pattern for CTA */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-pattern)" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl md:text-2xl text-brand-dark/80 mb-10 font-medium">
            Let's discuss how we can help you achieve your digital goals and scale your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/94719089368?text=Hi%20I%20am%20interested%20in%20starting%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full bg-brand-dark hover:bg-brand-dark/90 text-white font-bold px-8 py-6 text-lg rounded-full shadow-lg transform hover:-translate-y-1 transition-all">
                Get Free Consultation
              </Button>
            </a>
            
            <Link href="/projects" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white bg-transparent font-bold px-8 py-6 text-lg rounded-full transform hover:-translate-y-1 transition-all"
              >
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}