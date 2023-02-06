import new_site from './new_site'
import type { Tag } from '../tags'

export default {
	posts: [new_site],
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
