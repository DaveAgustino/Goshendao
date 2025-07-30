"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  className?: string
  titleClassName?: string
  highlightWord?: string
}

export function SectionHeader({
  title,
  subtitle,
  description,
  className,
  titleClassName,
  highlightWord,
}: SectionHeaderProps) {
  const renderTitle = () => {
    if (!highlightWord) return title

    const parts = title.split(highlightWord)
    return (
      <>
        {parts[0]}
        <span className="text-green-400">{highlightWord}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <motion.div
      className={cn("text-center mb-16", className)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {subtitle && (
        <motion.p
          className={cn(
            "text-green-400 font-semibold text-sm uppercase tracking-wider mb-4 font-space-grotesk",
            className,
          )}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
      <h2 className={cn("text-4xl md:text-5xl font-bold mb-6 font-orbitron", titleClassName)}>{renderTitle()}</h2>
      {description && (
        <motion.p
          className={cn("text-gray-400 text-xl max-w-3xl mx-auto font-inter", className)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
