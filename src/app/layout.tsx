import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Intech Code Solution | Jasa Pembuatan Website & Source Code Premium',
  description: 'Solusi digital terpercaya untuk bisnis Anda. Jasa pembuatan website profesional, aplikasi custom, dan source code premium siap pakai dengan kualitas terbaik.',
  keywords: 'jasa pembuatan website, source code premium, jasa pembuatan aplikasi, website developer indonesia, jual source code, developer jakarta, website company profile, website toko online, aplikasi android, website custom',
  openGraph: {
    title: 'Intech Code Solution | Jasa Website & Source Code Premium',
    description: 'Solusi digital terpercaya untuk bisnis Anda. Jasa pembuatan website profesional dan source code premium siap pakai.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
