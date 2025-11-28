"use client"

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { Sparkles, Play } from "lucide-react"
import { CTAButton } from "./cta-button"
import { CountUp } from "./count-up"
import { useEffect, useState } from "react"

export function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 250])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])

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
    const newParticles = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex items-center justify-center pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black"
    >
      {/* BG / GRID / PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem]"
          style={{
            maskImage: "radial-gradient(ellipse 90% 70% at 50% 50%, #000 60%, transparent 100%)",
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
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background:
                i % 4 === 0
                  ? "#84cc16"
                  : i % 4 === 1
                    ? "#06b6d4"
                    : i % 4 === 2
                      ? "#a855f7"
                      : "#ec4899",
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, -180, 0],
              opacity: [0, 1, 0],
              scale: [0, 2.2, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* blobs mais centralizados */}
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[260px] sm:w-[360px] md:w-[480px] h-[260px] sm:h-[360px] md:h-[480px] bg-gradient-to-br from-lime-500/30 via-cyan-500/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/5 left-1/2 -translate-x-1/2 w-[240px] sm:w-[320px] md:w-[420px] h-[240px] sm:h-[320px] md:h-[420px] bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <motion.div className="container mx-auto relative z-10" style={{ opacity: 0.9 }}>
        {/* badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.03 }}
          className="flex w-fit items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-lime-500/10 border-2 border-lime-500/30 backdrop-blur-xl shadow-[0_0_30px_rgba(132,204,22,0.3)] relative overflow-hidden group mx-auto mb-8"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-500/20 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
          />
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400 relative z-10" />
          </motion.div>
          <span className="text-xs sm:text-sm md:text-base font-bold text-lime-400 relative z-10">
            Bem-vindo à Elev 👋
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl xl:max-w-7xl mx-auto">
          {/* LEFT */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-4xl mx-auto lg:mx-0 leading-[1.1]"
            >
              Seu negócio no{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-purple-400 animate-gradient-x">
                digital
              </span>
              <br />
              <span className="text-white">em até </span>
              <span className="text-lime-400 inline-block relative">
                7 dias
                <motion.svg
                  viewBox="0 0 100 20"
                  className="absolute -bottom-2 left-0 w-full h-[0.4em] text-lime-500/50 -z-10"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <motion.path
                    d="M0 10 Q50 20 100 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                  />
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Criamos sites de alta conversão, gerenciamos tráfego pago e otimizamos sua presença digital com velocidade e resultados comprovados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto"
            >
              <CTAButton size="lg" className="w-full sm:w-auto justify-center" href="#planos">

                Ver Planos
              </CTAButton>

              <a
                href="#work-process"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 text-white text-lg font-medium transition-all flex items-center justify-center gap-2 group"
              >
                <Play size={20} className="fill-white group-hover:scale-110 transition-transform" />
                Como Funciona
              </a>
            </motion.div>
          </div>

          {/* RIGHT – desktop */}
          <div className="relative hidden lg:block lg:h-[560px] xl:h-[600px]">
            <motion.div
              style={{ y: y1 }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[380px] h-[380px] bg-gradient-to-br from-lime-500/40 via-cyan-500/30 to-transparent rounded-full blur-3xl"
            />

            <motion.div
              style={{ y: y2 }}
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-[460px] h-[460px] bg-gradient-to-br from-purple-500/40 via-pink-500/30 to-transparent rounded-full blur-3xl"
            />

            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] border-2 border-lime-500/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] border-2 border-cyan-500/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-purple-500/15 rounded-full"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            {/* Orbiting Cards Container */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border border-white/5 will-change-transform"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              {/* Card 1 - Top (0 degrees) - Performance */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-lime-500/40 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative flex items-center justify-center px-5 py-2.5 rounded-full bg-gray-900/90 border border-lime-500/50 backdrop-blur-2xl shadow-[0_0_20px_rgba(132,204,22,0.3)] whitespace-nowrap group-hover:border-lime-400 transition-colors">
                    <span className="text-sm sm:text-base font-bold text-white drop-shadow-lg">Performance 🚀</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 2 - Bottom Right (120 degrees) - Design */}
              <motion.div
                className="absolute bottom-[14%] right-[14%] translate-x-1/2 translate-y-1/2"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 }}
                  whileHover={{ scale: 1.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-cyan-500/40 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative flex items-center justify-center px-5 py-2.5 rounded-full bg-gray-900/90 border border-cyan-500/50 backdrop-blur-2xl shadow-[0_0_20px_rgba(6,182,212,0.3)] whitespace-nowrap group-hover:border-cyan-400 transition-colors">
                    <span className="text-sm sm:text-base font-bold text-white drop-shadow-lg">Design 🎨</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 3 - Bottom Left (240 degrees) - Conversão */}
              <motion.div
                className="absolute bottom-[14%] left-[14%] -translate-x-1/2 translate-y-1/2"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 }}
                  whileHover={{ scale: 1.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-purple-500/40 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative flex items-center justify-center px-5 py-2.5 rounded-full bg-gray-900/90 border border-purple-500/50 backdrop-blur-2xl shadow-[0_0_20px_rgba(168,85,247,0.3)] whitespace-nowrap group-hover:border-purple-400 transition-colors">
                    <span className="text-sm sm:text-base font-bold text-white drop-shadow-lg">Conversão 📈</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div >
      </motion.div >
    </section >
  )
}
