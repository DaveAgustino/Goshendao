"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import { FaRocket } from "react-icons/fa"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-6 lg:px-12 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Mesh Gradient Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(0, 0, 0, 0.8) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
              linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(21, 128, 61, 0.1) 100%)
            `,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Category Tags */}
            <motion.div
              className="grid grid-cols-3 gap-6 text-xs text-gray-400 uppercase tracking-wider mb-8 font-space-grotesk"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <div className="text-gray-500 mb-1">CATEGORY:</div>
                <div className="text-white font-medium text-sm">DAO INFRASTRUCTURE</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">YEAR</div>
                <div className="text-white font-medium text-sm">2024</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">TECH SOLUTIONS</div>
                <div className="text-white font-medium text-sm">BLOCKCHAIN & WEB3</div>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-orbitron">
                GOSHENDAO
                <br />
                <span className="text-gray-400">Platform</span>
              </h1>

              <h2 className="text-xl md:text-2xl font-bold text-white leading-tight font-space-grotesk">
                BUILD. GOVERN.
                <br />
                SCALE. AUTONOMOUSLY.
              </h2>

              <h3 className="text-lg md:text-xl font-semibold text-gray-300 font-space-grotesk">
                The Next-Generation DAO
                <br />
                Infrastructure Platform
              </h3>

              <p className="text-gray-400 text-base leading-relaxed max-w-md font-inter">
                We build the infrastructure that powers decentralized organizations. Our platform integrates advanced
                governance mechanisms, cross-chain treasury management, AI-enhanced decision-making systems, and
                enterprise-grade security protocols.
              </p>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="space-y-3 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-xs text-gray-400 uppercase tracking-wider font-space-grotesk">
                HIGH-QUALITY
                <br />
                DEVELOPMENT
              </div>
              <div className="text-4xl font-bold text-white font-orbitron">+50</div>

              {/* Progress Bar */}
              <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-green-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-green-400 hover:bg-green-500 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 font-space-grotesk"
              >
                <FaRocket className="w-4 h-4 mr-2" />
                Free DAO Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-400/50 text-green-400 hover:bg-green-400/10 bg-transparent px-6 py-3 rounded-full transition-all duration-300 font-space-grotesk"
              >
                <FileText className="w-4 h-4 mr-2" />
                View Documentation
              </Button>
            </motion.div>
          </div>

          {/* Right Side - Logo */}
          <div className="flex items-center justify-center relative">
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {/* Subtle Static Glow Background */}
              <div
                className="absolute inset-0 rounded-full opacity-40"
                style={{
                  background: `
                    radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.3) 0%, transparent 70%)
                  `,
                  filter: "blur(40px)",
                }}
              />

              {/* Main Logo - Static */}
              <div className="relative z-10">
                <Image
                  src="/goshendao-logo.png"
                  alt="GOSHENDAO Logo"
                  width={200}
                  height={200}
                  className="w-48 h-48 md:w-56 md:h-56"
                  priority
                />
              </div>

              {/* GOSHENDAO Text - Moved Further Away and Bigger */}
              <motion.div
                className="absolute top-1/2 -right-16 transform -translate-y-1/2 font-orbitron"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <div className="text-white text-3xl md:text-4xl font-bold tracking-wider transform rotate-90 origin-center whitespace-nowrap">
                  GOSHENDAO
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
