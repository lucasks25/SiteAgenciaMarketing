"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Hand } from "lucide-react"

export function SpotlightReveal() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [isHovering, setIsHovering] = useState(false)
    const [isDrawing, setIsDrawing] = useState(false)

    useEffect(() => {
        const canvas = canvasRef.current
        const container = containerRef.current
        if (!canvas || !container) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let lastWidth = container.offsetWidth

        const resizeCanvas = () => {
            const newWidth = container.offsetWidth
            // Only resize/reset if width changes (prevents reset on mobile address bar scroll)
            if (newWidth !== lastWidth || canvas.width === 0) {
                canvas.width = newWidth
                canvas.height = container.offsetHeight
                lastWidth = newWidth

                // Fill with black initially
                ctx.fillStyle = "black"
                ctx.fillRect(0, 0, canvas.width, canvas.height)
            }
        }

        // Initial setup
        canvas.width = container.offsetWidth
        canvas.height = container.offsetHeight
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        window.addEventListener("resize", resizeCanvas)

        return () => {
            window.removeEventListener("resize", resizeCanvas)
        }
    }, [])

    const draw = (x: number, y: number) => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // "Erase" the black layer
        ctx.globalCompositeOperation = "destination-out"
        ctx.beginPath()
        ctx.arc(x, y, 80, 0, Math.PI * 2) // Brush size
        ctx.fill()
    }

    const handleMouseDown = () => setIsDrawing(true)
    const handleMouseUp = () => setIsDrawing(false)
    const handleMouseLeave = () => setIsDrawing(false)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDrawing || !containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        draw(x, y)
        setIsHovering(true)
    }

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const touch = e.touches[0]
        const x = touch.clientX - rect.left
        const y = touch.clientY - rect.top

        draw(x, y)
        setIsHovering(true)
    }

    return (
        <section
            id="surpresa"
            ref={containerRef}
            className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-950"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
        >
            <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center max-w-4xl mx-auto pointer-events-none select-none">
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    Não é Sorte, é <span className="text-lime-500">Estratégia</span>
                </h2>
                <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl">
                    Fizemos você parar, olhar e interagir. É exatamente esse poder de atração magnética que vamos implementar na sua marca.
                </p>
            </div>

            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-20 touch-pan-y"
            />

            {/* Hint Text (Fades out on interaction) */}
            <div
                className={`absolute z-30 pointer-events-none flex flex-col items-center gap-4 transition-opacity duration-500 ${isHovering ? 'opacity-0' : 'opacity-100'}`}
            >
                <motion.div
                    animate={{
                        x: [-20, 20, -20],
                        rotate: [-10, 10, -10]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut"
                    }}
                    className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                >
                    <Hand className="w-8 h-8 text-white" />
                </motion.div>
                <span className="text-white/50 text-sm uppercase tracking-widest animate-pulse font-medium">
                    Clique e arraste para revelar
                </span>
            </div>
        </section>
    )
}
