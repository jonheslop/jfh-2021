import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex items-center w-full p-16 text-sm justify-between font-medium">
      <section className="space-x-6">
        <Link href="https://github.com/jonheslop"><a className="hover:underline hover:text-green-600">Github</a></Link>
        <Link href="https://twitter.com/jonheslop"><a className="hover:underline hover:text-green-600">Twitter</a></Link>
        <Link href="https://instagram.com/jonheslop"><a className="hover:underline hover:text-green-600">Instagram</a></Link>
      </section>
      <section className="space-x-6">
        <Link href="mailto:jon@jonheslop.com"><a className="hover:underline hover:text-green-600">Email</a></Link>
        <Link href="/colophon"><a className="hover:underline hover:text-green-600">Colophon</a></Link>
      </section>
    </footer>
  )
}
