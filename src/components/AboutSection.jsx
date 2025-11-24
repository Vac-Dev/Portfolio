import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, ArrowRight, Database, Globe, Terminal } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutSection() {
const skills = ["JavaScript", "C#", "React", "Node.js"]
  
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background opacity-50 pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-blue-500">Me</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate{" "}
                <span className="relative inline-block group px-1 -mx-1">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-400/20 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    full-stack web developer
                  </span>
                </span>{" "}
                and{" "}
                <span className="relative inline-block group px-1 -mx-1">
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-cyan-400/20 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    BSc IT student
                  </span>
                </span>{" "}
                specializing in Application Development. I currently build programs, web apps, APIs, automations, and reporting systems for a{" "}
                <span className="relative inline-block group px-1 -mx-1">
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400/50 to-cyan-400/50 border-dashed border-t-2 border-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 text-blue-300">
                    vehicle tracking company
                  </span>
                </span>
                —helping fleets understand exactly what's happening on the road.
              </p>
              <p>
                <span className="relative inline-block group px-1 -mx-1">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-cyan-400/15 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Backend engineering
                  </span>
                </span>{" "}
                is my happy place, but I enjoy touching every part of the stack when it helps the team move faster. I'm aiming to stay an{" "}
                <span className="relative inline-block px-2 py-0.5 rounded-md bg-gradient-to-r from-blue-500/10 to-cyan-400/10 border border-blue-500/20 group hover:border-blue-400/40 transition-all duration-300">
                  <span className="relative z-10 text-blue-300">adaptable all-rounder</span>
                </span>{" "}
                who can architect services, polish UI, wire up DevOps, and automate any manual workflow that gets in the way.
              </p>
              <p>
                When I'm not coding, I'm probably in the{" "}
                <span className="relative inline-block group px-1 -mx-1">
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full group-hover:w-full transition-all duration-300" />
                  <span className="relative z-10 text-cyan-300">gym</span>
                </span>{" "}
                or experimenting with new{" "}
                <span className="relative inline-block group px-1 -mx-1">
                  <span className="absolute inset-0 bg-blue-400/10 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  <span className="relative z-10 text-blue-300">backend tools</span>
                </span>{" "}
                in my home lab.{" "}
                <span className="relative inline-block group px-1 -mx-1">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-400/20 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Continuous learning
                  </span>
                </span>{" "}
                keeps me sharp and curious.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>

            <Button asChild variant="outline" size="lg" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 transition-all">
              <Link to="/about">
                View More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Column - Stylized Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
              <Card className="relative w-full bg-card border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
                <CardContent className="p-8 text-center space-y-6 relative z-10">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/5 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                    <Code className="h-10 w-10 text-blue-400" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Full-Stack Developer</h3>
                    <p className="text-muted-foreground text-sm">
                      Building the future, one line at a time
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
                    <div className="text-center">
                      <Globe className="h-5 w-5 mx-auto text-blue-400 mb-2" />
                      <span className="text-xs text-muted-foreground">Web</span>
                    </div>
                    <div className="text-center">
                      <Database className="h-5 w-5 mx-auto text-blue-400 mb-2" />
                      <span className="text-xs text-muted-foreground">Data</span>
                    </div>
                    <div className="text-center">
                      <Terminal className="h-5 w-5 mx-auto text-blue-400 mb-2" />
                      <span className="text-xs text-muted-foreground">DevOps</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
