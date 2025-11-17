"use client"

import { motion } from "framer-motion"
import { MessageCircle, Palette, Rocket, Target, CheckCircle, Zap } from "lucide-react"

export function WorkProcess() {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Entrevista Inicial",
      description: "Conversa de 15 minutos no WhatsApp para entender seu negócio, público-alvo e objetivos",
      duration: "15 min",
      color: "lime",
      gradient: "from-lime-500 to-lime-600",
    },
    {
      number: "02",
      icon: Palette,
      title: "Descobrimos seus interesses",
      description: "Seleção do template ideal e personalização com sua identidade visual, cores e conteúdo",
      duration: "45 min",
      color: "cyan",
      gradient: "from-cyan-500 to-cyan-600",
    },
    {
      number: "03",
      icon: Target,
      title: "Começamos o Projeto",
      description: "Configuração de SEO, performance, pixels de conversão e integrações necessárias",
      duration: "30 min",
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Revisão Final",
      description: "Você revisa tudo, fazemos ajustes finais e garantimos que está perfeito",
      duration: "20 min",
      color: "pink",
      gradient: "from-pink-500 to-pink-600",
    },
    {
      number: "05",
      icon: Rocket,
      title: "Publicação",
      description: "Colocamos seu site no ar e te ensinamos tudo sobre gerenciamento e atualizações",
      duration: "10 min",
      color: "lime",
      gradient: "from-lime-500 to-cyan-500",
    },
  ]

  return (
    <section className="relative py-32 px-4 overflow-hidden section-black-purple">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.12),transparent_70%)] glow-section"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/30 mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Zap className="w-5 h-5 text-purple-400" />
            </motion.div>
            <span className="text-base font-bold text-purple-400">Processo Simplificado</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-8 text-balance leading-tight text-high-contrast"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Como funciona o{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-lime-400 bg-clip-text text-transparent">
              processo
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Um método eficiente e testado 
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-lime-500 via-cyan-500 to-purple-500 -translate-x-1/2 hidden md:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <ProcessStep key={index} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-6 px-10 py-6 rounded-2xl bg-gradient-to-r from-lime-500/10 via-cyan-500/10 to-purple-500/10 border-2 border-lime-500/30 backdrop-blur-xl"
          >
            <motion.div
              className="w-16 h-16 rounded-full bg-gradient-to-br from-lime-500 to-cyan-500 flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>
            <div className="text-left">
              <div className="font-bold text-2xl text-white mb-1">Total: 2 dias</div>
              <div className="text-base text-neutral-300">Do briefing até a publicação do seu site</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ProcessStep({ step, index }: { step: any; index: number }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className={`flex items-center gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <motion.div
        className="flex-1"
        whileHover={{ scale: 1.03, x: isEven ? 10 : -10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className={`relative p-8 rounded-3xl bg-neutral-900/70 backdrop-blur-xl border-2 border-${step.color}-500/30 overflow-hidden group`}
          whileHover={{
            boxShadow: `0 0 50px rgba(132, 204, 22, 0.3)`,
          }}
        >
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10`}
            transition={{ duration: 0.5 }}
          />

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-6">
              <motion.div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl`}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <step.icon className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                className={`px-4 py-2 rounded-full bg-gradient-to-r ${step.gradient} text-white text-sm font-bold`}
                whileHover={{ scale: 1.1 }}
              >
                {step.duration}
              </motion.div>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-white">{step.title}</h3>
              <p className="text-base md:text-lg text-neutral-300 leading-relaxed">{step.description}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hidden md:flex w-20 h-20 rounded-full bg-gradient-to-br from-neutral-900 to-neutral-800 border-4 border-lime-500/30 items-center justify-center flex-shrink-0 relative z-10"
        whileHover={{ scale: 1.3, rotate: 360 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-lime-500/20 to-cyan-500/20 blur-lg"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
        <span className="relative text-2xl font-bold text-white">{step.number}</span>
      </motion.div>

      <div className="flex-1 hidden md:block" />
    </motion.div>
  )
}
