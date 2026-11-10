"use client"

import type React from "react"
import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Headphones, CheckCircle, AlertCircle, ChevronDown, ArrowRight } from "lucide-react"
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error"
    message: string
  } | null>(null)
  
  // State for interactive FAQ accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

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
      await emailjs.send(
        'service_4np4c87',
        'template_5rpsjvk',
        templateParams,
        '-slcF47WslD-a1KcO'
      )
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. We will get back to you soon.",
      })
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
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
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    { icon: <Mail className="h-6 w-6" />, title: "Email Us", details: "contact@returnzerosolutions.com", description: "Send us an email anytime" },
    { icon: <Phone className="h-6 w-6" />, title: "Call Us", details: "+94 71 908 9368", description: "24/7 Support available" },
    { icon: <MapPin className="h-6 w-6" />, title: "Visit Us", details: "Ampitiya Road, Kandy", description: "Come say hello at our office" },
    { icon: <Clock className="h-6 w-6" />, title: "Working Hours", details: "24/7 Operations", description: "Weekend support available" },
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
    { question: "How long does a typical project take?", answer: "Project timelines vary depending on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. We'll provide a detailed timeline during consultation." },
    { question: "Do you provide ongoing support?", answer: "Yes! We offer 24/7 support and maintenance packages to ensure your website or application runs smoothly after launch." },
    { question: "What's included in your travel agent services?", answer: "Our travel agent services include website development, SEO optimization, TripAdvisor setup, business management, and integration with major booking platforms like Viator and GetYourGuide." },
    { question: "Can you help with hotel platform integration?", answer: "Absolutely. We specialize in getting hotels listed on Booking.com, Airbnb, Agoda, and other major platforms, plus we provide revenue optimization strategies." },
  ]

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  const memoizedParticles = useMemo(() => {
    return [...Array(15)].map((_, i) => {
      const size = Math.random() * 10 + 5
      return (
        <motion.div
          key={i}
          className="absolute rounded-full bg-brand-yellow/30 blur-[2px]"
          style={{ width: size, height: size, left: `${Math.random() * 100}%`, bottom: "-20%" }}
          animate={{
            y: ["0vh", "-120vh"],
            x: Math.random() > 0.5 ? [0, 50, -50, 0] : [0, -50, 50, 0],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{ duration: Math.random() * 15 + 15, repeat: Infinity, ease: "linear", delay: Math.random() * 10 }}
        />
      )
    })
  }, [])

  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen pt-20 pb-20 selection:bg-brand-yellow selection:text-slate-950 overflow-hidden">
      
      {/* Global Background */}
      <div className="fixed inset-0 z-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0))] opacity-20 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 z-10 border-b border-white/5 bg-slate-900/40 backdrop-blur-xl">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">{memoizedParticles}</div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-yellow/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <Badge className="mb-6 bg-white/5 text-brand-yellow border border-brand-yellow/30 px-5 py-2 text-sm font-bold tracking-widest uppercase rounded-full backdrop-blur-md">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
            Let's Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-300">Project</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Ready to transform your business? Reach out today for a free consultation and let's discuss how we can help you achieve your digital goals.
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Dark Glassmorphism Contact Form */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Card className="shadow-2xl border-white/10 bg-slate-900/50 backdrop-blur-xl rounded-3xl overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-yellow to-yellow-300"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-[80px] pointer-events-none"></div>
                
                <CardHeader className="pb-4 px-8 pt-10">
                  <CardTitle className="text-3xl font-bold flex items-center text-white">
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl mr-4">
                      <MessageSquare className="h-6 w-6 text-brand-yellow" />
                    </div>
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-base text-slate-400 mt-4 leading-relaxed">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="px-8 pb-10">
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-slate-300">Full Name <span className="text-brand-yellow">*</span></label>
                        <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="John Doe" className="bg-slate-950/50 border-white/10 text-white focus-visible:ring-brand-yellow placeholder:text-slate-600 rounded-xl py-6" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-slate-300">Email Address <span className="text-brand-yellow">*</span></label>
                        <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" className="bg-slate-950/50 border-white/10 text-white focus-visible:ring-brand-yellow placeholder:text-slate-600 rounded-xl py-6" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-slate-300">Phone / WhatsApp</label>
                        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+94 7X XXX XXXX" className="bg-slate-950/50 border-white/10 text-white focus-visible:ring-brand-yellow placeholder:text-slate-600 rounded-xl py-6" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-semibold text-slate-300">Service Interested In <span className="text-brand-yellow">*</span></label>
                        <select id="service" name="service" required value={formData.service} onChange={handleChange} className="w-full px-4 h-[52px] bg-slate-950/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow text-slate-300 appearance-none">
                          <option value="" disabled className="text-slate-500">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service} className="bg-slate-900 text-white">{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-slate-300">Project Details <span className="text-brand-yellow">*</span></label>
                      <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} placeholder="Tell us about your project, goals, and any specific requirements..." rows={5} className="bg-slate-950/50 border-white/10 text-white focus-visible:ring-brand-yellow placeholder:text-slate-600 rounded-xl resize-none" />
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full bg-brand-yellow hover:bg-yellow-400 text-slate-950 font-bold py-7 text-lg rounded-xl transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                      {isSubmitting ? (
                        <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-slate-950 mr-3"></div> Sending Message...</>
                      ) : (
                        <>Send Message <Send className="ml-2 h-5 w-5" /></>
                      )}
                    </Button>

                    <AnimatePresence>
                      {submitStatus && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                          className={`p-4 rounded-xl flex items-start ${submitStatus.type === "success" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}
                        >
                          {submitStatus.type === "success" ? <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" /> : <AlertCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />}
                          <p className="font-medium text-sm leading-relaxed">{submitStatus.message}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Direct Contact Info */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8 flex flex-col justify-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Direct Contact</h2>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  Prefer to reach out directly? Use any of the channels below to get in touch with our team.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="group bg-white/5 border-white/10 hover:border-brand-yellow/50 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-slate-950 border border-white/5 rounded-xl text-brand-yellow flex-shrink-0 group-hover:scale-110 transition-transform">
                          {info.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold text-white">{info.title}</h3>
                          <p className="text-slate-300 font-medium break-words text-sm mt-1">{info.details}</p>
                          <p className="text-xs text-slate-500 mt-2">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Stats Banner */}
              <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 relative overflow-hidden shadow-2xl mt-4">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none"></div>
                <h3 className="text-2xl font-bold mb-8 flex items-center text-white">
                  <Headphones className="h-6 w-6 mr-3 text-brand-yellow" />
                  Why Choose Us?
                </h3>
                <div className="grid grid-cols-2 gap-8 relative z-10">
                  <div>
                    <div className="text-3xl font-black text-brand-yellow">24/7</div>
                    <div className="text-sm text-slate-400 font-medium mt-1">Support Available</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-brand-yellow">98%</div>
                    <div className="text-sm text-slate-400 font-medium mt-1">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-brand-yellow">70+</div>
                    <div className="text-sm text-slate-400 font-medium mt-1">Projects Done</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-brand-yellow">50+</div>
                    <div className="text-sm text-slate-400 font-medium mt-1">Happy Clients</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="py-24 bg-slate-900 border-y border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-400">Get quick answers to common questions about our services</motion.p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Card className="bg-white/5 border-white/10 hover:border-brand-yellow/30 transition-colors overflow-hidden cursor-pointer" onClick={() => setOpenFaqIndex(isOpen ? null : index)}>
                    <CardHeader className="p-6 flex flex-row items-center justify-between">
                      <CardTitle className={`text-lg transition-colors ${isOpen ? "text-brand-yellow" : "text-white"}`}>{faq.question}</CardTitle>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-yellow" : "text-slate-400"}`} />
                    </CardHeader>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                          <CardContent className="px-6 pb-6 pt-0 text-slate-400 leading-relaxed">
                            {faq.answer}
                          </CardContent>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden z-10 text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-yellow/5"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Ready to Get Started?</h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light max-w-2xl mx-auto">
            Don't wait any longer. Contact us today and let's turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a href="https://wa.me/94719089368?text=Hi%20Return%20Zero,%20I%20am%20interested%20in%20starting%20a%20project." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-brand-yellow hover:bg-yellow-400 text-slate-950 font-bold px-8 py-7 text-lg rounded-full shadow-[0_0_20px_rgba(245,158,11,0.3)] transform hover:-translate-y-1 transition-all">
                Schedule Consultation
              </Button>
            </a>
            <a href="tel:+94719089368" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full border-2 border-white/20 text-white hover:bg-white/10 hover:border-brand-yellow hover:text-brand-yellow bg-transparent font-bold px-8 py-7 text-lg rounded-full transform hover:-translate-y-1 transition-all">
                <Phone className="mr-2 h-5 w-5" /> Call Now: +94 71 908 9368
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}