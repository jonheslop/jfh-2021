import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allBlogs } from 'contentlayer/generated';
import Balancer from 'react-wrap-balancer';
import { Mdx } from '@/ui/mdx';
import Heading from '@/ui/heading';
import DateFormatter from '@/ui/date';

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    date: publishedTime,
    description,
    image,
    slug,
  } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://jonheslop.com/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function Blog({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(post.structuredData),
        }}
      ></script>
      <header>
        <Heading level="h1">
          <Balancer>{post.title}</Balancer>
        </Heading>
        <p className="text-xl md:text-lg lg:text-xl text-gray-500 mt-16">
          <DateFormatter dateString={post.date} />
        </p>
      </header>
      <div className="col-span-2 max-w-xl post-content">
        <Mdx code={post.body.code} />
      </div>
    </>
  );
}
