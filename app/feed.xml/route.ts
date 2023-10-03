import Rss from 'rss';
import { allBlogs } from 'contentlayer/generated';
import { remark } from 'remark';
import html from 'remark-html';

const SITE_URL = "https://jonheslop.com";

const markdownToHtml = async (markdown: string) => {
  const result = await remark().use(html).process(markdown);
  return result.toString();
};

export async function GET() {
  const feed = new Rss({
    title: "Jon Heslop - feed",
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/feed.xml`,
    image_url: `${SITE_URL}/favicon.gif`,
    description: "Jon Heslop is a front end developer based in London.",
    language: "en",
  });

    await Promise.all(
      allBlogs.map(async (post) => {
        var content = await markdownToHtml(post.body.raw);

        if (post.photos !== undefined) {
          const photos = post.photos.map((photo) => (
            `<p><img
              alt=""
              src="https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo}/small"
              srcSet="https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo}/small 400w, https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo}/medium 1024w, https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo}/large 2048w"
            /></p>`
          ));
          content = content + photos.join(' ');
        }

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

