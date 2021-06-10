

import stony_brook from './stony_brook'
import test from './test'
import type { Tag } from '../tags'


export default {
	posts: [stony_brook,test],
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


