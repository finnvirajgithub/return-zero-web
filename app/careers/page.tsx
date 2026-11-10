"use client"

import type React from "react"
import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Briefcase, MapPin, Clock, DollarSign, Users, Zap, Heart, 
  GraduationCap, ArrowRight, CheckCircle, Code, MessageCircle
} from "lucide-react"
import emailjs from "@emailjs/browser"

interface JobPosition {
  id: string
  title: string
  department: string
  location: string
  type: string
  salary: string
  description: string
  requirements: string[]
  responsibilities: string[]
}

const jobPositions: JobPosition[] = [
  {
    id: "1",
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote / Sri Lanka",
    type: "Full-time",
    salary: "Competitive",
    description: "We're looking for a talented Full Stack Developer to join our growing team. You'll work on exciting projects for travel and hospitality clients, building modern web applications.",
    requirements: [
      "3+ years of experience with React, Next.js, and Node.js",
      "Strong understanding of TypeScript and modern JavaScript",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Excellent problem-solving skills",
      "Good communication skills in English",
    ],
    responsibilities: [
      "Develop and maintain web applications for clients",
      "Collaborate with designers and project managers",
      "Write clean, maintainable code",
      "Participate in code reviews",
      "Mentor junior developers",
    ],
  },
  {
    id: "2",
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / Sri Lanka",
    type: "Full-time",
    salary: "Competitive",
    description: "Join our creative team as a UI/UX Designer and help shape beautiful, user-friendly experiences for our travel and hospitality clients.",
    requirements: [
      "2+ years of experience in UI/UX design",
      "Proficiency in Figma or Adobe XD",
      "Strong portfolio showcasing web and mobile designs",
      "Understanding of user-centered design principles",
      "Experience with design systems",
    ],
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Collaborate with developers to ensure design implementation",
      "Maintain and evolve design systems",
      "Present design concepts to clients",
    ],
  },
  {
    id: "3",
    title: "Intern Web Developer – WordPress",
    department: "Web Development",
    location: "Remote / Sri Lanka",
    type: "Full-time",
    salary: "Internship",
    description: "Assist in developing, customizing, and maintaining WordPress websites while gaining practical experience in modern web development practices.",
    requirements: [
      "Basic knowledge of WordPress",
      "Familiarity with HTML and CSS",
      "Basic understanding of JavaScript",
      "Willingness to learn and adapt",
      "Good teamwork and communication skills",
    ],
    responsibilities: [
      "Develop and customize WordPress pages",
      "Update website content and layouts",
      "Assist with plugin and theme customization",
      "Ensure responsive design compatibility",
      "Fix basic website issues and bugs",
    ],
  },
  {
    id: "4",
    title: "Intern Front-End Developer – React.js",
    department: "Web Development",
    location: "Remote / Sri Lanka",
    type: "Full-time",
    salary: "Internship",
    description: "Support development of interactive user interfaces using React.js while learning modern frontend development techniques and industry best practices.",
    requirements: [
      "Basic knowledge of React.js",
      "Understanding of JavaScript fundamentals",
      "Familiarity with HTML and CSS",
      "Knowledge of responsive design principles",
      "Willingness to learn new technologies",
    ],
    responsibilities: [
      "Build reusable UI components using React",
      "Convert designs into responsive interfaces",
      "Integrate APIs with frontend components",
      "Debug and fix UI-related issues",
      "Collaborate with designers and developers",
    ],
  },
]

const benefits = [
  { icon: <Clock className="h-6 w-6" />, title: "Flexible Hours", description: "Work when you're most productive with our flexible schedule" },
  { icon: <MapPin className="h-6 w-6" />, title: "Remote Work", description: "Work from anywhere - home, cafe, or our office in Sri Lanka" },
  { icon: <GraduationCap className="h-6 w-6" />, title: "Learning & Growth", description: "Continuous learning opportunities and career development" },
  { icon: <Users className="h-6 w-6" />, title: "Great Team", description: "Work with talented, friendly people who support each other" },
  { icon: <Heart className="h-6 w-6" />, title: "Work-Life Balance", description: "We value your personal time and well-being" },
  { icon: <Zap className="h-6 w-6" />, title: "Exciting Projects", description: "Work on diverse projects for travel and hospitality industries" },
]

// --- Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null)
  const [isApplying, setIsApplying] = useState(false)
  const [applicationSubmitted, setApplicationSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsApplying(true)

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "Not provided",
      portfolio: formData.portfolio || "Not provided",
      message: formData.message,
      job_title: selectedJob?.title || "General Application",
      job_department: selectedJob?.department || "N/A",
      job_location: selectedJob?.location || "N/A",
    }

    try {
      await emailjs.send("service_4np4c87", "template_sdvo4wb", templateParams, "-slcF47WslD-a1KcO")
      setApplicationSubmitted(true)
      setFormData({ name: "", email: "", phone: "", portfolio: "", message: "" })
    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please try again or contact us via WhatsApp.")
    }

    setIsApplying(false)
  }

  const handleDialogClose = (isOpen: boolean) => {
    if (!isOpen) {
      setSelectedJob(null)
      setApplicationSubmitted(false)
      setFormData({ name: "", email: "", phone: "", portfolio: "", message: "" })
    }
  }

  // --- Live Background Particles ---
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
            Careers at Return Zero
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
            Build Your Future <br className="hidden md:block"/> With <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-300">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Join a forward-thinking team engineering the next generation of software and travel tech solutions. We're looking for passionate individuals ready to make an impact.
          </p>
          <div className="flex justify-center">
            <a href="#positions">
              <Button size="lg" className="bg-brand-yellow hover:bg-yellow-400 text-slate-950 font-bold rounded-full px-8 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-105 transition-all">
                <Code className="mr-2 h-5 w-5" /> View Open Positions
              </Button>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-4">Life at Return Zero</motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-2xl mx-auto">We offer more than just a job — we provide an environment where you can learn, grow, and thrive.</motion.p>
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp} className="h-full">
                <Card className="group h-full flex flex-col bg-white/5 backdrop-blur-md border-white/10 hover:border-brand-yellow/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/0 via-transparent to-brand-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <CardHeader>
                    <div className="p-4 bg-slate-900 border border-white/5 rounded-2xl text-brand-yellow w-fit shadow-inner group-hover:scale-110 group-hover:bg-brand-yellow group-hover:text-slate-950 transition-all duration-300">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl mt-4 font-bold text-white group-hover:text-brand-yellow transition-colors">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-base text-slate-400 leading-relaxed">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-24 bg-slate-900 border-y border-white/5 relative overflow-hidden z-10">
        <div className="absolute right-0 top-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-4">Open Roles</motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-2xl mx-auto">Find your perfect fit and start your engineering journey.</motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="space-y-6"
          >
            {jobPositions.map((job) => (
              <motion.div key={job.id} variants={fadeInUp}>
                <Card
                  className="group transition-all duration-300 border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand-yellow/50 backdrop-blur-md cursor-pointer hover:-translate-y-1"
                  onClick={() => setSelectedJob(job)}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-3 bg-slate-950 border border-white/10 rounded-xl">
                            <Briefcase className="h-5 w-5 text-brand-yellow" />
                          </div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-brand-yellow transition-colors">{job.title}</h3>
                        </div>
                        <p className="text-slate-400 mb-6 text-base leading-relaxed line-clamp-2 pr-4">{job.description}</p>
                        <div className="flex flex-wrap gap-3">
                          <Badge variant="secondary" className="bg-slate-950 text-slate-300 border border-white/10 px-3 py-1.5 flex items-center gap-1.5">
                            <Users className="h-3.5 w-3.5 text-brand-yellow" /> {job.department}
                          </Badge>
                          <Badge variant="secondary" className="bg-slate-950 text-slate-300 border border-white/10 px-3 py-1.5 flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-brand-yellow" /> {job.location}
                          </Badge>
                          <Badge variant="secondary" className="bg-slate-950 text-slate-300 border border-white/10 px-3 py-1.5 flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5 text-brand-yellow" /> {job.type}
                          </Badge>
                          <Badge variant="secondary" className="bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20 px-3 py-1.5 flex items-center gap-1.5 font-semibold">
                            <DollarSign className="h-3.5 w-3.5" /> {job.salary}
                          </Badge>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <Button className="w-full md:w-auto bg-brand-yellow text-slate-950 hover:bg-yellow-400 font-bold transition-all rounded-full px-8 py-6">
                          View Role <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dark Theme Job Detail Dialog (Popup) */}
      <Dialog open={!!selectedJob} onOpenChange={handleDialogClose}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto p-0 bg-slate-900 border border-white/10 rounded-2xl text-slate-50 shadow-2xl">
          {selectedJob && (
            <>
              <DialogHeader className="p-8 pb-0 border-b border-white/5 rounded-t-2xl relative bg-slate-950/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-[50px]"></div>
                <DialogTitle className="text-3xl font-bold text-white mb-4 relative z-10">{selectedJob.title}</DialogTitle>
                <DialogDescription className="flex flex-wrap gap-2 pb-6 relative z-10">
                  <Badge variant="outline" className="border-white/10 text-slate-300 bg-white/5">{selectedJob.department}</Badge>
                  <Badge variant="outline" className="border-white/10 text-slate-300 bg-white/5">{selectedJob.location}</Badge>
                  <Badge variant="outline" className="border-white/10 text-brand-yellow bg-brand-yellow/10 border-brand-yellow/20">{selectedJob.type}</Badge>
                </DialogDescription>
              </DialogHeader>
              
              <div className="p-8 space-y-8 bg-slate-900">
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 border-b border-white/5 pb-2">Role Overview</h4>
                  <p className="text-slate-400 leading-relaxed text-lg">{selectedJob.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                      <GraduationCap className="mr-2 h-5 w-5 text-brand-yellow" /> Requirements
                    </h4>
                    <ul className="space-y-3">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3 text-slate-400">
                          <CheckCircle className="h-5 w-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                      <Zap className="mr-2 h-5 w-5 text-brand-yellow" /> Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {selectedJob.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start gap-3 text-slate-400">
                          <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  {applicationSubmitted ? (
                    <AnimatePresence>
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10 bg-brand-yellow/10 rounded-2xl border border-brand-yellow/20">
                        <CheckCircle className="h-16 w-16 text-brand-yellow mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                        <p className="text-slate-300 max-w-md mx-auto">Thank you for your interest in joining Return Zero. Our team will review your profile and get back to you soon.</p>
                      </motion.div>
                    </AnimatePresence>
                  ) : (
                    <div className="bg-slate-950/50 p-6 md:p-8 rounded-2xl border border-white/5">
                      <h4 className="text-xl font-bold text-white mb-6">Submit Your Application</h4>
                      <form onSubmit={handleApply} className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300">Full Name <span className="text-brand-yellow">*</span></label>
                            <Input required name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="bg-slate-900 border-white/10 text-white focus-visible:ring-brand-yellow" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300">Email Address <span className="text-brand-yellow">*</span></label>
                            <Input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="bg-slate-900 border-white/10 text-white focus-visible:ring-brand-yellow" />
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300">WhatsApp / Phone</label>
                            <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+94 7X XXX XXXX" className="bg-slate-900 border-white/10 text-white focus-visible:ring-brand-yellow" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300">Portfolio / LinkedIn</label>
                            <Input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} placeholder="https://..." className="bg-slate-900 border-white/10 text-white focus-visible:ring-brand-yellow" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-300">Why are you a good fit? <span className="text-brand-yellow">*</span></label>
                          <Textarea required name="message" value={formData.message} onChange={handleChange} placeholder="Tell us briefly about your experience..." rows={4} className="bg-slate-900 border-white/10 text-white focus-visible:ring-brand-yellow resize-none" />
                        </div>
                        
                        <Button type="submit" disabled={isApplying} className="w-full bg-brand-yellow hover:bg-yellow-400 text-slate-950 font-bold text-lg py-6 rounded-xl mt-4">
                          {isApplying ? (
                            <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-slate-950 mr-3" /> Sending Application...</>
                          ) : (
                            "Submit Application"
                          )}
                        </Button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Don't See the Right Fit?</h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light">
            We are always eager to meet talented developers and designers. Reach out to us directly!
          </p>
          <a href="https://wa.me/94719089368?text=Hi%20Return%20Zero,%20I%20am%20interested%20in%20career%20opportunities%20at%20your%20company." target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-brand-yellow hover:bg-yellow-400 text-slate-950 font-bold px-10 py-7 text-xl rounded-full shadow-[0_0_30px_rgba(245,158,11,0.3)] transform hover:scale-105 transition-all">
              <MessageCircle className="mr-3 h-6 w-6" /> Message Us on WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}