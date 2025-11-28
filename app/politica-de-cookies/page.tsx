"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackToHome } from "@/components/back-to-home"
import { motion } from "framer-motion"
import { Cookie, Settings, Shield, Info } from "lucide-react"

export default function CookiePolicy() {
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
                            <Cookie className="w-4 h-4 text-lime-400" />
                            <span className="text-xs font-medium text-white/80 uppercase tracking-wider">Política de Cookies</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            Uso de <span className="text-lime-400">Cookies</span>
                        </h1>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            Entenda como utilizamos cookies para melhorar sua experiência e como você pode gerenciá-los.
                        </p>
                    </motion.div>

                    <div className="space-y-12 text-white/80 leading-relaxed">
                        <Section title="1. O que são Cookies?" icon={Info}>
                            <p>
                                Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, tablet ou celular) quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de maneira mais eficiente, bem como para fornecer informações aos proprietários do site.
                            </p>
                        </Section>

                        <Section title="2. Como usamos os Cookies" icon={Settings}>
                            <p className="mb-4">
                                Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados para fornecer um serviço que você usa.
                            </p>
                        </Section>

                        <Section title="3. Tipos de Cookies que utilizamos" icon={Cookie}>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-white font-bold mb-2">Cookies Essenciais</h3>
                                    <p className="text-white/60">
                                        São necessários para o funcionamento do site e não podem ser desativados em nossos sistemas. Geralmente, eles são definidos apenas em resposta a ações feitas por você que correspondem a uma solicitação de serviços, como definir suas preferências de privacidade, fazer login ou preencher formulários.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2">Cookies de Desempenho</h3>
                                    <p className="text-white/60">
                                        Permitem-nos contar visitas e fontes de tráfego para que possamos medir e melhorar o desempenho do nosso site. Eles nos ajudam a saber quais páginas são as mais e menos populares e ver como os visitantes se movem pelo site.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2">Cookies de Marketing</h3>
                                    <p className="text-white/60">
                                        Podem ser definidos através do nosso site pelos nossos parceiros de publicidade. Podem ser usados por essas empresas para construir um perfil sobre os seus interesses e mostrar-lhe anúncios relevantes em outros sites.
                                    </p>
                                </div>
                            </div>
                        </Section>

                        <Section title="4. Gerenciamento de Cookies" icon={Shield}>
                            <p className="mb-4">
                                Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.
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
