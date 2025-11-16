"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Users } from "lucide-react"

export function TrustBar() {
  const items = [
    { icon: Shield, text: "Sem enrolação" },
    { icon: Zap, text: "Configuração guiada" },
    { icon: Users, text: "Suporte humano" },
  ]

  return (
    <section className="relative py-8 border-y border-border/50 bg-card/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
