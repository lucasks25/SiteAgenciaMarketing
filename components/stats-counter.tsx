"use client"

import { motion, useInView } from "framer-motion"
import { TrendingUp, Globe, Award, Zap, ArrowUpRight, Users, Clock, ShieldCheck } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function StatsCounter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicos" ref={ref} className="relative py-24 px-4 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.05]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6"
          >
            Resultados que <span className="text-lime-500">Impulsionam</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-lg max-w-2xl mx-auto"
          >
            Nossa metodologia é validada por números reais e crescimento consistente.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 auto-rows-[minmax(180px,auto)]">

          {/* Card 1: Total Projects (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="group relative md:col-span-2 bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6 md:p-8 overflow-hidden hover:bg-white/[0.05] transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              <Globe className="w-32 h-32 text-lime-500" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-lime-500/10 rounded-lg">
                  <Globe className="w-6 h-6 text-lime-500" />
                </div>
                <span className="text-white/60 font-medium uppercase tracking-wider text-sm">Alcance Global</span>
              </div>
              <div>
                <div className="text-6xl md:text-7xl font-bold text-white tracking-tighter mb-2">
                  <Counter value={147} isInView={isInView} />+
                </div>
                <p className="text-white/40 text-lg">Projetos entregues com excelência em diversos nichos.</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Conversion Rate (Tall) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative md:row-span-2 bg-lime-950/20 border border-lime-500/20 rounded-3xl p-6 md:p-8 overflow-hidden hover:bg-lime-900/20 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-lime-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-lime-500/20 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-lime-400" />
                </div>
                <span className="text-lime-400/80 font-medium uppercase tracking-wider text-sm">Conversão</span>
              </div>

              <div className="flex-1 flex items-center justify-center py-8">
                <div className="relative w-full h-40">
                  <GrowthGraph isInView={isInView} />
                </div>
              </div>

              <div>
                <div className="text-5xl font-bold text-white tracking-tighter mb-2 flex items-baseline gap-1">
                  <Counter value={94} isInView={isInView} />%
                </div>
                <p className="text-lime-200/40 text-sm">Aumento médio na taxa de conversão dos nossos clientes.</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Retention */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6 md:p-8 overflow-hidden hover:bg-white/[0.05] transition-colors duration-500"
          >
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-lime-500/20 blur-[60px] rounded-full group-hover:bg-lime-500/30 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/5 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <span className="text-white/60 font-medium uppercase tracking-wider text-sm">Retenção</span>
              </div>
              <div className="text-4xl font-bold text-white tracking-tighter mb-1 flex items-baseline gap-1">
                <Counter value={85} isInView={isInView} />%
              </div>
              <p className="text-white/40 text-sm">Média de retenção de usuários.</p>
            </div>
          </motion.div>

          {/* Card 4: NPS Score */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6 md:p-8 overflow-hidden hover:bg-white/[0.05] transition-colors duration-500"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/5 rounded-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-white/60 font-medium uppercase tracking-wider text-sm">Satisfação</span>
              </div>
              <div className="text-4xl font-bold text-white tracking-tighter mb-1 flex items-baseline gap-1">
                <Counter value={9.8} isInView={isInView} />/10
              </div>
              <p className="text-white/40 text-sm">NPS Score dos clientes.</p>
            </div>
          </motion.div>

          {/* Card 5: Guarantee (Wide) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group relative md:col-span-3 bg-gradient-to-r from-lime-950/30 to-black border border-lime-500/20 rounded-3xl p-6 md:p-8 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-lime-500/10 flex items-center justify-center border border-lime-500/20">
                <ShieldCheck className="w-8 h-8 text-lime-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Garantia de Performance</h3>
                <p className="text-white/40 max-w-md">Não entregamos apenas design. Entregamos resultados. Se não superarmos suas expectativas, devolvemos seu investimento.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-lime-500 text-black font-bold rounded-full hover:bg-lime-400 transition-colors cursor-pointer">
              Começar Agora <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function Counter({ value, isInView }: { value: number, isInView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Number(start.toFixed(value % 1 !== 0 ? 1 : 0)))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return <span>{count}</span>
}

function GrowthGraph({ isInView }: { isInView: boolean }) {
  return (
    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
      <defs>
        <linearGradient id="growthGradientBento" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>

      <motion.path
        d="M0,50 L0,40 C20,40 20,30 40,30 C60,30 60,10 80,10 C90,10 90,5 100,0 L100,50 Z"
        fill="url(#growthGradientBento)"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      />

      <motion.path
        d="M0,40 C20,40 20,30 40,30 C60,30 60,10 80,10 C90,10 90,5 100,0"
        fill="none"
        stroke="#10b981"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </svg>
  )
}

