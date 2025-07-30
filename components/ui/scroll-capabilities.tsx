"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"

const capabilities = [
  {
    id: "dao-infrastructure",
    title: "Advanced DAO Infrastructure Development",
    description:
      "Modular smart contract architecture that adapts to any organizational structure, scaling from small communities to global organizations.",
  },
  {
    id: "governance-mechanisms",
    title: "Revolutionary Governance Mechanisms",
    description:
      "Sophisticated governance including conviction voting, liquid democracy, quadratic voting, and futarchy-based prediction markets.",
  },
  {
    id: "treasury-management",
    title: "Cross-Chain Treasury Management",
    description:
      "Multi-chain treasury systems operating across Ethereum, Polygon, Arbitrum, Avalanche, Solana with automated yield generation.",
  },
  {
    id: "ai-decision-making",
    title: "AI-Enhanced Decision Making",
    description:
      "Artificial intelligence augments collective intelligence through proposal impact prediction and governance attack detection.",
  },
  {
    id: "security-framework",
    title: "Enterprise-Grade Security Framework",
    description:
      "Formal verification, multiple audits, continuous monitoring with multi-signature controls and emergency mechanisms.",
  },
  {
    id: "analytics-insights",
    title: "Comprehensive Analytics & Insights",
    description:
      "Real-time dashboards with deep insights into governance participation, treasury performance, and predictive analytics.",
  },
]

export function ScrollCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { margin: "-20%" })

  useEffect(() => {
    if (!isInView) return

    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))
      const newIndex = Math.floor(scrollProgress * capabilities.length)
      setActiveIndex(Math.min(newIndex, capabilities.length - 1))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isInView])

  return (
    <div ref={containerRef} className="py-20 px-6 lg:px-12" style={{ height: "150vh" }}>
      <div className="max-w-7xl mx-auto sticky top-20">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-orbitron">
            <span className="text-white">CORE PLATFORM</span>
            <br />
            <span className="gradient-text">CAPABILITIES</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-space-grotesk">
            Discover our comprehensive suite of DAO infrastructure solutions
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-6 order-2 lg:order-1">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.id}
                className={`glass-card p-6 transition-all duration-500 cursor-pointer ${
                  index === activeIndex
                    ? "border-green-400/50 bg-green-900/20 scale-105"
                    : "border-gray-700/30 hover:border-green-400/30"
                }`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: index === activeIndex ? 1.05 : 1.02 }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-3 h-3 rounded-full mt-2 transition-colors duration-300 ${
                      index === activeIndex ? "bg-green-400" : "bg-gray-600"
                    }`}
                  />
                  <div className="flex-1">
                    <h3
                      className={`text-lg md:text-xl font-bold mb-2 transition-colors duration-300 ${
                        index === activeIndex ? "text-green-400" : "text-gray-300"
                      } font-space-grotesk`}
                    >
                      {capability.title}
                    </h3>
                    <p
                      className={`text-sm md:text-base transition-opacity duration-300 ${
                        index === activeIndex ? "text-gray-300 opacity-100" : "text-gray-500 opacity-70"
                      } font-inter`}
                    >
                      {capability.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Static Glowing Logo Side */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Outer Circle */}
              <div className="absolute inset-0 rounded-full border-2 border-green-400/20" />

              {/* Inner Circle with Glow */}
              <div className="absolute inset-8 rounded-full border border-green-500/30 bg-green-500/5">
                {/* Static Glow Effect */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `
                      radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.3) 0%, transparent 70%)
                    `,
                    filter: "blur(20px)",
                  }}
                />
              </div>

              {/* Logo Container */}
              <div className="relative z-10 w-32 h-32 flex items-center justify-center">
                <Image
                  src="/goshendao-logo.png"
                  alt="GOSHENDAO Logo"
                  width={128}
                  height={128}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {capabilities.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-green-400 scale-125" : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
