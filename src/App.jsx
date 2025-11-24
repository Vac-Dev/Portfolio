import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { ThemeProvider } from "@/contexts/ThemeContext"
import Navbar from "@/components/Navbar"
import HomePage from "@/pages/HomePage"
import AboutPage from "@/pages/AboutPage"
import ProjectsPage from "@/pages/ProjectsPage"
import SkillsPage from "@/pages/SkillsPage"
import DocsPage from "@/pages/DocsPage"
import ContactPage from "@/pages/ContactPage"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-background">
          <Navbar />
          <main className="grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/docs" element={<DocsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
