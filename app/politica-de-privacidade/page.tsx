"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackToHome } from "@/components/back-to-home"
import { motion } from "framer-motion"
import { Shield, Lock, Eye, FileText } from "lucide-react"

export default function PrivacyPolicy() {
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
                            <Shield className="w-4 h-4 text-lime-400" />
                            <span className="text-xs font-medium text-white/80 uppercase tracking-wider">LGPD Compliant</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            Política de <span className="text-lime-400">Privacidade</span>
                        </h1>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            Sua privacidade é nossa prioridade. Entenda como coletamos, usamos e protegemos seus dados.
                        </p>
                    </motion.div>

                    <div className="space-y-12 text-white/80 leading-relaxed">
                        <Section title="1. Introdução" icon={FileText}>
                            <p>
                                Agradecemos por escolher nossos serviços. Esta Política de Privacidade descreve como coletamos, usamos, processamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                            </p>
                        </Section>

                        <Section title="2. Coleta de Dados" icon={Eye}>
                            <p className="mb-4">
                                Coletamos informações que você nos fornece diretamente ao utilizar nosso site, preencher formulários ou entrar em contato conosco. Isso pode incluir:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-white/60">
                                <li>Nome completo</li>
                                <li>Endereço de e-mail</li>
                                <li>Número de telefone/WhatsApp</li>
                                <li>Informações sobre sua empresa ou projeto</li>
                            </ul>
                        </Section>

                        <Section title="3. Uso das Informações" icon={Lock}>
                            <p className="mb-4">
                                Utilizamos seus dados para as seguintes finalidades:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-white/60">
                                <li>Fornecer e personalizar nossos serviços</li>
                                <li>Entrar em contato para responder suas solicitações</li>
                                <li>Enviar comunicações de marketing (caso tenha consentido)</li>
                                <li>Melhorar a performance e segurança do nosso site</li>
                            </ul>
                        </Section>

                        <Section title="4. Proteção de Dados" icon={Shield}>
                            <p>
                                Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia SSL em todo o site e restringimos o acesso às informações pessoais apenas a funcionários autorizados.
                            </p>
                        </Section>

                        <Section title="5. Cookies" icon={Eye}>
                            <p>
                                Utilizamos cookies para melhorar sua experiência de navegação. Você pode configurar seu navegador para recusar todos ou alguns cookies, mas isso pode afetar a funcionalidade do site.
                            </p>
                        </Section>

                        <Section title="6. Seus Direitos" icon={FileText}>
                            <p className="mb-4">
                                De acordo com a LGPD, você tem direito a:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-white/60">
                                <li>Confirmar a existência de tratamento de dados</li>
                                <li>Acessar seus dados</li>
                                <li>Corrigir dados incompletos ou desatualizados</li>
                                <li>Solicitar a eliminação de dados desnecessários</li>
                                <li>Revogar seu consentimento a qualquer momento</li>
                            </ul>
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
