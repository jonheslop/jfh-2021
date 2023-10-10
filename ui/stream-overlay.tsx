/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import useKeypress from 'react-use-keypress';
import { Exif, StreamPhoto } from '@/interfaces';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ExifList from './exif-list';

type Props = {
  photo: StreamPhoto;
  nextPhoto?: number;
  prevPhoto?: number;
};

const getAspect = (photo: StreamPhoto) => {
  const ratio = photo.width / photo.height;
  switch (true) {
    case ratio < 1:
      return 'portrait';
    case ratio > 1:
      return 'landscape';
    case ratio === 1:
      return 'square';
  }
};

const StreamOverlay = ({ photo, nextPhoto, prevPhoto, ...props }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const router = useRouter();

  const parsedExif: Exif = photo.exif ? JSON.parse(photo.exif?.toString()) : {};

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNextPhoto(),
    onSwipedRight: () => goToPrevPhoto(),
    onSwipedUp: () => goToIndex(),
    onSwipedDown: () => goToIndex(),
  });

  const goToPrevPhoto = () =>
    prevPhoto !== undefined ? router.push(`/stream/${prevPhoto}`) : null;
  const goToNextPhoto = () =>
    nextPhoto !== undefined ? router.push(`/stream/${nextPhoto}`) : null;
  const goToIndex = () => router.push('/stream');

  useKeypress(['ArrowRight', 'KeyJ'], () => goToNextPhoto());
  useKeypress(['ArrowLeft', 'KeyK'], () => goToPrevPhoto());
  useKeypress('Escape', () => goToIndex());

  return (
    <>
      <Link
        href={`/stream`}
        className="fixed inset-0 bg-black/20 backdrop-blur-sm group"
      >
        <span className="hidden bg-white/20 rounded-full w-12 h-12 lg:flex items-center justify-center text-black text-2xl absolute top-4 right-4 group-hover:bg-emerald-600 group-hover:text-white">
          ×
        </span>
      </Link>
      <div className="fixed inset-4 lg:inset-16 flex items-center justify-center">
        {prevPhoto && (
          <Link
            href={`/stream/${prevPhoto}`}
            className="hidden self-stretch lg:flex items-center text-6xl text-white p-4 flex-1 hover:-translate-x-8 transition-all"
          >
            &larr;
          </Link>
        )}
        {!prevPhoto && (
          <span className="self-stretch flex items-center justify-end flex-1" />
        )}

        <div
          className={`bg-white p-2 lg:p-6 2xl:p-8 w-100 group`}
          {...handlers}
        >
          <div
            className={`dark:bg-black grid ${
              isExpanded ? 'grid-cols-3' : 'grid-cols-1'
            } gap-2 lg:gap-4 relative`}
          >
            <img
              className="w-auto max-h-[calc(100vh-12rem)] col-span-2 self-center"
              alt=""
              id={`image-${photo.id}`}
              src={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo.cloudflareId}/large`}
            />

            {Object.keys(parsedExif).length !== 0 && (
              <ExifList
                exif={parsedExif}
                isExpanded={isExpanded}
                setExpanded={(bool: boolean) => setIsExpanded(bool)}
              />
            )}
          </div>
        </div>

        {nextPhoto && (
          <Link
            href={`/stream/${nextPhoto}`}
            className="hidden self-stretch lg:flex items-center justify-end text-6xl text-white p-4 flex-1 hover:translate-x-8 transition-all"
          >
            &rarr;
          </Link>
        )}
        {!nextPhoto && (
          <span className="self-stretch flex items-center justify-end flex-1" />
        )}
      </div>
    </>
  );
};

export default StreamOverlay;
