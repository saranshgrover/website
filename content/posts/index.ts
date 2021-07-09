

import test from './test'
import type { Tag } from '../tags'


export default {
	posts: [test],
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


