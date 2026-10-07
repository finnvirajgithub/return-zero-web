"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Zap,
  Heart,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Code,
  MessageCircle // <-- මේක තමයි අමතක වෙලා තිබුණේ
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
    description:
      "We're looking for a talented Full Stack Developer to join our growing team. You'll work on exciting projects for travel and hospitality clients, building modern web applications.",
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
    description:
      "Join our creative team as a UI/UX Designer and help shape beautiful, user-friendly experiences for our travel and hospitality clients.",
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
    description:
      "Assist in developing, customizing, and maintaining WordPress websites while gaining practical experience in modern web development practices.",
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
    description:
      "Support development of interactive user interfaces using React.js while learning modern frontend development techniques and industry best practices.",
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
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Flexible Hours",
    description: "Work when you're most productive with our flexible schedule",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Remote Work",
    description: "Work from anywhere - home, cafe, or our office in Sri Lanka",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Learning & Growth",
    description: "Continuous learning opportunities and career development",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Great Team",
    description: "Work with talented, friendly people who support each other",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Work-Life Balance",
    description: "We value your personal time and well-being",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Exciting Projects",
    description: "Work on diverse projects for travel and hospitality industries",
  },
]

export default function CareersPage() {
  const [isVisible, setIsVisible] = useState(false)
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

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
      const result = await emailjs.send("service_4np4c87", "template_sdvo4wb", templateParams, "-slcF47WslD-a1KcO")

      console.log(result.text)
      setApplicationSubmitted(true)
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        portfolio: "",
        message: "",
      })
    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please try again or contact us via WhatsApp.")
    }

    setIsApplying(false)
  }

  const handleDialogClose = () => {
    setSelectedJob(null)
    setApplicationSubmitted(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      portfolio: "",
      message: "",
    })
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${isVisible ? "animate-fade-in translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Badge className="mb-6 bg-brand-yellow/20 text-brand-yellow border-brand-yellow px-4 py-1 text-sm font-bold uppercase tracking-wider">
            Careers at Return Zero
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Build Your Future With <span className="text-brand-yellow">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Join a forward-thinking team engineering the next generation of software and travel tech solutions. We're looking for passionate individuals ready to make an impact.
          </p>
          <a href="#positions">
            <Button size="lg" className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark font-bold rounded-full px-8 shadow-lg transform hover:-translate-y-1 transition-all">
              <Code className="mr-2 h-5 w-5" />
              View Open Positions
            </Button>
          </a>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">Life at Return Zero</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job — we provide an environment where you can learn, grow, and thrive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-100 bg-gray-50">
                <CardHeader>
                  <div className="p-4 bg-white rounded-2xl text-brand-yellow w-fit shadow-sm group-hover:scale-110 group-hover:bg-brand-yellow group-hover:text-white transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl mt-4 font-bold text-brand-dark">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">Open Roles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find your perfect fit and start your engineering journey.
            </p>
          </div>
          
          <div className="space-y-6">
            {jobPositions.map((job) => (
              <Card
                key={job.id}
                className="group hover:shadow-xl transition-all duration-300 border-gray-200 bg-white cursor-pointer hover:-translate-y-1"
                onClick={() => setSelectedJob(job)}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-brand-yellow/10 rounded-lg">
                          <Briefcase className="h-6 w-6 text-brand-yellow" />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-dark group-hover:text-brand-yellow transition-colors">{job.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-5 text-base leading-relaxed line-clamp-2 pr-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700 px-3 py-1 flex items-center gap-1.5">
                          <Users className="h-3.5 w-3.5" />
                          {job.department}
                        </Badge>
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700 px-3 py-1 flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {job.location}
                        </Badge>
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700 px-3 py-1 flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {job.type}
                        </Badge>
                        <Badge variant="secondary" className="bg-green-100 text-green-700 px-3 py-1 flex items-center gap-1.5 font-semibold">
                          <DollarSign className="h-3.5 w-3.5" />
                          {job.salary}
                        </Badge>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Button className="w-full md:w-auto bg-brand-dark text-white group-hover:bg-brand-yellow group-hover:text-brand-dark transition-all rounded-full px-6">
                        View Role
                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Detail Dialog (Popup) */}
      <Dialog open={!!selectedJob} onOpenChange={handleDialogClose}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto p-0 bg-white rounded-2xl">
          {selectedJob && (
            <>
              <DialogHeader className="p-8 pb-0 bg-gray-50 border-b border-gray-100 rounded-t-2xl">
                <DialogTitle className="text-3xl font-bold text-brand-dark mb-4">{selectedJob.title}</DialogTitle>
                <DialogDescription className="flex flex-wrap gap-2 pb-6">
                  <Badge variant="outline" className="border-gray-300 text-gray-600 bg-white">{selectedJob.department}</Badge>
                  <Badge variant="outline" className="border-gray-300 text-gray-600 bg-white">{selectedJob.location}</Badge>
                  <Badge variant="outline" className="border-gray-300 text-gray-600 bg-white">{selectedJob.type}</Badge>
                </DialogDescription>
              </DialogHeader>
              
              <div className="p-8 space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-brand-dark mb-3 border-b border-gray-100 pb-2">Role Overview</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">{selectedJob.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-brand-dark mb-4 flex items-center">
                      <GraduationCap className="mr-2 h-5 w-5 text-brand-yellow" />
                      Requirements
                    </h4>
                    <ul className="space-y-3">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-600">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-dark mb-4 flex items-center">
                      <Zap className="mr-2 h-5 w-5 text-brand-yellow" />
                      Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {selectedJob.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-600">
                          <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100">
                  {applicationSubmitted ? (
                    <div className="text-center py-10 bg-green-50 rounded-xl border border-green-100">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-brand-dark mb-2">Application Received!</h3>
                      <p className="text-gray-600 max-w-md mx-auto">
                        Thank you for your interest in joining Return Zero. Our team will review your profile and get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-200">
                      <h4 className="text-xl font-bold text-brand-dark mb-6">Submit Your Application</h4>
                      <form onSubmit={handleApply} className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Full Name <span className="text-red-500">*</span></label>
                            <Input required name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="bg-white" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Email Address <span className="text-red-500">*</span></label>
                            <Input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="bg-white" />
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">WhatsApp / Phone</label>
                            <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+94 7X XXX XXXX" className="bg-white" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Portfolio / GitHub / LinkedIn</label>
                            <Input type="url" name="portfolio" value={formData.portfolio} onChange={handleChange} placeholder="https://..." className="bg-white" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700">Why are you a good fit? <span className="text-red-500">*</span></label>
                          <Textarea required name="message" value={formData.message} onChange={handleChange} placeholder="Tell us briefly about your experience and why you want to join..." rows={4} className="bg-white resize-none" />
                        </div>
                        
                        <Button type="submit" disabled={isApplying} className="w-full bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark font-bold text-lg py-6 rounded-xl mt-4">
                          {isApplying ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-brand-dark mr-3" />
                              Sending Application...
                            </>
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

      {/* CTA Section */}
      <section className="py-24 bg-brand-yellow relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">Don't See the Right Fit?</h2>
          <p className="text-xl md:text-2xl text-brand-dark/80 mb-10 font-medium">
            We are always eager to meet talented developers and designers. Reach out to us directly!
          </p>
          <a
            href="https://wa.me/94719089368?text=Hi%20Return%20Zero,%20I%20am%20interested%20in%20career%20opportunities%20at%20your%20company."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-brand-dark hover:bg-brand-dark/90 text-white font-bold px-10 py-6 text-lg rounded-full shadow-lg transform hover:-translate-y-1 transition-all">
              <MessageCircle className="mr-2 h-5 w-5" />
              Message Us on WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}