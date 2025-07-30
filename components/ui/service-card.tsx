"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  timeline?: string
  className?: string
  delay?: number
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
}

export function ServiceCard({ title, description, features, timeline, className, delay = 0 }: ServiceCardProps) {
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
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-white mb-4 font-space-grotesk">{title}</h3>
          <p className="text-gray-400 mb-6 font-inter">{description}</p>
          <div className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center text-green-400"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="mr-2">✓</span>
                <span className="text-gray-300 font-inter">{feature}</span>
              </motion.div>
            ))}
          </div>
          {timeline && (
            <Badge variant="outline" className="border-green-400/50 text-green-400 font-space-grotesk">
              {timeline}
            </Badge>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
