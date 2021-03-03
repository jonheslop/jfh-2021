import Link from "./link";

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center w-full p-16 text-sm justify-between">
      <section className="space-x-6 mt-4 sm:mt-0">
        <Link href="https://github.com/jonheslop" external={true}>Github</Link>
        <Link href="https://twitter.com/jonheslop" external={true}>Twitter</Link>
        <Link href="https://instagram.com/jonheslop" external={true}>Instagram</Link>
      </section>
      <section className="space-x-6 mt-4 sm:mt-0">
        <Link href="mailto:jon@jonheslop.com">Email</Link>
        <Link href="/colophon">Colophon</Link>
      </section>
    </footer>
  )
}
