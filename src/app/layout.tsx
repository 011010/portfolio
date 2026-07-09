import type { Metadata } from 'next'
import { JetBrains_Mono, Sora } from 'next/font/google'
import './globals.css'

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
})

const sans = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Husari Orozco — Software Engineer',
  description: 'Portafolio de Husari Orozco: PWAs, sistemas de automatización y herramientas internas construidas en TypeScript y Python.',
  keywords: 'portfolio, software engineer, TypeScript, Python, PWA, desarrollo web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${mono.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
