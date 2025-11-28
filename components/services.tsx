"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Globe, TrendingUp, Megaphone, MapPin, Search, Zap, Sparkles, ArrowRight } from "lucide-react"
import { useRef } from "react"

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const services = [
    {
      icon: Globe,
      title: "Sites em até 7 dias",
      description: "Landing pages profissionais com design premium e performance 95+",
      features: ["Design responsivo", "SEO otimizado", "Performance 95+", "CTA integrado"],
      gradient: "from-cyan-500 to-cyan-600",
      glowColor: "rgba(6, 182, 212, 0.4)",
    },
    {
      icon: TrendingUp,
      title: "Otimização & Performance",
      description: "Estratégias de crescimento e tráfego pago para escalar seu negócio",
      features: ["Tráfego pago", "Criativos sob medida", "Otimização CRO", "Suporte contínuo"],
      gradient: "from-purple-500 to-purple-600",
      glowColor: "rgba(139, 92, 246, 0.4)",
    },
    {
      icon: Megaphone,
      title: "Comunicação Digital",
      description: "Posicionamento único e gestão completa de redes sociais",
      features: ["Gestão de redes", "Estratégia de conteúdo", "Influenciadores", "Campanhas criativas"],
      gradient: "from-pink-500 to-pink-600",
      glowColor: "rgba(236, 72, 153, 0.4)",
    },
    {
      icon: MapPin,
      title: "Google Meu Negócio",
      description: "Domine o SEO local e atraia mais clientes da sua região",
      features: ["Configuração completa", "SEO local", "Posts semanais", "Gestão de reviews"],
      gradient: "from-lime-500 to-lime-600",
      glowColor: "rgba(132, 204, 22, 0.4)",
    },
    {
      icon: Search,
      title: "SEO Técnico Avançado",
      description: "Otimização completa para ranquear no topo do Google",
      features: ["Core Web Vitals", "Schema markup", "Sitemaps XML", "Otimização técnica"],
      gradient: "from-violet-500 to-violet-600",
      glowColor: "rgba(139, 92, 246, 0.4)",
    },
    {
      icon: Zap,
      title: "Automações & Integrações",
      description: "Tecnologia customizada para automatizar e escalar processos",
      features: ["Automações inteligentes", "Integrações API", "Sistemas customizados", "Suporte técnico"],
      gradient: "from-cyan-500 to-blue-600",
      glowColor: "rgba(6, 182, 212, 0.4)",
    },
  ]

  return (
    <section
      ref={containerRef}
      id="servicos"
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden section-black-lime"
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(132,204,22,0.12),transparent_70%)]"
        style={{ opacity }}
        animate={{
          scale: [1, 1.2, 1],
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
          className="text-center mb-14 sm:mb-18 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-lime-500/10 border border-lime-500/30 mb-6 sm:mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400" />
            </motion.div>
            <span className="text-xs sm:text-sm md:text-base font-bold text-lime-400">
              Soluções Completas
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-balance leading-tight text-high-contrast"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Serviços que{" "}
            <span className="text-lime-400">transformam negócios</span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-2xl text-neutral-300 max-w-3xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Combinamos design, tecnologia e estratégia para dominar o digital
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              whileHover={{
                y: -15,
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <motion.div
                className="relative p-6 sm:p-7 md:p-8 h-full rounded-3xl bg-neutral-900/50 backdrop-blur-xl border-2 border-neutral-800 overflow-hidden"
                whileHover={{
                  borderColor: service.glowColor,
                  boxShadow: `0 0 40px ${service.glowColor}`,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10`}
                  transition={{ duration: 0.5 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 sm:mb-6 shadow-xl`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-300 mb-5 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-neutral-200"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white group-hover:gap-4 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
