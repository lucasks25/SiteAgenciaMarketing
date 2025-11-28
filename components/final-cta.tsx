"use client"

import { motion } from "framer-motion"
import { CTAButton } from "./cta-button"
import { Zap, Sparkles, CheckCircle2 } from "lucide-react"
import React, { useState, useEffect } from "react"

// Define a interface para armazenar as posições dos círculos
interface ParticlePosition {
  left: string
  top: string
  background: string
}

// Número de partículas para gerar
const NUM_PARTICLES = 20

// Função para gerar uma única partícula
const generateParticle = (i: number): ParticlePosition => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  background: i % 3 === 0 ? "#84cc16" : i % 3 === 1 ? "#06b6d4" : "#a855f7",
})

export function FinalCTA() {
  // 1. Crie um estado para armazenar as posições geradas.
  const [particlePositions, setParticlePositions] = useState<ParticlePosition[]>([])

  // 2. Use useEffect para gerar as posições APENAS no cliente
  // (Resolve o erro de hidratação causado pelo Math.random())
  useEffect(() => {
    // Gera as posições uma única vez
    const initialPositions = Array.from({ length: NUM_PARTICLES }).map((_, i) =>
      generateParticle(i)
    )
    setParticlePositions(initialPositions)
  }, []) // Array de dependência vazio garante que ele rode apenas uma vez

  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 overflow-hidden bg-black">
      {/* Gradiente de fundo principal animado */}
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

      {/* Blobs de fundo animados (blur) */}
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

      {/* Partículas (Pontos) Animadas - Usando o estado corrigido */}
      {particlePositions.map((item, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: item.left, // Posição fixa para evitar Hydration Error
            top: item.top,   // Posição fixa para evitar Hydration Error
            background: item.background,
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Tag de Vagas Limitadas */}
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

          {/* Título Principal */}
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

          {/* Parágrafo de Chamada */}
          <motion.p
            className="text-xl md:text-2xl text-gray-100 mb-12 max-w-2xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Fale com nossa equipe agora e tenha seu site profissional no ar em até 7 dias
          </motion.p>

          {/* Container do Botão CTA */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // Removida a animação de box-shadow que causava o "brilho transparente"
            // e sua transição associada.
            style={{ opacity: 1 }}
          >
            <CTAButton size="lg" className="text-lg md:text-xl px-8 py-5 md:px-12 md:py-7 relative overflow-hidden group">
              {/* O shimmer interno do CTAButton foi removido na última correção */}
              <span className="relative z-10 flex items-center gap-3">
                <Sparkles className="w-6 h-6" />
                Começar Agora
                <Zap className="w-6 h-6" />
              </span>
            </CTAButton>
          </motion.div>

          {/* Itens de Confiança */}
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
                  transition={{
                    type: "tween", // Adicionado para suportar 3 keyframes e evitar Runtime Error
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.3
                  }}
                >
                  <item.icon
                    className={`w-5 h-5 ${item.color === "lime"
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