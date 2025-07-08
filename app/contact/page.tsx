"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Headphones } from "lucide-react"
import emailjs from '@emailjs/browser';

export default function ContactPage() {
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

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const templateParams = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    service: formData.service,
    message: formData.message,
  };

  try {
    const result = await emailjs.send(
      'service_ggas074',
      'template_5rpsjvk',
      templateParams,
      '-slcF47WslD-a1KcO'
    );

    console.log(result.text);
    alert('Message sent successfully!');
    // Optionally reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  } catch (error) {
    console.error(error);
    alert('Something went wrong. Please try again.');
  }

  setIsSubmitting(false);
};


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
      details: "contact@returnzeroitsolutions.com",
      description: "Send us an email anytime",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+94 71 908 9368",
      description: "Mon-Fri from 8am to 5pm",
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
      details: "Mon - Fri: 8:00 AM - 6:00 PM",
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
        "Our travel agent services include website development, SEO optimization, TripAdvisor setup, business management, and integration with major booking platforms.",
    },
    {
      question: "Can you help with hotel platform integration?",
      answer:
        "We specialize in getting hotels listed on Booking.com, Airbnb, Hostelworld, and other major platforms, plus revenue optimization strategies.",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-yellow/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-brand-yellow/10 text-brand-yellow border-brand-yellow">Get In Touch</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">Let's Start Your Project</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Contact us today for a free consultation and let's discuss how we can help
            you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2 text-brand-yellow" />
                  Send us a Message
                </CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-brand-dark mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-brand-dark mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
                {submitStatus && (
                  <div
                    className={`mt-4 p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help you succeed. Reach out to us through any of the following channels:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-brand-yellow/10 rounded-lg text-brand-yellow flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-brand-dark">{info.title}</h3>
                          <p className="text-brand-dark font-medium break-words text-sm">{info.details}</p>
                          <p className="text-sm text-gray-600">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Stats */}
              <Card className="bg-brand-dark text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Headphones className="h-5 w-5 mr-2 text-brand-yellow" />
                    Why Choose Us?
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brand-yellow">24/7</div>
                      <div className="text-sm text-gray-300">Support Available</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brand-yellow">98%</div>
                      <div className="text-sm text-gray-300">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brand-yellow">150+</div>
                      <div className="text-sm text-gray-300">Projects Done</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brand-yellow">50+</div>
                      <div className="text-sm text-gray-300">Happy Clients</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our services</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-brand-dark/80 mb-8 max-w-2xl mx-auto">
            Don't wait any longer. Contact us today and let's turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/94719089368?text=Hi%20I%20am%20interested%20in%20starting%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-brand-dark hover:bg-brand-dark/90 text-white">
              Schedule Free Consultation
              </Button>
            </a>
            
            <a href="tel:+94719089368">
              <Button
                size="lg"
                variant="outline"
                className="border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white bg-transparent"
              >
                Call Now: +94 71 908 9368
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
