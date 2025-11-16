"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, TrendingUp, Zap, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export function Cases() {
  const [activeIndex, setActiveIndex] = useState(0)

  const cases = [
    {
      client: "Clínica Odontológica",
      niche: "Saúde",
      metric: "Conversão",
      before: "1.2%",
      after: "4.8%",
      improvement: "+300%",
      color: "cyan",
      image: "/modern-dental-clinic-website.jpg",
    },
    {
      client: "Escritório de Advocacia",
      niche: "Jurídico",
      metric: "Leads/mês",
      before: "12",
      after: "47",
      improvement: "+292%",
      color: "lime",
      image: "/professional-law-firm-website.png",
    },
    {
      client: "E-commerce de Moda",
      niche: "Varejo",
      metric: "CPA",
      before: "R$ 87",
      after: "R$ 31",
      improvement: "-64%",
      color: "purple",
      image: "/fashion-ecommerce-website.png",
    },
    {
      client: "Academia Fitness",
      niche: "Fitness",
      metric: "Matrículas",
      before: "8/mês",
      after: "34/mês",
      improvement: "+325%",
      color: "cyan",
      image: "/modern-gym-fitness-website.jpg",
    },
    {
      client: "Restaurante Gourmet",
      niche: "Gastronomia",
      metric: "Reservas",
      before: "23/sem",
      after: "89/sem",
      improvement: "+287%",
      color: "lime",
      image: "/elegant-restaurant-website.png",
    },
    {
      client: "Imobiliária",
      niche: "Imóveis",
      metric: "Visitas",
      before: "34/mês",
      after: "127/mês",
      improvement: "+274%",
      color: "purple",
      image: "/real-estate-agency-website.jpg",
    },
  ]

  const colorClasses = {
    cyan: {
      border: "border-cyan-500/30",
      glow: "shadow-[0_0_50px_rgba(6,182,212,0.5)]",
      badge: "from-cyan-500 to-cyan-600",
      text: "text-cyan-400",
      bg: "from-cyan-500/20 to-cyan-600/20",
    },
    lime: {
      border: "border-lime-500/30",
      glow: "shadow-[0_0_50px_rgba(132,204,22,0.5)]",
      badge: "from-lime-500 to-lime-600",
      text: "text-lime-400",
      bg: "from-lime-500/20 to-lime-600/20",
    },
    purple: {
      border: "border-purple-500/30",
      glow: "shadow-[0_0_50px_rgba(139,92,246,0.5)]",
      badge: "from-purple-500 to-purple-600",
      text: "text-purple-400",
      bg: "from-purple-500/20 to-purple-600/20",
    },
  }

  const nextCase = () => {
    setActiveIndex((prev) => (prev + 1) % cases.length)
  }

  const prevCase = () => {
    setActiveIndex((prev) => (prev - 1 + cases.length) % cases.length)
  }

  const currentCase = cases[activeIndex]
  const colors = colorClasses[currentCase.color as keyof typeof colorClasses]

  return (
    <section id="cases" className="relative py-20 px-4 overflow-hidden bg-black">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.12),transparent_70%)]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
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
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <TrendingUp className="w-5 h-5 text-cyan-400" />
            </motion.div>
            <span className="text-base font-bold text-cyan-400">Resultados Comprovados</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Cases & <span className="text-lime-400">Resultados</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Resultados reais de clientes que confiaram em nosso trabalho
          </motion.p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100, rotateY: -20 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: 20 }}
              transition={{ duration: 0.5, type: "spring" }}
              className={`group relative overflow-hidden rounded-3xl bg-neutral-900/70 backdrop-blur-xl border-2 ${colors.border} ${colors.glow} transition-all duration-500`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10"
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.img
                  src={currentCase.image || "/placeholder.svg"}
                  alt={currentCase.client}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className={`absolute top-5 right-5 z-20 px-6 py-3 rounded-full bg-gradient-to-r ${colors.badge} text-white font-bold text-lg shadow-2xl`}
                  initial={{ opacity: 0, x: 30, rotate: -10 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Zap className="w-5 h-5" />
                    </motion.div>
                    {currentCase.improvement}
                  </div>
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{currentCase.client}</h3>
                    <div className="flex items-center gap-2">
                      <Sparkles className={`w-4 h-4 ${colors.text}`} />
                      <p className="text-base text-gray-300">{currentCase.niche}</p>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 45 }}
                    transition={{ duration: 0.3 }}
                    className={`p-2 rounded-full bg-gradient-to-br ${colors.bg}`}
                  >
                    <ArrowUpRight className={`w-6 h-6 ${colors.text}`} />
                  </motion.div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <motion.div
                    className="p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/50 backdrop-blur-sm"
                    whileHover={{ scale: 1.08, y: -6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-xs text-neutral-400 mb-1 font-medium">Antes</div>
                    <div className="text-xl font-bold text-white">{currentCase.before}</div>
                  </motion.div>
                  <motion.div
                    className="p-4 rounded-xl bg-lime-500/10 border border-lime-500/30 backdrop-blur-sm"
                    whileHover={{ scale: 1.08, y: -6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-xs text-neutral-400 mb-1 font-medium">Depois</div>
                    <div className="text-xl font-bold text-lime-400">{currentCase.after}</div>
                  </motion.div>
                  <motion.div
                    className={`p-4 rounded-xl bg-gradient-to-br ${colors.badge}`}
                    whileHover={{ scale: 1.08, y: -6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-xs text-white/70 mb-1 font-medium">Resultado</div>
                    <div className="text-xl font-bold text-white">{currentCase.improvement}</div>
                  </motion.div>
                </div>

                <motion.div
                  className="mt-6 pt-6 border-t border-neutral-800/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${colors.bg} border ${colors.border}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <TrendingUp className={`w-4 h-4 ${colors.text}`} />
                    <span className="text-sm font-semibold text-white">{currentCase.metric}</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4 md:-mx-20">
            <motion.button
              onClick={prevCase}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className="pointer-events-auto w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-lime-500 to-cyan-500 flex items-center justify-center text-white shadow-lg hover:shadow-lime-500/50 transition-shadow"
            >
              <ChevronLeft className="w-7 h-7" />
            </motion.button>

            <motion.button
              onClick={nextCase}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className="pointer-events-auto w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-lime-500 to-cyan-500 flex items-center justify-center text-white shadow-lg hover:shadow-lime-500/50 transition-shadow"
            >
              <ChevronRight className="w-7 h-7" />
            </motion.button>
          </div>

          <div className="flex items-center justify-center gap-3 mt-10">
            {cases.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                {index === activeIndex && (
                  <motion.div
                    layoutId="activeCaseIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-lime-500 to-cyan-500 rounded-full blur-sm"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div
                  className={`relative w-3 h-3 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-gradient-to-r from-lime-500 to-cyan-500 w-10"
                      : "bg-gray-700 hover:bg-lime-500/50"
                  }`}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
