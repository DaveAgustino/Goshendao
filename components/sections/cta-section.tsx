"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BentoCard } from "@/components/ui/bento-card"

const locations = [
  { city: "San Francisco, CA", role: "Headquarters" },
  { city: "Austin, TX", role: "Development Center" },
  { city: "Berlin, DE", role: "European Operations" },
  { city: "Singapore", role: "Asia-Pacific Hub" },
]

export function CTASection() {
  return (
    <section className="py-32 px-6 lg:px-12 mesh-gradient-1">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form Card */}
          <BentoCard variant="light" className="h-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 uppercase">Connect With Ease</h3>
              <p className="text-gray-600 mb-8">
                Your inquiries, ideas, and collaboration opportunities are just a click away. Let's start the
                conversation.
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="John Anderson"
                  className="w-full p-4 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  placeholder="john.anderson@gmail.com"
                  className="w-full p-4 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <textarea
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full p-4 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                />
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg">
                  Send a Question
                </Button>
              </div>
            </motion.div>
          </BentoCard>

          {/* CTA Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">LET'S CONNECT AND</span>
                <br />
                <span className="gradient-text text-glow-green">IGNITE SUCCESS</span>
              </h2>
              <p className="text-gray-400 text-xl mb-8">
                Ready to take the next step? Contact us today to explore how our innovative strategies can propel your
                business forward. Our team is here to turn your vision into a reality.
              </p>
            </motion.div>

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <BentoCard variant="green" className="text-center p-6">
                <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">DROP US A LINE</h4>
                <p className="text-gray-300 text-sm">Reach out and let's begin the dialogue</p>
              </BentoCard>

              <BentoCard variant="gradient" className="text-center p-6">
                <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">BOOK A CALL</h4>
                <p className="text-gray-300 text-sm">Schedule consultation in our Calendly</p>
              </BentoCard>
            </div>

            {/* Global Locations */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {locations.map((location, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-lg font-semibold text-white mb-1">{location.city}</h4>
                  <p className="text-gray-400 text-sm">{location.role}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
