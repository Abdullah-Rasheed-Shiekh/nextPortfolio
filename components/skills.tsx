"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, Cloud, Wrench, Zap, Server, Shield, Monitor, Cpu } from "lucide-react"

const skillCategories = {
  frontend: {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React.js", level: 95, experience: "1+ years", icon: <img width="48" height="48" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo"/> },
      { name: "Next.js", level: 90, experience: "1+ years", icon: <img width="48" height="48" src="https://img.icons8.com/ios-filled/50/circled-chevron-right.png" alt="circled-chevron-right"/> },
      { name: "TypeScript", level: 90, experience: "1+ years", icon: <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> },
      { name: "Tailwind CSS", level: 88, experience: "2+ years", icon: <img width="48" height="48" src="https://img.icons8.com/color/48/tailwind_css.png" alt="tailwind_css"/> },
      { name: "Flutter", level: 75, experience: "1+ years", icon: <img width="48" height="48" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-flutter-is-an-open-source-mobile-application-development-framework-created-by-google-logo-shadow-tal-revivo.png" alt="external-flutter-is-an-open-source-mobile-application-development-framework-created-by-google-logo-shadow-tal-revivo"/> },
      { name: "Three.js", level: 65, experience: "1+ years", icon: <img width="64" height="64" src="https://img.icons8.com/nolan/64/three-js.png" alt="three-js"/> },
      { name: "Power BI", level: 95, experience: "1+ years", icon: <img width="48" height="48" src="https://img.icons8.com/color/48/power-bi-2021.png" alt="power-bi-2021"/>},
    ],
  },
  backend: {
    title: "Backend & Database",
    icon: Server,
    skills: [
      { name: "Node.js", level: 92, experience: "4+ years", icon: <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> },
      { name: "Python", level: 85, experience: "4+ years", icon: <img width="48" height="48" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/> },
      { name: "Java", level: 80, experience: "2+ years", icon: <img width="48" height="48" src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/> },
      { name: "C++", level: 78, experience: "3+ years", icon: <img width="48" height="48" src="https://img.icons8.com/fluency/48/c-plus-plus-logo.png" alt="c-plus-plus-logo"/> },
      { name: "PostgreSQL", level: 88, experience: "2+ years", icon: <img width="48" height="48" src="https://img.icons8.com/color/48/postgreesql.png" alt="postgreesql"/> },
      { name: "MySQL", level: 85, experience: "2+ years", icon: <img width="48" height="48" src="https://img.icons8.com/fluency/48/my-sql.png" alt="my-sql"/> },
      { name: "Firebase", level: 80, experience: "1+ years", icon: <img width="48" height="48" src="https://img.icons8.com/color/48/firebase.png" alt="firebase"/> },
      { name: "Supabase", level: 75, experience: "1+ years", icon: <img width="48" height="48" src="https://img.icons8.com/fluency/48/supabase.png" alt="supabase"/> },
      { name: "MongoDB", level: 80, experience: "2+ years", icon: <img width="32" height="32" src="https://img.icons8.com/skeuomorphism/32/mongo-db.png" alt="mongo-db"/> },
    ],
  },
  devops: {
    title: "AI/ML",
    icon: Cloud,
    skills: [
      { name: "OpenCV", level: 85, experience: "2+ years", icon: <img width="48" height="48" src="https://img.icons8.com/fluency/48/opencv.png" alt="opencv"/> },
      { name: "Tensor Flow", level: 80, experience: "1+ years", icon: <img width="48" height="48" src="https://img.icons8.com/color/48/tensorflow.png" alt="tensorflow"/> },
      { name: "Pytorch", level: 70, experience: "1+ years", icon: <img width="48" height="48" src="https://img.icons8.com/fluency/48/pytorch.png" alt="pytorch"/>},
      { name: "Fast API", level: 88, experience: "1+ years", icon: <img width="48" height="48" src="https://img.icons8.com/color/48/api.png" alt="api"/> },
    ],
  },
  tools: {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      { name: "Git/GitHub", level: 95, experience: "4+ years", icon: <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/> },
      { name: "VS Code", level: 90, experience: "3+ years", icon: <img width="48" height="48" src="https://img.icons8.com/color/48/visual-studio-code-2019.png" alt="visual-studio-code-2019"/> },
      { name: "Figma", level: 75, experience: "1+ years", icon: <img width="48" height="48" src="https://img.icons8.com/color/48/figma--v1.png" alt="figma--v1"/> },
      { name: "Postman", level: 85, experience: "1+ years", icon: <img width="64" height="64" src="https://img.icons8.com/dusk/64/postman-api.png" alt="postman-api"/> },
      { name: "Ubuntu", level: 80, experience: "1+ years", icon: <img width="48" height="48" src="https://img.icons8.com/color/48/ubuntu--v1.png" alt="ubuntu--v1"/> },
      { name: "Android Studio", level: 90, experience: "1+ years", icon: <img width="48" height="48" src="https://img.icons8.com/fluency/48/android-studio--v2.png" alt="android-studio--v2"/> },
      { name: "Intellij Idea", level: 70, experience: "2+ years", icon: <img width="48" height="48" src="https://img.icons8.com/color/48/intellij-idea.png" alt="intellij-idea"/>},
      { name: "Google Colab", level: 85, experience: "1+ years", icon: <img width="48" height="48" src="https://img.icons8.com/color/48/google-colab.png" alt="google-colab"/>},
      { name: "Trello", level: 80, experience: "1+ years", icon: <img width="48" height="48" src="https://img.icons8.com/color/48/trello.png" alt="trello"/>},
    ],
  },
}

const certifications = [
  "GCU Certified Python Developer",
  "Udemy Certified Chat-Bot Developer",
]

export function Skills() {
  const [activeTab, setActiveTab] = useState("frontend")

  const getSkillColor = (level: number) => {
    if (level >= 90) return "text-green-400"
    if (level >= 75) return "text-primary"
    if (level >= 60) return "text-yellow-400"
    return "text-orange-400"
  }

  const getSkillBadgeColor = (level: number) => {
    if (level >= 90) return "bg-green-500/20 text-green-400 border-green-500/30"
    if (level >= 75) return "bg-primary/20 text-primary border-primary/30"
    if (level >= 60) return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
    return "bg-orange-500/20 text-orange-400 border-orange-500/30"
  }

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Zap className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Expertise</span>
            <Zap className="h-6 w-6 text-primary animate-pulse" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold font-playfair mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-source-sans leading-relaxed">
            A comprehensive showcase of my technical expertise and proficiency across various technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 animate-slide-in-left">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-muted/50 backdrop-blur-sm">
                {Object.entries(skillCategories).map(([key, category]) => {
                  const IconComponent = category.icon
                  return (
                    <TabsTrigger
                      key={key}
                      value={key}
                      className="text-sm font-medium transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2"
                    >
                      <IconComponent className="h-4 w-4" />
                      <span className="hidden sm:inline">{category.title}</span>
                    </TabsTrigger>
                  )
                })}
              </TabsList>

              {Object.entries(skillCategories).map(([key, category]) => (
                <TabsContent key={key} value={key} className="space-y-4">
                  <div className="grid gap-4">
                    {category.skills.map((skill, index) => (
                      <Card
                        key={index}
                        className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group hover:scale-105"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                              </div>
                              <div>
                                <h4 className="font-semibold font-source-sans text-foreground text-lg group-hover:text-primary transition-colors">
                                  {skill.name}
                                </h4>
                                <p className="text-sm text-muted-foreground">{skill.experience}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Badge
                                variant="outline"
                                className={`font-bold text-sm px-3 py-1 ${getSkillBadgeColor(skill.level)}`}
                              >
                                {skill.level}%
                              </Badge>
                              <div className={`text-2xl font-bold ${getSkillColor(skill.level)}`}>
                                {skill.level >= 90 ? "🔥" : skill.level >= 75 ? "⭐" : skill.level >= 60 ? "💫" : "✨"}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold font-playfair text-foreground">Certifications</h3>
                </div>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                      <span className="text-sm text-muted-foreground font-source-sans group-hover:text-foreground transition-colors">
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Monitor className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold font-playfair text-foreground">Learning Focus</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {["AI/ML", "Web3", "AI Agents", "RAG",].map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground font-source-sans">
                    Currently expanding knowledge in emerging technologies and modern architecture patterns.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Cpu className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold font-playfair text-foreground">Experience Summary</h3>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground font-source-sans">
                  <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>3+ years in full-stack development</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>30+ successful projects delivered</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Team leadership experience</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Agile/Scrum methodology expert</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
