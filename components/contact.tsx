"use client"
import { supabase } from "@/utils/supabaseClient"
import type React from "react"
import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Github, Linkedin, Twitter, Sparkles } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "rasheedabdullah317@gmail.com",
    description: "Send me an email anytime!",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Lahore, Pakistan",
    description: "Available for remote work",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24 hours",
    description: "I'll get back to you quickly",
  },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/Abdullah-Rasheed-Shiekh", label: "GitHub", color: "hover:text-gray-600" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/abdullah-rasheed-shiekh", label: "LinkedIn", color: "hover:text-blue-600" },
  { icon: Mail, href: "mailto:rasheedabdullah317@gmail.com", label: "Email", color: "hover:text-blue-400" },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    
    const { error } = await supabase.from('contacts').insert([formData])

    if (error) {
      console.error('Error inserting data:', error.message)
    } else {
      console.log('Data inserted successfully')
    }

    setIsSubmitting(false)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        budget: "",
        timeline: "",
      })
    }, 3000)
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Contact</span>
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold font-playfair mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient">
            Let's Create Something
            <br />
            <span className="text-primary">Amazing Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-source-sans leading-relaxed">
            Ready to bring your vision to life? I'm here to help you build exceptional digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8 animate-slide-in-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-xl" />
              <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold font-playfair text-foreground mb-6">Let's Connect</h3>
                <p className="text-muted-foreground font-source-sans leading-relaxed mb-8">
                  I'm always excited to work on new projects and collaborate with amazing people. Whether you have a
                  question or want to work together, feel free to reach out!
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-primary font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-border/50">
                  <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="icon"
                        asChild
                        className="hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <social.icon className="h-5 w-5" />
                          <span className="sr-only">{social.label}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 animate-slide-in-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-3xl blur-xl" />
              <Card className="relative border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
                <CardContent className="relative p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12 animate-scale-in">
                      <div className="relative">
                        <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6 animate-bounce" />
                        <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground text-lg">
                        Thank you for reaching out. I'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2 group">
                          <Label htmlFor="name" className="text-foreground font-medium">
                            Full Name *
                          </Label>
                          <div className="relative">
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField("name")}
                              onBlur={() => setFocusedField(null)}
                              placeholder="Your full name"
                              required
                              className="bg-background/50 border-border focus:border-primary transition-all duration-300 focus:shadow-lg focus:shadow-primary/20 hover:border-primary/50"
                            />
                            {focusedField === "name" && (
                              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-sm -z-10 animate-pulse" />
                            )}
                          </div>
                        </div>
                        <div className="space-y-2 group">
                          <Label htmlFor="email" className="text-foreground font-medium">
                            Email Address *
                          </Label>
                          <div className="relative">
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField("email")}
                              onBlur={() => setFocusedField(null)}
                              placeholder="your.email@example.com"
                              required
                              className="bg-background/50 border-border focus:border-primary transition-all duration-300 focus:shadow-lg focus:shadow-primary/20 hover:border-primary/50"
                            />
                            {focusedField === "email" && (
                              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-sm -z-10 animate-pulse" />
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 group">
                        <Label htmlFor="subject" className="text-foreground font-medium">
                          Subject *
                        </Label>
                        <div className="relative">
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField("subject")}
                            onBlur={() => setFocusedField(null)}
                            placeholder="What's this about?"
                            required
                            className="bg-background/50 border-border focus:border-primary transition-all duration-300 focus:shadow-lg focus:shadow-primary/20 hover:border-primary/50"
                          />
                          {focusedField === "subject" && (
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-sm -z-10 animate-pulse" />
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="budget" className="text-foreground font-medium">
                            Budget Range
                          </Label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-primary focus:outline-none transition-all duration-300 hover:border-primary/50"
                          >
                            <option value="">Select budget range</option>
                            <option value="under-5k">Under 5,000</option>
                            <option value="5k-10k">5,000 - 10,000</option>
                            <option value="10k-25k">10,000 - 25,000</option>
                            <option value="25k-plus">25,000+</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="timeline" className="text-foreground font-medium">
                            Project Timeline
                          </Label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-primary focus:outline-none transition-all duration-300 hover:border-primary/50"
                          >
                            <option value="">Select timeline</option>
                            <option value="asap">ASAP</option>
                            <option value="1-month">Within 1 month</option>
                            <option value="2-3-months">2-3 months</option>
                            <option value="flexible">Flexible</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2 group">
                        <Label htmlFor="message" className="text-foreground font-medium">
                          Message *
                        </Label>
                        <div className="relative">
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField("message")}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Tell me about your project, goals, and any specific requirements..."
                            required
                            rows={6}
                            className="bg-background/50 border-border focus:border-primary resize-none transition-all duration-300 focus:shadow-lg focus:shadow-primary/20 hover:border-primary/50"
                          />
                          {focusedField === "message" && (
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-sm -z-10 animate-pulse" />
                          )}
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
