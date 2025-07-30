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

      <div className="max-w-7xl mx-auto relative z-80 py-10 scroll-smooth">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Category Tags */}
            <motion.div
              className="grid grid-cols-3 gap-6  text-xs text-gray-400 uppercase tracking-wider mb-5 font-space-grotesk"
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
                <div className="text-white font-medium text-sm">2025</div>
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#7affad] leading-tight font-orbitron">
          GOSHEN DIGITAL GROUP
                <br />
          
              </h1>

              <h2 className="text-md md:text-4xl font-bold text-white/80 leading-tight font-space-grotesk">
                BUILD. GOVERN. SCALE. AUTONOMOUSLY.
              </h2>

              <h3 className="text-sm md:text-xl font-semibold text-gray-300 font-space-grotesk">
                The Next-Generation DAO Infrastructure Platform
              </h3>

              <p className="text-gray-400 text-base leading-relaxed max-w-xl font-inter">
                We build the infrastructure that powers decentralized organizations. Our platform integrates advanced
                governance mechanisms, cross-chain treasury management, AI-enhanced decision-making systems, and
                enterprise-grade security protocols.
              </p>
            </motion.div>

    

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 pt-5"
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
    className="relative w-[800px] h-[800px] flex items-center justify-center"
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
    <div className="relative z-10 w-[500px] h-[500px]">
      <Image
        src="/goshendao-logo.png"
        alt="GOSHENDAO Logo"
        width={500}
        height={500}
        className="w-[500px] h-[500px]"
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
      <div className="text-white text-9xl md:text-9xl font-bold tracking-wider transform -mb-96 rotate-90 origin-right whitespace-nowrap">
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
