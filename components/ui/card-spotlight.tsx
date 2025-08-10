"use client"

import { useMotionValue, useMotionTemplate, motion } from "framer-motion"
import type { MouseEvent, ReactNode } from "react"
import { useTheme } from "@/contexts/theme-context"

interface CardSpotlightProps {
  children: ReactNode
  className?: string
  spotlightColor?: string
}

export function CardSpotlight({ children, className = "", spotlightColor }: CardSpotlightProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      350px circle at ${mouseX}px ${mouseY}px,
      ${spotlightColor || (isDark ? "rgba(139, 92, 246, 0.15)" : "rgba(124, 58, 237, 0.1)")},
      transparent 80%
    )
  `

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border transition-all duration-300 ${
        isDark
          ? "border-gray-800 bg-gray-900/50 hover:border-purple-500/50"
          : "border-gray-200 bg-white/70 hover:border-purple-400/50"
      } ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: spotlightBackground,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
