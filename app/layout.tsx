import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, DM_Sans } from 'next/font/google'
import './globals.css'

const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })

export const metadata: Metadata = {
  title: 'Reda Boujlil — Video & Performance Analyst',
  description:
    'Portfolio of Reda Boujlil, football & basketball video and performance analyst at the FRMF CODM Training Center in Morocco.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#f8f8f6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${dmSans.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
