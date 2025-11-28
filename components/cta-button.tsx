"use client"

import { MessageCircle, LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import { getWhatsAppLink } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"
import React from "react"

// Cores possíveis do botão
type ColorVariant = "lime" | "cyan" | "purple" | "gray" | "default"

export interface CTAButtonProps {
  size?: "sm" | "md" | "lg"
  variant?: "default" | "outline"
  className?: string
  // Cor base do botão
  primaryColor?: ColorVariant
  // Texto / conteúdo interno do botão
  children?: React.ReactNode
  // Link de destino (opcional, default = WhatsApp)
  href?: string
  // Ícone (opcional, default = MessageCircle)
  icon?: LucideIcon | React.ReactNode
}

// Mapeamento de cores para classes Tailwind
const colorMap: Record<ColorVariant, { default: string; outline: string }> = {
  default: {
    // Padrão: Lime (verde)
    default: "bg-lime-500 text-white hover:bg-lime-600 shadow-lime-500/50",
    outline: "border-2 border-lime-500 text-lime-400 hover:bg-lime-500 hover:text-white",
  },
  lime: {
    default: "bg-lime-500 text-white hover:bg-lime-600 shadow-lime-500/50",
    outline: "border-2 border-lime-500 text-lime-400 hover:bg-lime-500 hover:text-white",
  },
  cyan: {
    default: "bg-cyan-500 text-white hover:bg-cyan-600 shadow-cyan-500/50",
    outline: "border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white",
  },
  purple: {
    default: "bg-purple-500 text-white hover:bg-purple-600 shadow-purple-500/50",
    outline: "border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white",
  },
  gray: {
    default: "bg-gray-800 text-white hover:bg-gray-700 shadow-gray-500/20",
    outline: "border-2 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white",
  },
}

export function CTAButton({
  size = "md",
  variant = "default",
  className,
  primaryColor = "lime",
  children = "Falar no WhatsApp",
  href,
  icon: Icon = MessageCircle,
}: CTAButtonProps) {
  const sizeClasses: Record<NonNullable<CTAButtonProps["size"]>, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const selectedColor = colorMap[primaryColor] || colorMap.default

  const variantClasses: Record<NonNullable<CTAButtonProps["variant"]>, string> = {
    default: `${selectedColor.default} shadow-lg`,
    outline: selectedColor.outline,
  }

  // Determine if Icon is a component or a node
  const renderIcon = () => {
    if (React.isValidElement(Icon)) {
      return Icon
    }
    if (typeof Icon === "function") {
      const IconComp = Icon as LucideIcon
      return <IconComp className="w-5 h-5" />
    }
    return null
  }

  return (
    <motion.a
      href={href || getWhatsAppLink()}
      target={href?.startsWith("#") ? undefined : "_blank"}
      rel={href?.startsWith("#") ? undefined : "noopener noreferrer"}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "inline-flex items-center gap-2 rounded-full font-semibold transition-all justify-center",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
    >
      {renderIcon()}
      {children}
    </motion.a>
  )
}
