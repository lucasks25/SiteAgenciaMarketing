"use client"

import { motion } from "framer-motion"
import { Send, User, Mail, MessageSquare, Phone, Zap, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { sendWhatsAppMessage } from "@/lib/whatsapp"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `🚀 *Novo Contato do Site*\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Telefone:* ${formData.phone}\n\n*Mensagem:*\n${formData.message}`
    if (typeof window !== "undefined") {
      sendWhatsAppMessage(message)
    }
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 5000)
  }

  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 overflow-hidden bg-black">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(132,204,22,0.15),transparent_70%)]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 100, 0],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-lime-500/10 border border-lime-500/30"
            >
              <Zap className="w-5 h-5 text-lime-400" />
              <span className="text-base font-bold text-lime-400">Resposta em até 1 hora</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold text-balance leading-tight text-white">
              Vamos transformar seu{" "}
              <span className="bg-gradient-to-r from-lime-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                negócio juntos?
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Preencha o formulário e nossa equipe entrará em contato em até 1 hora útil para entender suas necessidades
              e apresentar a melhor solução.
            </p>

            <div className="space-y-4">
              {[
                { icon: CheckCircle2, text: "Resposta em até 1 hora", color: "lime" },
                { icon: CheckCircle2, text: "Proposta personalizada", color: "cyan" },
                { icon: CheckCircle2, text: "Consultoria gratuita", color: "purple" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className={`w-10 h-10 rounded-full bg-${item.color}-500/20 flex items-center justify-center flex-shrink-0`}
                  >
                    <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                  </div>
                  <span className="text-lg text-white font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-lime-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />

            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className="relative p-8 rounded-3xl bg-neutral-900/70 backdrop-blur-xl border-2 border-neutral-800 space-y-6"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-white flex items-center gap-2">
                    <User className="w-4 h-4 text-lime-400" />
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800/50 border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:border-lime-500 transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-white flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800/50 border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-white flex items-center gap-2">
                    <Phone className="w-4 h-4 text-purple-400" />
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800/50 border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-white flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-lime-400" />
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800/50 border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:border-lime-500 transition-colors resize-none"
                    placeholder="Conte-nos sobre seu projeto..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-lime-500 to-cyan-500 text-black font-bold text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-lime-500/50 transition-all"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </motion.button>

                <p className="text-xs text-center text-gray-500">
                  Ao enviar, você concorda com nossa política de privacidade
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative p-12 rounded-3xl bg-neutral-900/70 backdrop-blur-xl border-2 border-lime-500/30 text-center space-y-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-lime-500 to-cyan-500 flex items-center justify-center"
                >
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </motion.div>

                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">Mensagem Enviada!</h3>
                  <p className="text-lg text-gray-300">
                    Recebemos sua mensagem e entraremos em contato em breve. Fique atento ao WhatsApp!
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
