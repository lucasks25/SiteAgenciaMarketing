"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export function BackToHome() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
        >
            <Link href="/#hero" className="inline-block">
                <motion.button
                    whileHover={{ x: -5 }}
                    className="flex items-center gap-2 text-white/60 hover:text-lime-400 transition-colors group"
                >
                    <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-lime-500/30 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">Voltar para o início</span>
                </motion.button>
            </Link>
        </motion.div>
    )
}
