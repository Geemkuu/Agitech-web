import type { Metadata, Viewport } from 'next'
import { Poppins, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LoadingProvider } from '@/contexts/loading-context'
import { GlobalLoading } from '@/components/global-loading'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading"
});

const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: 'Agitech Seedlings | Quality Seedlings for Healthy Harvests',
  description: 'Premium quality seedlings including vegetables, fruits, herbs, and trees. Certified, healthy plants for sustainable farming in Kenya.',
  keywords: ['seedlings', 'agriculture', 'farming', 'vegetables', 'fruits', 'herbs', 'trees', 'Kenya', 'sustainable farming'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2d6a4f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable} font-sans antialiased`}>
        <LoadingProvider>
          {children}
          <GlobalLoading />
        </LoadingProvider>
        <Analytics />
      </body>
    </html>
  )
}
