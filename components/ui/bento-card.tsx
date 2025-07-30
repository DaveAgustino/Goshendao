"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface BentoCardProps {
  children: ReactNode
  className?: string
  variant?: "default" | "green" | "dark" | "gradient"
  size?: "default" | "large" | "wide" | "tall"
  hover3d?: boolean
}

export function BentoCard({
  children,
  className,
  variant = "default",
  size = "default",
  hover3d = true,
}: BentoCardProps) {
  const variants = {
    default: "glass-card",
    green: "glass-card-green",
    dark: "glass-card-dark",
    gradient:
      "bg-gradient-to-br from-green-800/20 to-green-900/10 backdrop-blur-xl border border-green-700/30 rounded-2xl",
  }

  const sizes = {
    default: "",
    large: "bento-item-large",
    wide: "bento-item-wide",
    tall: "bento-item-tall",
  }

  return (
    <motion.div
      className={cn("p-6 relative overflow-hidden", variants[variant], sizes[size], hover3d && "hover-3d", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={hover3d ? { scale: 1.02 } : {}}
    >
      {children}
    </motion.div>
  )
}
