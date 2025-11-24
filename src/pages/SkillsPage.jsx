import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { TrendingUp, Briefcase, Sparkles } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const stats = [
  { label: "Years Coding", value: "5+", subtext: "Continual learning since 2020", icon: TrendingUp },
  { label: "Projects", value: "10+", subtext: "1 deliverable for a freelance company", icon: Briefcase },
  { label: "Tech & Tools", value: "40+", subtext: "Languages, frameworks, platforms", icon: Sparkles },
]

const proficiencyLevels = [
  { title: "Core Skills", description: "Production-ready expertise I use daily.", accent: "from-emerald-500/80 to-emerald-600/40", color: "emerald" },
  { title: "Proficient", description: "Solid working knowledge used in projects.", accent: "from-blue-500/70 to-blue-600/40", color: "blue" },
  { title: "Learning", description: "Currently exploring and leveling up.", accent: "from-amber-500/70 to-amber-600/40", color: "amber" },
]

const skillMatrix = [
  {
    category: "Languages",
    description: "Programming and markup languages",
    items: [
      { name: "JavaScript", level: "core" },
      { name: "C#", level: "core" },
      { name: "HTML", level: "core" },
      { name: "CSS", level: "core" },
      { name: "SQL", level: "core" },
      { name: "Java", level: "proficient" },
      { name: "Kotlin", level: "learning" },
    ],
  },
  {
    category: "Frameworks & Tools",
    description: "Front-end, backend, and UI systems",
    items: [
      { name: "React", level: "core" },
      { name: "Node.js", level: "core" },
      { name: "Express", level: "proficient" },
      { name: "ASP.NET Core", level: "core" },
      { name: "Tailwind CSS", level: "core" },
      { name: "shadcn/ui", level: "core" },
      { name: "DaisyUI", level: "proficient" },
      { name: "Next.js", level: "learning" },
      { name: "Three.js", level: "learning" },
    ],
  },
  {
    category: "Backend & APIs",
    description: "Server-side technologies and patterns",
    items: [
      { name: "REST APIs", level: "core" },
      { name: "GraphQL", level: "learning" },
      { name: ".NET MVC", level: "proficient" },
      { name: "Entity Framework", level: "core" },
      { name: "Webhook Automations", level: "core" },
    ],
  },
  {
    category: "Databases",
    description: "Storage engines and query languages",
    items: [
      { name: "PostgreSQL", level: "core" },
      { name: "SQL Server", level: "core" },
      { name: "Supabase", level: "proficient" },
      { name: "MongoDB", level: "proficient" },
      { name: "Redis", level: "learning" },
    ],
  },
  {
    category: "DevOps & Cloud",
    description: "Deployment, hosting, and automation",
    items: [
      { name: "Docker", level: "proficient" },
      { name: "Azure", level: "proficient" },
      { name: "GitHub Actions", level: "core" },
      { name: "CI/CD", level: "core" },
      { name: "Nginx", level: "learning" },
      { name: "Vercel", level: "learning" },
    ],
  },
]

const sortOptions = ["Level", "Name", "Category"]

const levelStyles = {
  core: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-300",
    border: "border-emerald-500/30",
    hover: "hover:bg-emerald-500/20",
    label: "Core",
    indicator: "bg-emerald-500"
  },
  proficient: {
    bg: "bg-blue-500/10",
    text: "text-blue-300",
    border: "border-blue-500/30",
    hover: "hover:bg-blue-500/20",
    label: "Proficient",
    indicator: "bg-blue-500"
  },
  learning: {
    bg: "bg-amber-500/10",
    text: "text-amber-300",
    border: "border-amber-500/30",
    hover: "hover:bg-amber-500/20",
    label: "Learning",
    indicator: "bg-amber-500"
  },
}

export default function SkillsPage() {
  const [sortBy, setSortBy] = useState("Level")

  const sortSkills = (items) => {
    if (sortBy === "Name") return [...items].sort((a, b) => a.name.localeCompare(b.name))
    if (sortBy === "Category") return items
    const order = { core: 0, proficient: 1, learning: 2 }
    return [...items].sort((a, b) => order[a.level] - order[b.level])
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />

        <div className="container mx-auto relative z-10 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">Skills & Technologies</h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive overview of my technical expertise, organized by proficiency level and category.
            </p>
          </motion.div>

          {/* Stats */}
          <section className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-card/70 border-white/5 hover:border-blue-500/40 transition-all hover:-translate-y-1">
                    <CardContent className="flex items-center gap-4 py-6">
                      <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-blue-300" />
                      </div>
                      <div>
                        <p className="text-3xl font-bold">{stat.value}</p>
                        <p className="text-sm text-white/80">{stat.label}</p>
                        <p className="text-xs text-muted-foreground">{stat.subtext}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </section>

          {/* Proficiency cards */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Proficiency Levels</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {proficiencyLevels.map((level, index) => (
                <motion.div
                  key={level.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={`border-none bg-gradient-to-br ${level.accent} text-white hover:scale-105 transition-transform duration-300`}>
                    <CardContent className="py-6">
                      <p className="text-xl font-semibold mb-2">{level.title}</p>
                      <p className="text-sm text-white/80">{level.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Technical expertise */}
          <section className="space-y-6">
            <div className="flex items-center justify-between gap-4 flex-wrap sticky top-20 z-20 bg-background/80 backdrop-blur-md py-4 -mx-4 px-4 rounded-b-xl border-b border-white/5">
              <div>
                <h2 className="text-3xl font-bold">Technical Expertise</h2>
                <p className="text-muted-foreground text-sm hidden md:block">Technologies organized by category and level of proficiency</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSortBy(option)}
                    className={`px-3 py-1 text-sm rounded-full border transition-all ${
                      sortBy === option ? "bg-blue-600 text-white border-transparent shadow-lg shadow-blue-500/20" : "border-white/10 text-muted-foreground hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {skillMatrix.map((group) => (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    layout
                  >
                    <Card className="h-full bg-card/60 border-white/10 hover:border-blue-500/30 transition-all backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-xl text-blue-100">{group.category}</CardTitle>
                        <p className="text-sm text-muted-foreground">{group.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-3">
                          {sortSkills(group.items).map((skill) => {
                            const style = levelStyles[skill.level]
                            return (
                              <Tooltip key={skill.name}>
                                <TooltipTrigger>
                                  <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`
                                      relative overflow-hidden group
                                      inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300
                                      border ${style.bg} ${style.text} ${style.border} ${style.hover}
                                      cursor-default
                                    `}
                                  >
                                    {skill.name}
                                  </motion.div>
                                </TooltipTrigger>
                                <TooltipContent className="bg-card border-white/10 text-white shadow-lg">
                                  <p className={`font-semibold ${style.text}`}>{style.label}</p>
                                </TooltipContent>
                              </Tooltip>
                            )
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>
        </div>
      </div>
    </TooltipProvider>
  )
}
