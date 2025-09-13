import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { NetworkParticles } from "@/components/network-particles"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { ScrollAnimations } from "@/components/scroll-animations"
import { LoadingScreen } from "@/components/loading-screen"

export default function Home() {
  return (
    <>
      <LoadingScreen />

      <main className="relative min-h-screen overflow-hidden">
        <ScrollProgress />

        
        <NetworkParticles />

        
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Services />
          <Contact />
          <Footer />
        </div>

        <ScrollAnimations />
      </main>
    </>
  )
}
