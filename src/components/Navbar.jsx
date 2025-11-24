import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Home, User, Briefcase, Code, BookOpen, Mail, Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/about", label: "About", icon: User },
  { path: "/projects", label: "Projects", icon: Briefcase },
  { path: "/skills", label: "Skills", icon: Code },
  { path: "/docs", label: "Docs", icon: BookOpen },
  { path: "/contact", label: "Contact", icon: Mail },
]

export default function Navbar() {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const NavLink = ({ item, isActive, onClick }) => {
    const Icon = item.icon
    return (
      <Link
        to={item.path}
        onClick={onClick}
        className={cn(
          "relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group w-full",
          isActive
            ? "text-white"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        {isActive && (
          <motion.div
            layoutId="navbar-active"
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-blue-500/20 rounded-xl backdrop-blur-sm border border-blue-500/30"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <motion.div
          className="absolute inset-0 bg-white/5 dark:bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.02 }}
        />
        <span className="relative z-10 flex items-center gap-3">
          <Icon className="h-5 w-5 transition-all duration-300 group-hover:text-blue-400 dark:group-hover:text-blue-400" />
          <span>{item.label}</span>
        </span>
      </Link>
    )
  }

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className="relative">
        {/* Desktop Navbar */}
        <div className="hidden md:block backdrop-blur-xl bg-background/70 border border-white/10 dark:border-white/20 rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/50 px-6 py-3">
          <div className="flex items-center justify-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group",
                    isActive
                      ? "text-white"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-desktop"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-blue-500/20 rounded-xl backdrop-blur-sm border border-blue-500/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <motion.div
                    className="absolute inset-0 bg-white/5 dark:bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.15 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <Icon className="h-4 w-4 transition-all duration-300 group-hover:text-blue-400 dark:group-hover:text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                    </motion.div>
                    <motion.span
                      className="relative inline-block"
                      whileHover={{ x: 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {item.label}
                    </motion.span>
                  </span>
                </Link>
              )
            })}
            
            {/* Theme Toggle */}
            <div className="ml-2 pl-2 border-l border-white/10 dark:border-white/20">
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              >
                {isDark ? (
                  <Sun className="h-4 w-4 text-yellow-400" />
                ) : (
                  <Moon className="h-4 w-4 text-blue-600" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden backdrop-blur-xl bg-background/70 border border-white/10 dark:border-white/20 rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/50">
          <div className="flex items-center justify-between px-4 py-3">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-blue-600" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden border-t border-white/10 dark:border-white/20"
              >
                <div className="px-4 py-4 space-y-2">
                  {navItems.map((item, index) => {
                    const isActive = location.pathname === item.path
                    return (
                      <motion.div
                        key={item.path}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -20, opacity: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <NavLink
                          item={item}
                          isActive={isActive}
                          onClick={() => setIsMobileMenuOpen(false)}
                        />
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-blue-500/20 rounded-2xl blur-xl opacity-50" />
      </div>
    </nav>
  )
}
