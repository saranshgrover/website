import nodus from './nodus'
import pulze from './pulze'
import type { Tag } from './tags/'
export default {
	projects: [nodus, pulze],
	tags: ['React', 'Web App', 'Research'],
}

export interface Project {
	id: string
	name: string
	demo?: string
	github?: string
	isFeatured: boolean
	description: string
	tags: Tag[]
	image: string
}
