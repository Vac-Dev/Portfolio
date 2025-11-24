import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const featuredProjects = [
  {
    title: "Custom CRM for Fleet Operations",
    description: "Internal CRM built with shadcn/ui for iCam Video Telematics. Centralizes customer data, fleet metadata, and automated follow-ups in one place.",
    technologies: ["React", "shadcn/ui", "Node.js", "PostgreSQL"],
    image: "linear-gradient(to bottom right, #312e81, #1e1b4b)",
  },
  {
    title: "Automated Driver Tagging Program",
    description: "C# service that detects driver or route changes and automatically pushes updated tags/commands down to tracking devices in the field.",
    technologies: ["C#", ".NET", "Device Commands"],
    image: "linear-gradient(to bottom right, #14532d, #0f172a)",
  },
  {
    title: "Afrisist Alarm Monitoring",
    description: "Self-hosted, real-time web application for managing vehicle alarms for large fleets with WebSocket-based live updates and automated notification logic.",
    technologies: ["React", "Node.js", "Supabase", "WebSocket", "DaisyUI"],
    image: "linear-gradient(to bottom right, #0f766e, #115e59)",
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of real-world projects that showcase my full-stack capabilities and problem-solving approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-card border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                {/* Project Preview Placeholder */}
                <div 
                  className="h-48 w-full relative overflow-hidden"
                  style={{ background: project.image }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent">
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm text-white border-none text-xs">
                        Featured
                      </Badge>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-blue-500/20 text-blue-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-transparent border border-blue-500/30 text-blue-400 hover:bg-blue-500/10">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
