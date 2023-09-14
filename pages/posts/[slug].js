import { useRouter } from "next/router.js";
import ErrorPage from "next/error.js";
import Head from "next/head.js";
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
      <Head>
        {post.coverImage !== undefined && (
          <meta
            property="og:image"
            content={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${post.coverImage}/small`}
            key="og:image"
          />
        )}
        {post.description !== undefined && (
          <meta
            property="og:description"
            content={post.description}
            key="og:description"
          />
        )}
      </Head>
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
        <div className="md:col-start-2 col-span-2 md:col-span-3 w-full relative grid gap-4 md:gap-8">
          {post.photos.map((photo, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="mx-auto py-2 md:py-4"
              alt=""
              id={`image-${i}`}
              key={photo}
              src={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo}/small`}
              srcSet={`https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo}/small 400w, https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo}/medium 1024w, https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo}/large 2048w`}
            />
          ))}
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
    "description",
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
