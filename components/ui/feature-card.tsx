"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  className?: string
  delay?: number
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
}

export function FeatureCard({ icon, title, description, className, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      variants={scaleIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ ...scaleIn.transition, delay }}
    >
      <Card
        className={cn(
          "bg-gray-800 border-gray-700 h-full transition-all duration-300 hover:bg-gray-750 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-400/10",
          className,
        )}
      >
        <CardContent className="p-6">
          <motion.div
            className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center mb-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
            </svg>
          </motion.div>
          <h3 className="text-xl font-bold text-white mb-3 font-space-grotesk">{title}</h3>
          <p className="text-gray-400 font-inter">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
