import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

const BASE_URL = 'https://pickleballqc.ca'

export const viewport: Viewport = {
  themeColor: '#2d7a3a',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'PickleballQC — Répertoire des terrains de pickleball au Québec',
    template: '%s | PickleballQC',
  },
  description: 'Le répertoire complet des terrains de pickleball au Québec — intérieurs, extérieurs, parcs et centres privés partout au Québec incluant Montréal, Québec, Laval, Gatineau et plus. The complete guide to pickleball courts across Quebec.',
  keywords: [
    'pickleball Quebec', 'pickleball Québec', 'terrains pickleball', 'pickleball courts Quebec',
    'pickleball Montreal', 'pickleball Montréal', 'pickleball Quebec City', 'pickleball Laval',
    'pickleball Gatineau', 'pickleball Sherbrooke', 'pickleball intérieur Québec',
    'indoor pickleball Quebec', 'outdoor pickleball Quebec', 'where to play pickleball Quebec',
    'où jouer au pickleball Québec', 'pickleball directory', 'répertoire pickleball'
  ],
  authors: [{ name: 'PickleballQC' }],
  creator: 'PickleballQC',
  publisher: 'PickleballQC',
  category: 'Sports',
  alternates: {
    canonical: BASE_URL,
    languages: {
      'fr-CA': BASE_URL,
      'en-CA': `${BASE_URL}/en`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    alternateLocale: 'en_CA',
    url: BASE_URL,
    siteName: 'PickleballQC',
    title: 'PickleballQC — Répertoire des terrains de pickleball au Québec',
    description: 'Le répertoire complet des terrains de pickleball au Québec. Trouve un terrain près de toi — intérieur, extérieur, parc ou centre privé.',
    images: [
      {
        url: '/images/hero-courts.jpg',
        width: 1200,
        height: 630,
        alt: 'Terrains de pickleball au Québec — PickleballQC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PickleballQC — Répertoire des terrains de pickleball au Québec',
    description: 'Trouve ton terrain de pickleball au Québec. Annuaire complet des courts intérieurs, extérieurs et parcs.',
    images: ['/images/hero-courts.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${_inter.variable} ${_spaceGrotesk.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
