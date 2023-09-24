import Image from 'next/image'
import {jobs} from '@/jobs.js';
import { allBlogs } from 'contentlayer/generated';
import Heading from '@/ui/heading';
import Link from '@/ui/link';
import NoteLink from '@/ui/note-link';
import Job from '@/ui/job';

export default function Home() {
  const recentPosts = allBlogs
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .filter((post) => post.category !== 'photos')
    .slice(0,5);

  const recentPhotos = allBlogs
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .filter((post) => post.category === 'photos')
    .slice(0,5);

  return (
    <>
      <Heading level="h1" classes="mb-4 md:col-span-2 max-w-xl">
        Jon Heslop is a front end developer based in&nbsp;London.
      </Heading>
      <figure className="md:col-start-4">
        <Image
          src="/jon-heslop.jpg"
          alt="A picture of me in a garden chatting."
          width={1280}
          height={848}/>
        <figcaption className="text-xs text-gray-500 text-right">
          Photo by <Link external href="https://tomalprice.com/">Tom Price</Link>
        </figcaption>
      </figure>

      <Heading level="h2" classes="md:col-start-2 border-b pb-2 md:border-none md:sticky top-16 mb-4">
        <Link underline={false} href='#posts'>
          Blog posts
        </Link>
      </Heading>

      <ul className="md:col-start-4 pt-32 -mt-32" id="posts">
        {
          recentPosts
          .map((post) => (
            <NoteLink key={post.slug} data={post} />
          ))
        }
      </ul>
      <p className="md:col-start-4 mb-24"><Link href="/posts">See all posts »</Link></p>

      <Heading level="h2" classes="md:col-start-2 border-b pb-2 md:border-none md:sticky top-32 mb-4">
        <Link underline={false} href='#photos'>
          Photos
        </Link>
      </Heading>

      <ul className="md:col-start-4 pt-16 -mt-16" id="photos">
        {
          recentPhotos.filter((post) => post.category === 'photos')
          .map((post) => (
            <NoteLink key={post.slug} data={post} />
          ))
        }
      </ul>
      <p className="md:col-start-4 mb-24"><Link href="/posts/photos">See all photo posts »</Link></p>

      <Heading classes="md:col-start-2 border-b pb-2 md:border-none md:sticky top-48 mb-4">
        <Link underline={false} href='#work'>
          Work
        </Link>
      </Heading>
      <div className="md:col-start-4 pt-24 -mt-24" id="work"/>
      {jobs.map(job => <Job key={job.company} data={job}/>)}

    </>
  )
}
