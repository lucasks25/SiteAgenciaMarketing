"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { Check, Star, Zap, Sparkles, Crown, ArrowRight, MessageCircle } from "lucide-react"
import { WHATSAPP, WHATSAPP_MSG } from "@/lib/constants"

export function Pricing() {
  const plans = [
    {
      name: "SpeedSite",
      subtitle: "Entrega em 2h",
      description: "Perfeito para quem precisa de presença digital rápida e profissional",
      popular: false,
      icon: Zap,
      color: "cyan",
      features: [
        "Landing page 1 página",
        "Hero + Benefícios + Prova Social",
        "Portfólio + FAQ + CTA",
        "CTA WhatsApp integrado",
        "SEO básico (meta tags)",
        "Pixel de conversão",
        "Publicação guiada",
        "1 rodada de ajustes",
      ],
    },
    {
      name: "Performance Pro",
      subtitle: "Sites completos",
      description: "Para negócios que querem dominar sua presença online",
      popular: true,
      icon: Crown,
      color: "lime",
      features: [
        "Tudo do SpeedSite",
        "Até 5 páginas",
        "Blog leve (estrutura)",
        "Integrações avançadas",
        "SEO técnico completo",
        "Schema markup",
        "1 mês de otimização CRO",
        "3 rodadas de ajustes",
      ],
    },
    {
      name: "Scale Pro",
      subtitle: "Crescimento acelerado",
      description: "Solução completa para escalar seu negócio no digital",
      popular: false,
      icon: Sparkles,
      color: "purple",
      features: [
        "Tudo do Performance Pro",
        "Animações avançadas",
        "Testes A/B configurados",
        "Google Sua Loja completo",
        "Campanha de tráfego inicial",
        "Automações + CRM",
        "3 meses de suporte",
        "Ajustes ilimitados",
      ],
    },
  ]

  return (
    <section id="planos" className="relative py-32 px-4 overflow-hidden section-black-purple">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.12),transparent_70%)]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_70%)] glow-section"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/30 mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Star className="w-5 h-5 text-purple-400 fill-purple-400" />
            </motion.div>
            <span className="text-base font-bold text-purple-400">Planos Exclusivos</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-8 text-balance leading-tight text-high-contrast"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Escolha o plano ideal para <span className="text-lime-400">acelerar seus resultados</span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Solicite uma proposta personalizada e descubra como podemos transformar seu negócio
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-xl"
          >
            <motion.div
              className="w-14 h-14 rounded-full bg-gradient-to-br from-lime-500 to-lime-600 flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Check className="w-7 h-7 text-white" />
            </motion.div>
            <div className="text-left">
              <div className="font-bold text-xl text-white">Garantia de 7 dias</div>
              <div className="text-base text-neutral-300">100% do seu dinheiro de volta se não ficar satisfeito</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function PricingCard({ plan, index }: { plan: any; index: number }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])

  const colorClasses = {
    cyan: {
      border: "border-cyan-500/30",
      glow: "shadow-[0_0_40px_rgba(6,182,212,0.4)]",
      icon: "from-cyan-500 to-cyan-600",
      badge: "from-cyan-500 to-cyan-600",
      button: "from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500",
    },
    lime: {
      border: "border-lime-500/30",
      glow: "shadow-[0_0_50px_rgba(132,204,22,0.5)]",
      icon: "from-lime-500 to-lime-600",
      badge: "from-lime-500 to-lime-600",
      button: "from-lime-500 to-lime-600 hover:from-lime-400 hover:to-lime-500",
    },
    purple: {
      border: "border-purple-500/30",
      glow: "shadow-[0_0_40px_rgba(139,92,246,0.4)]",
      icon: "from-purple-500 to-purple-600",
      badge: "from-purple-500 to-purple-600",
      button: "from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500",
    },
  }

  const colors = colorClasses[plan.color as keyof typeof colorClasses]

  const handleWhatsApp = () => {
    const message = `${WHATSAPP_MSG} Tenho interesse no plano ${plan.name}.`
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left - rect.width / 2)
        mouseY.set(e.clientY - rect.top - rect.height / 2)
      }}
      onMouseLeave={() => {
        mouseX.set(0)
        mouseY.set(0)
      }}
      whileHover={{
        y: -20,
        scale: 1.05,
        transition: { duration: 0.4 },
      }}
      className="relative"
    >
      {plan.popular && (
        <motion.div
          className="absolute -top-6 left-1/2 -translate-x-1/2 z-20"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          <div
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r ${colors.badge} text-black text-base font-bold shadow-2xl`}
          >
            <Star className="w-5 h-5 fill-current" />
            Mais escolhido
          </div>
        </motion.div>
      )}

      <motion.div
        className={`relative p-10 h-full rounded-3xl bg-neutral-900/70 backdrop-blur-xl border-2 ${colors.border} ${plan.popular ? colors.glow : ""} overflow-hidden group`}
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{
          boxShadow: plan.popular ? "0 0 60px rgba(132,204,22,0.6)" : "0 0 40px rgba(6,182,212,0.3)",
        }}
      >
        <div className="relative z-10 flex flex-col h-full" style={{ transform: "translateZ(50px)" }}>
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.3 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.icon} flex items-center justify-center shadow-xl`}
              >
                <plan.icon className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-3xl font-bold text-white">{plan.name}</h3>
                <p className="text-base text-neutral-300">{plan.subtitle}</p>
              </div>
            </div>
            <p className="text-base text-neutral-300 leading-relaxed">{plan.description}</p>
          </div>

          <ul className="space-y-4 mb-10 flex-grow">
            {plan.features.map((feature: string, i: number) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.08 }}
                whileHover={{ x: 10, scale: 1.05 }}
                className="flex items-start gap-3 group/item"
              >
                <motion.div
                  className={`w-6 h-6 rounded-full bg-gradient-to-br ${colors.icon} flex items-center justify-center flex-shrink-0 mt-0.5`}
                  whileHover={{ scale: 1.4, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Check className="w-4 h-4 text-white" />
                </motion.div>
                <span className="text-base leading-relaxed text-neutral-200 group-hover/item:text-white transition-colors">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>

          <motion.button
            onClick={handleWhatsApp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-5 rounded-2xl bg-gradient-to-r ${colors.button} text-black font-bold text-lg shadow-2xl flex items-center justify-center gap-3 group/btn transition-all`}
          >
            <MessageCircle className="w-6 h-6" />
            <span>Solicitar Proposta</span>
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}
