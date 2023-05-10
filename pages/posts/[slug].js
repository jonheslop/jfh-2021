import { useRouter } from "next/router.js";
import ErrorPage from "next/error.js";
import Head from "next/head.js";
import Image from 'next/image';
import { getAllPosts, getPostBySlug } from "../../lib/api.js";
import markdownToHtml from "../../lib/markdownToHtml.js";
import Layout from "../../components/layout";
import Heading from "../../components/heading";
import DateFormatter from "../../components/date";

export default function Post({ post, morePosts }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }


  return (
    <Layout pageTitle={post.title}>
      {router.isFallback ? (
        <Heading>Loading…</Heading>
      ) : (
        <>
          <header>
            <Heading level="h1">{post.title}</Heading>
            <p className="text-xl md:text-lg lg:text-xl text-gray-500 mt-16">
              <DateFormatter dateString={post.date} />
            </p>
          </header>
          <div
            className="col-span-2 max-w-xl post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </>
      )}
      {post.photos !== undefined && (
        <div
          className="col-start-2 col-span-3 w-full relative grid gap-16"
        >
        {post.photos.map((photo) => <Image width={2048} height={1366} alt="" key={photo} src={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo}/large`}/>)}
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "category",
    "photos",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
