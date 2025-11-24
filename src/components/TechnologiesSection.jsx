import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, ArrowRight, Layout, Server, Database, Cog } from "lucide-react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "TailwindCSS", "Next.js", "Three.js"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "ASP.NET Core", "C#", "Entity Framework"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Supabase", "SQL Server"],
  },
  {
    title: "DevOps",
    icon: Cog,
    skills: ["Docker", "Azure", "Nginx", "GitHub Actions", "CI/CD"],
  },
]

export default function TechnologiesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Technologies & Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern tools and frameworks I use to build production-grade applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-white/10 hover:border-blue-500/30 transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-blue-400 transition-colors">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mr-2" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mb-16">
          <Button asChild size="lg" variant="outline" className="border-white/10 hover:bg-white/5">
            <Link to="/skills">
              View All Skills
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Credentials CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-blue-600/10 to-cyan-600/5 border-blue-500/20 max-w-3xl mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02]" />
            <CardContent className="p-12 text-center space-y-6 relative z-10">
              <div className="w-20 h-20 mx-auto rounded-full bg-blue-500/20 flex items-center justify-center ring-4 ring-blue-500/5">
                <FileText className="h-10 w-10 text-blue-400" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">View My Credentials</h3>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  Explore my academic achievements, certifications, and official documentation.
                </p>
              </div>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white">
                <Link to="/docs">
                  View Credentials
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
