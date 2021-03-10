import React from 'react';
import Image from 'next/image';
import Job from '../components/job';
import Heading from '../components/heading';
import Layout from '../components/layout';
import Link from '../components/link';
import DateFormatter from '../components/date';
import {jobs} from '../content/jobs.js';
import {slugify} from '../utils';
import {getAllPosts} from '../lib/api';
import {NoteLink} from '../interfaces';

export async function getStaticProps({params}) {
  const posts = getAllPosts([
    'title',
    'date',
    'slug'
  ]);

  return {
    props: {
      posts: [...posts]
    }
  };
}

type Props = {
  posts: NoteLink[];
};

const Home = ({posts}: Props) => {
  return (
    <Layout pageTitle="Hello">
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
        Blog posts
      </Heading>

      <ul className="col-start-4">
        {
          posts.map(({slug, title, date}) => (
            <li className="mb-8">
              <Link key={slug} href={`/posts/${slug}`} underline={false}>
                <Heading level="h3" classes="underline">{title}</Heading>
                <p className="text-xl md:text-lg lg:text-xl text-gray-500"><DateFormatter dateString={date}/></p>
              </Link>
            </li>
          ))
        }
      </ul>

      <Heading classes="md:col-start-2 border-b pb-2 md:border-none md:sticky top-16 mb-4">
        Work
      </Heading>
      {jobs.map(job => <Job key={slugify(job.company)} data={job}/>)}
    </Layout>
  );
};

export default Home;
