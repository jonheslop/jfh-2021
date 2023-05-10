import React from 'react';
import Image from 'next/image';
import Job from '@/components/job';
import Heading from '@/components/heading';
import Layout from '@/components/layout';
import Link from '@/components/link';
import DateFormatter from '@/components/date';
import {jobs} from '@/content/jobs.js';
import {slugify} from '@/utils/slugify';
import {getAllPhotoPosts} from '@/lib/api';
import {NoteLink} from '@/interfaces/index';
import NoteLinkItem from "@/components/note-link";

export async function getStaticProps({params}) {
  const posts = getAllPhotoPosts([
    'title',
    'date',
    'slug',
    'category',
    'coverImage',
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

const Posts = ({posts}: Props) => {
  return (
    <Layout pageTitle="Hello">
      <Heading level="h2" classes="md:col-start-2 border-b pb-2 md:border-none md:sticky top-16 mb-4">
        Photos
      </Heading>

      <ul className="md:col-start-4">
        {
          posts.map((post) => (
          <NoteLinkItem key={post.slug} data={post} />
          ))
        }
      </ul>
    </Layout>
  );
};

export default Posts;
