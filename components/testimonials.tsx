"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Dono de Clínica Odontológica",
      avatar: "/professional-man.png",
      content:
        "Em menos de 2 horas meu site estava no ar. A qualidade superou minhas expectativas e os agendamentos aumentaram 280% no primeiro mês.",
      rating: 5,
      metric: "+280%",
      metricLabel: "agendamentos",
    },
    {
      name: "Juliana Santos",
      role: "Advogada",
      avatar: "/professional-woman.png",
      content:
        "Processo super rápido e profissional. O site ficou elegante e já estou recebendo consultas de clientes que me encontraram no Google.",
      rating: 5,
      metric: "+47",
      metricLabel: "leads/mês",
    },
    {
      name: "Ricardo Oliveira",
      role: "Dono de E-commerce",
      avatar: "/business-man.jpg",
      content:
        "A otimização de campanhas reduziu meu CPA em 64%. Equipe extremamente competente e sempre disponível para ajudar.",
      rating: 5,
      metric: "-64%",
      metricLabel: "CPA",
    },
    {
      name: "Mariana Costa",
      role: "Personal Trainer",
      avatar: "/fitness-woman.jpg",
      content: "Meu Instagram agora tem um site profissional que converte seguidores em clientes. Valeu cada centavo!",
      rating: 5,
      metric: "+325%",
      metricLabel: "conversões",
    },
    {
      name: "Fernando Lima",
      role: "Chef de Restaurante",
      avatar: "/chef-man.jpg",
      content:
        "O Google Sua Loja que configuraram triplicou nossas reservas. Agora aparecemos em primeiro nas buscas locais.",
      rating: 5,
      metric: "+287%",
      metricLabel: "reservas",
    },
    {
      name: "Patrícia Alves",
      role: "Corretora de Imóveis",
      avatar: "/business-woman.jpg",
      content:
        "Site rápido, bonito e que gera leads qualificados. A melhor decisão que tomei para meu negócio este ano.",
      rating: 5,
      metric: "+274%",
      metricLabel: "visitas",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative py-32 px-4 overflow-hidden bg-black">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-6 relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-50"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
            <Quote className="w-8 h-8 text-white relative z-10" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            O que nossos <span className="gradient-connected-text">clientes dizem</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto text-pretty"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Depoimentos reais de quem já transformou seu negócio
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100, rotateY: -20 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -100, rotateY: 20 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-neutral-900/80 backdrop-blur-xl border border-purple-500/20 overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 2,
                    }}
                  />

                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-md opacity-50" />
                        <img
                          src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                          alt={testimonials[activeIndex].name}
                          className="relative w-20 h-20 rounded-full object-cover border-2 border-primary/50"
                        />
                      </motion.div>

                      <div className="flex-1">
                        <h3 className="font-bold text-xl md:text-2xl mb-1">{testimonials[activeIndex].name}</h3>
                        <p className="text-sm md:text-base text-muted-foreground">{testimonials[activeIndex].role}</p>
                      </div>

                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                        className="relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-success rounded-2xl blur-lg opacity-50" />
                        <div className="relative flex flex-col items-center gap-1 px-6 py-4 rounded-2xl bg-gradient-to-br from-primary/20 to-success/20 border border-primary/30 backdrop-blur-sm">
                          <motion.span
                            className="text-2xl md:text-3xl font-bold text-primary"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            {testimonials[activeIndex].metric}
                          </motion.span>
                          <span className="text-xs text-muted-foreground">{testimonials[activeIndex].metricLabel}</span>
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      className="flex gap-1 mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.1 * i, type: "spring" }}
                        >
                          <Star className="w-6 h-6 fill-primary text-primary" />
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-lg md:text-xl leading-relaxed text-foreground/90"
                    >
                      "{testimonials[activeIndex].content}"
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4 md:-mx-20">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary to-success flex items-center justify-center text-background shadow-lg hover:shadow-primary/50 transition-shadow"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary to-success flex items-center justify-center text-background shadow-lg hover:shadow-primary/50 transition-shadow"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                {index === activeIndex && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-success rounded-full blur-sm"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div
                  className={`relative w-3 h-3 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-gradient-to-r from-primary to-success w-10"
                      : "bg-border hover:bg-primary/50"
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
