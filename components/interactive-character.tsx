"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowDown, MessageCircle } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"

export function InteractiveCharacter() {
    const ref = useRef<HTMLDivElement>(null)

    // Mouse position state
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth spring animation for the character movement
    const springConfig = { damping: 25, stiffness: 150 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    // Transform mouse position to rotation/movement values
    const rotateX = useTransform(y, [-0.5, 0.5], [10, -10])
    const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10])
    const moveX = useTransform(x, [-0.5, 0.5], [-20, 20])
    const moveY = useTransform(y, [-0.5, 0.5], [-20, 20])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect()
        if (rect) {
            const width = rect.width
            const height = rect.height
            const mouseXFromCenter = e.clientX - rect.left - width / 2
            const mouseYFromCenter = e.clientY - rect.top - height / 2

            // Normalize values between -0.5 and 0.5
            mouseX.set(mouseXFromCenter / width)
            mouseY.set(mouseYFromCenter / height)
        }
    }

    const handleMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
    }

    return (
        <section
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-black py-20"
        >
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent_60%)] pointer-events-none" />

            <div className="container mx-auto relative z-10 flex flex-col items-center">

                {/* Speech Bubble */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative mb-8"
                >
                    <div className="bg-white text-black px-8 py-4 rounded-3xl rounded-bl-none text-xl font-bold shadow-[0_0_30px_rgba(255,255,255,0.2)] transform -rotate-2">
                        Veja mais abaixo! 👇
                    </div>
                    {/* Bubble Tail */}
                    <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white transform rotate-45" />
                </motion.div>

                {/* Character Container with 3D Effect */}
                <motion.div
                    style={{
                        rotateX: rotateX,
                        rotateY: rotateY,
                        x: moveX,
                        y: moveY,
                        perspective: 1000
                    }}
                    className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] cursor-pointer"
                >
                    {/* Glow Effect behind character */}
                    <div className="absolute inset-0 bg-emerald-500/20 blur-[80px] rounded-full animate-pulse" />

                    {/* Character Image */}
                    <div className="relative w-full h-full drop-shadow-[0_20px_50px_rgba(16,185,129,0.3)]">
                        <Image
                            src="/character.png"
                            alt="Elev Mascot"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </motion.div>

                {/* CTA / Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    className="mt-12 flex flex-col items-center gap-2"
                >
                    <span className="text-emerald-500 font-medium uppercase tracking-widest text-sm">Role para ver os planos</span>
                    <div className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center bg-emerald-500/10 backdrop-blur-sm">
                        <ArrowDown className="w-6 h-6 text-emerald-500" />
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
