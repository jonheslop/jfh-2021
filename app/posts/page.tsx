import React from 'react';
import Image from 'next/image';
import { allBlogs } from 'contentlayer/generated';
import Heading from '@/ui/heading';
import Link from '@/ui/link';
import DateFormatter from '@/ui/date';
import NoteLinkItem from "@/ui/note-link";

const Posts = () => {
    const allPosts = allBlogs
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .filter((post) => post.category !== 'photos');

  return (
    <>
      <Heading level="h2" classes="md:col-start-2 border-b pb-2 md:border-none md:sticky top-16 mb-4">
        Blog posts
      </Heading>

      <ul className="md:col-start-4">
        {
          allPosts.map((post) => (
          <NoteLinkItem key={post.slug} data={post} />
          ))
        }
      </ul>
    </>
  );
};

export default Posts;
