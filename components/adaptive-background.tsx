"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { useTheme } from "@/contexts/theme-context"

export function AdaptiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle system
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    }> = []

    const colors =
      theme === "dark" ? ["#8b5cf6", "#06b6d4", "#3b82f6", "#6366f1"] : ["#7c3aed", "#0891b2", "#2563eb", "#4f46e5"]

    // Initialize particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.3 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.fill()

        // Connect nearby particles
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = particle.color
            ctx.globalAlpha = ((120 - distance) / 120) * 0.15
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      ctx.globalAlpha = 1
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme])

  const isDark = theme === "dark"

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Base gradient */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isDark
            ? "bg-gradient-to-br from-gray-950 via-slate-950 to-gray-900"
            : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
        }`}
      />

      {/* Animated flowing lines */}
      <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor={isDark ? "rgba(139, 92, 246, 0.6)" : "rgba(124, 58, 237, 0.4)"} />
            <stop offset="70%" stopColor={isDark ? "rgba(6, 182, 212, 0.7)" : "rgba(8, 145, 178, 0.5)"} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="flowGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="40%" stopColor={isDark ? "rgba(59, 130, 246, 0.5)" : "rgba(37, 99, 235, 0.3)"} />
            <stop offset="60%" stopColor={isDark ? "rgba(99, 102, 241, 0.6)" : "rgba(79, 70, 229, 0.4)"} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main flowing curves */}
        <motion.path
          d="M -100,20% Q 25%,10% 50%,25% T 120%,30%"
          stroke="url(#flowGradient1)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.path
          d="M -50,60% Q 30%,50% 60%,65% T 110%,60%"
          stroke="url(#flowGradient2)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </svg>

      {/* Animated particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />

      {/* Ambient lighting */}
      <div className="absolute inset-0">
        <motion.div
          className={`absolute top-1/4 right-1/4 w-96 h-96 rounded-full transition-opacity duration-500 ${
            isDark ? "opacity-10" : "opacity-5"
          }`}
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: isDark ? [0.1, 0.2, 0.1] : [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className={`absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full transition-opacity duration-500 ${
            isDark ? "opacity-8" : "opacity-4"
          }`}
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(6, 182, 212, 0.6) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(8, 145, 178, 0.4) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: isDark ? [0.08, 0.15, 0.08] : [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      {/* Subtle grid for depth */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${isDark ? "opacity-[0.03]" : "opacity-[0.02]"}`}
        style={{
          backgroundImage: isDark
            ? `linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
               linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)`
            : `linear-gradient(rgba(124, 58, 237, 0.3) 1px, transparent 1px),
               linear-gradient(90deg, rgba(124, 58, 237, 0.3) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />
    </div>
  )
}
