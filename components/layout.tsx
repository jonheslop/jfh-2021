import Head from 'next/head';
import Logo from "../components/logo";
import Footer from "../components/footer";

type Props = {
  pageTitle: string
  children: React.ReactNode
}

export default function Layout({pageTitle, children}: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-medium">
      <Head>
        <title>{pageTitle} - Jon Heslop</title>
        <link rel="icon" href="/favicon.gif" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Jon Heslop is a designer & developer based in London." />
        <meta property="og:url" content="http://jonheslop.com/" />
        <meta property="og:title" content="Jon Heslop" />
        <meta property="og:description" content="Jon Heslop is a designer & developer based in London." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/jon-heslop.jpg" />
      </Head>

      <div className="flex-1 p-16 grid grid-cols-1 md:grid-cols-page-layout auto-rows-min items-start gap-16 relative">
        <Logo />
        {children}
      </div>
      <Footer />
    </div>
  )
}
