"use client"

import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Zap, ArrowRight } from "lucide-react"
import { AGENCIA } from "@/lib/constants"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="relative border-t border-neutral-800 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black opacity-50" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column - Enhanced */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-lime-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3">
                  {AGENCIA}
                </h3>
                <p className="text-base text-gray-300 leading-relaxed max-w-sm">
                  Transformamos negócios através de sites profissionais criados em até 2 horas. Velocidade, qualidade e
                  resultados comprovados.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 hover:text-lime-400 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-lime-500/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-lime-400" />
                  </div>
                  <span className="text-sm">(11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-sm">contato@agencia.com.br</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-sm">São Paulo, SP - Brasil</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {[
                  { icon: Instagram, href: "#", color: "from-pink-500 to-purple-500" },
                  { icon: Facebook, href: "#", color: "from-blue-500 to-cyan-500" },
                  { icon: Linkedin, href: "#", color: "from-blue-600 to-cyan-600" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Serviços</h4>
            <ul className="space-y-3">
              {[
                "Criação de Sites",
                "Landing Pages",
                "Tráfego Pago",
                "Google Sua Loja",
                "SEO Técnico",
                "Automações",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#servicos"
                    className="text-sm text-gray-400 hover:text-lime-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Empresa</h4>
            <ul className="space-y-3">
              {[
                { label: "Sobre Nós", href: "#" },
                { label: "Cases", href: "#cases" },
                { label: "Planos", href: "#planos" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "FAQ", href: "#faq" },
                { label: "Blog", href: "#" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Receba dicas exclusivas sobre marketing digital e vendas online
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-lime-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-lime-500 to-cyan-500 text-black font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-lime-500/50 transition-shadow"
              >
                <Zap className="w-4 h-4" />
                Inscrever-se
              </motion.button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-400">
              <p>© 2025 {AGENCIA}. Todos os direitos reservados.</p>
              <div className="flex items-center gap-1 text-xs">
                <span>CNPJ: 00.000.000/0001-00</span>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-lime-500" />
              <span>Site Seguro SSL</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-500" />
              <span>Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Suporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
