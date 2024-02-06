import Rss from 'rss';
import { prisma } from '@/lib/prisma';
import { remark } from 'remark';
import html from 'remark-html';

const SITE_URL = 'https://jonheslop.com/stream';

const markdownToHtml = async (markdown: string) => {
  const result = await remark().use(html).process(markdown);
  return result.toString();
};

export async function GET() {
  const feed = new Rss({
    title: 'Jon Heslop - stream',
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/feed.xml`,
    image_url: `${SITE_URL}/favicon.gif`,
    description:
      'Jon Heslop is a front end developer based in London. This is his photo feed',
    language: 'en',
  });

  const stream = await prisma.photo.findMany({
    orderBy: [{ createdAt: 'desc' }],
  });

  await Promise.all(
    stream.map(async (photo) => {
      const content = `<p><img
              alt=""
              src="https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo.cloudflareId}/small"
              srcSet="https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo.cloudflareId}/small 400w, https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo.cloudflareId}/medium 1024w, https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo.cloudflareId}/large 2048w"
            /></p>`;

      feed.item({
        title: photo.createdAt.toLocaleString(),
        description: content,
        url: `${SITE_URL}/stream/${photo.id}`,
        date: photo.createdAt,
      });
    })
  );

  return new Response(feed.xml(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
