import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Zap, Users, ArrowRight } from "lucide-react"
import Galaxy from "@/components/react-bits/Galaxy"
import { motion } from "framer-motion"

export default function HeroSection() {
  const stats = [
    { icon: Code, value: "5+", label: "Projects Completed" },
    { icon: Zap, value: "15+", label: "Technologies" },
    { icon: Users, value: "3+", label: "Real-World Clients" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 pb-20 overflow-hidden" id="hero-section">
      {/* Galaxy Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Galaxy 
          focal={[0.5, 0.5]}
          rotation={[1.0, 0.0]}
          starSpeed={0.5}
          density={1.2}
          hueShift={210} // Blue/Cyan shift
          speed={0.5}
          mouseInteraction={true}
          glowIntensity={0.4}
          saturation={0.6}
          mouseRepulsion={true}
          repulsionStrength={2}
          twinkleIntensity={0.4}
          rotationSpeed={0.05}
          autoCenterRepulsion={0}
          transparent={true}
        />
      </div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/95 z-[1] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-[2]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient bg-300%">
                  Kyle
                </span>
              </h1>
              
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20 px-4 py-2 text-sm backdrop-blur-sm">
                  <Zap className="h-3 w-3 mr-2" />
                  Full-Stack Developer
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm border-white/10 text-muted-foreground">
                  Graduate
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm border-white/10 text-muted-foreground">
                  BSc Computer & Information Sciences
                </Badge>
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              I build and develop computer-based solutions that make a real impact with a strong foundation in React, Node.js and ASP.NET.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 transition-all hover:scale-105">
                <Link to="/projects">
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5 hover:text-white transition-all hover:scale-105">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </motion.div>

            {/* Statistics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center group cursor-default">
                    <div className="flex justify-center mb-2">
                      <div className="p-3 rounded-2xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                        <Icon className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1 group-hover:text-blue-400 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* Right Column - 3D Avatar Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-2xl shadow-black/50">
                <div className="absolute inset-0 bg-grid-white/[0.02]" />
                <div className="relative text-center space-y-4 z-10">
                  <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center shadow-xl shadow-blue-500/30">
                    <span className="text-6xl filter drop-shadow-lg">👤</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">Ready to Code</h3>
                    <p className="text-blue-200/60 text-sm">
                      Open for opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <svg className="h-6 w-6 text-muted-foreground/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
