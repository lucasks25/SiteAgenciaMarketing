"use client"

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { Zap, Sparkles, ArrowRight, Play, TrendingUp, Clock, Award } from "lucide-react"
import { CTAButton } from "./cta-button"
import { CountUp } from "./count-up"
import { useEffect, useState } from "react"

export function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 250])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  // removido o opacity ligado ao scroll

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const [particles, setParticles] = useState<Array<{ x: number; y: number; delay: number; duration: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]"
          style={{
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, #000 60%, transparent 100%)",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "64px 64px"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background: i % 4 === 0 ? "#84cc16" : i % 4 === 1 ? "#06b6d4" : i % 4 === 2 ? "#a855f7" : "#ec4899",
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, -200, 0],
              opacity: [0, 1, 0],
              scale: [0, 2.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        <motion.div
          className="absolute top-1/4 left-1/4 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-gradient-to-br from-lime-500/30 via-cyan-500/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[350px] sm:w-[450px] md:w-[500px] h-[350px] sm:h-[450px] md:h-[500px] bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="container mx-auto relative z-10"
        style={{ opacity: 0.85 }}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* LEFT SIDE */}
          <div className="space-y-8 md:space-y-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-lime-500/10 border-2 border-lime-500/30 backdrop-blur-xl shadow-[0_0_30px_rgba(132,204,22,0.3)] relative overflow-hidden group mx-auto lg:mx-0"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-500/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
              />
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-lime-400 relative z-10" />
              </motion.div>
              <span className="text-sm sm:text-base font-bold text-lime-400 relative z-10">
                Sites profissionais em tempo recorde
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-balance leading-tight md:leading-[1.05] text-white max-w-3xl mx-auto lg:mx-0"
            >
              Seu negócio no{" "}
              <span className="relative inline-block">
                <motion.span
                  className="relative z-10 bg-gradient-to-r from-lime-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  digital
                </motion.span>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-lime-400/20 via-cyan-400/20 to-purple-400/20 blur-xl -z-10"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              </span>
              <br />
              em até{" "}
              <span className="relative inline-block">
                <motion.span
                  className="relative z-10 text-lime-400"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(132,204,22,0.5)",
                      "0 0 40px rgba(132,204,22,0.8)",
                      "0 0 20px rgba(132,204,22,0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  2 dias
                </motion.span>
                <motion.div
                  className="absolute -inset-2 bg-lime-400/30 blur-2xl -z-10"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.9, 1.1, 0.9],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-base sm:text-lg md:text-2xl text-gray-100 text-pretty leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Criamos sites de alta conversão, gerenciamos tráfego pago e otimizamos sua presença digital com{" "}
              <motion.span
                className="text-lime-400 font-bold"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(132,204,22,0.5)",
                    "0 0 20px rgba(132,204,22,0.8)",
                    "0 0 10px rgba(132,204,22,0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                velocidade e resultados comprovados
              </motion.span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 sm:gap-6 max-w-xl mx-auto lg:mx-0"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(132,204,22,0.4)",
                    "0 0 50px rgba(132,204,22,0.7)",
                    "0 0 30px rgba(132,204,22,0.4)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-full sm:w-auto"
              >
                <CTAButton size="lg" />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05, borderColor: "rgba(132, 204, 22, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border-2 border-gray-700 bg-gray-900/50 backdrop-blur-xl text-white font-bold text-base sm:text-lg hover:bg-gray-800/70 transition-all flex items-center justify-center sm:justify-start gap-3 sm:gap-4 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-lime-500/20 flex items-center justify-center group-hover:bg-lime-500/30 transition-colors relative z-10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 text-lime-400 fill-lime-400" />
                </motion.div>
                <span className="relative z-10">Ver como funciona</span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-4 sm:pt-6"
            >
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-lime-500/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-lime-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white">Entrega em 2 dias</div>
                  <div className="text-xs text-gray-400">Garantido</div>
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white">NPS 9.4</div>
                  <div className="text-xs text-gray-400">Satisfação</div>
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white">+147 Sites</div>
                  <div className="text-xs text-gray-400">Entregues</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT SIDE (desktop only) */}
          <div className="relative hidden lg:block lg:h-[600px]">
            <motion.div
              style={{ y: y1 }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-lime-500/40 via-cyan-500/30 to-transparent rounded-full blur-3xl"
            />

            <motion.div
              style={{ y: y2 }}
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/40 via-pink-500/30 to-transparent rounded-full blur-3xl"
            />

            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-lime-500/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-cyan-500/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-purple-500/15 rounded-full"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.1, y: -10, rotateY: 10 }}
              className="absolute top-20 right-10 group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-lime-500/20 to-cyan-500/20 rounded-3xl blur-xl"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
              <div className="relative flex flex-col items-center gap-3 p-6 rounded-3xl bg-gradient-to-br from-lime-500/10 to-transparent border-2 border-lime-500/30 backdrop-blur-xl">
                <motion.div
                  className="text-4xl font-bold text-white flex items-center gap-2"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(132,204,22,0.5)",
                      "0 0 40px rgba(132,204,22,0.8)",
                      "0 0 20px rgba(132,204,22,0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  +<CountUp end={147} duration={2} />
                </motion.div>
                <div className="text-sm text-gray-300 font-semibold">Sites Entregues</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              whileHover={{ scale: 1.1, y: -10, rotateY: 10 }}
              className="absolute top-1/2 right-0 group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              />
              <div className="relative flex flex-col items-center gap-3 p-6 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-transparent border-2 border-cyan-500/30 backdrop-blur-xl">
                <motion.div
                  className="text-4xl font-bold text-white flex items-center gap-3"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(6,182,212,0.5)",
                      "0 0 40px rgba(6,182,212,0.8)",
                      "0 0 20px rgba(6,182,212,0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  1 dia
                </motion.div>
                <div className="text-sm text-gray-300 font-semibold">Tempo Médio</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
              whileHover={{ scale: 1.1, y: -10, rotateY: 10 }}
              className="absolute bottom-20 right-20 group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              />
              <div className="relative flex flex-col items-center gap-3 p-6 rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent border-2 border-purple-500/30 backdrop-blur-xl">
                <motion.div
                  className="text-4xl font-bold text-white"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(168,85,247,0.5)",
                      "0 0 40px rgba(168,85,247,0.8)",
                      "0 0 20px rgba(168,85,247,0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  9.4
                </motion.div>
                <div className="text-sm text-gray-300 font-semibold">NPS Médio</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
