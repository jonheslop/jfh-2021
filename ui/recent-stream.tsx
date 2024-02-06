'use client';

import React, { Suspense } from 'react';
import useSWR from 'swr';
import Heading from '@/ui/heading';
import Link from '@/ui/link';
import StreamGrid from '@/ui/stream-grid';
import Loader from '@/ui/loader';
import { fetcher } from '@/lib/helpers';
import { StreamPhoto } from '@/interfaces';

const RecentStream = () => {
  const { data, error, isLoading } = useSWR<StreamPhoto[]>(
    '/api/stream',
    fetcher
  );

  if (isLoading) {
    return (
      <Loader
        count={8}
        classes="md:col-start-2 md:col-span-3 grid-cols-2 md:grid-cols-8"
      />
    );
  }

  if (data?.length !== 0 && data !== undefined) {
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

        <Suspense
          fallback={
            <Loader
              count={8}
              classes="md:col-start-2 md:col-span-3 grid-cols-2 md:grid-cols-8"
            />
          }
        >
          <StreamGrid
            photos={data}
            id="stream"
            classes="md:col-span-3 md:col-start-2 md:pt-32 md:-mt-32"
            currentWeekOnly
          />
        </Suspense>

        <p className="md:col-start-2 mb-24">
          <Link href="/stream">See photo stream archive »</Link>
        </p>
      </>
    );
  }
  return null;
};

export default RecentStream;
