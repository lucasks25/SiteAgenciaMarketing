"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackToHome } from "@/components/back-to-home"
import { motion } from "framer-motion"
import { Scale, FileText, AlertCircle, Gavel } from "lucide-react"
import { AGENCIA } from "@/lib/constants"

export default function TermsOfUse() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-lime-500/30">
            <Navbar />

            <div className="relative pt-32 pb-20 px-4 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.1),transparent_70%)] pointer-events-none" />

                <div className="container mx-auto max-w-4xl relative z-10">
                    <BackToHome />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                            <Scale className="w-4 h-4 text-lime-400" />
                            <span className="text-xs font-medium text-white/80 uppercase tracking-wider">Termos Legais</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            Termos de <span className="text-lime-400">Uso</span>
                        </h1>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            Ao acessar nosso site, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis.
                        </p>
                    </motion.div>

                    <div className="space-y-12 text-white/80 leading-relaxed">
                        <Section title="1. Aceitação dos Termos" icon={FileText}>
                            <p>
                                Ao acessar o site da <strong>{AGENCIA}</strong>, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.
                            </p>
                        </Section>

                        <Section title="2. Uso de Licença" icon={Scale}>
                            <p className="mb-4">
                                É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site da {AGENCIA}, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-white/60">
                                <li>Modificar ou copiar os materiais;</li>
                                <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                                <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site da {AGENCIA};</li>
                                <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                                <li>Transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
                            </ul>
                        </Section>

                        <Section title="3. Isenção de Responsabilidade" icon={AlertCircle}>
                            <p>
                                Os materiais no site da {AGENCIA} são fornecidos 'como estão'. A {AGENCIA} não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
                            </p>
                        </Section>

                        <Section title="4. Limitações" icon={AlertCircle}>
                            <p>
                                Em nenhum caso a {AGENCIA} ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em {AGENCIA}, mesmo que a {AGENCIA} ou um representante autorizado da {AGENCIA} tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
                            </p>
                        </Section>

                        <Section title="5. Lei Aplicável" icon={Gavel}>
                            <p>
                                Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
                            </p>
                        </Section>

                        <div className="pt-8 border-t border-white/10 text-center">
                            <p className="text-white/40 text-sm">
                                Última atualização: {new Date().toLocaleDateString('pt-BR')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}

function Section({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] transition-colors"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-lime-500/10">
                    <Icon className="w-5 h-5 text-lime-400" />
                </div>
                <h2 className="text-xl font-bold text-white">{title}</h2>
            </div>
            <div className="text-white/70">
                {children}
            </div>
        </motion.section>
    )
}
