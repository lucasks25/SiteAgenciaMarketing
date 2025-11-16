"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, HelpCircle } from "lucide-react"
import { useState } from "react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Como vocês conseguem entregar em até 2 horas?",
      answer:
        "Usamos templates premium otimizados e um processo ultra-eficiente. O prazo de 2h é válido para landing pages essenciais (one-page) com escopo padrão: Hero, Benefícios, Prova Social, Portfólio, FAQ e CTA.",
      category: "Entrega",
    },
    {
      question: "O que está incluído no prazo de 2 horas?",
      answer:
        "Landing page completa com Hero, seções essenciais, CTA WhatsApp, SEO básico (meta tags), pixel de conversão, publicação guiada e 1 rodada de ajustes nas primeiras 24h.",
      category: "Entrega",
    },
    {
      question: "Posso solicitar revisões após a entrega?",
      answer:
        "Sim! O plano SpeedSite inclui 1 rodada de ajustes, Performance Pro inclui 3 rodadas, e Scale Pro oferece ajustes ilimitados durante o período de suporte.",
      category: "Suporte",
    },
    {
      question: "Preciso ter domínio e hospedagem?",
      answer:
        "Não necessariamente. Oferecemos configuração guiada e podemos recomendar as melhores opções de hospedagem. Se você já tiver, configuramos tudo para você.",
      category: "Técnico",
    },
    {
      question: "Como funciona o SEO que vocês oferecem?",
      answer:
        "No plano básico, configuramos meta tags, títulos otimizados e estrutura semântica. Nos planos superiores, incluímos SEO técnico completo: schema markup, Core Web Vitals, sitemaps e otimização de performance.",
      category: "Serviços",
    },
    {
      question: "O que é o serviço de Google Meu Negócio?",
      answer:
        "É a configuração e otimização do seu perfil no Google Business Profile. Seu negócio aparece no Google Maps e nas buscas locais, com fotos, avaliações, posts semanais e gestão completa para atrair clientes da sua região.",
      category: "Serviços",
    },
    {
      question: "Como funcionam as campanhas de tráfego pago?",
      answer:
        "Criamos e gerenciamos campanhas no Google Ads e Meta Ads (Facebook/Instagram), configuramos pixels de conversão, eventos personalizados, remarketing e otimizamos constantemente para reduzir seu CPA.",
      category: "Marketing",
    },
    {
      question: "Qual é o suporte oferecido após a entrega?",
      answer:
        "SpeedSite: suporte por 7 dias. Performance Pro: 1 mês de suporte + otimização CRO. Scale Pro: 3 meses de suporte completo com ajustes ilimitados. Sempre via WhatsApp com resposta em até 4h úteis.",
      category: "Suporte",
    },
    {
      question: "Vocês trabalham com quais nichos?",
      answer:
        "Atendemos todos os nichos: saúde, jurídico, varejo, fitness, gastronomia, imóveis, serviços locais, e-commerce e mais. Temos cases de sucesso em diversos segmentos.",
      category: "Geral",
    },
    {
      question: "Como é o processo de pagamento?",
      answer:
        "Aceitamos PIX, cartão de crédito (parcelado em até 12x) e boleto. Pagamento seguro via plataforma de pagamentos. Iniciamos o trabalho após confirmação do pagamento.",
      category: "Pagamento",
    },
    {
      question: "Vocês oferecem garantia de satisfação?",
      answer:
        "Sim! Oferecemos garantia de 7 dias. Se você não ficar satisfeito com o resultado, devolvemos 100% do seu investimento, sem perguntas.",
      category: "Garantia",
    },
    {
      question: "O site será responsivo para mobile?",
      answer:
        "Absolutamente! Todos os nossos sites são 100% responsivos e otimizados para mobile, tablet e desktop. Design adaptável e performance máxima em todos os dispositivos.",
      category: "Técnico",
    },
  ]

  return (
    <section id="faq" className="relative py-32 px-4 bg-black">
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-lime-500 to-cyan-500 mb-6"
          >
            <HelpCircle className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white">
            Perguntas{" "}
            <span className="bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-pretty leading-relaxed">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl bg-neutral-900/70 backdrop-blur-sm border border-neutral-800 overflow-hidden"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-800/50 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span className="font-semibold text-lg pr-8 text-white">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-lime-400" />
                  ) : (
                    <Plus className="w-6 h-6 text-lime-400" />
                  )}
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <motion.div initial={{ y: -10 }} animate={{ y: 0 }} className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed text-lg">{faq.answer}</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
