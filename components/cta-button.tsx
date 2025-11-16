"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { getWhatsAppLink } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"

interface CTAButtonProps {
  size?: "sm" | "md" | "lg"
  variant?: "default" | "outline"
  className?: string
}

export function CTAButton({ size = "md", variant = "default", className }: CTAButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const variantClasses = {
    default: "bg-cta text-cta-foreground hover:bg-cta/90 shadow-lg shadow-cta/50",
    outline: "border-2 border-cta text-cta hover:bg-cta hover:text-cta-foreground",
  }

  return (
    <motion.a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg font-semibold transition-all",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
    >
      <MessageCircle className="w-5 h-5" />
      Falar no WhatsApp
    </motion.a>
  )
}
