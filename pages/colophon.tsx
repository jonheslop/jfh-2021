import Head from 'next/head';
import Link from 'next/link';
import Logo from "../components/logo";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-medium">
      <Head>
        <title>Colophon - Jon Heslop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-1 p-16 pb-0 w-full">
        <main className="grid grid-cols-1 md:grid-cols-page-layout auto-rows-min items-start gap-16 relative">
          <Logo />
          <h2 className="text-4xl md:text-2xl lg:text-4xl md:sticky top-16">Colophon</h2>
          <article className="md:col-start-4 space-y-4 mt-3">
            <p className="text-xl md:text-lg lg:text-xl leading-normal">Type set in <Link href="https://developer.apple.com/fonts/"><a className="underline hover:text-green-600">San Francisco</a></Link> by <Link href="https://www.apple.com/"><a className="underline hover:text-green-600">Apple</a></Link>.</p>
            <p className="text-xl md:text-lg lg:text-xl leading-normal">Styled with <Link href="https://tailwindcss.com/"><a className="underline hover:text-green-600">Tailwind CSS</a></Link>.</p>
            <p className="text-xl md:text-lg lg:text-xl leading-normal">Statically generated with <Link href="https://nextjs.org/"><a className="underline hover:text-green-600">Next.js</a></Link>.</p>
            <p className="text-xl md:text-lg lg:text-xl leading-normal">Hosted by <Link href="https://vercel.com/"><a className="underline hover:text-green-600">Vercel</a></Link>.</p>
            <p className="text-xl md:text-lg lg:text-xl leading-normal">Glued together with <Link href="https://github.com/jonheslop/jfh-2021"><a className="underline hover:text-green-600">javascript by me</a></Link>.</p>
          </article>
        </main>
      </div>

      <Footer />
    </div>
  )
}
