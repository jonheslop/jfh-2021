import {useRouter} from 'next/router.js';
import ErrorPage from 'next/error.js';
import Head from 'next/head.js';
import {getAllPosts, getPostBySlug} from '../../lib/api.js';
import markdownToHtml from '../../lib/markdownToHtml.js';
import Layout from '../../components/layout';
import Heading from '../../components/heading';
import DateFormatter from '../../components/date';

export default function Post({post, morePosts}) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404}/>;
  }

  return (
    <Layout pageTitle={post.title}>
      {router.isFallback ? (
        <Heading>Loading…</Heading>
      ) : (
        <>
          <header className="">
            <Heading level="h1">{post.title}</Heading>
            <p className="text-xl md:text-lg lg:text-xl text-gray-500 mt-16">
              <DateFormatter dateString={post.date}/>
            </p>
          </header>
          <div
            className="col-span-2 max-w-xl text-xl md:text-lg lg:text-xl leading-normal post-content"
            dangerouslySetInnerHTML={{__html: post.content}}
          />
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({params}) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage'
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
}
