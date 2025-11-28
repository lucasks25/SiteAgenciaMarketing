"use client"

import { motion } from "framer-motion"
import { Shield, Award, CheckCircle2, Sparkles } from "lucide-react"

export function Partners() {
  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Vercel",
    "Google Analytics",
    "Meta Pixel",
  ]

  const certifications = [
    {
      icon: Shield,
      title: "SSL Certificado",
      description: "Segurança máxima",
      color: "lime",
    },
    {
      icon: Award,
      title: "Google Partner",
      description: "Certificação oficial",
      color: "cyan",
    },
    {
      icon: CheckCircle2,
      title: "ISO 9001",
      description: "Qualidade garantida",
      color: "purple",
    },
    {
      icon: Sparkles,
      title: "Meta Business",
      description: "Partner certificado",
      color: "pink",
    },
  ]

  return (
    <section className="relative py-16 sm:py-24 px-4 overflow-hidden bg-black">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(132,204,22,0.08),transparent_70%)]"
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
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tecnologias e{" "}
            <span className="bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent">Certificações</span>
          </h3>
          <p className="text-lg text-gray-400">Utilizamos as melhores ferramentas do mercado</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-lime-500" />
              Stack Tecnológica
            </h4>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-6 py-3 rounded-full bg-neutral-900/70 backdrop-blur-sm border border-neutral-800 text-white font-medium text-sm hover:border-lime-500/50 transition-colors"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-cyan-500" />
              Certificações
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => {
                const colorClasses = {
                  lime: "border-lime-500/30 hover:border-lime-500/50",
                  cyan: "border-cyan-500/30 hover:border-cyan-500/50",
                  purple: "border-purple-500/30 hover:border-purple-500/50",
                  pink: "border-pink-500/30 hover:border-pink-500/50",
                }

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`p-4 rounded-xl bg-neutral-900/70 backdrop-blur-sm border-2 ${colorClasses[cert.color as keyof typeof colorClasses]
                      } transition-all group`}
                  >
                    <motion.div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br from-${cert.color}-500 to-${cert.color}-600 flex items-center justify-center mb-3`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <cert.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <h5 className="font-bold text-white text-sm mb-1">{cert.title}</h5>
                    <p className="text-xs text-gray-400">{cert.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-2xl bg-neutral-900/50 border border-neutral-800">
            {[
              { label: "99.9% Uptime", color: "lime" },
              { label: "LGPD Compliant", color: "cyan" },
              { label: "HTTPS Secure", color: "purple" },
            ].map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2"
              >
                <div className={`w-2 h-2 rounded-full bg-${badge.color}-500`} />
                <span className="text-sm font-semibold text-white">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
