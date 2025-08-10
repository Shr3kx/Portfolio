"use client"

import type React from "react"

import { useState, createContext, useContext } from "react"
import { motion } from "framer-motion"

interface FocusContextType {
  hoveredIndex: number | null
  setHoveredIndex: (index: number | null) => void
}

const FocusContext = createContext<FocusContextType | undefined>(undefined)

interface FocusCardsProps {
  children: React.ReactNode
  className?: string
}

export function FocusCards({ children, className = "" }: FocusCardsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <FocusContext.Provider value={{ hoveredIndex, setHoveredIndex }}>
      <div className={className}>{children}</div>
    </FocusContext.Provider>
  )
}

interface FocusCardProps {
  children: React.ReactNode
  index: number
  className?: string
}

export function FocusCard({ children, index, className = "" }: FocusCardProps) {
  const context = useContext(FocusContext)
  if (!context) {
    throw new Error("FocusCard must be used within FocusCards")
  }

  const { hoveredIndex, setHoveredIndex } = context

  return (
    <motion.div
      className={className}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      animate={{
        opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.3 : 1,
        scale: hoveredIndex !== null && hoveredIndex !== index ? 0.95 : 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}
