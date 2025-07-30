"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FaShieldAlt } from "react-icons/fa"
import { HiSparkles } from "react-icons/hi2"
import { RiAiGenerate } from "react-icons/ri"

const stats = [
  {
    icon: <RiAiGenerate className="text-3xl" />,
    title: "AI-Enhanced Governance",
    description: "Fix your governance beautifully",
    details: "The only AI you need as a designer, get your creativity flowing and boost your productivity.",
    gradient: "from-green-500/20 via-green-600/20 to-green-700/20",
    iconBg: "bg-green-500/20 border-green-400/30",
  },
  {
    icon: <HiSparkles className="text-3xl" />,
    title: "Enterprise Security",
    description: "Finally available for DAOs",
    details: "Never miss a deadline again, stay organized and boost your creativity with our all in one solution.",
    gradient: "from-green-400/20 via-green-500/20 to-green-600/20",
    iconBg: "bg-green-400/20 border-green-300/30",
  },
  {
    icon: <FaShieldAlt className="text-3xl" />,
    title: "Advanced Protection",
    description: "Stop neglecting your security",
    details: "Take control of your personal data, protect yourself and browse the internet with confidence.",
    gradient: "from-green-300/20 via-green-400/20 to-green-500/20",
    iconBg: "bg-green-300/20 border-green-200/30",
  },
]

export function StatsSection() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-orbitron">
            <span className="text-white">EMPOWERING</span>
            <br />
            <span className="gradient-text text-glow-green">SUCCESS</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto font-space-grotesk">
            Proven results from our DAO implementations and governance optimizations across diverse organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 h-full overflow-hidden group hover:border-green-400/30 transition-all duration-300">
                <CardContent className="p-0 h-full">
                  {/* Gradient Background */}
                  <div className={`h-48 bg-gradient-to-br ${stat.gradient} relative flex items-center justify-center`}>
                    {/* Icon Container */}
                    <div className={`w-16 h-16 rounded-full ${stat.iconBg} border flex items-center justify-center`}>
                      {stat.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 font-space-grotesk">{stat.title}</h3>
                    <p className="text-gray-400 text-sm mb-3 font-space-grotesk">{stat.description}</p>
                    <p className="text-gray-500 text-xs leading-relaxed font-inter">{stat.details}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
