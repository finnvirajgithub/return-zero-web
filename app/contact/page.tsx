"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Headphones, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error"
    message: string
  } | null>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "Not provided",
      service: formData.service,
      message: formData.message,
    }

    try {
      const result = await emailjs.send(
        'service_4np4c87',
        'template_5rpsjvk',
        templateParams,
        '-slcF47WslD-a1KcO'
      )

      console.log(result.text)
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. We will get back to you soon.",
      })
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      })
    } catch (error) {
      console.error(error)
      setSubmitStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again or contact us via WhatsApp.",
      })
    }

    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "contact@returnzerosolutions.com",
      description: "Send us an email anytime",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+94 71 908 9368",
      description: "24/7 Support available",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: "Ampitiya Road, Kandy",
      description: "Come say hello at our office",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      details: "24/7 Operations",
      description: "Weekend support available",
    },
  ]

  const services = [
    "Web Development",
    "Software Development",
    "Travel Agent Services",
    "Hotel Platform Integration",
    "SEO & Digital Marketing",
    "Other",
  ]

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. We'll provide a detailed timeline during consultation.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes! We offer 24/7 support and maintenance packages to ensure your website or application runs smoothly after launch.",
    },
    {
      question: "What's included in your travel agent services?",
      answer:
        "Our travel agent services include website development, SEO optimization, TripAdvisor setup, business management, and integration with major booking platforms like Viator and GetYourGuide.",
    },
    {
      question: "Can you help with hotel platform integration?",
      answer:
        "Absolutely. We specialize in getting hotels listed on Booking.com, Airbnb, Agoda, and other major platforms, plus we provide revenue optimization strategies.",
    },
  ]

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${isVisible ? "animate-fade-in translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Badge className="mb-6 bg-brand-yellow/20 text-brand-yellow border-brand-yellow px-4 py-1 text-sm font-bold uppercase tracking-wider">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Let's Start Your <span className="text-brand-yellow">Project</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Ready to transform your business? Reach out today for a free consultation and let's discuss how we can help you achieve your digital goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <Card className="shadow-2xl border-none bg-white rounded-2xl overflow-hidden">
              <div className="h-2 w-full bg-brand-yellow"></div>
              <CardHeader className="pb-4 px-8 pt-8">
                <CardTitle className="text-3xl font-bold flex items-center text-brand-dark">
                  <MessageSquare className="h-8 w-8 mr-3 text-brand-yellow" />
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-base text-gray-600 mt-2">
                  Fill out the form below and our team will get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-gray-50 border-gray-200 focus:border-brand-yellow focus:ring-brand-yellow"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="bg-gray-50 border-gray-200 focus:border-brand-yellow focus:ring-brand-yellow"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                        Phone / WhatsApp
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+94 7X XXX XXXX"
                        className="bg-gray-50 border-gray-200 focus:border-brand-yellow focus:ring-brand-yellow"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-semibold text-gray-700">
                        Service Interested In <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent text-sm"
                      >
                        <option value="" disabled>Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      rows={5}
                      className="bg-gray-50 border-gray-200 focus:border-brand-yellow focus:ring-brand-yellow resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-dark hover:bg-brand-dark/90 text-white font-bold py-6 text-lg rounded-xl transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  {/* Status Message */}
                  {submitStatus && (
                    <div
                      className={`p-4 rounded-xl flex items-start ${
                        submitStatus.type === "success"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                    >
                      {submitStatus.type === "success" ? (
                        <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                      )}
                      <p className="font-medium text-sm">{submitStatus.message}</p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 flex flex-col justify-center">
              <div>
                <h2 className="text-3xl font-bold text-brand-dark mb-4">Direct Contact</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Prefer to reach out directly? Use any of the channels below to get in touch with our team.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow border-gray-100 bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-brand-yellow/10 rounded-xl text-brand-yellow flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold text-brand-dark">{info.title}</h3>
                          <p className="text-brand-dark font-medium break-words text-sm mt-1">{info.details}</p>
                          <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Stats Banner */}
              <div className="bg-brand-dark text-white rounded-2xl p-8 relative overflow-hidden shadow-xl mt-4">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow opacity-10 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Headphones className="h-6 w-6 mr-3 text-brand-yellow" />
                  Why Choose Us?
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-black text-brand-yellow">24/7</div>
                    <div className="text-sm text-gray-300 font-medium mt-1">Support Available</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-brand-yellow">98%</div>
                    <div className="text-sm text-gray-300 font-medium mt-1">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-brand-yellow">70+</div>
                    <div className="text-sm text-gray-300 font-medium mt-1">Projects Done</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-brand-yellow">50+</div>
                    <div className="text-sm text-gray-300 font-medium mt-1">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get quick answers to common questions about our services</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-300 border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-brand-dark">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-yellow relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">Ready to Get Started?</h2>
          <p className="text-xl md:text-2xl text-brand-dark/80 mb-10 max-w-2xl mx-auto font-medium">
            Don't wait any longer. Contact us today and let's turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a
              href="https://wa.me/94719089368?text=Hi%20Return%20Zero,%20I%20am%20interested%20in%20starting%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full bg-brand-dark hover:bg-brand-dark/90 text-white font-bold px-8 py-6 text-lg rounded-full shadow-lg transform hover:-translate-y-1 transition-all">
                Schedule Free Consultation
              </Button>
            </a>
            
            <a href="tel:+94719089368" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white bg-transparent font-bold px-8 py-6 text-lg rounded-full transform hover:-translate-y-1 transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +94 71 908 9368
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}