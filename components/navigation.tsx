"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import logo from "../assets/Logo.png"
const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/Abdullah-Rasheed-Shiekh", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/abdullah-rasheed-shiekh", label: "LinkedIn" },
  { icon: Mail, href: "mailto:rasheedabdullah317@gmail.com", label: "Email" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 font-extrabold font-source-sans transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="#home"
              className="text-2xl font-bold font-playfair text-primary hover:text-accent transition-colors"
            >
              <Image src={logo} alt="Logo" className="h-35 w-35 inline-grid mr-2" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-lg font-large transition-all duration-300 hover:bg-primary/10 hover:shadow-sm relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-2">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 hover:shadow-md"
              >
                <Link href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-4 w-4" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              </Button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-primary/10 hover:scale-110 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-lg mt-2 border border-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-primary/10 hover:translate-x-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-center space-x-2 pt-4 border-t border-border">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                  >
                    <Link href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-4 w-4" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
