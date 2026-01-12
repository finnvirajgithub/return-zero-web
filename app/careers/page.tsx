"use client"

import type React from "react"

import { useState } from "react"
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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-yellow/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-brand-yellow/10 text-brand-yellow border-brand-yellow">Join Our Team</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">Build Your Career With Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join Return Zero Solutions and be part of a team that's transforming businesses in the travel and
            hospitality industry. We're always looking for talented individuals who share our passion for innovation.
          </p>
          <a href="#positions">
            <Button size="lg" className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark">
              View Open Positions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Why Join Return Zero Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job - we offer a career with growth, flexibility, and purpose
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="p-3 bg-brand-yellow/10 rounded-full text-brand-yellow w-fit group-hover:bg-brand-yellow group-hover:text-white transition-colors">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl mt-4">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find your perfect role and start your journey with us
            </p>
          </div>
          <div className="space-y-6">
            {jobPositions.map((job) => (
              <Card
                key={job.id}
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="h-5 w-5 text-brand-yellow" />
                        <h3 className="text-xl font-semibold text-brand-dark">{job.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
                      <div className="flex flex-wrap gap-3">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {job.department}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {job.type}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3" />
                          {job.salary}
                        </Badge>
                      </div>
                    </div>
                    <Button className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark whitespace-nowrap">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Detail Dialog */}
      <Dialog open={!!selectedJob} onOpenChange={handleDialogClose}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedJob && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-brand-dark">{selectedJob.title}</DialogTitle>
                <DialogDescription className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary">{selectedJob.department}</Badge>
                  <Badge variant="secondary">{selectedJob.location}</Badge>
                  <Badge variant="secondary">{selectedJob.type}</Badge>
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div>
                  <h4 className="font-semibold text-brand-dark mb-2">About the Role</h4>
                  <p className="text-gray-600">{selectedJob.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-2">Requirements</h4>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle className="h-5 w-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-2">Responsibilities</h4>
                  <ul className="space-y-2">
                    {selectedJob.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle className="h-5 w-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark">
                      Apply Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Apply for {selectedJob.title}</DialogTitle>
                      <DialogDescription>Fill out the form below to submit your application</DialogDescription>
                    </DialogHeader>
                    {applicationSubmitted ? (
                      <div className="text-center py-8">
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-brand-dark mb-2">Application Submitted!</h3>
                        <p className="text-gray-600">
                          Thank you for applying. We'll review your application and get back to you soon.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleApply} className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-brand-dark mb-1">Full Name *</label>
                          <Input
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-brand-dark mb-1">Email *</label>
                          <Input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-brand-dark mb-1">Phone</label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+94 XX XXX XXXX"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-brand-dark mb-1">
                            Portfolio / LinkedIn URL
                          </label>
                          <Input
                            type="url"
                            name="portfolio"
                            value={formData.portfolio}
                            onChange={handleChange}
                            placeholder="https://"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-brand-dark mb-1">
                            Why do you want to join us? *
                          </label>
                          <Textarea
                            required
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about yourself and why you'd be a great fit..."
                            rows={4}
                          />
                        </div>
                        <Button
                          type="submit"
                          disabled={isApplying}
                          className="w-full bg-brand-yellow hover:bg-brand-yellow/90 text-brand-dark"
                        >
                          {isApplying ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-brand-dark mr-2" />
                              Submitting...
                            </>
                          ) : (
                            "Submit Application"
                          )}
                        </Button>
                      </form>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Don't See the Right Role?</h2>
          <p className="text-xl text-brand-dark/80 mb-8 max-w-2xl mx-auto">
            We're always looking for talented people. Send us your resume and we'll keep you in mind for future
            opportunities.
          </p>
          <a
            href="https://wa.me/94719089368?text=Hi%20I%20am%20interested%20in%20career%20opportunities"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-brand-dark hover:bg-brand-dark/90 text-white">
              Get In Touch
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
