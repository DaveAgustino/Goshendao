"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Home, Search, RefreshCw } from "lucide-react"

export default function NotFound() {
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
          className="border-green-400/50 text-green-400 hover:bg-green-400/10 bg-black/80 backdrop-blur-xl font-space-grotesk"
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
        <Button className="bg-green-400 hover:bg-green-500 text-black font-semibold font-space-grotesk" asChild>
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
            <div className="relative w-24 h-24 mx-auto mb-6">
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
                  width={96}
                  height={96}
                  className="w-full h-full"
                  priority
                />
              </div>
            </div>

            <div className="bg-green-400 text-black font-bold text-xl px-4 py-2 rounded-lg inline-block font-orbitron">
              GOSHENDAO
            </div>
          </motion.div>

          {/* 404 Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-8xl md:text-9xl font-bold mb-6 font-orbitron">
              <span className="gradient-text text-glow-green">404</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white font-orbitron">PAGE NOT FOUND</h1>

            <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto font-space-grotesk">
              Looks like this page got lost in the decentralized void. Let's get you back to building the future.
            </p>
          </motion.div>

          {/* Error Animation */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative w-32 h-32 mx-auto">
              {/* Rotating Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-green-400/30"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              {/* Inner Ring */}
              <motion.div
                className="absolute inset-4 rounded-full border border-green-500/50"
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl">⚠️</div>
              </div>
            </div>
          </motion.div>

          {/* Action Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-400/30 transition-colors">
              <CardContent className="p-6 text-center">
                <Home className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2 font-space-grotesk">Go Home</h3>
                <p className="text-gray-400 text-sm mb-4 font-inter">Return to our homepage</p>
                <Button size="sm" className="bg-green-400 hover:bg-green-500 text-black font-space-grotesk" asChild>
                  <Link href="/">Home</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-400/30 transition-colors">
              <CardContent className="p-6 text-center">
                <Search className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2 font-space-grotesk">Explore</h3>
                <p className="text-gray-400 text-sm mb-4 font-inter">Browse our services</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-green-400/50 text-green-400 bg-transparent font-space-grotesk"
                  asChild
                >
                  <Link href="/services">Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-400/30 transition-colors">
              <CardContent className="p-6 text-center">
                <RefreshCw className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2 font-space-grotesk">Try Again</h3>
                <p className="text-gray-400 text-sm mb-4 font-inter">Refresh the page</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-green-400/50 text-green-400 bg-transparent font-space-grotesk"
                  onClick={() => window.location.reload()}
                >
                  Refresh
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { name: "About", href: "/about" },
              { name: "Technology", href: "/technology" },
              { name: "Industries", href: "/industries" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-green-400 transition-colors py-2 border border-gray-700 rounded-lg hover:border-green-400/30 font-space-grotesk"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>

          {/* Footer Message */}
          <motion.div
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p>
              Need help? Contact us at <span className="text-green-400">hello@goshendao.com</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
