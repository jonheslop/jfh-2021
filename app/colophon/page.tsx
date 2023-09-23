import React from 'react';
import Link from '@/ui/link';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Colophon',
}
 
const Colophon = () => {
  return (
    <>
      <h2 className="text-4xl md:text-2xl lg:text-4xl md:sticky top-16">Colophon</h2>
      <article className="md:col-start-4 space-y-4 mt-3">
        <p className="text-xl md:text-lg lg:text-xl leading-normal">
          Photo posts all shot on a <Link external href="https://en.wikipedia.org/wiki/Fujifilm_X-Pro3">Fujifilm X-Pro3</Link>.</p>
          <p className="text-xl md:text-lg lg:text-xl leading-normal">I mostly use Fujinon XF 35mm and 16mm lenses. Sometimes I use a Minolta M-Rokkor 40mm, Pentax Asahi Super-Takumar 55mm or (Bec’s) Leica Summilux 50mm lens.
        </p>
        <p className="text-xl md:text-lg lg:text-xl leading-normal">
          Type set in <Link external href="https://klim.co.nz/retail-fonts/soehne/">Söhne</Link> by <Link external href="https://klim.co.nz/">Klim</Link>.
        </p>
        <p className="text-xl md:text-lg lg:text-xl leading-normal">
          Styled with <Link external href="https://tailwindcss.com/">Tailwind CSS</Link>.
        </p>
        <p className="text-xl md:text-lg lg:text-xl leading-normal">
          Statically generated with <Link external href="https://nextjs.org/">Next.js</Link>.
        </p>
        <p className="text-xl md:text-lg lg:text-xl leading-normal">
          Hosted by <Link external href="https://vercel.com/">Vercel</Link>.
        </p>
        <p className="text-xl md:text-lg lg:text-xl leading-normal">
          Glued together with <Link external href="https://github.com/jonheslop/jfh-2021">javascript by me</Link>.
        </p>

        <p className="text-xl md:text-lg lg:text-xl leading-normal">
          I’ve wrote a little more about <Link href="/posts/15-redesign">this iteration here</Link>.
        </p>
        <p className="text-xl md:text-lg lg:text-xl leading-normal">
          And here is <Link href="/posts/15-archive">an archive of all the old sites here</Link>.
        </p>
      </article>
    </>
  );
};

export default Colophon;
