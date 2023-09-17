import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import RSS from 'rss';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import highlight from 'remark-highlight.js';

const markdownToHtml = async (markdown) => {
  const result = await remark().use(highlight).use(html).process(markdown);
  return result.toString();
};

async function generate() {
  const feed = new RSS({
    title: "Notes - Jon Heslop",
    site_url: "https://jonheslop.com",
    feed_url: "https://jonheslop.com/feed.xml",
  });

  const fileName = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(fileName);
  const posts = await fs.readdir(path.join(__dirname, '../..', '_posts')); 

  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith('index.')) return;

      const content = await fs.readFile(
        path.join(__dirname, '../..', '_posts', name)
      );
      const frontmatter = matter(content);

      var mainContent = await markdownToHtml(frontmatter.content || '');

      if (frontmatter.data.photos !== undefined) {
        const photos = frontmatter.data.photos.map((photo) => (
          // eslint-disable-next-line @next/next/no-img-element
          `<p><img
            alt=""
            key="${photo}"
            src="https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo}/small"
            srcSet="https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo}/small 400w, https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo}/medium 1024w, https://imagedelivery.net/tfgleCjJafHVtd2F4ngDnQ/${photo}/large 2048w"
          /></p>`
        ));
        mainContent = mainContent + photos.join('<br/>');
      }

      feed.item({
        title: frontmatter.data.title,
        url: 'https://jonheslop.com' + '/posts/' + name.replace(/\.md?/, ''),
        date: frontmatter.data.date,
        description: mainContent,
        categories: [frontmatter.data.category],
        author: 'Jon Heslop',
      });
    })
  );

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
