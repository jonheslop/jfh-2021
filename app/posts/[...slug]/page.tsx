import DateFormatter from "@/ui/date";
import Heading from "@/ui/heading";
import { Mdx } from "@/ui/mdx";
import { allBlogs } from "contentlayer/generated";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string; slug: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateStaticParams = async () =>
  allBlogs.map((post) => ({ slug: post.slug.split("/") }));

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const post = allBlogs.find((post) => post.slug === params.slug.join("/"));
  if (!post) {
    return {};
  }

  const { title, date: publishedTime, description, image, slug } = post;

  const meta = {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://jonheslop.com/posts/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };

  if (image !== undefined) {
    // @ts-ignore - this works fine, think nextjs is out of date
    meta.openGraph.images = [{ url: image }];
  }

  return meta;
}

export default async function Blog({ params }: Props) {
  const post = allBlogs.find((post) => post.slug === params.slug.join("/"));

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
      <header className="md:col-span-2">
        <Heading level="h1" classes="text-balance">
          {post.title}
        </Heading>
        <p className="text-xl md:text-lg lg:text-xl text-gray-500 mt-4 text-pretty">
          {post.description}
        </p>
        <p className="text-xl md:text-lg lg:text-xl text-gray-500 mt-14">
          <DateFormatter dateString={post.date} />
        </p>
      </header>
      <div className="md:col-start-4 md:col-span-1 max-w-xl post-content text-pretty">
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
              loading="lazy"
            />
          ))}
        </div>
      )}
    </>
  );
}
