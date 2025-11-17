"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { MessageSquare, Palette, FileText, Rocket } from "lucide-react"
import { useRef } from "react"

export function Steps2H() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const steps = [
    {
      icon: MessageSquare,
      title: "Briefing ultra-rápido",
      description: "Conversa rápida no WhatsApp ou formulário para entender sua necessidade",
      color: "lime",
    },
    {
      icon: Palette,
      title: "Template premium + personalização",
      description: "Escolhemos o melhor template e personalizamos cores, fontes e seções",
      color: "cyan",
    },
    {
      icon: FileText,
      title: "Conteúdo essencial",
      description: "Criamos headline, oferta e provas sociais que convertem",
      color: "purple",
    },
    {
      icon: Rocket,
      title: "Publicação guiada",
      description: "Configuramos DNS, hospedagem e deixamos tudo no ar",
      color: "lime",
    },
  ]

  return (
    <section id="como-funciona" className="relative py-32 px-4 bg-black" ref={containerRef}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white">
            Como entregamos em{" "}
            <span className="bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent">até 2 dias</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-pretty leading-relaxed">
            Processo otimizado para máxima velocidade sem comprometer qualidade
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-lime-500 via-cyan-500 to-purple-500 hidden md:block"
            style={{
              scaleY: useTransform(scrollYProgress, [0.2, 0.8], [0, 1]),
              transformOrigin: "top",
            }}
          />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} scrollProgress={scrollYProgress} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-lime-500/10 border border-lime-500/30"
            whileHover={{ scale: 1.05, borderColor: "rgba(132, 204, 22, 0.5)" }}
          >
            <span className="text-base text-lime-400 font-semibold">
              ⚡ Prazo de 2 dias válido para escopo essencial one-page
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function StepCard({
  step,
  index,
  scrollProgress,
}: {
  step: any
  index: number
  scrollProgress: any
}) {
  const colorClasses = {
    lime: {
      border: "border-lime-500/30",
      bg: "from-lime-500/10",
      text: "text-lime-400",
      glow: "shadow-[0_0_30px_rgba(132,204,22,0.3)]",
    },
    cyan: {
      border: "border-cyan-500/30",
      bg: "from-cyan-500/10",
      text: "text-cyan-400",
      glow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    },
    purple: {
      border: "border-purple-500/30",
      bg: "from-purple-500/10",
      text: "text-purple-400",
      glow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    },
  }

  const colors = colorClasses[step.color as keyof typeof colorClasses]

  const opacity = useTransform(scrollProgress, [index * 0.15, index * 0.15 + 0.2], [0, 1])
  const x = useTransform(scrollProgress, [index * 0.15, index * 0.15 + 0.2], [index % 2 === 0 ? -100 : 100, 0])
  const scale = useTransform(scrollProgress, [index * 0.15, index * 0.15 + 0.2], [0.8, 1])

  return (
    <motion.div
      style={{ opacity, x, scale }}
      className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
        <motion.div
          className={`p-8 rounded-2xl bg-gradient-to-br ${colors.bg} to-transparent backdrop-blur-sm border-2 ${colors.border} hover:${colors.glow} transition-all`}
          whileHover={{
            scale: 1.05,
            y: -10,
          }}
        >
          <motion.h3
            className={`text-2xl font-bold mb-3 flex items-center gap-3 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
          >
            <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.6 }}>
              <step.icon className={`w-7 h-7 ${colors.text}`} />
            </motion.div>
            <span className="text-white">{step.title}</span>
          </motion.h3>
          <p className="text-lg text-gray-300 leading-relaxed">{step.description}</p>
        </motion.div>
      </div>

      <motion.div
        className={`hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-lime-500 via-cyan-500 to-purple-500 text-white font-bold text-2xl border-4 border-black z-10 ${colors.glow}`}
        whileHover={{ scale: 1.2, rotate: 360 }}
        animate={{
          boxShadow: ["0 0 0 0 rgba(132, 204, 22, 0.4)", "0 0 0 20px rgba(132, 204, 22, 0)"],
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
          },
        }}
      >
        {index + 1}
      </motion.div>

      <div className="flex-1 hidden md:block" />
    </motion.div>
  )
}
