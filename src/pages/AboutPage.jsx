import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Briefcase, GraduationCap, User } from "lucide-react"
import TextType from "@/components/TextType"
import { motion } from "framer-motion"

const timeline = [
  {
    year: "2021",
    title: "High School Graduation",
    subtitle: "Hatfield Christian School",
    description: "Completed high school education.",
    icon: GraduationCap,
  },
  {
    year: "2022 (3 months)",
    title: "Receptionist",
    subtitle: "Planet Fitness",
    description: "Worked as a receptionist during my gap year, handling customer service and front desk operations.",
    icon: User,
  },
  {
    year: "2022 – 2023",
    title: "H & P Exports",
    subtitle: "Export Company",
    description: "Worked at H & P Exports, gaining experience in business operations and logistics.",
    icon: Briefcase,
  },
  {
    year: "2023 – 2025",
    title: "BSc Computer & Information Sciences",
    subtitle: "Specialized in Application Development",
    description: "Graduated with distinction. Focused on full-stack development, software architecture, and database design.",
    icon: GraduationCap,
  },
  {
    year: "2024 – Present",
    title: "Full-Stack Developer (Mid-Level Responsibilities)",
    subtitle: "iCam Video Telematics",
    description: "Joined as an intern but owned end-to-end delivery across web apps, APIs, automations, and reporting—effectively operating as the team's mid-level engineer.",
    icon: Briefcase,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <div className="text-xl text-muted-foreground max-w-2xl mx-auto h-8 flex items-center justify-center">
              <TextType 
                text={["Get to know more about my journey", "Learn about my passions", "Discover my aspirations"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>
          </div>

          <div className="grid gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-white/10">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    I'm a passionate <span className="text-blue-400 font-semibold">full-stack web developer</span> and <span className="text-blue-400 font-semibold">BSc IT student</span> specializing in Application Development. Day-to-day I work at iCam Video Telematics building programs, websites, APIs, automations, and reporting systems that give fleet managers a clear picture of their operations.
                  </p>
                  
                  <p>
                    I naturally gravitate toward the backend—designing APIs, orchestrating data flows, and keeping services resilient—but I also enjoy jumping into frontend polish or DevOps work when it helps the product ship. My goal is to stay an all-rounder who can bridge multiple disciplines rather than specialize in a single title.
                  </p>
                  
                  <p>
                    Outside of work I'm usually in the gym or experimenting with new backend stacks in my home lab. I'm a curious learner who prefers hands-on exploration over giving advice, and I pour that energy back into the products I build.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h2 className="text-xl font-semibold mb-4 text-white">Technical Focus</h2>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "C#", "React", "Node.js", "ASP.NET", "PostgreSQL", "MongoDB"].map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline Section */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-center">My Journey</h2>
              <div className="relative space-y-8 min-h-[400px] before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-blue-500/50 before:to-transparent">
                {timeline.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div 
                      key={`${item.year}-${item.title}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, margin: "-100px" }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15, duration: 0.5 }}
                      className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500/30 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      
                      <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card/50 border-white/10 hover:border-blue-500/30 transition-colors">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-white">{item.title}</div>
                            <time className="font-mono text-xs text-blue-400">{item.year}</time>
                          </div>
                          <div className="text-blue-300 text-sm mb-2">{item.subtitle}</div>
                          <div className="text-muted-foreground text-sm">
                            {item.description}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
