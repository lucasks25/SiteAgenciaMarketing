"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { getWhatsAppLink } from "@/lib/whatsapp"
import { useState } from "react"

export function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg bg-card border border-border whitespace-nowrap shadow-lg"
        >
          <span className="text-sm font-medium">Falar agora</span>
        </motion.div>
      )}
      <motion.a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-success text-success-foreground shadow-lg shadow-success/50 hover:shadow-xl hover:shadow-success/60 transition-all"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </motion.div>
  )
}
