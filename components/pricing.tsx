"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { Check, Star, Zap, Sparkles, Crown, ArrowRight, MessageCircle } from "lucide-react"
import { WHATSAPP, WHATSAPP_MSG } from "@/lib/constants"
import { MouseEvent } from "react"

export function Pricing() {
  const plans = [
    {
      name: "SpeedSite",
      subtitle: "Entrega em 7 dias",
      description: "Perfeito para quem precisa de presença digital rápida e profissional",
      popular: false,
      icon: Zap,
      color: "cyan",
      features: [
        "Landing page 1 página",
        "Hero + Benefícios + Prova Social",
        "Portfólio + FAQ + CTA",
        "CTA WhatsApp integrado",
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
        "2 rodadas de ajustes",
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
        "3 meses de suporte",
        "Ajustes ilimitados",
      ],
    },
  ]

  return (
    <section
      id="planos"
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden bg-black selection:bg-lime-500/30"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-900/20 via-black to-black pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 group hover:border-lime-500/30 transition-colors"
          >
            <Star className="w-4 h-4 text-lime-400 fill-lime-400 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-sm font-semibold text-gray-200 tracking-wide uppercase">
              Planos Exclusivos
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Escolha o plano ideal para <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400">
              acelerar seus resultados
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Solicite uma proposta personalizada e descubra como podemos transformar seu negócio
          </motion.p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        {/* GARANTIA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-6 px-8 py-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-lime-500/10 flex items-center justify-center border border-lime-500/20 shadow-[0_0_20px_rgba(132,204,22,0.2)]">
              <Check className="w-8 h-8 text-lime-400" />
            </div>
            <div className="text-left">
              <div className="font-bold text-xl text-white mb-1">
                Garantia de 7 dias
              </div>
              <div className="text-gray-400">
                100% do seu dinheiro de volta se não ficar satisfeito
              </div>
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

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const handleWhatsApp = () => {
    const message = `${WHATSAPP_MSG} Tenho interesse no plano ${plan.name}.`
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank")
  }

  // Color configurations
  const colors = {
    cyan: {
      spotlight: "rgba(6, 182, 212, 0.15)",
      borderHover: "hover:border-cyan-500/30",
      iconBg: "group-hover:bg-cyan-500/10",
      iconText: "group-hover:text-cyan-400",
      buttonHover: "hover:border-cyan-500/30 hover:text-cyan-400",
      check: "group-hover/item:text-cyan-400 group-hover/item:bg-cyan-500/10",
    },
    lime: {
      spotlight: "rgba(132, 204, 22, 0.15)",
      borderHover: "hover:border-lime-500/30",
      iconBg: "group-hover:bg-lime-500/10",
      iconText: "group-hover:text-lime-400",
      buttonHover: "hover:border-lime-500/30 hover:text-lime-400",
      check: "group-hover/item:text-lime-400 group-hover/item:bg-lime-500/10",
    },
    purple: {
      spotlight: "rgba(168, 85, 247, 0.15)",
      borderHover: "hover:border-purple-500/30",
      iconBg: "group-hover:bg-purple-500/10",
      iconText: "group-hover:text-purple-400",
      buttonHover: "hover:border-purple-500/30 hover:text-purple-400",
      check: "group-hover/item:text-purple-400 group-hover/item:bg-purple-500/10",
    },
  }

  const theme = colors[plan.color as keyof typeof colors]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`group relative rounded-[2rem] border bg-gray-900/50 backdrop-blur-xl transition-all duration-500 ${plan.popular
        ? "border-lime-500/50 shadow-[0_0_50px_rgba(132,204,22,0.15)]"
        : `border-white/10 ${theme.borderHover}`
        }`}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${theme.spotlight},
              transparent 80%
            )
          `,
        }}
      />

      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-lime-500 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_20px_rgba(132,204,22,0.4)] flex items-center gap-2">
            <Star className="w-3 h-3 fill-black" />
            Mais escolhido
          </div>
        </div>
      )}

      <div className="relative h-full p-6 md:p-8 flex flex-col">
        {/* Header */}
        <div className="mb-8">
          <div className={`
            w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-lg
            ${plan.popular
              ? "bg-gradient-to-br from-lime-400 to-lime-600 text-black shadow-lime-500/20"
              : `bg-gradient-to-br from-gray-800 to-gray-900 text-white border border-white/10 ${theme.iconBg} ${theme.iconText}`
            }
          `}>
            <plan.icon className="w-7 h-7" />
          </div>

          <h3 className={`text-3xl font-bold mb-2 ${plan.popular
            ? "text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-white"
            : "text-white group-hover:text-white transition-colors"
            }`}>
            {plan.name}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-10 flex-grow">
          {plan.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300 group/item">
              <div className={`
                mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300
                ${plan.popular ? "bg-lime-500/20 text-lime-400" : `bg-white/5 text-gray-500 ${theme.check}`}
              `}>
                <Check className="w-3 h-3" />
              </div>
              <span className="group-hover/item:text-gray-200 transition-colors">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <motion.button
          onClick={handleWhatsApp}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`
            w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all duration-300 flex items-center justify-center gap-2
            ${plan.popular
              ? "bg-gradient-to-r from-lime-400 to-lime-500 text-black hover:from-lime-300 hover:to-lime-400 shadow-[0_0_30px_rgba(132,204,22,0.3)] hover:shadow-[0_0_40px_rgba(132,204,22,0.5)]"
              : `bg-white/5 text-white hover:bg-white/10 border border-white/10 ${theme.buttonHover}`
            }
          `}
        >
          <MessageCircle className="w-4 h-4" />
          Solicitar Proposta
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  )
}
