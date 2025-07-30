"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 lg:px-12 relative">
      {/* Back to Main Button - Top Left */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Button
          variant="outline"
          className="border-green-400/50 text-green-400 hover:bg-green-400/10 bg-black/80 backdrop-blur-xl"
          asChild
        >
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Main
          </Link>
        </Button>
      </motion.div>

      {/* Home Button - Top Right */}
      <motion.div
        className="fixed top-6 right-6 z-50"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Button className="bg-green-400 hover:bg-green-500 text-black font-semibold" asChild>
          <Link href="/" className="flex items-center gap-2">
            <Home className="w-4 h-4" />
            Home
          </Link>
        </Button>
      </motion.div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
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
              radial-gradient(circle at 40% 60%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Logo */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative w-32 h-32 mx-auto mb-8">
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `
                    radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.3) 0%, transparent 70%)
                  `,
                  filter: "blur(20px)",
                }}
              />

              {/* Logo */}
              <div className="relative z-10">
                <Image
                  src="/goshendao-logo.png"
                  alt="GOSHENDAO Logo"
                  width={128}
                  height={128}
                  className="w-full h-full"
                  priority
                />
              </div>
            </div>

            <div className="bg-green-400 text-black font-bold text-2xl px-6 py-3 rounded-lg inline-block font-orbitron">
              GOSHENDAO
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-orbitron">
              <span className="text-white">COMING</span>
              <br />
              <span className="gradient-text text-glow-green">SOON</span>
            </h1>

            <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto font-space-grotesk">
              We're building something extraordinary. The future of decentralized organizations is almost here.
            </p>

            <div className="text-green-400 text-lg font-semibold mb-12 font-space-grotesk">🚀 Launching Q2 2024</div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8">
              {[
                { value: "120", label: "Days" },
                { value: "15", label: "Hours" },
                { value: "30", label: "Minutes" },
                { value: "45", label: "Seconds" },
              ].map((time, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-green-400">{time.value}</div>
                    <div className="text-xs text-gray-400 uppercase">{time.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Notification Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12"
          >
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-xl max-w-md mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-4 font-space-grotesk">Get Early Access</h3>
                <p className="text-gray-400 text-sm mb-6 font-space-grotesk">
                  Be the first to experience the future of DAOs. Join our exclusive waitlist.
                </p>
                <div className="flex gap-3">
                  <Input
                    placeholder="Enter your email"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 flex-1 font-space-grotesk"
                  />
                  <Button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-6 font-space-grotesk">
                    Join Waitlist
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-3 font-space-grotesk">
                  🔒 We respect your privacy. No spam, ever.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { icon: "🏗️", title: "DAO Builder", desc: "Visual DAO creation tools" },
              { icon: "🗳️", title: "Smart Governance", desc: "Advanced voting mechanisms" },
              { icon: "💰", title: "Treasury Management", desc: "Multi-chain asset management" },
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-green-400/30 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-2 font-space-grotesk">{feature.title}</h4>
                  <p className="text-gray-400 text-sm font-inter">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-gray-400 text-sm mr-4 font-space-grotesk">Follow our journey:</p>
            {["Twitter", "LinkedIn", "Discord", "Telegram"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors text-sm font-space-grotesk"
              >
                {social}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
