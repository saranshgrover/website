---
title: "New Site!"
description: ""
date: "Thu Jul 15 2021"
image: "/images/posts/new_site/blog.jpeg"
tags:
 - coding
isFeatured: true
mdFile: "new_site.md"
id: "new_site"
published: true
---


# Welcome to My New Site!

Hey folks, this is the first blog post I'll be making in this v2 of [saranshgrover.com](saranshgrover.com). In this post I'll describe what i have in mind with this website, and how I created it.

## What's new?  

Well, what *isn't?* I've revamped the entire website, and coded all of it myself. You can find the code available [on my github](https://github.com/saranshgrover/website) but I'll try to explain the basics:

All the content in this site (even what you're reading) is written in Markdown, styled by [Chakra-UI](https://chakra-ui.com) and then rendered by [React-Markdown](https://github.com/remarkjs/react-markdown). All of these pages are built by [NextJS](https://nextjs.org/) and then delivered to you by [Netlify's CDNs](https://netlify.com/). Simple, right?

The site is divided into a [**Projects**](/projects) and a [**Blog**](/blog) section. In addition to this, I've heavily used the concept of Tags - so you can [filter by blogs about coding](/blog?tags=coding). Soon, I will also be working on implementing a searching functionality, largely through tags. The reason behind this is simple - I enjoy writing about a large array of topics, and I wan't people visiting my blog to easily access what part of my writing they are most interested in.

You'll also notice a way to comment under blogs - this is faciliated by [GraphComment](https://graphcomment.com/en/) using a simple API, which allows me to moderate and flag comments easily.

There is also an [RSS feed](https://portfolio.saranshgrover.com/rss/feed.xml) generated every time the project is built.

This is the basic MVP of my current site. The goal is to iterate and add new features as I use it more often, but I'm very happy with this starting point. I also want to work on making this a template website for others to use - stay tuned for that. This domain has come a long way - my first site was written in PHP, which I truly believed in 2017 to be the best programming language of all time. Here we are now ;)

Special thanks:
- Brittany Chiang - Her amazing [portfolio](https://brittanychiang.com/) was a huge inspiration
- [Chakra-UI-Markdown-Renderer](https://github.com/mustaphaturhan/chakra-ui-markdown-renderer) - I was able to use this as the basis for my markdown styling, saving loads of trouble
