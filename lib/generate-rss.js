const { promises: fs } = require("fs");
const path = require("path");
const RSS = require("rss");
const matter = require("gray-matter");
const remark = require("remark");
const html = require("remark-html");
const highlight = require("remark-highlight.js");

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

  const posts = await fs.readdir(path.join(__dirname, "..", "_posts"));

  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith("index.")) return;

      const content = await fs.readFile(
        path.join(__dirname, "..", "_posts", name)
      );
      const frontmatter = matter(content);

      feed.item({
        title: frontmatter.data.title,
        url: "/posts/" + name.replace(/\.md?/, ""),
        date: frontmatter.data.date,
        description: await markdownToHtml(frontmatter.content || ""),
        categories: ["notes"],
        author: "Jon Heslop",
      });
    })
  );

  await fs.writeFile("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
