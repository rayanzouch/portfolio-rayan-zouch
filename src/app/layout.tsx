import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rayan Zouch | Cloud & Production Engineer',
  description: 'Portfolio of Rayan Zouch - Cloud & Production Engineer specialized in AWS, IT Infrastructure and DevOps. Amazon and PwC experience.',
  keywords: ['Cloud Engineer', 'AWS', 'DevOps', 'Infrastructure', 'Production Engineer', 'Rayan Zouch'],
  authors: [{ name: 'Rayan Zouch' }],
  openGraph: {
    title: 'Rayan Zouch | Cloud & Production Engineer',
    description: 'Cloud & Production Engineer specialized in AWS, IT Infrastructure and DevOps',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rayan Zouch | Cloud & Production Engineer',
    description: 'Cloud & Production Engineer specialized in AWS, IT Infrastructure and DevOps',
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
