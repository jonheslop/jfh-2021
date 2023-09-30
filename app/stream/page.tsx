import React, {Suspense} from 'react';
import Heading from '@/ui/heading';
import StreamGrid from '@/ui/stream-grid';
import Link from '@/ui/link';
import Loader from '@/ui/loader';

const Stream = async () => {
  return (
    <>
      <Heading classes="md:sticky top-16 text-white mix-blend-difference">Stream</Heading>
      <article className="md:col-start-4 space-y-4 mt-3">
        <p className="text-xl md:text-lg lg:text-xl leading-normal max-w-xl">
          Here’s a stream of my photos, I thought would be fun to build myself somewhere to post them that wasn’t just Instagram. Mostly shot on my X-Pro3 but probably some iPhone pics too.
        </p>
      </article>
      <Suspense fallback={<Loader count={8} heading={true} classes="col-start-2 col-span-3"/>}>
        <StreamGrid classes="col-span-3 col-start-2"/>
      </Suspense>
    </>
  );
};

export default Stream;
