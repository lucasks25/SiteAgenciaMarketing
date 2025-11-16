"use client"

import { motion, useMotionValue, useSpring, useInView } from "framer-motion"
import { TrendingUp, Users, Globe, Award, Clock, Zap, Target, CheckCircle } from "lucide-react"
import { useEffect, useRef } from "react"
import * as React from "react"

export function StatsCounter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    {
      icon: Globe,
      value: 247,
      suffix: "+",
      label: "Sites Entregues",
      color: "lime",
      gradient: "from-lime-500 to-lime-600",
    },
    {
      icon: Users,
      value: 189,
      suffix: "+",
      label: "Clientes Satisfeitos",
      color: "cyan",
      gradient: "from-cyan-500 to-cyan-600",
    },
    {
      icon: TrendingUp,
      value: 94,
      suffix: "%",
      label: "Taxa de Conversão",
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Award,
      value: 9.4,
      suffix: "",
      label: "NPS Médio",
      color: "pink",
      gradient: "from-pink-500 to-pink-600",
    },
    {
      icon: Clock,
      value: 1.47,
      suffix: "h",
      label: "Tempo Médio",
      color: "lime",
      gradient: "from-lime-500 to-cyan-500",
    },
    {
      icon: Zap,
      value: 95,
      suffix: "+",
      label: "Performance Score",
      color: "cyan",
      gradient: "from-cyan-500 to-purple-500",
    },
    {
      icon: Target,
      value: 287,
      suffix: "%",
      label: "Aumento Médio",
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: CheckCircle,
      value: 100,
      suffix: "%",
      label: "Garantia Satisfação",
      color: "lime",
      gradient: "from-lime-500 to-lime-600",
    },
  ]

  return (
    <section ref={ref} className="relative py-32 px-4 overflow-hidden bg-black">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.12),transparent_70%)]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-lime-500/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 100, 0],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -80, 0],
        }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <TrendingUp className="w-5 h-5 text-cyan-400" />
            </motion.div>
            <span className="text-base font-bold text-cyan-400">Números que Impressionam</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-8 text-balance leading-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Resultados que{" "}
            <span className="bg-gradient-to-r from-lime-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              falam por si
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Dados reais de clientes reais. Transparência total nos nossos resultados.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, index, isInView }: { stat: any; index: number; isInView: boolean }) {
  const count = useMotionValue(0)
  const rounded = useSpring(count, { stiffness: 50, damping: 30 })
  const [displayValue, setDisplayValue] = React.useState(0)

  useEffect(() => {
    if (isInView) {
      count.set(stat.value)
    }
  }, [isInView, stat.value, count])

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest)
    })
    return () => unsubscribe()
  }, [rounded])

  const colorClasses = {
    lime: "border-lime-500/30 shadow-[0_0_30px_rgba(132,204,22,0.3)]",
    cyan: "border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    purple: "border-purple-500/30 shadow-[0_0_30px_rgba(139,92,246,0.3)]",
    pink: "border-pink-500/30 shadow-[0_0_30px_rgba(236,72,153,0.3)]",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{
        y: -10,
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      className="group relative"
    >
      <motion.div
        className={`relative p-6 h-full rounded-2xl bg-neutral-900/50 backdrop-blur-xl border-2 ${
          colorClasses[stat.color as keyof typeof colorClasses]
        } overflow-hidden`}
        whileHover={{
          boxShadow: `0 0 40px rgba(132, 204, 22, 0.4)`,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10`}
          transition={{ duration: 0.5 }}
        />

        <div className="relative z-10 flex flex-col items-center text-center space-y-4">
          <motion.div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-xl`}
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <stat.icon className="w-7 h-7 text-white" />
          </motion.div>

          <motion.div
            className="text-4xl md:text-5xl font-bold text-white"
            animate={{
              textShadow: [
                "0 0 20px rgba(132, 204, 22, 0.3)",
                "0 0 30px rgba(132, 204, 22, 0.5)",
                "0 0 20px rgba(132, 204, 22, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <span>
              {stat.value % 1 === 0
                ? Math.round(displayValue)
                : displayValue.toFixed(stat.value.toString().split(".")[1]?.length || 0)}
            </span>
            {stat.suffix}
          </motion.div>

          <div className="text-sm font-semibold text-gray-300">{stat.label}</div>
        </div>
      </motion.div>
    </motion.div>
  )
}
