"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { useState } from "react"
import { useTheme } from "@/contexts/theme-context"

export function ContactSection() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus("idle")

    try {
      const response = await fetch("https://formspree.io/f/xyzjraro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error("Form submission failed:", error)
      setStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const formFieldVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="contact"
      className={`py-20 px-4 transition-colors duration-300 ${isDark ? "bg-gray-900/20" : "bg-gray-50/50"}`}
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h2>
          <motion.p
            className={`text-lg max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Card
              className={`backdrop-blur-sm h-full transition-all duration-500 hover:shadow-2xl ${
                isDark
                  ? "bg-gray-900/50 border-purple-700/50 hover:border-purple-500/70 hover:shadow-purple-500/20"
                  : "bg-white/70 border-purple-300/50 hover:border-purple-400/70 hover:shadow-purple-400/20"
              }`}
            >
              <CardContent className="p-8">
                <motion.h3
                  className="text-xl font-semibold mb-6 text-blue-400"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Quick Message
                </motion.h3>

                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={formFieldVariants}>
                    <motion.label
                      className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      Name
                    </motion.label>
                    <motion.input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 ${
                        isDark
                          ? "bg-gray-800 border-gray-700 focus:border-purple-400 text-gray-200 placeholder-gray-400"
                          : "bg-white border-gray-300 focus:border-purple-500 text-gray-900 placeholder-gray-500"
                      }`}
                      placeholder="Your name"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>

                  <motion.div variants={formFieldVariants}>
                    <motion.label
                      className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      Email
                    </motion.label>
                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 ${
                        isDark
                          ? "bg-gray-800 border-gray-700 focus:border-purple-400 text-gray-200 placeholder-gray-400"
                          : "bg-white border-gray-300 focus:border-purple-500 text-gray-900 placeholder-gray-500"
                      }`}
                      placeholder="your.email@example.com"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>

                  <motion.div variants={formFieldVariants}>
                    <motion.label
                      className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      Message
                    </motion.label>
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 ${
                        isDark
                          ? "bg-gray-800 border-gray-700 focus:border-purple-400 text-gray-200 placeholder-gray-400"
                          : "bg-white border-gray-300 focus:border-purple-500 text-gray-900 placeholder-gray-500"
                      }`}
                      placeholder="Tell me about your project..."
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 disabled:opacity-50"
                    >
                      <motion.div
                        className="flex items-center justify-center"
                        animate={isLoading ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 1, repeat: isLoading ? Number.POSITIVE_INFINITY : 0 }}
                      >
                        <Send className="h-4 w-4 mr-2" />
                        {isLoading ? "Sending..." : "Send Message"}
                      </motion.div>
                    </Button>
                  </motion.div>
                </motion.form>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`mt-4 p-4 rounded-lg border ${
                      isDark ? "bg-green-900/50 border-green-700" : "bg-green-50 border-green-200"
                    }`}
                  >
                    <p className={`text-center ${isDark ? "text-green-300" : "text-green-700"}`}>
                      ✅ Message sent successfully! I'll get back to you soon.
                    </p>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`mt-4 p-4 rounded-lg border ${
                      isDark ? "bg-red-900/50 border-red-700" : "bg-red-50 border-red-200"
                    }`}
                  >
                    <p className={`text-center ${isDark ? "text-red-300" : "text-red-700"}`}>
                      ❌ Failed to send message. Please try again or email me directly.
                    </p>
                  </motion.div>
                )}

                <motion.div
                  className={`mt-6 p-4 rounded-lg ${isDark ? "bg-gray-800/50" : "bg-gray-100/50"}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <p className={`text-sm text-center ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    💡 Prefer email? Drop me a line at{" "}
                    <motion.a
                      href="mailto:skuvera@icloud.com"
                      className={`hover:underline ${isDark ? "text-purple-400" : "text-purple-600"}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      skuvera@icloud.com
                    </motion.a>
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={`text-center mt-16 pt-8 border-t ${isDark ? "border-gray-800" : "border-gray-200"}`}
        >
          <motion.p
            className={isDark ? "text-gray-400" : "text-gray-600"}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            © 2024 Shrey Kuvera. Built with Next.js, Tailwind CSS, and Framer Motion.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
