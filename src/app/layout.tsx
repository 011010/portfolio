import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Creative Portfolio - Proyectos Innovadores',
  description: 'Portafolio creativo con proyectos innovadores y tecnología de vanguardia',
  keywords: 'portfolio, web development, creative, projects, innovation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
