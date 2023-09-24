import Rss from 'rss';
import { allBlogs } from 'contentlayer/generated';
import { remark } from 'remark';
import html from 'remark-html';

const SITE_URL = "http://localhost:3000";

const markdownToHtml = async (markdown) => {
  const result = await remark().use(html).process(markdown);
  return result.toString();
};

export async function GET() {
  const feed = new Rss({
    title: "Notes - Jon Heslop",
    site_url: "https://jonheslop.com",
    feed_url: "https://jonheslop.com/feed.xml",
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

