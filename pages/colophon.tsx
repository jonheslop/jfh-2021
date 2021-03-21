import React from 'react';
import Link from '@/components/link';
import Layout from '@/components/layout';

const Colophon = () => {
  return (
    <Layout pageTitle="Colophon">
      <h2 className="text-4xl md:text-2xl lg:text-4xl md:sticky top-16">Colophon</h2>
      <article className="md:col-start-4 space-y-4 mt-3">
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
      </article>
    </Layout>
  );
};

export default Colophon;
