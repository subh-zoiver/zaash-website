import './globals.css'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'
import CookieConsent from '@/components/ui/CookieConsent'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zaash — Sales Intelligence for B2B Companies | Revenue Audit and Strategy',
  description: 'Zaash audits your sales stack, identifies revenue leaks, and builds the systematic engine your B2B company needs to grow beyond referrals. Start with the free diagnostic.',
  keywords: ['B2B sales intelligence India', 'sales audit tool India', 'revenue intelligence platform India', 'sales process optimization', 'CRM implementation'],
  authors: [{ name: 'Zaash' }],
  creator: 'Zaash',
  publisher: 'Zaash',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://zaash.com',
    title: 'Zaash — Sales Intelligence for B2B Companies',
    description: 'The sales intelligence layer for B2B companies that have outgrown instinct-led selling.',
    siteName: 'Zaash',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zaash — Sales Intelligence for B2B Companies',
    description: 'The sales intelligence layer for B2B companies that have outgrown instinct-led selling.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
