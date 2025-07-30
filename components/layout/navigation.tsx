"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { usePageTransition } from "@/contexts/page-transition-context"

interface NavigationProps {
  className?: string
}

const navItems = [
  { name: "Home", href: "/", loadingText: "Loading Home..." },
  { name: "About", href: "/about", loadingText: "Loading About..." },
  { name: "Services", href: "/services", loadingText: "Loading Services..." },
  { name: "Technology", href: "/technology", loadingText: "Loading Technology..." },
  { name: "Industries", href: "/industries", loadingText: "Loading Industries..." },
  { name: "Contact", href: "/contact", loadingText: "Loading Contact..." },
]

export function Navigation({ className }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { navigateWithTransition } = usePageTransition()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent, item: (typeof navItems)[0]) => {
    e.preventDefault()

    // Don't navigate if already on the same page
    if (pathname === item.href) return

    navigateWithTransition(item.href, item.loadingText)
  }

  const handleCalendlyClick = () => {
    // Open Calendly in a new window
    window.open("https://calendly.com/goshendao/consultation", "_blank", "width=800,height=600")
  }

  return (
    <motion.nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "backdrop-blur-xl" : "",
        className,
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <button
            onClick={(e) => handleNavClick(e, navItems[0])}
            className="bg-green-400 text-black font-bold text-xl px-4 py-2 rounded-lg font-orbitron hover:bg-green-500 transition-colors"
          >
            GOSHENDAO
          </button>
        </motion.div>

        {/* Center Navigation */}
        <motion.div
          className="hidden md:flex items-center bg-green-500/20 backdrop-blur-xl border border-green-500/30 rounded-full px-8 py-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                onClick={(e) => handleNavClick(e, item)}
                className={cn(
                  "text-white hover:text-green-400 transition-colors relative px-4 py-2 rounded-full text-sm font-medium font-space-grotesk",
                  pathname === item.href && "text-green-400 bg-green-500/20",
                )}
              >
                <motion.span whileHover={{ y: -2 }}>{item.name}</motion.span>
                {pathname === item.href && (
                  <motion.div
                    className="absolute inset-0 bg-green-500/20 rounded-full"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button - Now connects to Calendly */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            className="bg-green-400/20 backdrop-blur-xl border border-green-400/30 text-green-400 hover:bg-green-400/30 hover:text-white transition-all duration-300 rounded-full px-6 font-space-grotesk"
            onClick={handleCalendlyClick}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Let's Talk
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  )
}
