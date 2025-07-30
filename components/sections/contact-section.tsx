"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Calendar, MessageCircle } from "lucide-react"
import { FaTwitter, FaLinkedin, FaDiscord, FaTelegram } from "react-icons/fa"
import { ContactForm } from "@/components/ui/contact-form"
import Image from "next/image"

export function ContactSection() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-black relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/hero-bg-overlay.png"
          alt="Background Pattern"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-orbitron">
            <span className="text-green-400">LET'S CONNECT</span> <span className="text-white">AND</span>
            <br />
            <span className="text-white">IGNITE SUCCESS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl font-space-grotesk">
            Ready to take the next step? Contact us today to explore how our innovative strategies can propel your
            business forward. Our team is here to turn your vision into a reality.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Drop Us A Line */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-green-100 border-green-200 h-full">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 font-space-grotesk">DROP US A LINE</h3>
                <p className="text-gray-600 text-sm font-space-grotesk">Reach out and let's begin the dialogue</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Book A Call */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-green-100 border-green-200 h-full cursor-pointer hover:bg-green-200 transition-colors">
              <CardContent
                className="p-8 text-center"
                onClick={() => window.open("https://calendly.com/goshendao/consultation", "_blank")}
              >
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 font-space-grotesk">BOOK A CALL</h3>
                <p className="text-gray-600 text-sm font-space-grotesk">Schedule consultation in our Calendly</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Connect With Ease Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-800 border-gray-700 h-full">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4 font-orbitron">CONNECT WITH EASE</h3>
                <p className="text-gray-400 mb-6 font-space-grotesk">
                  Your inquiries, ideas, and collaboration opportunities are just a click away. Let's start the
                  conversation.
                </p>

                {/* Contact Form Component */}
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>

          {/* 3D Character Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-green-400 to-green-500 border-green-300 h-full">
              <CardContent className="p-8 flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-4 bg-green-300/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-24 h-24 text-green-800" />
                  </div>
                  <p className="text-green-900 font-medium font-space-grotesk">Ready to collaborate?</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-8 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { name: "Twitter", icon: <FaTwitter className="w-5 h-5" />, href: "#" },
            { name: "LinkedIn", icon: <FaLinkedin className="w-5 h-5" />, href: "#" },
            { name: "Discord", icon: <FaDiscord className="w-5 h-5" />, href: "#" },
            { name: "Telegram", icon: <FaTelegram className="w-5 h-5" />, href: "#" },
          ].map((social, index) => (
            <a
              key={social.name}
              href={social.href}
              className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors font-medium font-space-grotesk"
            >
              {social.icon}
              {social.name}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
