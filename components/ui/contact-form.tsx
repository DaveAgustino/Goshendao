"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Loader2 } from "lucide-react"
import { SuccessModal } from "./success-modal"
import emailjs from "@emailjs/browser"

// EmailJS Configuration - Replace with your actual values
const EMAILJS_CONFIG = {
  SERVICE_ID: "service_mmpwfwp", // Replace with your EmailJS service ID
  TEMPLATE_ID: "template_b3joqb8", // Replace with your EmailJS template ID
  PUBLIC_KEY: "i458ZUOJ7_HPx7TvG", // Replace with your EmailJS public key
  TO_EMAIL: "debbcodinglab@gmail.com    ", // Your email address where messages will be sent
}

interface FormData {
  name: string
  email: string
  message: string
}

interface ContactFormProps {
  className?: string
}

export function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  // Initialize EmailJS
  useState(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
  })

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        reply_to: formData.email,
      }

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY,
      )

      // Reset form
      setFormData({ name: "", email: "", message: "" })

      // Show success modal
      setShowSuccessModal(true)
    } catch (error) {
      console.error("Failed to send email:", error)
      // You could add an error modal here too
      alert("Failed to send message. Please try again or contact us directly.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
        <div>
          <label className="text-white text-sm mb-2 block font-space-grotesk">Name *</label>
          <Input
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="John Anderson"
            className={`bg-gray-700 border-gray-600 text-white placeholder-gray-400 ${
              errors.name ? "border-red-500" : ""
            }`}
            disabled={isLoading}
          />
          {errors.name && (
            <motion.p
              className="text-red-400 text-xs mt-1 font-inter"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.name}
            </motion.p>
          )}
        </div>

        <div>
          <label className="text-white text-sm mb-2 block font-space-grotesk">Email Address *</label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="john.anderson@gmail.com"
            className={`bg-gray-700 border-gray-600 text-white placeholder-gray-400 ${
              errors.email ? "border-red-500" : ""
            }`}
            disabled={isLoading}
          />
          {errors.email && (
            <motion.p
              className="text-red-400 text-xs mt-1 font-inter"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.email}
            </motion.p>
          )}
        </div>

        <div>
          <label className="text-white text-sm mb-2 block font-space-grotesk">Message *</label>
          <Textarea
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            placeholder="How can we help you?"
            rows={3}
            className={`bg-gray-700 border-gray-600 text-white placeholder-gray-400 resize-none ${
              errors.message ? "border-red-500" : ""
            }`}
            disabled={isLoading}
          />
          {errors.message && (
            <motion.p
              className="text-red-400 text-xs mt-1 font-inter"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.message}
            </motion.p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold font-space-grotesk disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send a Question
            </>
          )}
        </Button>
      </form>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Email Sent to GoshenDao Team!"
        message="Thank you for reaching out! We've received your message and will get back to you within 24 hours."
      />
    </>
  )
}
