import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, MessageSquare, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "kylenel46@gmail.com",
    link: "mailto:kylenel46@gmail.com",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/Vac-Dev",
    link: "https://github.com/Vac-Dev",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear status when user starts typing again
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus("error")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration
      // You'll need to set these in your .env file or replace with your actual values
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id"
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id"
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key"

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "kylenel46@gmail.com",
        },
        publicKey
      )

      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      console.error("EmailJS error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-white/10 hover:border-blue-500/30 transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <CardTitle>{method.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {method.value}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-blue-600/10 to-cyan-600/5 border-blue-500/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <MessageSquare className="mr-3 h-6 w-6 text-blue-400" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background/50 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background/50 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background/50 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 bg-emerald-500/20 border border-emerald-500/30 rounded-md text-emerald-300"
                  >
                    <CheckCircle className="h-5 w-5" />
                    <p className="text-sm">Message sent successfully! I'll get back to you soon.</p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 bg-red-500/20 border border-red-500/30 rounded-md text-red-300"
                  >
                    <AlertCircle className="h-5 w-5" />
                    <p className="text-sm">
                      Failed to send message. Please check your inputs or try again later.
                    </p>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
