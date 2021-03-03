import Link from '../components/link';
import Layout from '../components/layout';

export default function Colophon() {
  return (
    <Layout pageTitle="Colophon">
      <h2 className="text-4xl md:text-2xl lg:text-4xl md:sticky top-16">Colophon</h2>
      <article className="md:col-start-4 space-y-4 mt-3">
        <p className="text-xl md:text-lg lg:text-xl leading-normal">
          Type set in <Link href="https://klim.co.nz/retail-fonts/soehne/" external={true}>Söhne</Link> by <Link href="https://klim.co.nz/" external={true}>Klim</Link>.
        </p>
        <p className="text-xl md:text-lg lg:text-xl leading-normal">
          Styled with <Link href="https://tailwindcss.com/" external={true}>Tailwind CSS</Link>.
        </p>
        <p className="text-xl md:text-lg lg:text-xl leading-normal">
          Statically generated with <Link href="https://nextjs.org/" external={true}>Next.js</Link>.
        </p>
        <p className="text-xl md:text-lg lg:text-xl leading-normal">
          Hosted by <Link href="https://vercel.com/" external={true}>Vercel</Link>.
        </p>
        <p className="text-xl md:text-lg lg:text-xl leading-normal">
          Glued together with <Link href="https://github.com/jonheslop/jfh-2021" external={true}>javascript by me</Link>.
        </p>
      </article>
    </Layout>
  )
}
