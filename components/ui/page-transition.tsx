"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

interface PageTransitionProps {
  isLoading: boolean
  loadingText?: string
}

export function PageTransition({ isLoading, loadingText = "Loading..." }: PageTransitionProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isLoading) {
      setProgress(0)
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + Math.random() * 15
        })
      }, 100)

      return () => clearInterval(interval)
    }
  }, [isLoading])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
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

          <div className="relative z-10 text-center">
            {/* Logo with Animation */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative w-24 h-24 mx-auto mb-6">
                {/* Rotating Rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-green-400/30"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-2 rounded-full border border-green-500/50"
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                {/* Pulsing Glow */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `
                      radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.3) 0%, transparent 70%)
                    `,
                    filter: "blur(20px)",
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                {/* Logo */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
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

              {/* Brand Name */}
              <motion.div
                className="bg-green-400 text-black font-bold text-xl px-4 py-2 rounded-lg inline-block font-orbitron"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                GOSHENDAO
              </motion.div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-2 font-space-grotesk">{loadingText}</h2>
              <div className="flex items-center justify-center space-x-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              className="w-64 mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="flex justify-between text-sm text-gray-400 mb-2 font-space-grotesk">
                <span>Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-green-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
