import minimist from 'minimist'
import fs from 'fs'
import content from '../content/posts'
import { match } from 'assert'

const args = minimist(process.argv.slice(2))
if(!args._[0]) {
    console.error('Please pass along the ID of the post to publish')
    process.exit(1)
}
const postId = args._[0]
const post = content.posts.find(post => post.id === postId)
if(!post) {
    console.error("Post not found")
    process.exit(1)
}

let postMdContent = fs.readFileSync(__dirname + `/../content/posts/markdown/${post.id}.md`, 'utf-8')
postMdContent = postMdContent.replace(/^(\n)*---(.|\n)*?---/,'')
postMdContent = 
`---
title: "${post.title}"
description: "${post.description}"
date: "${new Date().toDateString()}"
image: "${post.image}"
tags:
${post.tags.map(t => ` - ${t.id}`).join('\n')}
isFeatured: ${post.isFeatured}
mdFile: "${post.mdFile}"
id: "${post.id}"
published: true
---
${postMdContent}
`

const postContent = `
import {Post} from './index'
import {${post.tags.map(t => t.id).join(',')}} from '../tags'

const ${post.id}:  Post = {
    id: "${post.id}",
    title: "${post.title}",
    description: "${post.description}",
    date: "${new Date().toDateString()}",
    image: "${post.image}",
    isFeatured: ${post.isFeatured},
    tags: [${post.tags.map(t => t.id).join(',')}],
    mdFile: "${post.mdFile}",
    published: true

}

export default ${post.id}
`


fs.writeFileSync(__dirname + `/../content/posts/${post.id}.ts`,postContent)
fs.writeFileSync(__dirname + `/../content/posts/markdown/${post.mdFile}`,postMdContent)