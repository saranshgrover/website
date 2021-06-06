import nodus from './nodus'
import pulze from './pulze'
import politech from './politech'
import type { Tag } from '../tags'


export default {
	projects: [politech,nodus, pulze],
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
	mdFile: string
}
