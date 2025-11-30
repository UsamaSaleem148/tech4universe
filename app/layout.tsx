import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tech4 Universe LLC | IT & Business Solutions',
  description: 'Tech4 Universe LLC transforms ideas into powerful digital solutions — from Lead Generation and Software Development to Cybersecurity and AI Automation. U.S.-Registered LLC.',
  keywords: 'lead generation, B2B leads, telemarketing, appointment setting, email marketing, software development, web development, application development, QA testing, cybersecurity, penetration testing, IT solutions, business growth',
  authors: [{ name: 'Tech4 Universe LLC' }],
  metadataBase: new URL('https://www.tech4universe.com'),
  openGraph: {
    title: 'Tech4 Universe LLC | Where Imagination Meets Innovation',
    description: 'U.S.-Registered IT and Business Solutions Agency specializing in Lead Generation, Software Development, QA, and Cybersecurity.',
    url: 'https://www.tech4universe.com',
    siteName: 'Tech4 Universe LLC',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tech4 Universe LLC - IT & Business Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech4 Universe LLC | IT & Business Solutions',
    description: 'Lead Generation, Software Development, QA, and Cybersecurity solutions for businesses worldwide.',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Tech4 Universe LLC',
              description: 'U.S. Registered IT and Business Solutions Agency',
              url: 'https://www.tech4universe.com',
              email: 'outreach@tech4universe.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '1021 E Lincoln way Unit # 1446',
                addressLocality: 'Cheyenne',
                addressRegion: 'WY',
                postalCode: '82001',
                addressCountry: 'US',
              },
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
