import React from 'react';
import Link from '@/components/link';
import Layout from '@/components/layout';
import StreamGrid from '@/components/stream-grid';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getServerSideProps({params}) {
  const photos = await prisma.photo.findMany();
  console.log(photos);

  return {
    props: {
      photos: [...JSON.parse(JSON.stringify(photos))]
    }
  };
}

const Stream = ({photos}) => {
  console.log(photos);

  return (
    <Layout pageTitle="Stream">
      <h2 className="text-4xl md:text-2xl lg:text-4xl md:sticky top-16">Stream</h2>
      <article className="md:col-start-4 space-y-4 mt-3">
        <p className="text-xl md:text-lg lg:text-xl leading-normal">
          Photo posts all shot on a <Link external href="https://en.wikipedia.org/wiki/Fujifilm_X-Pro3">Fujifilm X-Pro3</Link>.</p>
          <p className="text-xl md:text-lg lg:text-xl leading-normal">I mostly use the Fujinon 16mm and 35mm lenses. Sometimes I use a Minolta M-Rokkor 40mm, Pentax Asahi Super-Takumar 55mm or Leica Summilux 50mm lens.
        </p>
      </article>
      <StreamGrid photos={photos} classes="col-span-3 col-start-2"/>
    </Layout>
  );
};

export default Stream;
