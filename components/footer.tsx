"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { icon: Github, href: "https://github.com/Abdullah-Rasheed-Shiekh", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/abdullah-rasheed-shiekh", label: "LinkedIn" },
  { icon: Mail, href: "mailto:rasheedabdullah317@gmail.com", label: "Email" },
]

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
]

const services = [
  "Web Development",
  "Mobile Development",
  "AI/ML Models Training & Deployment",
  "Backend Development",
  "Power BI Dashboards & Data Visualization",
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1 space-y-4">
            <div>
              <h3 className="text-2xl font-bold font-playfair text-foreground">Abdullah Rasheed</h3>
              <p className="text-primary font-medium">Software Engineer</p>
            </div>
            <p className="text-muted-foreground font-source-sans leading-relaxed">
              Passionate about creating innovative digital solutions that make a difference. Let's build something
              amazing together.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-source-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground font-source-sans">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground font-source-sans">
              <p>Lahore, Pakistan</p>
              <p>rasheedabdullah317@gmail.com</p>
            </div>
            <Button
              size="sm"
              className="bg-slate-900 hover:bg-slate-800 text-white dark:bg-purple-600 dark:hover:bg-purple-700 dark:text-white"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Start a Project
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground font-source-sans">
            <span>© 2025 Abdullah Rasheed</span>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Back to top</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
