/**
 * Convert WordPress posts to 11ty from json export
 * https://heydonworks.com/article/wordpress-to-eleventy/
 */
const transformAndWriteToFile = require("json-to-frontmatter-markdown").default;
const wordpressData = require(__dirname + "/wordpress.json");
const posts = wordpressData.posts;

Object.keys(posts).forEach((p, i) => {
  let post = posts[p];

  transformAndWriteToFile({
    frontmatterMarkdown: {
      frontmatter: [
        {
          layout: "layouts/article.njk",
        },
        {
          title: post.title.rendered.replace(/&rsquo;/g, "’"),
        },
        {
          date: post.date,
        },
        {
          permalink: `articles/${post.slug}/index.html`,
        },
      ],
      body: post.content.rendered
        .replace(/https:\/\/www.kloh.ch\/wp-content\/uploads/g, "/images")
        .replace(/\/wp-content\/uploads/g, "/images")
        .replace(/ class="h3-like"/g, ""),
    },
    path: "./src/articles",
    fileName: `${post.slug}.md`,
  });
});
