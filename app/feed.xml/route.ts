import Rss from 'rss';
import { allBlogs } from 'contentlayer/generated';
import { remark } from 'remark';
import html from 'remark-html';

const SITE_URL = "htts://jonheslop.com";

const markdownToHtml = async (markdown: string) => {
  const result = await remark().use(html).process(markdown);
  return result.toString();
};

export async function GET() {
  const feed = new Rss({
    title: "Notes - Jon Heslop",
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/feed.xml`,
    image_url: `${SITE_URL}/favicon.gif`,
    description: "Jon Heslop is a front end developer based in London.",
    language: "en",
  });

    await Promise.all(
      allBlogs.map(async (post) => {
        const content = await markdownToHtml(post.body.raw);

        feed.item({
          title: post.title,
          description: content,
          url: `${SITE_URL}/posts/${post.slug}`,
          date: post.date,
        });
      })
  );

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

