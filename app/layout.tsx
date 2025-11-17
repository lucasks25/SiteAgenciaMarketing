import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AGENCIA, SLOGAN } from "@/lib/constants"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://velocityweb.com.br"),
  title: {
    default: `${AGENCIA} | ${SLOGAN}`,
    template: `%s | ${AGENCIA}`,
  },
  description:
    "Criamos sites profissionais em até 2 horas. Design premium, performance 95+ no Lighthouse e copy que converte. Oferecemos também otimização de campanhas, tráfego pago e Google Meu Negócio.",
  keywords: [
    "criação de sites",
    "sites em 2 horas",
    "sites em 2 DIAS",
    "landing page profissional",
    "tráfego pago",
    "google ads",
    "facebook ads",
    "instagram ads",
    "meta ads",
    "google meu negócio",
    "google business profile",
    "seo",
    "otimização de campanhas",
    "performance marketing",
    "conversão",
    "marketing digital",
    "agência digital",
    "sites rápidos",
    "desenvolvimento web",
  ],
  authors: [{ name: AGENCIA }],
  creator: AGENCIA,
  publisher: AGENCIA,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://velocityweb.com.br",
    title: `${AGENCIA} | ${SLOGAN}`,
    description:
      "Sites profissionais prontos em até 2h. Design premium, performance 95+ e resultados comprovados. +247 projetos entregues com NPS 9.4",
    siteName: AGENCIA,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${AGENCIA} - Sites Profissionais em 2 dias`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${AGENCIA} | ${SLOGAN}`,
    description: "Sites profissionais prontos em até 2 dias. Design premium e performance garantida.",
    creator: "@lucas.ksz",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
