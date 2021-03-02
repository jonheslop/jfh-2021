import Head from 'next/head';
import Link from 'next/link';
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Colophon - Jon Heslop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-1 p-16 pb-0 w-full">
        <main className="grid grid-cols-1 md:grid-cols-page-layout auto-rows-min gap-16">
          <h1 className="text-4xl text-green-600 font-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 682.17 682.18" className="rounded-full"><path fill="currentColor" d="M0 0v682.17h682.17V0zm209.68 444.37s0 18.68-18.33 41.45c-21.23 26.36-26 28.59-26 28.59l-28-30.35 19.11-18.09s6.57-7.45 6.57-14.6V273.78l46.72-9.34zm311.48-60.08l-46.73 9.34v-70.08l-54.57 10.91v70.08l-46.73 9.35V276.05l-81.78 16.36v25.71l46.77-9.34v42.04l-46.77 9.3v70.08l-46.66 9.35-.06-182.22 175.27-35v70.09l54.57-10.91v-70.1l46.73-9.34z"></path></svg>
          </h1>
          <h2 className="md:col-start-2 text-4xl md:text-2xl lg:text-4xl font-medium mb-4 -mt-2">Colophon</h2>
          <article className="space-y-4">
            <p className="font-medium text-xl md:text-lg lg:text-xl leading-normal">Type set in <Link href=""><a className="underline hover:text-green-600">San Francisco</a></Link> by <Link href=""><a className="underline hover:text-green-600">Apple</a></Link>.</p>
            <p className="font-medium text-xl md:text-lg lg:text-xl leading-normal">Statically generated with <Link href=""><a className="underline hover:text-green-600">Next.js</a></Link>.</p>
            <p className="font-medium text-xl md:text-lg lg:text-xl leading-normal">Hosted by <Link href=""><a className="underline hover:text-green-600">Vercel</a></Link>.</p>
            <p className="font-medium text-xl md:text-lg lg:text-xl leading-normal">Glued together with <Link href=""><a className="underline hover:text-green-600">javascript</a></Link> by me.</p>
          </article>
        </main>
      </div>

      <Footer />
    </div>
  )
}
