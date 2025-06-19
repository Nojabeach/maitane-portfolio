import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maitane Ibáñez Irazabal - Portfolio',
  description: 'Portfolio profesional de Maitane Ibáñez Irazabal, Analista Orgánico y Programadora Informática especializada en SQL Server, Java, Android y Kotlin con más de 17 años de experiencia',
  generator: 'Next.js',
  keywords: ['Maitane Ibáñez', 'Portfolio', 'Analista Orgánico', 'Programadora', 'Java', 'Android', 'Kotlin', 'SQL Server', 'Spring Boot'],
  authors: [{ name: 'Maitane Ibáñez Irazabal' }],
  openGraph: {
    title: 'Maitane Ibáñez Irazabal - Portfolio',
    description: 'Analista Orgánico y Programadora Informática con más de 17 años de experiencia',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
