"use client"

import { motion } from "framer-motion"
import { X, Check, AlertCircle, Zap, Clock, Layout, Shield, TrendingUp } from "lucide-react"
import { useState } from "react"

export function PainVsSolution() {
    const items = [
        {
            icon: Clock,
            pain: "Prazos longos e incertos (30+ dias)",
            solution: "Entrega garantida em até 7 dias",
            description: "Não perca meses esperando. Seu negócio precisa vender agora."
        },
        {
            icon: Layout,
            pain: "Design genérico e templates prontos",
            solution: "Design exclusivo e premium",
            description: "Sua marca merece uma identidade única que se destaca da concorrência."
        },
        {
            icon: Zap,
            pain: "Sites lentos que perdem vendas",
            solution: "Performance máxima (Carregamento < 1s)",
            description: "Cada segundo de atraso custa conversões. Nós otimizamos cada byte."
        },
        {
            icon: Shield,
            pain: "Sem suporte pós-entrega",
            solution: "Suporte dedicado e garantia total",
            description: "Não te abandonamos. Estamos juntos para garantir seu sucesso contínuo."
        },
        {
            icon: TrendingUp,
            pain: "Foco apenas em estética",
            solution: "Estrutura validada para alta conversão",
            description: "Beleza é importante, mas vendas são essenciais. Unimos os dois."
        }
    ]

    return (
        <section className="relative py-24 px-4 overflow-hidden bg-black">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.05),transparent_70%)] pointer-events-none" />

            <div className="container mx-auto relative z-10 max-w-7xl">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Por que escolher a <span className="text-lime-400">Elev</span>?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Esqueça o jeito antigo. Descubra o padrão Elev de qualidade.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <ComparisonCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ComparisonCard({ item, index }: { item: any, index: number }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative h-[320px] group perspective-1000"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`
        relative w-full h-full duration-500 preserve-3d transition-all
        ${isHovered ? '[transform:rotateY(180deg)]' : ''}
      `}>

                {/* FRONT - PAIN */}
                <div className="absolute inset-0 backface-hidden">
                    <div className="h-full p-8 rounded-3xl bg-neutral-900/50 border border-white/5 flex flex-col items-center justify-center text-center gap-6 group-hover:border-red-500/30 transition-colors">
                        <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-500">
                            <AlertCircle className="w-8 h-8 text-red-500" />
                        </div>
                        <div>
                            <div className="text-red-400 text-sm font-bold uppercase tracking-wider mb-3">Outras Agências</div>
                            <h3 className="text-xl font-medium text-gray-300">{item.pain}</h3>
                        </div>
                        <div className="mt-auto pt-6 border-t border-white/5 w-full">
                            <span className="text-sm text-gray-500 flex items-center justify-center gap-2">
                                <X className="w-4 h-4" /> O problema comum
                            </span>
                        </div>
                    </div>
                </div>

                {/* BACK - SOLUTION */}
                <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)]">
                    <div className="h-full p-8 rounded-3xl bg-lime-950/20 border border-lime-500/30 flex flex-col items-center justify-center text-center gap-6 shadow-[0_0_30px_rgba(132,204,22,0.1)]">
                        <div className="w-16 h-16 rounded-2xl bg-lime-500/20 flex items-center justify-center mb-2 animate-pulse">
                            <item.icon className="w-8 h-8 text-lime-400" />
                        </div>
                        <div>
                            <div className="text-lime-400 text-sm font-bold uppercase tracking-wider mb-3">O Jeito Elev</div>
                            <h3 className="text-xl font-bold text-white">{item.solution}</h3>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}
