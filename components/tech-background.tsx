"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export function TechBackground() {
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

    // Floating code fragments
    const codeFragments = [
      "const app = () => {",
      "useState(false)",
      "</div>",
      "async/await",
      "map((item) =>",
      "useEffect(() => {",
      "return (",
      "props.children",
      "className=",
      "import React",
      "export default",
      "onClick={handle}",
      "style={{",
      "transition:",
      "transform:",
      "opacity: 0.8",
      "z-index: 10",
      "position: absolute",
      "display: flex",
      "justify-content:",
    ]

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      fragment: string
      opacity: number
      size: number
      color: string
    }> = []

    const colors = ["#8b5cf6", "#06b6d4", "#3b82f6", "#6366f1"]

    // Initialize code fragment particles
    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        fragment: codeFragments[Math.floor(Math.random() * codeFragments.length)],
        opacity: Math.random() * 0.15 + 0.05,
        size: Math.random() * 8 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw code fragments
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around screen
        if (particle.x < -100) particle.x = canvas.width + 100
        if (particle.x > canvas.width + 100) particle.x = -100
        if (particle.y < -50) particle.y = canvas.height + 50
        if (particle.y > canvas.height + 50) particle.y = -50

        // Draw code fragment
        ctx.font = `${particle.size}px 'JetBrains Mono', 'Fira Code', monospace`
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.fillText(particle.fragment, particle.x, particle.y)
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
      {/* Deep base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900" />

      {/* PCB-style circuit board base */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundColor: "#0a0a0a",
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #1a1a2e 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, #16213e 0%, transparent 50%)
          `,
        }}
      />

      {/* Main circuit traces - horizontal */}
      <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuitGlow1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="rgba(139, 92, 246, 0.8)" />
            <stop offset="50%" stopColor="rgba(99, 102, 241, 1)" />
            <stop offset="80%" stopColor="rgba(6, 182, 212, 0.8)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="circuitGlow2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="rgba(6, 182, 212, 0.6)" />
            <stop offset="70%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="verticalGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="40%" stopColor="rgba(139, 92, 246, 0.6)" />
            <stop offset="60%" stopColor="rgba(6, 182, 212, 0.6)" />
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

        {/* Primary circuit traces */}
        <motion.path
          d="M 0,25% L 30%,25% L 35%,30% L 65%,30% L 70%,25% L 100%,25%"
          stroke="url(#circuitGlow1)"
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
          d="M 0,45% L 25%,45% L 30%,40% L 60%,40% L 65%,45% L 100%,45%"
          stroke="url(#circuitGlow2)"
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

        <motion.path
          d="M 0,65% L 40%,65% L 45%,70% L 75%,70% L 80%,65% L 100%,65%"
          stroke="url(#circuitGlow1)"
          strokeWidth="1"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Vertical connections */}
        <motion.line
          x1="30%"
          y1="25%"
          x2="30%"
          y2="45%"
          stroke="url(#verticalGlow)"
          strokeWidth="1.5"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <motion.line
          x1="70%"
          y1="25%"
          x2="70%"
          y2="65%"
          stroke="url(#verticalGlow)"
          strokeWidth="1"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        {/* Circuit nodes/junctions */}
        <circle cx="30%" cy="25%" r="3" fill="#8b5cf6" filter="url(#glow)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="70%" cy="25%" r="2.5" fill="#06b6d4" filter="url(#glow)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle cx="30%" cy="45%" r="2" fill="#3b82f6" filter="url(#glow)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="70%" cy="65%" r="2.5" fill="#6366f1" filter="url(#glow)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite" begin="2s" />
        </circle>
      </svg>

      {/* Secondary circuit layer */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="secondaryGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.4)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.4)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.4)" />
          </linearGradient>
        </defs>

        {/* Micro circuit patterns */}
        <motion.rect
          x="15%"
          y="35%"
          width="8"
          height="4"
          fill="none"
          stroke="url(#secondaryGlow)"
          strokeWidth="0.5"
          rx="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.rect
          x="75%"
          y="55%"
          width="6"
          height="6"
          fill="none"
          stroke="url(#secondaryGlow)"
          strokeWidth="0.5"
          rx="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Neural network style connections */}
        <motion.path
          d="M 10%,20% Q 20%,15% 30%,20% Q 40%,25% 50%,20%"
          stroke="rgba(6, 182, 212, 0.3)"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Floating code fragments canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />

      {/* Subtle ambient lighting */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.6) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08],
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
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* PCB-style corner elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <rect x="5" y="5" width="10" height="10" fill="none" stroke="#8b5cf6" strokeWidth="1" rx="2" />
          <rect x="20" y="5" width="6" height="6" fill="none" stroke="#06b6d4" strokeWidth="1" rx="1" />
          <line x1="15" y1="10" x2="20" y2="10" stroke="#6366f1" strokeWidth="1" />
          <circle cx="35" cy="10" r="3" fill="none" stroke="#3b82f6" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute bottom-10 right-10 opacity-20">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <rect x="35" y="35" width="8" height="8" fill="none" stroke="#06b6d4" strokeWidth="1" rx="1" />
          <rect x="45" y="45" width="6" height="6" fill="none" stroke="#8b5cf6" strokeWidth="1" rx="1" />
          <line x1="43" y1="39" x2="45" y2="45" stroke="#6366f1" strokeWidth="1" />
          <circle cx="25" cy="45" r="2" fill="none" stroke="#3b82f6" strokeWidth="1" />
        </svg>
      </div>
    </div>
  )
}
