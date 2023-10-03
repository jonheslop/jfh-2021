import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Logo from '@/ui/logo';
import Footer from '@/ui/footer';

const soehne = localFont({
  src: [
    {
      path: './fonts/soehne-web-buch.woff2',
      weight: '400',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-soehne',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jonheslop.com'),
  title: {
    template: '%s | Jon Heslop',
    default: 'Hello | Jon Heslop',
  },
  alternates: {
    types: {
      'application/rss+xml': 'https://jonheslop.com/feed.xml',
    }
  },
  description: 'Jon Heslop is a front end developer based in London.',
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  openGraph: {
    title: 'Jon Heslop',
    description: 'Jon Heslop is a front end developer based in London.',
    url: 'http://jonheslop.com/',
    siteName: 'jonheslop.com',
    images: [
      {
        url: 'http://jonheslop.com/jon-heslop.jpg',
        width: 1280,
        height: 848,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${soehne.variable} font-soehne dark:bg-black dark:text-white flex flex-col items-center justify-center min-h-screen`}>
        <div className="flex-1 px-2 py-4 md:p-8 lg:p-16 grid grid-cols-1 md:grid-cols-page-layout auto-rows-min items-start gap-16 relative w-full">
          <Logo/>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
