"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, ChevronRight, Briefcase, Award } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Campus Ambassador",
    company: "Exarta Labs",
    location: "Lahore, Pakistan",
    period: "2025",
    duration: "7+ months",
    type: "Contract",
    description:
      "Performed Beta testing of Exarta's Flagship Product 'Pods' .Driving brand awareness and engagement through strategic campus initiatives. Organized events, increased engagement on socials to promote the company's products and services among students.",
    achievements: [
      "Successfully Tested and provided feedback on the 'Pods' product, contributing to its improvement",
      "Increased social media engagement by 40% through targeted campaigns",
      "Collaborated with student organizations to co-host events, expanding reach",
      "Gathered valuable feedback from students to improve product offerings",
    ],
    technologies: ["Social Media", "Event Management", "Communication", "Marketing", "Brand Promotion"],
  },
  {
    id: 2,
    title: "404 Squad Head",
    company: "ACM Student Chapter, COMSATS University",
    location: "Lahore, Pakistan",
    period: "2025",
    duration: "8+ months",
    type: "Full-time",
    description:
      "Led a team of developers in creating web applications and tools to support chapter activities. Coordinated with other teams to ensure smooth operation of events and initiatives. Contribution in building website for Technoverse and multiple societies.",
    achievements: [
      "Led a team of 5 developers to successfully launch the chapter website",
      "Implemented new features that increased user engagement by 30%",
      "Coordinated with event teams to provide technical support during major events",
      "Mentored junior developers, fostering a collaborative learning environment",
    ],
    technologies: ["Leadership","React", "Next.js", "Node.js", "Express", "MongoDB", "Git", "Figma","Tailwind CSS",],
  },
  {
    id: 3,
    title: "Web Developer Intern",
    company: "EvoSoft",
    location: "Remote",
    period: "2024",
    duration: "2 months",
    type: "Internship",
    description:
      "Worked on developing and maintaining client websites using modern web technologies. Collaborated with designers and backend developers to create seamless user experiences.",
    achievements: [
      "Developed 3 websites from scratch, improving load times by 25%",
      "Optimized existing codebase, reducing bugs by 15%",
      "Collaborated with cross-functional teams to deliver projects on time",
      "Received positive feedback for quality of work",
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "Git","Tailwind CSS",],
  },
  {
    id: 4,
    title: "Web Developer Intern",
    company: "Code Alpha",
    location: "Remote",
    period: "2024",
    duration: "2 months",
    type: "Full-time",
    description:
      "Assisted in the development of websites and web applications. Gained hands-on experience with front-end and back-end technologies.",
    achievements: [
      "Contributed to the development of 3 projects, enhancing user experience",
      "Learned and applied new technologies in a fast-paced environment",
      "Collaborated with developers, gaining valuable insights",
      "Completed tasks ahead of schedule, demonstrating reliability",  
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Git","Bootstrap"],
  },
]

export function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 },
    )

    const items = document.querySelectorAll(".experience-item")
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (lineRef.current && visibleItems.length > 0) {
      const maxVisible = Math.max(...visibleItems)
      const progress = ((maxVisible + 1) / experiences.length) * 100
      lineRef.current.style.height = `${progress}%`
    }
  }, [visibleItems])

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/5 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary/2 rounded-full blur-3xl animate-pulse delay-1500" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Briefcase className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Journey</span>
            <Briefcase className="h-6 w-6 text-primary animate-pulse" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold font-playfair mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-source-sans leading-relaxed">
            A journey through my career milestones, achievements, and professional growth over the years
          </p>
        </div>

        <div className="relative" ref={timelineRef}>
          <div className="absolute left-4 md:left-1/2 top-0 w-0.5 h-full bg-border/30 transform md:-translate-x-0.5" />
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-primary/80 to-primary transform md:-translate-x-0.5 transition-all duration-1000 ease-out shadow-lg shadow-primary/50"
            style={{ height: "0%" }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                data-index={index}
                className={`experience-item relative flex items-center transition-all duration-700 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } ${visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <div
                  className={`absolute left-4 md:left-1/2 w-6 h-6 rounded-full border-4 border-background transform md:-translate-x-3 z-10 transition-all duration-500 ${
                    visibleItems.includes(index)
                      ? "bg-primary shadow-lg shadow-primary/50 scale-100"
                      : "bg-muted scale-75"
                  }`}
                >
                  <div
                    className={`absolute inset-1 rounded-full transition-all duration-500 ${
                      visibleItems.includes(index) ? "bg-primary animate-pulse" : "bg-transparent"
                    }`}
                  />
                </div>

                <div
                  className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <Card
                    className={`group cursor-pointer transition-all duration-500 hover:scale-105 border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 bg-card/80 backdrop-blur-sm ${
                      selectedExperience === exp.id ? "border-primary shadow-xl shadow-primary/20 scale-105" : ""
                    } ${visibleItems.includes(index) ? "animate-slide-in-up" : ""}`}
                    onClick={() => setSelectedExperience(selectedExperience === exp.id ? null : exp.id)}
                  >
                    <CardContent className="p-6 space-y-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10 space-y-2">
                        <div className="flex items-center justify-between">
                          <Badge
                            variant="outline"
                            className="text-xs bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors"
                          >
                            {exp.type}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold font-playfair text-foreground group-hover:text-primary transition-colors duration-300">
                          {exp.title}
                        </h3>

                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center group-hover:text-foreground transition-colors">
                            <Building className="h-4 w-4 mr-1" />
                            {exp.company}
                          </div>
                          <div className="flex items-center group-hover:text-foreground transition-colors">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground font-source-sans leading-relaxed group-hover:text-foreground transition-colors relative z-10">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2 relative z-10">
                        {exp.technologies.slice(0, 4).map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-105"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {exp.technologies.length > 4 && (
                          <Badge
                            variant="secondary"
                            className="text-xs bg-secondary/50 hover:bg-primary/10 transition-colors"
                          >
                            +{exp.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-2 relative z-10">
                        <span className="text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
                          Duration: {exp.duration}
                        </span>
                        <ChevronRight
                          className={`h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:text-primary ${
                            selectedExperience === exp.id ? "rotate-90 text-primary" : ""
                          }`}
                        />
                      </div>

                      {selectedExperience === exp.id && (
                        <div className="pt-4 border-t border-border/50 space-y-4 animate-fade-in-up relative z-10">
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Award className="h-4 w-4 text-primary" />
                              <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                            </div>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, achIndex) => (
                                <li
                                  key={achIndex}
                                  className="flex items-start text-sm text-muted-foreground hover:text-foreground transition-colors group/item"
                                  style={{ animationDelay: `${achIndex * 100}ms` }}
                                >
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  variant="outline"
                                  className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                                  style={{ animationDelay: `${techIndex * 50}ms` }}
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
