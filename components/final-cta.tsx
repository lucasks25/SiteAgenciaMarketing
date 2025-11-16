"use client"

import { motion } from "framer-motion"
import { CTAButton } from "./cta-button"
import { Zap, Sparkles, CheckCircle2 } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="relative py-32 px-4 overflow-hidden bg-black">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-lime-950/30 via-cyan-950/20 to-purple-950/30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-lime-500/30 via-cyan-500/20 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 100, 0],
          y: [0, -80, 0],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
          x: [0, -100, 0],
          y: [0, 80, 0],
        }}
        transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY }}
      />

      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? "#84cc16" : i % 3 === 1 ? "#06b6d4" : "#a855f7",
          }}
          animate={{
            y: [0, -150, 0],
            opacity: [0, 1, 0],
            scale: [0, 2, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-lime-500/10 border-2 border-lime-500/30 mb-8 relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-500/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
            />
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Zap className="w-5 h-5 text-lime-400 relative z-10" />
            </motion.div>
            <span className="text-base font-bold text-lime-400 relative z-10">Vagas limitadas por mês</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Pronto para lançar seu site{" "}
            <span className="relative inline-block">
              <motion.span
                className="bg-gradient-to-r from-lime-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                hoje?
              </motion.span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-lime-400/20 via-cyan-400/20 to-purple-400/20 blur-xl -z-10"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-100 mb-12 max-w-2xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Fale com nossa equipe agora e tenha seu site profissional no ar em até 2 horas
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 30px rgba(132,204,22,0.4)",
                "0 0 50px rgba(132,204,22,0.7)",
                "0 0 30px rgba(132,204,22,0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <CTAButton size="lg" className="text-xl px-12 py-7 relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
              />
              <span className="relative z-10 flex items-center gap-3">
                <Sparkles className="w-6 h-6" />
                Começar Agora
                <Zap className="w-6 h-6" />
              </span>
            </CTAButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8"
          >
            {[
              { icon: CheckCircle2, text: "Sem surpresa no preço", color: "lime" },
              { icon: CheckCircle2, text: "Garantia de ajustes", color: "cyan" },
              { icon: CheckCircle2, text: "Suporte humanizado", color: "purple" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                >
                  <item.icon
                    className={`w-5 h-5 ${
                      item.color === "lime"
                        ? "text-lime-400"
                        : item.color === "cyan"
                          ? "text-cyan-400"
                          : "text-purple-400"
                    }`}
                  />
                </motion.div>
                <span className="text-base text-gray-200 font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
