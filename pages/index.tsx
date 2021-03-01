import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Jon Heslop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-1 p-8 pb-0 grid grid-cols-1 md:grid-cols-3 auto-rows-min gap-12">
        <h1 className="text-4xl text-green-600 font-black md:col-span-3">
          JFH
        </h1>
        <section className="max-w-xl lg:max-w-2xl md:col-start-2">
          <h2 className="text-4xl md:text-2xl lg:text-4xl font-medium mb-12">Jon Heslop is a designer &&nbsp;developer based in&nbsp;London.</h2>
        </section>
        <figure className="row-start-3 md:col-start-3">
          <Image
            src="/jon-heslop.jpg"
            alt="A picture of me in a garden chatting."
            width={1280}
            height={848} />
            <figcaption className="font-medium text-xs text-gray-600 text-right">
              Photo by <Link href="https://tomalprice.com/"><a className="hover:underline" target="_blank" rel="noopener noreferrer">Tom Price</a></Link>
            </figcaption>
        </figure>
      </main>

      <footer className="flex items-center w-full px-8 py-4 text-sm justify-between font-medium">
        <section>
          <Link href="https://github.com/jonheslop"><a className="hover:underline">Github</a></Link>
          <span className="text-gray-300 px-2">|</span>
          <Link href="https://twitter.com/jonheslop"><a className="hover:underline">Twitter</a></Link>
          <span className="text-gray-300 px-2">|</span>
          <Link href="https://instagram.com/jonheslop"><a className="hover:underline">Instagram</a></Link>
        </section>
        <section>
          <Link href="mailto:jon@jonheslop.com"><a className="hover:underline">Email</a></Link>
          <span className="text-gray-300 px-2">|</span>
          <Link href="/colophon"><a className="hover:underline">Colophon</a></Link>
        </section>
      </footer>
    </div>
  )
}
