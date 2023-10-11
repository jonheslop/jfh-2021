import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image'
import { allBlogs } from 'contentlayer/generated';
import Balancer from 'react-wrap-balancer';
import { Mdx } from '@/ui/mdx';
import Heading from '@/ui/heading';
import DateFormatter from '@/ui/date';

type Props = {
  params: { id: string, slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export const generateStaticParams = async () => allBlogs.map((post) => ({ slug: post.slug }));

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return {};
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

export default async function Blog({ params }: Props) {
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
      <div className="md:col-start-4 md:col-span-1 max-w-xl post-content">
        <Mdx code={post.body.code} />
      </div>
      {post.photos !== undefined && (
        <div className="md:col-start-2 md:col-span-3 w-full relative grid gap-4 md:gap-8">
          {post.photos.map((cloudflareId) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="mx-auto py-2 md:py-4"
              alt=""
              id={`image-${cloudflareId}`}
              key={cloudflareId}
              src={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${cloudflareId}/small`}
              srcSet={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${cloudflareId}/small 400w, https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${cloudflareId}/medium 1024w, https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${cloudflareId}/large 2048w`}
              loading='lazy'
            />
          ))}
        </div>
      )}
    </>
  );
}
