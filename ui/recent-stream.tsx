'use client';

import React, { Suspense } from 'react';
import useSWR from 'swr';
import Heading from '@/ui/heading';
import Link from '@/ui/link';
import StreamGrid from '@/ui/stream-grid';
import Loader from '@/ui/loader';
import { fetcher } from '@/lib/helpers';
import { StreamPhoto } from '@/interfaces';

const Nothing = () => {
  return (
    <>
      {'Nothing…'.split('').map((letter: string) => (
        <div
          key={`letter-${letter}`}
          className="aspect-[2/3] flex items-center justify-center bg-gray-200  dark:bg-gray-800 text-8xl text-white dark:text-black uppercase"
        >
          {letter}
        </div>
      ))}
    </>
  );
};

const RecentStream = () => {
  const { data, error, isLoading } = useSWR<StreamPhoto[]>(
    '/api/stream',
    fetcher
  );

  return (
    <>
      <Heading
        level="h2"
        classes="md:col-start-2 md:col-span-3 border-b md:border-none md:sticky top-16"
      >
        <Link underline={false} href="#stream">
          So far this week&hellip;
        </Link>
      </Heading>

      {isLoading && (
        <Loader
          count={8}
          classes="md:col-start-2 md:col-span-3 grid-cols-2 md:grid-cols-8"
        />
      )}

      {data?.length === 0 && (
        <div className="grid gap-2 md:gap-4 lg:gap-8 md:col-start-2 md:col-span-3 grid-cols-2 md:grid-cols-8">
          <Nothing />
        </div>
      )}

      {data?.length !== 0 && data !== undefined && (
        <StreamGrid
          photos={data}
          id="stream"
          classes="md:col-span-3 md:col-start-2 md:pt-32 md:-mt-32"
          currentWeekOnly
        />
      )}

      <p className="md:col-start-2 mb-24">
        <Link href="/stream">See all stream posts »</Link>
      </p>
    </>
  );
};

export default RecentStream;
