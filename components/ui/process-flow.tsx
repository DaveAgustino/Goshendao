"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ProcessStep {
  title: string
  description: string
  icon?: ReactNode
}

interface ProcessFlowProps {
  title: string
  subtitle?: string
  steps: ProcessStep[]
  className?: string
}

export function ProcessFlow({ title, subtitle, steps, className }: ProcessFlowProps) {
  return (
    <div className={className}>
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-white">A DEEP DIVE INTO</span>
          <br />
          <span className="text-white">OUR </span>
          <span className="gradient-text">COLLABORATIVE</span>
          <br />
          <span className="text-white">WORK METHODOLOGY</span>
        </motion.h2>
        {subtitle && (
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="process-flow">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-4 uppercase">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Central 3D Element */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <motion.div
            className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-lg"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
            animate={{
              rotateY: [0, 360],
              rotateX: [0, 180, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </div>
  )
}
