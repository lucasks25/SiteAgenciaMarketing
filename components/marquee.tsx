"use client"

import { motion } from "framer-motion"

export function Marquee() {
  const items = [
    "CTAs contrastantes (efeito destaque)",
    "Prova social (viés de adesão)",
    "Escassez honesta",
    "Garantia explícita (redução de risco)",
    "Números específicos (credibilidade)",
    "Layout de baixa carga cognitiva (Lei de Hick)",
  ]

  const allItems = [...items, ...items, ...items]

  return (
    <section className="relative py-16 overflow-hidden border-y border-lime-500/20 bg-gradient-to-r from-black via-lime-950/10 to-black">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-500/5 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="flex relative z-10">
        <motion.div
          animate={{
            x: [0, "-33.333%"],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
          className="flex gap-6 pr-6 whitespace-nowrap"
        >
          {allItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-lime-500/10 border border-lime-500/30 backdrop-blur-sm"
            >
              <motion.span
                className="text-base font-medium text-lime-400"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.2,
                }}
              >
                •
              </motion.span>
              <span className="text-base font-medium text-white">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
