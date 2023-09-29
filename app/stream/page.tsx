import React, {Suspense} from 'react';
import Heading from '@/ui/heading';
import StreamGrid from '@/ui/stream-grid';
import Link from '@/ui/link';
import Loader from '@/ui/loader';

const Stream = async () => {
  return (
    <>
      <Heading classes="md:sticky top-16">Stream</Heading>
      <article className="md:col-start-4 space-y-4 mt-3">
        <p className="text-xl md:text-lg lg:text-xl leading-normal">
          Photo posts all shot on a <Link external href="https://en.wikipedia.org/wiki/Fujifilm_X-Pro3">Fujifilm X-Pro3</Link>.</p>
          <p className="text-xl md:text-lg lg:text-xl leading-normal">I mostly use the Fujinon 16mm and 35mm lenses. Sometimes I use a Minolta M-Rokkor 40mm, Pentax Asahi Super-Takumar 55mm or Leica Summilux 50mm lens.
        </p>
      </article>
      <Suspense fallback={<Loader count={8} heading={true} classes="col-start-2 col-span-3"/>}>
        <StreamGrid classes="col-span-3 col-start-2"/>
      </Suspense>
    </>
  );
};

export default Stream;
