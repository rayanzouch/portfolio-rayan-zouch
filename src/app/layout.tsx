import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rayan Zouch — Portfolio',
  description: 'Personal portfolio of Rayan Zouch, showcasing projects and experience in cloud and infrastructure.',
  keywords: ['Cloud Engineer', 'AWS', 'DevOps', 'Infrastructure', 'Rayan Zouch', 'Portfolio'],
  authors: [{ name: 'Rayan Zouch' }],
  openGraph: {
    title: 'Rayan Zouch — Portfolio',
    description: 'Personal portfolio of Rayan Zouch.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rayan Zouch — Portfolio',
    description: 'Personal portfolio of Rayan Zouch.',
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-aws-dark text-gray-100 antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
