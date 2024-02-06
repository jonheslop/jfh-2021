import React, { Suspense } from 'react';
import Image from 'next/image';
import { jobs } from '@/jobs.js';
import { allBlogs } from 'contentlayer/generated';
import Heading from '@/ui/heading';
import Link from '@/ui/link';
import NoteLink from '@/ui/note-link';
import Job from '@/ui/job';
import RecentStream from '@/ui/recent-stream';
import Loader from '@/ui/loader';
import { fetchStreamCurrentWeek } from '@/lib/fetch-stream';

export default async function Home() {
  const recentPosts = allBlogs
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .filter((post) => post.category !== 'photos')
    .slice(0, 5);

  const recentPhotos = allBlogs
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .filter((post) => post.category === 'photos')
    .slice(0, 5);

  const photos = await fetchStreamCurrentWeek();
  const photosIsEmpty = photos.length === 0;

  return (
    <>
      {!photosIsEmpty && <RecentStream photos={photos} />}
      <Heading
        level="h2"
        classes={`md:col-start-2 border-b pb-2 md:border-none mb-4 md:sticky ${
          photosIsEmpty ? 'top-16' : 'top-32'
        }`}
      >
        <Link underline={false} href="#posts">
          Blog posts
        </Link>
      </Heading>

      <ul className="md:col-start-4 pt-32 -mt-32" id="posts">
        {recentPosts.map((post) => (
          <NoteLink key={post.slug} data={post} />
        ))}
      </ul>
      <p className="md:col-start-4 mb-24">
        <Link href="/posts">See all posts »</Link>
      </p>

      <Heading
        level="h2"
        classes={`md:col-start-2 border-b pb-2 md:border-none mb-4 md:sticky ${
          photosIsEmpty ? 'top-32' : 'top-48'
        }`}
      >
        <Link underline={false} href="#photos">
          Photos
        </Link>
      </Heading>

      <ul className="md:col-start-4 pt-16 -mt-16" id="photos">
        {recentPhotos
          .filter((post) => post.category === 'photos')
          .map((post) => (
            <NoteLink key={post.slug} data={post} />
          ))}
      </ul>
      <p className="md:col-start-4 mb-24">
        <Link href="/posts/photos">See all photo posts »</Link>
      </p>

      <Heading
        classes={`md:col-start-2 border-b pb-2 md:border-none mb-4 md:sticky ${
          photosIsEmpty ? 'top-48' : 'top-64'
        }`}
      >
        <Link underline={false} href="#work">
          Work
        </Link>
      </Heading>
      <div className="md:col-start-4 pt-24 -mt-24" id="work" />
      {jobs.map((job) => (
        <Job key={job.company} data={job} />
      ))}
    </>
  );
}
