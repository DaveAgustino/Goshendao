"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const navigationLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "How We Work", href: "/technology" },
  { name: "Testimonials", href: "/case-studies" },
  { name: "FAQ", href: "#" },
  { name: "Contact Us", href: "/contact" },
]

const socialLinks = [
  { name: "Facebook", icon: <FaFacebook className="w-5 h-5" />, href: "#" },
  { name: "Instagram", icon: <FaInstagram className="w-5 h-5" />, href: "#" },
  { name: "Twitter", icon: <FaTwitter className="w-5 h-5" />, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-8">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="bg-green-400 text-black font-bold text-xl px-4 py-3 rounded-lg font-orbitron">
              GOSHENDAO
            </div>
          </motion.div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-8">
            {navigationLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={link.href}
                  className="text-white hover:text-green-400 transition-colors text-sm font-medium font-space-grotesk"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-black hover:bg-green-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 border-t border-gray-800 gap-4">
          <motion.p
            className="text-gray-400 text-sm font-inter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            © GOSHENDAO 2024. All Rights Reserved
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-inter">
              Licensing
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}
