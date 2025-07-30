"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface SocialProofBadgeProps {
  avatars?: string[]
  text: string
  className?: string
}

export function SocialProofBadge({
  avatars = [
    "/placeholder.svg?height=32&width=32",
    "/placeholder.svg?height=32&width=32",
    "/placeholder.svg?height=32&width=32",
  ],
  text,
  className,
}: SocialProofBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
      className={className}
    >
      <Badge
        variant="outline"
        className="bg-gray-800 border-gray-700 px-4 py-2 text-gray-300 hover:bg-gray-700 transition-colors"
      >
        <div className="flex items-center space-x-2">
          <div className="flex -space-x-2">
            {avatars.map((avatar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <Image
                  src={avatar || "/placeholder.svg"}
                  alt="Testimonial avatar"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-gray-700"
                />
              </motion.div>
            ))}
          </div>
          <span className="text-sm">{text}</span>
          <motion.svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </motion.svg>
        </div>
      </Badge>
    </motion.div>
  )
}
