"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { getWhatsAppLink } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"
import React from "react" 

// Definição dos tipos de cores baseados no seu design (Hero.tsx)
type ColorVariant = "lime" | "cyan" | "purple" | "default"; 

export interface CTAButtonProps {
  size?: "sm" | "md" | "lg"
  variant?: "default" | "outline"
  className?: string
  // Adicionando a prop para customizar a cor base
  primaryColor?: ColorVariant; 
  // Adicionando a prop children para o texto do botão
  children?: React.ReactNode 
}

// Mapeamento de Cores para Classes Tailwind
// Isto substitui o uso de classes genéricas como 'bg-cta'
const colorMap: Record<ColorVariant, { default: string; outline: string }> = {
    "default": {
        // Padrão: Lime (verde)
        default: "bg-lime-500 text-white hover:bg-lime-600 shadow-lime-500/50",
        outline: "border-2 border-lime-500 text-lime-400 hover:bg-lime-500 hover:text-white",
    },
    "lime": {
        default: "bg-lime-500 text-white hover:bg-lime-600 shadow-lime-500/50",
        outline: "border-2 border-lime-500 text-lime-400 hover:bg-lime-500 hover:text-white",
    },
    "cyan": {
        default: "bg-cyan-500 text-white hover:bg-cyan-600 shadow-cyan-500/50",
        outline: "border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white",
    },
    "purple": {
        default: "bg-purple-500 text-white hover:bg-purple-600 shadow-purple-500/50",
        outline: "border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white",
    },
};

export function CTAButton({ 
  size = "md", 
  variant = "default", 
  className,
  primaryColor = "lime", 
  // Children é o conteúdo. Se não for passado, usa o texto padrão
  children = "Falar no WhatsApp" 
}: CTAButtonProps) {
    
  const sizeClasses = {
    sm: "px- py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  // Seleciona o mapeamento de cores baseado na prop 'primaryColor'
  const selectedColor = colorMap[primaryColor] || colorMap["default"];

  const variantClasses = {
    // Classes de variante 'default' (sólida) com sombra
    default: `${selectedColor.default} shadow-lg`,
    // Classes de variante 'outline' (contorno)
    outline: selectedColor.outline,
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
      {/* Renderiza a prop children */}
      {children}
    </motion.a>
  )
}