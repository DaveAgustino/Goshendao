"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TechStackItem {
  name: string
  logo: string
  category: string
  description: string
}

interface TechStackGridProps {
  title: string
  items: TechStackItem[]
  className?: string
}

export function TechStackGrid({ title, items, className }: TechStackGridProps) {
  return (
    <div className={className}>
      <motion.h3
        className="text-2xl font-bold text-white mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>

      <div className="tech-grid">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="tech-item group cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 mx-auto mb-3 relative">
                  <Image
                    src={item.logo || "/placeholder.svg"}
                    alt={`${item.name} logo`}
                    fill
                    className="object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                  />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">{item.name}</h4>
                <p className="text-xs text-green-400 mb-2">{item.category}</p>
                <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
