import './globals.css'
import type { Metadata, ResolvingMetadata } from 'next'
import Logo from '@/ui/logo';
import Footer from '@/ui/footer';

type Props = {
  pageTitle: string;
  children: React.ReactNode;
}

export async function generateMetadata(
  { pageTitle = 'Hello' }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: `${pageTitle} - Jon Heslop`,
    description: 'Jon Heslop is a front end developer based in London.',
    viewport: {
      width: "device-width",
      initialScale: 1,
    },
    openGraph: {
      title: 'Next.js',
      description: 'Jon Heslop is a front end developer based in London.',
      url: 'http://jonheslop.com/',
      siteName: 'Next.js',
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
}

export default function RootLayout({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-soehne dark:bg-black dark:text-white flex flex-col items-center justify-center min-h-screen">
        <div className="flex-1 px-2 py-4 md:p-8 lg:p-16 grid grid-cols-1 md:grid-cols-page-layout auto-rows-min items-start gap-16 relative w-full">
          <Logo/>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
