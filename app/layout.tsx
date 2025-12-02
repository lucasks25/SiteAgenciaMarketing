import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { AGENCIA, SLOGAN } from "@/lib/constants"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://velocityweb.com.br"),
  title: {
    default: `${AGENCIA} | ${SLOGAN}`,
    template: `%s | ${AGENCIA}`,
  },
  description:
    "Criamos sites profissionais em até 7 dias. Design premium, performance 95+ no Lighthouse e copy que converte. Oferecemos também otimização de campanhas, tráfego pago e Google Meu Negócio.",
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
      "Sites profissionais prontos em até 7 dias. Design premium, performance 95+ e resultados comprovados. +247 projetos entregues com NPS 9.4",
    siteName: AGENCIA,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${AGENCIA} - Sites Profissionais em 7 dias`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${AGENCIA} | ${SLOGAN}`,
    description: "Sites profissionais prontos em até 7 dias. Design premium e performance garantida.",
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
      <body className={inter.className}>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1187870499513420');
fbq('track', 'PageView');
`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1187870499513420&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
