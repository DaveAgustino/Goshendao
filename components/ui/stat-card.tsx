"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedCounter } from "./animated-counter"
import { cn } from "@/lib/utils"

interface StatCardProps {
  number: number
  suffix?: string
  label: string
  className?: string
  delay?: number
}

export function StatCard({ number, suffix = "", label, className, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <Card
        className={cn(
          "bg-gray-800 border-gray-700 transition-all duration-300 hover:scale-105 hover:border-green-400/50",
          className,
        )}
      >
        <CardContent className="p-6 text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">
            <AnimatedCounter end={number} suffix={suffix} />
          </div>
          <div className="text-gray-400">{label}</div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
