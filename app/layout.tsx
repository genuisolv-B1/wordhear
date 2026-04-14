import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'WordHear — Livres & Audiobooks · Maroc & Europe',
  description:
    'La librairie numérique premium pour les lecteurs du Maroc et d\'Europe. Romans, éducatif, business, histoires et audiobooks. Téléchargement immédiat.',
  keywords: ['librairie', 'ebooks', 'audiobooks', 'livres marocains', 'Maroc', 'France', 'romans', 'wordhear'],
  openGraph: {
    title: 'WordHear — Livres & Audiobooks',
    description: 'Votre librairie premium. Romans, Éducatif, Business & Audiobooks.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-cream-200 dark:bg-dark-900 text-ink-800 dark:text-cream-200 antialiased transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
