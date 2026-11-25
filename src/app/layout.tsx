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

// El dominio real va en NEXT_PUBLIC_SITE_URL. Sin él, las tarjetas de Open Graph
// no pueden resolver URLs absolutas y el preview sale vacío al compartir.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

const title = 'Husari Orozco — Desarrollador Full Stack'
const description =
  'Sistemas de negocio en producción: evaluación de desempeño, inventario y facturación. Laravel, React y TypeScript; Rust cuando el problema no tiene librería.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    'desarrollador full stack',
    'Laravel',
    'React',
    'TypeScript',
    'Rust',
    'Oaxaca',
    'México',
    'desarrollo web',
  ],
  authors: [{ name: 'Husari Orozco', url: 'https://github.com/011010' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: '/',
    siteName: 'Husari Orozco',
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
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
