import React, { Suspense } from 'react';
import { prisma } from '@/lib/prisma';
import Heading from '@/ui/heading';
import StreamGrid from '@/ui/stream-grid';
import Link from '@/ui/link';
import Loader from '@/ui/loader';
import StreamOverlay from '@/ui/stream-overlay';
import { StreamPhoto } from '@/interfaces';
import { fetchStream } from '@/lib/fetch-stream';
import BaseLink from '@/ui/link';

type Props = {
  params: { photo: string[] };
};

const Stream = async ({ params }: Props) => {
  const photoId: number | undefined =
    'photo' in params ? parseInt(params.photo[0]) : undefined;

  const selectedPhoto =
    photoId !== undefined
      ? await prisma.photo.findFirst({ where: { id: photoId } })
      : null;

  const prevPhoto =
    photoId !== undefined
      ? await prisma.photo.findFirst({
          where: { createdAt: { gt: selectedPhoto?.createdAt } },
          orderBy: [{ createdAt: 'asc' }],
          take: 1,
          select: { id: true },
        })
      : null;

  const nextPhoto =
    photoId !== undefined
      ? await prisma.photo.findFirst({
          where: { createdAt: { lt: selectedPhoto?.createdAt } },
          orderBy: [{ createdAt: 'desc' }],
          take: 1,
          select: { id: true },
        })
      : null;

  const allPhotos = await fetchStream();

  return (
    <>
      <Heading classes="md:sticky top-16 text-white mix-blend-difference md:col-span-2">
        Stream
      </Heading>
      <p className="text-xl md:text-lg lg:text-xl leading-normal max-w-xl md:col-start-4 mt-3">
        Here is a stream of my photos, I thought would be fun to build myself
        somewhere to post them that was not just{' '}
        <BaseLink external href="https://instagram.com/jonheslop">
          Instagram
        </BaseLink>
        . Almost all the shots were taken on my{' '}
        <BaseLink external href="https://en.wikipedia.org/wiki/Fujifilm_X-Pro3">
          X-Pro3
        </BaseLink>{' '}
        but there’s the odd iPhone picture too.
      </p>
      <Suspense
        fallback={
          <Loader
            count={8}
            heading={true}
            classes="md:col-start-2 md:col-span-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6"
          />
        }
      >
        <StreamGrid photos={allPhotos} classes="md:col-span-3 md:col-start-2" />
      </Suspense>
      {selectedPhoto !== null && (
        <StreamOverlay
          photo={selectedPhoto}
          nextPhoto={nextPhoto?.id}
          prevPhoto={prevPhoto?.id}
        />
      )}
    </>
  );
};

export default Stream;
