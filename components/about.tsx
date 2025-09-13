"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Server, Cloud, Database, Smartphone, Palette } from "lucide-react"
import Image from "next/image"
import ProfilePhoto from "../assets/profile_photo.png"

const specialties = [
  {
    icon: Code,
    title: "Frontend Developer",
    description: "Creating responsive and interactive user interfaces with modern frameworks",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend Developer",
    description: "Building scalable server-side applications and robust APIs",
    skills: ["Node.js", "Python", "PostgreSQL", "REST APIs","Fast API"],
  },
  {
    icon: Cloud,
    title: "AI/ML Engineer",
    description: "Implementing machine learning models and AI-driven solutions",
    skills: ["NLP", "Pytorch", "TensorFlow", "OpenCV"],
  },
  {
    icon: Smartphone,
    title: "Mobile Developer",
    description: "Developing cross-platform mobile applications",
    skills: ["Flutter", "Android"],
  },
  {
    icon: Palette,
    title: "Data Visualization",
    description: "Creating insightful and interactive data visualizations",
    skills: ["Power BI", "Seaborn", "Matplotlib"],
  },
]

export function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto font-playfair">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-playfair text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-playfair">
            Passionate developer with expertise across the full technology stack
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <Image
                    src={ProfilePhoto}
                    alt="Professional Developer Portrait"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full rounded-xl bg-card"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-float" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full animate-float animation-delay-300" />
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold font-playfair text-foreground">
              Building Digital Solutions That Matter
            </h3>
            <div className="space-y-4 text-muted-foreground font-source-sans leading-relaxed dark:text-white text-md">
              <p>
                I’m a Software Engineering student with strong experience in full-stack development, computer vision, data analysis, and mobile app engineering. I specialize in transforming complex technical challenges into intuitive, user-focused solutions that deliver real impact.
              </p>
              <p>
              My journey has taken me through diverse projects—from building AI-powered sports analytics systems and accessibility tools like an eye-controlled mouse, to creating creative platforms such as Glitchify. Along the way, I’ve worked with technologies like Python, Next.js, Flutter, Firebase, Power BI, and OpenCV, blending innovation with practicality.
              </p>
              <p>
              Driven by curiosity and continuous learning, I stay engaged with emerging trends in AI, machine learning, data visualization, and web technologies. My goal is to design and build solutions that are not only scalable and efficient but also insightful, meaningful, and user-friendly
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-source-sans">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-source-sans">3+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-source-sans">20+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>
        </div>

        {/* Specialties Grid */}
        <div>
          <h3 className="text-3xl font-bold font-playfair text-center text-foreground mb-12">
            My <span className="text-primary">Specialties</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <Card
                key={index}
                className={`group cursor-pointer transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/50 ${hoveredCard === index ? "shadow-lg dark:shadow-primary/25" : ""
                  }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <specialty.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold font-source-sans text-foreground group-hover:text-primary transition-colors">
                      {specialty.title}
                    </h4>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed font-source-sans">{specialty.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {specialty.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs bg-secondary/50 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
