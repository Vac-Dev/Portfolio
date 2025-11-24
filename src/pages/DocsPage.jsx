import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, GraduationCap, Download, FileArchive, BookOpenCheck } from "lucide-react"
import { motion } from "framer-motion"

const academicRecords = [
  {
    title: "Academic Transcript",
    tags: ["Transcript", "ZIP"],
    description: "Complete academic record including all courses, grades, and GPA.",
    action: "Download ZIP",
  },
  {
    title: "Abridged CV",
    tags: ["CV", "One-Pager"],
    description: "Concise CV for recruiters highlighting key capabilities.",
    action: "Download PDF",
  },
]

const supportingDocs = [
  {
    icon: FileArchive,
    title: "Official Documentation",
    items: ["Academic Transcripts", "Degree Certificates", "Professional References"],
  },
]


export default function DocsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="container mx-auto relative z-10 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-500/20 flex items-center justify-center ring-4 ring-blue-500/5">
            <FileText className="h-10 w-10 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">Academic Records</h1>
          <p className="text-xl text-muted-foreground">
            Official transcripts, CVs, and supporting documentation for academic verification.
          </p>
        </motion.div>

        {/* Academic Record Cards */}
        <section className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {academicRecords.map((record, index) => (
              <motion.div
                key={record.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/70 border-white/10 hover:border-blue-500/40 transition-all backdrop-blur">
                  <CardHeader className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                        <BookOpenCheck className="h-6 w-6 text-blue-400" />
                      </div>
                      <CardTitle className="text-2xl">{record.title}</CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {record.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-blue-500/10 text-blue-200 border-transparent">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">{record.description}</p>
                    <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5">
                      <Download className="h-4 w-4 mr-2" />
                      {record.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Academic Achievements */}
        <section className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-blue-600/20 to-blue-900/10 border-blue-500/20 shadow-2xl">
              <CardHeader className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-blue-300" />
                </div>
                <div>
                  <p className="uppercase text-xs tracking-widest text-blue-300 mb-1">Academic Achievements</p>
                  <CardTitle className="text-2xl text-white">
                    BSc Computer & Information Sciences
                  </CardTitle>
                  <p className="text-blue-200 text-sm mt-1">Varsity College — Pretoria Campus (2023 – 2025)</p>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </section>

        {/* Supporting Documentation */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Supporting Documentation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {supportingDocs.map((doc, index) => {
              const Icon = doc.icon
              return (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-card/60 border-white/10 hover:border-blue-500/30 transition-all">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-blue-400" />
                        </div>
                        <CardTitle>{doc.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        {doc.items.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
