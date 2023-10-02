import React, {Suspense} from 'react';
import Heading from '@/ui/heading';
import StreamGrid from '@/ui/stream-grid';
import Link from '@/ui/link';
import Loader from '@/ui/loader';

type Props = {
  params: { photo: string[] }
}

const Stream = async ({ params }: Props) => {
  const photo = 'photo' in params ? params.photo[0] : undefined;

  return (
    <>
      <Heading classes="md:sticky top-16 text-white mix-blend-difference md:col-span-2">Stream</Heading>
      <p className="text-xl md:text-lg lg:text-xl leading-normal max-w-xl md:col-start-4 mt-3">
        Here’s a stream of my photos, I thought would be fun to build myself somewhere to post them that wasn’t just Instagram. Mostly shot on my X-Pro3 but probably some iPhone pics too.
      </p>
      <Suspense fallback={<Loader count={8} heading={true} classes="md:col-start-2 md:col-span-3"/>}>
        <StreamGrid selected={photo} classes="md:col-span-3 md:col-start-2"/>
      </Suspense>
    </>
  );
};

export default Stream;
