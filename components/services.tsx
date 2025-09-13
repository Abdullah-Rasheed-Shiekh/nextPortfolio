"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Cloud, Database, ArrowRight, CheckCircle, BarChart } from "lucide-react"

const services = [
  {
    id: 1,
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices.",
    features: ["Responsive Design", "Performance Optimization", "Cross-browser Compatibility"],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS","ThreeJS"],
    timeline: "2-4 weeks",
  },
  {
    id: 2,
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile applications for iOS and Android devices.",
    features: ["Native Performance", "Offline Functionality", "Push Notifications"],
    technologies: ["Flutter"],
    timeline: "4-8 weeks",
  },
  {
    id: 3,
    icon: Cloud,
    title: "AI/ML Models Training & Deployment",
    description: "End-to-end solutions for training and deploying machine learning models.",
    features: ["Model Training", "Data Preprocessing", "Monitoring & Maintenance"],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-Learn"],
    timeline: "1-3 weeks",
  },
  {
    id: 4,
    icon: Database,
    title: "Backend Development",
    description: "Robust server-side applications and API development.",
    features: ["RESTful APIs", "Database Design", "Authentication Systems", "Real-time Features"],
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB","Fast API","Firebase"],
    timeline: "3-6 weeks",
  },
  {
    id: 5,
    icon: BarChart,
    title: "Power BI Dashboards & Data Visualization",
    description: "Interactive dashboards and reports to visualize your data effectively.",
    features: ["Custom Visuals", "Data Integration", "Real-time Updates","Interactive Dashboards"],
    technologies: ["Power BI", "DAX"],
    timeline: "1-2 weeks",
  }, 
]

export function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-playfair text-foreground mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-source-sans">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`group cursor-pointer transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/50 hover:shadow-lg dark:hover:shadow-primary/25 ${
                hoveredService === service.id ? "border-primary shadow-lg dark:shadow-primary/25" : ""
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <CardContent className="p-6 space-y-4">
                {/* Service Icon & Title */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/20">
                      {service.timeline}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold font-source-sans text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground font-source-sans leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-secondary/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-border space-y-3">
                  <Button
                    variant="ghost"
                    className="w-full group/btn bg-slate-900 hover:bg-slate-800 text-white dark:bg-purple-600 dark:hover:bg-purple-700 dark:text-white"
                    onClick={() => {
                      const contactSection = document.getElementById("contact")
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold font-playfair text-foreground mb-4">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground font-source-sans mb-6 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together. I offer free consultations to
            understand your needs better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="ghost"
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white dark:bg-purple-600 dark:hover:bg-purple-700 dark:text-white px-8"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Start a Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white dark:border-purple-600 dark:text-purple-600 dark:hover:bg-purple-600 dark:hover:text-white px-8 bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
