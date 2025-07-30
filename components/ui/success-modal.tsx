"use client"

import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, X } from "lucide-react"
import { useEffect } from "react"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  message?: string
  autoCloseDelay?: number
}

export function SuccessModal({
  isOpen,
  onClose,
  title = "Email Sent Successfully!",
  message = "Your message has been sent to the GoshenDao Team. We'll get back to you soon!",
  autoCloseDelay = 3000,
}: SuccessModalProps) {
  useEffect(() => {
    if (isOpen && autoCloseDelay > 0) {
      const timer = setTimeout(() => {
        onClose()
      }, autoCloseDelay)

      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose, autoCloseDelay])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-[10000] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 border border-green-400/30 rounded-2xl p-8 max-w-md w-full mx-4 relative overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/5" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Success Icon with Animation */}
                <motion.div
                  className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
                >
                  <CheckCircle className="w-8 h-8 text-black" />
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-2xl font-bold text-white mb-4 font-orbitron"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {title}
                </motion.h3>

                {/* Message */}
                <motion.p
                  className="text-gray-300 mb-6 font-space-grotesk"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {message}
                </motion.p>

                {/* Progress Bar */}
                <motion.div
                  className="w-full h-1 bg-gray-700 rounded-full overflow-hidden mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div
                    className="h-full bg-green-400 rounded-full"
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ duration: autoCloseDelay / 1000, ease: "linear" }}
                  />
                </motion.div>

                {/* Auto-close text */}
                <motion.p
                  className="text-gray-500 text-sm font-inter"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  This message will close automatically in {autoCloseDelay / 1000} seconds
                </motion.p>

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
                        y: [0, -50, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.3,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
