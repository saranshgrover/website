import fs from "fs";
import { Feed } from "feed";
import content from "content/posts";
import {join} from 'path'

const generateRssFeed = async () => {
const {posts} = content
  const siteURL = process.env.SITE_URL;
  const date = new Date();
  const author = {
    name: "Saransh Grover",
    email: "contact@saranshgrover.com",
    link: "https://twitter.com/saranshgrover",
  };

  const feed = new Feed({
    title: "Saransh Grover's blog",
    description: "",
    id: siteURL!,
    link: siteURL,
    image: `${siteURL}/images/cartoon-me.jpg`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Saransh Grover`,
    updated: date,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`,
    },
    author,
  });

  posts.forEach((post) => {
    const url = `${siteURL}/blog/${post.id}`;

    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description,
      content: post.description,
      author: [author],
      contributor: [author],
      date: new Date(post.date),
    });
  });

  fs.mkdirSync(join(process.cwd(),"public/rss"), { recursive: true })
  fs.writeFileSync(join(process.cwd(),"public/rss/feed.xml"), feed.rss2())
  fs.writeFileSync(join(process.cwd(),"public/rss/atom.xml"), feed.atom1())
  fs.writeFileSync(join(process.cwd(),"public/rss/feed.json"), feed.json1())
};
export {generateRssFeed}