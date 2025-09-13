"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, ExternalLink } from "lucide-react"
import { TypewriterEffect } from "@/components/typewriter-effect"
const roles = ["Software Engineer","Front-End Developer", "Backend Developer", "Python Developer"]
const headline = ["Blending software engineering, AI, and analytics to create meaningful experiences."]
export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Greeting */}
        <div className="space-y-2">
          <p className="text-lg sm:text-xl text-muted-foreground font-source-sans animate-fade-in">Hello, I'm</p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-playfair text-foreground animate-fade-in-up">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Abdullah Rasheed
            </span>
          </h1>
        </div>

        {/* Dynamic Role */}
        <div className="h-16 flex items-center justify-center">
          <TypewriterEffect
            words={roles}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-source-sans text-primary"
            cursorClassName="bg-primary"
          />
        </div>
        <div className="h-16 flex items-center justify-center">
          <TypewriterEffect
            words={headline}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-source-sans text-primary"
            cursorClassName="bg-primary"
          />
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-source-sans animate-fade-in-up animation-delay-300 dark:text-white">
          Passionate about creating innovative solutions and building scalable applications. I specialize in modern web
          technologies and Python Development.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-500">
          <Button
            variant="ghost"
            size="lg"
            className="group relative overflow-hidden bg-slate-900 hover:bg-slate-800 text-white dark:bg-purple-600 dark:hover:bg-purple-700 dark:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:shadow-primary/25"
            onClick={() => scrollToSection("projects")}
          >
            <span className="relative z-20 flex items-center gap-2 font-medium">
              View My Work
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white dark:border-purple-600 dark:text-purple-600 dark:hover:bg-purple-600 dark:hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Abdullah Rasheed.pdf"; // Correct path to the file in the public folder
              link.download = "Abdullah_Rasheed.pdf"; // Name of the file to be downloaded
              link.click();
            }}
          >
            <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
            Download CV
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("about")}
            className="rounded-full hover:bg-primary/10 transition-colors"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </Button>
        </div>
      </div>
    </section>
  )
}
