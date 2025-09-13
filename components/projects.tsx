"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye, FileText, Code } from "lucide-react"
import Image from "next/image"
import Glitchfy from "../assets/projects/glitchify.png"
import ParkPro from "../assets/projects/ParkPro.png"
import EyeControlMouse from "../assets/projects/Eye-Controlled-Mouse.png"
import DinoGame from "../assets/projects/GestureControlledDinoGame.png"
import Cproj from "../assets/projects/DataConversionCalculator.png"
import UsSuperStoreInsights from "../assets/projects/US_SuperStoreEnsights.png"
import COVID19 from "../assets/projects/TheCOVID19_DataLab.png"
import DeepLearningMatch from "../assets/projects/Deep-Learning-Powered-Analysis.png"
import DataScienceSalaryAnalysis from "../assets/projects/DataScienceSalaryAnalysis.png"
import BudgetBuddy from "../assets/projects/TheBudgetBuddy.jpg"
import TasteGlobe from "../assets/projects/TasteGlobe.png"
import CineSuggest from "../assets/projects/CineSuggest.png"
import AI_TIC_TAC_TOE from "../assets/projects/AI_Integerated_TicTacToe.png"
import Technoverse from "../assets/projects/Technoverse.png"
import DeepLearningAIClone from "../assets/projects/DeepLearningAi.png"
import { title } from "process"
import { id } from "date-fns/locale"
import { Livvic } from "next/font/google"


const projects = [
  {
    id: 1,
    title: "Glitchify – AI-Powered Image Editor & Glitch Art Generator",
    description:
      "A creative platform for image editing and glitch effects.",
    longDescription:
      "Glitchify is a next-generation AI-powered image editing platform designed to transform ordinary visuals into bold, cyberpunk-inspired glitch art. The platform combines traditional computer vision techniques with a modern web interface, enabling users to apply customizable distortion effects and create unique digital artwork with ease. At its core, Glitchify leverages Python and OpenCV to implement a suite of advanced image processing techniques, including RGB channel shifting, pixel distortion, cartoon effects, noise reduction, and image segmentation. These operations are seamlessly integrated into a web-based environment powered by Next.js on the frontend and Python on the backend, offering both performance and scalability.",
    image: Glitchfy,
    technologies: ["Next.js", "Python", "OpenCV", "Tailwind CSS", "Vercel"],
    category: "AI/ML",
    status: "Completed",
    liveUrl: "https://glitify.vercel.app/",
    githubUrl: "https://github.com/Abdullah-Rasheed-Shiekh/glitify.git",
    features: [
      "🎨 Customizable Glitch Effects – Layered RGB channel shifts, static distortions, and pixel scrambling for a true cyberpunk vibe.",
      "📸 Image Stylization – Techniques like cartooning using edge detection + K-means color quantization to simplify and stylize visuals.",
      "🔧 Noise Reduction & Morphological Operations – To refine raw images and prepare them for glitch transformations.",
      "✂️ Segmentation Tools – Enabling selective glitching of specific regions of an image.",
    ],
  },
  
  {
    id: 2,
    title: "Eye-Controlled Mouse",
    description:
      "An innovative application that enables users to control mouse movements and clicks using eye-tracking technology.",
    longDescription:
      "Developed an eye-controlled mouse application that utilizes computer vision techniques to track eye movements and translate them into mouse cursor movements and clicks. The application employs OpenCV for real-time eye detection and tracking, allowing users to navigate their computer interface hands-free. This project aims to enhance accessibility for individuals with mobility impairments and provides a novel way to interact with digital devices.",
    image: EyeControlMouse,
    technologies: ["Python", "OpenCV", "PyAutoGUI", "Mediapipe"],
    category: "AI/ML",
    status: "Completed",
    liveUrl: "https://www.linkedin.com/posts/abdullah-rasheed-shiekh_python-opencv-mediapipe-activity-7361393914479542273-gAdv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY4BhUBvWPQL7PHg9zu8Iwko0s05P-gifg",
    githubUrl: "https://github.com/Abdullah-Rasheed-Shiekh/Virtual-EyeMouse.git",
    features: [
      "Real-time eye tracking using computer vision",
      "Cursor movement based on eye gaze direction",
      "Blink detection for mouse click simulation",
      "Calibration for personalized user experience",
      "Adjustable sensitivity settings",
      "Cross-platform compatibility",
    ],
  },
  {
    id: 3,
    title: "Deep Learning-Powered Football Match Analysis",
    description:
      "A comprehensive football match analysis system using deep learning for player tracking, event detection, and performance metrics.",
    longDescription:
      "Developed an advanced football match analysis platform that leverages deep learning techniques like YOLOv8 for real-time player detection and tracking, and camera movement. The system uses OpenCv to process video feeds, extract key events such as goals and fouls, and generate detailed performance metrics. The platform provides coaches and analysts with actionable insights to enhance team strategies and player performance.",
    image: DeepLearningMatch,
    technologies: ["Python", "OpenCV", "YOLOv8", "TensorFlow", "Colab"],
    category: "AI/ML",
    status: "Completed",
    liveUrl: "https://www.linkedin.com/posts/abdullah-rasheed-shiekh_ai-deeplearning-yolov8-activity-7358458158681407489-DXqM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY4BhUBvWPQL7PHg9zu8Iwko0s05P-gifg",
    githubUrl: "https://github.com/Abdullah-Rasheed-Shiekh/Football-analysis-YOLOv8.git",
    features: [
      "Real-time player detection and tracking using YOLOv8",
      "Camera movement detection and stabilization",
      "Event detection for goals, fouls, and key plays",
      "Performance metrics including distance covered and speed",
      "Team Control Analysis",
      "Video summarization of key match events",
    ],
  },
  {
    id: 4,
    title: "Gesture-Controlled Dino Game",
    description:
      "A fun and interactive game where players control the dinosaur using hand gestures detected via webcam and OpenCV.",
    longDescription:
      "Created an engaging gesture-controlled version of the classic Chrome Dino game, allowing players to control the dinosaur's movements using hand gestures captured through a webcam. The game utilizes OpenCV for real-time hand detection and gesture recognition, enabling intuitive controls such as jumping and ducking. This project combines computer vision with game development to provide a unique and entertaining user experience.",
    image: DinoGame,
    technologies: ["Python", "OpenCV", "Pygame", "Mediapipe"],
    category: "AI/ML",
    status: "Completed",
    liveUrl: "https://www.linkedin.com/posts/abdullah-rasheed-shiekh_python-computervision-opencv-activity-7338563473649405955-MyT3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY4BhUBvWPQL7PHg9zu8Iwko0s05P-gifg",
    githubUrl: "https://github.com/Abdullah-Rasheed-Shiekh/Python_Automation_DInoGame.git",
    features: [
      "Real-time hand gesture recognition using OpenCV and MediaPipe",
      "Intuitive controls for jumping and ducking",
      "Classic Dino game mechanics",
      "Score tracking and high score display",
      "Customizable gesture sensitivity",
      "Fun and engaging user experience",
    ],
  },
  {
    id: 5,
    title: "The COVID-19 Data Lab - A Dynamic Power BI Dashboard",
    description: "A comprehensive Power BI dashboard for tracking and analyzing COVID-19 data globally.",
    longDescription:
      "Developed an interactive Power BI dashboard that aggregates and visualizes COVID-19 data from API, providing insights into infection rates, vaccination progress, and demographic impacts. The dashboard features dynamic filtering, trend analysis, and geographic mapping to help users understand the pandemic's evolution and its effects on different populations. This project demonstrates proficiency in data visualization, Power BI functionalities, and public health data analysis. Dynamically updates with the latest data to provide real-time insights.",
    image: COVID19,
    technologies: ["Power BI", "DAX", "Data Visualization", "API Integration"],
    category: "Power BI and Data Visualization",
    status: "Completed",
    liveUrl: "https://www.linkedin.com/posts/abdullah-rasheed-shiekh_the-covid-19-data-lab-activity-7326648930459385858-jrRU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY4BhUBvWPQL7PHg9zu8Iwko0s05P-gifg",
    githubUrl: "https://github.com/Abdullah-Rasheed-Shiekh/The_COVID19_DataLab.git",
    features: [
      "Interactive visualizations of COVID-19 data",
      "Dynamic filtering by region, date, and demographics",
      "Trend analysis of infection rates and vaccination progress",
      "Geographic mapping of case distributions",
      "Customizable reports and dashboards",
      "Real-time data updates from reliable sources",
    ],
  },
  {
    id: 6,
    title: "US SuperStore Insights - Power BI Dashboard",
    description:
      "A detailed Power BI dashboard analyzing sales, profit, and most sold products and customer data for a US SuperStore dataset.",
    longDescription:
      "Created a comprehensive Power BI dashboard to analyze the US SuperStore dataset, providing insights into sales performance, profit margins, and customer behavior. The dashboard features interactive visualizations, including sales trends, top-selling products, and regional performance metrics. Utilizing DAX for advanced calculations and data modeling, this project showcases the ability to transform raw data into actionable business insights through effective data visualization techniques.",
    image: UsSuperStoreInsights,
    technologies: ["Power BI", "DAX", "Data Visualization", "Data Analysis"],
    category: "Power BI and Data Visualization",
    status: "Completed",
    liveUrl: "https://www.linkedin.com/posts/abdullah-rasheed-shiekh_ussuperstoreinsights-activity-7299484521354162176-LrTu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY4BhUBvWPQL7PHg9zu8Iwko0s05P-gifg",
    githubUrl: "https://github.com/Abdullah-Rasheed-Shiekh/US_SuperStoreInsights.git",
    features: [
      "Interactive sales and profit visualizations",
      "Top-selling products and categories analysis",
      "Customer segmentation and behavior insights",
      "Regional performance metrics",
      "Advanced DAX calculations for data modeling",
      "Customizable reports and dashboards",
    ],
  },
  {
    id: 7,
    title: "Data Science Salary Analysis",
    description:
      "A Python project analyzing data science salaries across different roles, locations, and experience levels using data visualization libraries.",
    longDescription:
      "Conducted a comprehensive analysis of data science salaries using Python and popular data visualization libraries such as Matplotlib, Seaborn, and Plotly. The project involved cleaning and preprocessing a large dataset of salary information, followed by exploratory data analysis to identify trends and patterns across various roles, locations, and experience levels. The findings were presented through interactive visualizations, providing valuable insights into the data science job market.",
    image: DataScienceSalaryAnalysis,
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly"],
    category: "Power BI and Data Visualization",
    status: "Completed",
    liveUrl: "https://www.linkedin.com/posts/abdullah-rasheed-shiekh_data-science-salary-analysis-from-2020-2023-activity-7290740847774461953-x4PK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY4BhUBvWPQL7PHg9zu8Iwko0s05P-gifg",
    githubUrl: "https://github.com/Abdullah-Rasheed-Shiekh/DataScienceSalaryAnalysis.git",
    features: [
      "Data cleaning and preprocessing",
      "Exploratory data analysis",
      "Salary trends by role, location, and experience",
      "Interactive visualizations using Matplotlib, Seaborn, and Plotly",
      "Insights into the data science job market",
      "Comprehensive report of findings",
    ],
  },
  {
    id: 8,
    title: "CineSuggest - Movie Recommendation App",
    description:
      "A mobile app that provides latest movies details, trailers, and reccomendations and authorization.",
    longDescription:
      "Developed a mobile application using Flutter that allows users to discover and explore movies. The app integrates with the TMDB API to fetch movie details, trailers, and recommendations. It features user authentication, allowing users to create accounts, log in, and save their favorite movies. The app provides a seamless and engaging user experience with a clean and intuitive interface.",
    image: CineSuggest,
    technologies: ["Flutter", "Dart", "TMDB API", "Firebase"],
    category: "Mobile",
    status: "Completed",
    liveUrl:"https://www.linkedin.com/posts/abdullah-rasheed-shiekh_flutter-moviesapp-dart-activity-7278070772282122240-wOZZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY4BhUBvWPQL7PHg9zu8Iwko0s05P-gifg",
    githubUrl:"https://github.com/Abdullah-Rasheed-Shiekh/Cine-Suggest.git",
    features: [
      "Movie discovery and exploration",
      "Integration with TMDB API for movie details and trailers",
      "User authentication with Firebase",
      "Save and manage favorite movies",
      "Clean and intuitive user interface",
      "Responsive design for various screen sizes",
    ],
  },
  {
    id: 9,
    title: "AI-Integrated Tic Tac Toe Game",
    description:
      "A CLI-based Tic Tac Toe game with an AI opponent using the Minimax algorithm and Multiplayer Option as well.",
    longDescription:
      "Developed a command-line interface (CLI) Tic Tac Toe game that features an AI opponent powered by the Minimax algorithm. The game allows users to play against the AI or another player, providing a challenging and engaging experience. The AI is designed to make optimal moves, ensuring a competitive game. The project demonstrates proficiency in algorithm design, game logic implementation, and user interaction through the terminal.",
    image: AI_TIC_TAC_TOE,
    technologies: ["Python", "Minimax Algorithm", "CLI"],
    category: "AI/ML",
    status: "Completed",
    liveUrl:"https://www.linkedin.com/posts/abdullah-rasheed-shiekh_python-ai-tictactoe-activity-7235540819590430720-AiOh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY4BhUBvWPQL7PHg9zu8Iwko0s05P-gifg",
    githubUrl:"https://github.com/Abdullah-Rasheed-Shiekh/AI_Integerated_TIC_TAC_TOE.git",
    features: [
      "Command-line interface for easy interaction",
      "AI opponent using the Minimax algorithm",
      "Two-player mode for multiplayer gaming",
      "Optimal move selection by the AI",
      "Game state validation and win detection",
      "Replay option for continuous play",
    ],
  },
  {
    id: 10,
    title: "TasteGlobe - World On Your Plate",
    description:
      "A mobile app that provides recipes from around the world based on ingredients and cuisine type.",
    longDescription:
      "Created a mobile application using Flutter that allows users to explore and discover recipes from various cuisines around the world. The app integrates with the Spoonacular API to fetch recipe details based on user-inputted ingredients or selected cuisine types. It features a user-friendly interface, enabling users to search for recipes, view cooking instructions, and save their favorite dishes for easy access.",
    image: TasteGlobe,
    technologies: ["Flutter", "Dart", "Provider","Local Storage",],
    category: "Mobile",
    status: "Completed",
    liveUrl:"https://www.linkedin.com/posts/abdullah-rasheed-shiekh_flutter-appdevelopment-learningproject-activity-7224805301533761536-e8q4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY4BhUBvWPQL7PHg9zu8Iwko0s05P-gifg",
    githubUrl:"https://github.com/Abdullah-Rasheed-Shiekh/TasteGlobe.git",
    features: [
      "Recipe discovery from various cuisines",
      "Search by ingredients or cuisine type",
      "Provider for state management",
      "User-friendly interface with easy navigation",
      "Save and manage favorite recipes",
      "Step-by-step cooking instructions",
    ],
  },
  {
    id: 11,
    title: "BudgetBuddy - Personal Finance Tracker",
    description:
      "A mobile app to track expenses, set budgets, and visualize spending patterns.",
    longDescription:
      "Developed a mobile application using Flutter that helps users manage their personal finances by tracking expenses, setting budgets, and visualizing spending patterns. The app features an intuitive interface for adding and categorizing expenses, as well as generating reports and charts to provide insights into spending habits. It aims to promote better financial management and budgeting practices among users.",
    image: BudgetBuddy,
    technologies: ["Flutter", "Dart", "Firebase"],
    category: "Mobile",
    status: "Completed",
    liveUrl:"https://www.linkedin.com/posts/abdullah-rasheed-shiekh_expensemate-financeapp-flutterdevelopment-activity-7219737155760230400-3_xu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY4BhUBvWPQL7PHg9zu8Iwko0s05P-gifg",
    githubUrl:"https://github.com/Abdullah-Rasheed-Shiekh/The-Budget-Buddy.git",
    features: [
      "Expense tracking and categorization",
      "Budget setting and monitoring",
      "Spending pattern visualization with charts",
      "User-friendly interface with easy navigation",
      "Data synchronization with Firebase",
      "Reports and insights for better financial management",
      "Secure user authentication",
    ],
  },
  {
    id: 12,
    title: "Technoverse - Flagship Event ACM Comsats Lahore",
    description:
    "Contributed to the development of the official website for Technoverse, the flagship event of ACM Comsats Lahore.",
    longDescription:
      "Played a key role in developing the official website for Technoverse, the flagship event of ACM Comsats Lahore. The website serves as a central hub for event information, including schedules, speaker details, and registration. It features a modern design and responsive layout to ensure accessibility across devices. The project involved collaboration with a team of developers and designers to create an engaging online presence for the event.",
    image: Technoverse,
    technologies: ["ReactJS", "CSS", "Tailwind", "Vercel"],
    category: "Web",
    status: "Completed",
    liveUrl: "https://technoverse-cui.netlify.app/",
    githubUrl:"",
    features: [
      "Event information hub with schedules and speaker details",
      "User-friendly registration process",
      "Responsive design for accessibility across devices",
      "Modern and engaging website layout",
      "Collaboration with a team of developers and designers",
      "Hosted on Vercel for optimal performance",
    ],
  },
  {
    id: 13,
    title: "ParkPro - Smart Parking Management System",
    description:
      "A web application for managing parking spaces, reservations, and payments.",
    longDescription:
      "Developed a web application using the MERN stack (PostgresSQL, Express.js, HTML, Node.js, CSS, JavaScript) to manage parking spaces, reservations, and payments. The application allows users to find available parking spots, make reservations, and process payments securely. The project aims to streamline parking management and improve user convenience.",
    image: ParkPro,
    technologies: ["PostgresSQL", "Express.js", "HTML", "Node.js", "CSS", "JavaScript"],
    category: "Web",
    status: "Completed",
    liveUrl: "https://www.linkedin.com/posts/abdullah-rasheed-shiekh_webdevelopment-databasemanagement-nodejs-activity-7208164495498657793-9oPX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY4BhUBvWPQL7PHg9zu8Iwko0s05P-gifg",
    githubUrl: "https://github.com/Abdullah-Rasheed-Shiekh/ParkPro.git",
    features: [
      "Parking space management",
      "Reservation system for users",
      "User-friendly interface",
      "Real-time availability updates",
      "Membership plans and discounts",      
    ],
  },
  {    
    id: 14,
    title: "DeepLearningAI Clone - Responsive Website",
    description:
      "A responsive clone of the DeepLearningAI website built with HTML and Bootstrap and JavaScript.",
    longDescription:
      "Created a responsive clone of the DeepLearningAI website using HTML, Bootstrap, and JavaScript. The project involved replicating the design and functionality of the original site, focusing on layout, navigation, and interactive elements. The clone serves as a demonstration of front-end development skills and attention to detail in recreating a professional website.",
    image: DeepLearningAIClone,
    technologies: ["HTML", "Bootstrap", "JavaScript"," CSS"],
    category: "Web",
    status: "Completed",
    liveUrl: "https://abdullah-rasheed-shiekh.github.io/DeepLearningAi/",
    githubUrl:"https://github.com/Abdullah-Rasheed-Shiekh/DeepLearningAi.git",
    features: [
      "Responsive design for various screen sizes",
      "Accurate replication of the original website layout",
      "Interactive elements using JavaScript",
      "Clean and organized code structure",
      "Use of Bootstrap for styling and layout",
      "Demonstration of front-end development skills",
    ],
  },
  {
    id: 15,
    title: "Data Conversion Calculator",
    description:
      "A simple CLI-based calculator for converting between different data units built in C Language.",
    longDescription:
      "Developed a command-line interface (CLI) data conversion calculator using C language. The calculator allows users to convert between various data units, such as bytes, kilobytes, megabytes, and gigabytes. The project demonstrates proficiency in C programming, user input handling, and basic arithmetic operations. It provides a practical tool for users needing quick data unit conversions.",
    image: Cproj,
    technologies: ["C Language", "CLI"],
    category: "C Language",
    status: "Completed",
    liveUrl: "https://www.linkedin.com/posts/abdullah-rasheed-shiekh_datatypeconversion-cprogramming-semesterproject-activity-7102578510468182017-rWxc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY4BhUBvWPQL7PHg9zu8Iwko0s05P-gifg",
    githubUrl:"https://github.com/Abdullah-Rasheed-Shiekh/DataConversionCalculator.git",
    features: [
      "Command-line interface for user interaction",
      "Conversion between Decimal, Binary, Octal, and Hexadecimal",
      "Input validation for accurate conversions",
      "Simple and efficient code structure",
      "Practical tool for quick data unit conversions",
      "Demonstration of C programming skills",
    ],
  },
]

const categories = ["All", "Web", "Mobile", "AI/ML","Power BI and Data Visualization", "C Language"]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const handleProjectAction = (action: string, project: any) => {
    switch (action) {
      case "preview":
        window.open(project.liveUrl, "_blank")
        break
      case "code":
        window.open(project.githubUrl, "_blank")
        break
      case "description":
        setSelectedProject(selectedProject === project.id ? null : project.id)
        break
    }
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-playfair text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-source-sans">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-200 hover:scale-105 dark:hover:text-white"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="relative group">
              <Card
                className="overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:text-white"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Hover Overlay with Actions */}
                  {/* If a project has preview, only then show the preview button */}
                  {hoveredProject === project.id && (
                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center space-x-4 animate-fade-in">
                      
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleProjectAction("preview", project)}
                        className="bg-primary/20 hover:bg-primary/30 text-primary border-primary/30"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Preview
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleProjectAction("description", project)}
                        className="bg-accent/20 hover:bg-accent/30 text-accent border-accent/30"
                      >
                        <FileText className="h-4 w-4 mr-1" />
                        Details
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleProjectAction("code", project)}
                        className="bg-secondary/20 hover:bg-secondary/30 text-foreground border-secondary/30"
                      >
                        <Code className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className={
                        project.status === "Completed" ? "bg-green-500 text-white" : "bg-yellow-500 text-black"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  {/* Project Header */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                        {project.category}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button size="icon" variant="ghost" asChild className="h-8 w-8">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button size="icon" variant="ghost" asChild className="h-8 w-8">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold font-source-sans text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-muted-foreground font-source-sans leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-secondary/50">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-secondary/50">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Expanded Details */}
                  {selectedProject === project.id && (
                    <div className="pt-4 border-t border-border space-y-4 animate-fade-in-up">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Project Overview:</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.longDescription}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
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
          ))}
        </div>
      </div>
    </section>
  )
}
