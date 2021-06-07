import minimist from 'minimist'
import fs from 'fs'
import {Post} from '../content/posts'

const args = minimist(process.argv.slice(2))

if(!args.id || !args.t) {
    console.log(args)
    console.log("Need --id (identity file) and -t (title)")
    process.exit(1)
}
const post : Post = {
    id: args.id,
    title: args.t,
    date: new Date().toDateString(),
    published: false,
    isFeatured: args.featured ?? false,
    description: args.description ?? '',
    tags: args.tags ? args.tags.split(',') : [],
    image: args.image ?? '',
    mdFile: args.id + '.md'
}
console.log(post)
const projContent = `
import {Post} from './index'
import {${post.tags.join(',')}} from '../tags'

const ${post.id}:  Post = {
    id: '${post.id}',
    title: '${post.title}',
    description: '${post.description}',
    date: '${post.date}',
    image: '${post.image}',
    isFeatured: ${post.isFeatured},
    tags: [${post.tags.join(',')}],
    mdFile: '${post.mdFile}',
    published: ${post.published}

}

export default ${post.id}
`

const mdContent =
`---
title: '${post.title}'
description: '${post.description}'
date: '${post.date}'
image: '${post.image}'
tags:
${post.tags.map(t => ` - ${t}`).join('\n')}
isFeatured: ${post.isFeatured}
mdFile: ${post.mdFile}
id: ${post.id}
published: ${post.published}
---

# ${post.title}

`



fs.writeFileSync(__dirname + `/../content/posts/${post.id}.ts`,projContent)
fs.writeFileSync(__dirname + `/../content/posts/markdown/${post.mdFile}`,mdContent)


const allPosts = fs.readdirSync(__dirname + `/../content/posts/`).filter(s => (s.indexOf('.ts') !== -1 || s.indexOf('.js')!==-1) && s !== 'index.ts').map(s => s.slice(0, s.lastIndexOf('.')))
console.log(allPosts)
const indexContent = `

${allPosts.map(post => `import ${post} from './${post}'`).join('\n')}
import type { Tag } from '../tags'


export default {
	posts: [${allPosts.join(',')}],
}

export interface Post {
	id: string
	title: string
    date: string
	isFeatured: boolean
	description: string
	tags: Tag[]
	image: string
	mdFile: string
    published: boolean
}


`

fs.writeFileSync(__dirname + `/../content/posts/index.ts`,indexContent)