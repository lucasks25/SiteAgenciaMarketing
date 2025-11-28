"use client"

import { motion } from "framer-motion"
import { Code2, Cpu, Globe, Shield, CheckCircle, Zap, Database, Layout, Lock, Award, Server, FileCheck } from "lucide-react"

export function TechStack() {
    const stack = [
        { name: "Next.js", icon: Globe, desc: "Framework React" },
        { name: "React", icon: Code2, desc: "UI Library" },
        { name: "TypeScript", icon: FileCheck, desc: "Type Safety" },
        { name: "Tailwind CSS", icon: Layout, desc: "Styling" },
        { name: "Framer Motion", icon: Zap, desc: "Animations" },
        { name: "Vercel", icon: Server, desc: "Deployment" },
        { name: "Google Analytics", icon: Database, desc: "Data" },
        { name: "Meta Pixel", icon: Cpu, desc: "Tracking" },
    ]

    const certs = [
        { name: "SSL Certificado", icon: Lock, desc: "Segurança máxima" },
        { name: "Google Partner", icon: Award, desc: "Certificação oficial" },
        { name: "ISO 9001", icon: Shield, desc: "Qualidade garantida" },
        { name: "Meta Business", icon: CheckCircle, desc: "Partner certificado" },
        { name: "99.9% Uptime", icon: Server, desc: "Alta disponibilidade" },
        { name: "LGPD Compliant", icon: FileCheck, desc: "Proteção de dados" },
    ]

    return (
        <section className="relative py-24 px-4 overflow-hidden bg-black">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

            <div className="container mx-auto relative z-10 max-w-7xl">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 backdrop-blur-md"
                    >
                        <Cpu className="w-3.5 h-3.5 text-lime-400" />
                        <span className="text-xs font-medium text-white/80 tracking-wide uppercase">Infraestrutura</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                    >
                        Tecnologias e <span className="text-lime-400">Certificações</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/40 text-lg max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Utilizamos as melhores ferramentas do mercado para garantir performance, segurança e resultados.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Stack Column */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-xl font-bold text-white mb-8 flex items-center gap-3"
                        >
                            <Code2 className="w-5 h-5 text-lime-400" />
                            Stack Tecnológica
                        </motion.h3>

                        <div className="grid grid-cols-2 gap-4">
                            {stack.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-lime-500/30 transition-all group"
                                >
                                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-lime-500/10 transition-colors">
                                        <item.icon className="w-5 h-5 text-white/60 group-hover:text-lime-400 transition-colors" />
                                    </div>
                                    <div>
                                        <div className="text-white font-medium text-sm">{item.name}</div>
                                        <div className="text-white/40 text-xs">{item.desc}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-xl font-bold text-white mb-8 flex items-center gap-3"
                        >
                            <Shield className="w-5 h-5 text-lime-400" />
                            Certificações & Segurança
                        </motion.h3>

                        <div className="grid grid-cols-2 gap-4">
                            {certs.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 + 0.2 }}
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-lime-500/30 transition-all group"
                                >
                                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-lime-500/10 transition-colors">
                                        <item.icon className="w-5 h-5 text-white/60 group-hover:text-lime-400 transition-colors" />
                                    </div>
                                    <div>
                                        <div className="text-white font-medium text-sm">{item.name}</div>
                                        <div className="text-white/40 text-xs">{item.desc}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
