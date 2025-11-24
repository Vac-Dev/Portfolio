import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const allProjects = [
  {
    title: "Custom CRM for Fleet Operations",
    description: "Internal CRM built with shadcn/ui that consolidates customer profiles, fleet metadata, and automated follow-ups for iCam Video Telematics.",
    technologies: ["React", "shadcn/ui", "Node.js", "PostgreSQL"],
    image: "linear-gradient(to bottom right, #312e81, #1e1b4b)",
    link: "#",
  },
  {
    title: "Automated Driver Tagging Program",
    description: "C# service that watches for driver/route changes and automatically issues device commands to update on-board trackers without manual intervention.",
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

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            All Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive collection of my work, showcasing full-stack capabilities and problem-solving approach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                <div 
                  className="h-48 w-full relative overflow-hidden"
                  style={{ background: project.image }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-400 transition-colors">{project.title}</CardTitle>
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
      </div>
    </div>
  )
}
