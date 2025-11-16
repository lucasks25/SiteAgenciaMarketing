"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface GlowCardProps {
  children: ReactNode
  highlight?: boolean
}

export function GlowCard({ children, highlight = false }: GlowCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`relative rounded-xl bg-card/50 backdrop-blur-sm border transition-all h-full ${
        highlight ? "border-primary shadow-lg shadow-primary/20" : "border-border hover:border-primary/50"
      }`}
    >
      {highlight && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 blur-xl -z-10" />
      )}
      {children}
    </motion.div>
  )
}
