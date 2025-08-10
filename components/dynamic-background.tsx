"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

    const colors = ["#ff6b35", "#f7931e", "#ffb347", "#ff8c42"]

    // Initialize particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
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

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = particle.color
            ctx.globalAlpha = ((150 - distance) / 150) * 0.2
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
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-950 to-gray-900" />

      {/* Dynamic flowing lines */}
      <svg className="absolute inset-0 w-full h-full opacity-80" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="rgba(255, 107, 53, 0.8)" />
            <stop offset="70%" stopColor="rgba(247, 147, 30, 0.9)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="flowGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="40%" stopColor="rgba(255, 140, 66, 0.7)" />
            <stop offset="60%" stopColor="rgba(255, 179, 71, 0.8)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <filter id="orangeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
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
          strokeWidth="3"
          fill="none"
          filter="url(#orangeGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.path
          d="M -50,40% Q 30%,35% 60%,50% T 110%,45%"
          stroke="url(#flowGradient2)"
          strokeWidth="2"
          fill="none"
          filter="url(#orangeGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.path
          d="M -80,70% Q 20%,60% 45%,75% T 130%,80%"
          stroke="url(#flowGradient1)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#orangeGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Vertical flowing lines */}
        <motion.path
          d="M 25%,-50 Q 30%,25% 25%,50% T 20%,150%"
          stroke="url(#flowGradient2)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#orangeGlow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <motion.path
          d="M 75%,-30 Q 70%,30% 75%,60% T 80%,130%"
          stroke="url(#flowGradient1)"
          strokeWidth="2"
          fill="none"
          filter="url(#orangeGlow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </svg>

      {/* Glowing geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/6 w-32 h-32 opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 90,35 90,65 50,90 10,65 10,35"
              fill="none"
              stroke="#ff6b35"
              strokeWidth="2"
              filter="url(#orangeGlow)"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-1/5 w-24 h-24 opacity-25"
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect
              x="20"
              y="20"
              width="60"
              height="60"
              fill="none"
              stroke="#f7931e"
              strokeWidth="2"
              rx="10"
              filter="url(#orangeGlow)"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-2/3 left-1/3 w-20 h-20 opacity-30"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="30" fill="none" stroke="#ffb347" strokeWidth="2" filter="url(#orangeGlow)" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="#ff8c42" strokeWidth="1" filter="url(#orangeGlow)" />
          </svg>
        </motion.div>
      </div>

      {/* Digital grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 107, 53, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 107, 53, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-60" />

      {/* Ambient orange lighting */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/5 right-1/4 w-96 h-96 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(255, 107, 53, 0.6) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/5 left-1/4 w-80 h-80 rounded-full opacity-12"
          style={{
            background: "radial-gradient(circle, rgba(247, 147, 30, 0.6) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(255, 140, 66, 0.6) 0%, transparent 70%)",
            filter: "blur(90px)",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Floating energy orbs */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full opacity-40"
            style={{
              background: `radial-gradient(circle, ${
                ["#ff6b35", "#f7931e", "#ffb347", "#ff8c42"][i % 4]
              } 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Corner tech elements */}
      <div className="absolute top-8 left-8 opacity-30">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <path
            d="M 10,10 L 30,10 L 30,30 M 50,10 L 70,10 L 70,30 M 10,50 L 10,70 L 30,70 M 50,70 L 70,70 L 70,50"
            stroke="#ff6b35"
            strokeWidth="2"
            fill="none"
            filter="url(#orangeGlow)"
          />
          <circle cx="40" cy="40" r="8" fill="none" stroke="#f7931e" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="absolute bottom-8 right-8 opacity-30">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <path
            d="M 10,10 L 30,10 L 30,30 M 50,10 L 70,10 L 70,30 M 10,50 L 10,70 L 30,70 M 50,70 L 70,70 L 70,50"
            stroke="#ffb347"
            strokeWidth="2"
            fill="none"
            filter="url(#orangeGlow)"
          />
          <rect x="32" y="32" width="16" height="16" fill="none" stroke="#ff8c42" strokeWidth="1.5" rx="2" />
        </svg>
      </div>
    </div>
  )
}
