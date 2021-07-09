

import cah from './cah'
import nodus from './nodus'
import politech from './politech'
import pulze from './pulze'
import type { Tag } from '../tags'


export default {
	projects: [nodus,politech,pulze],
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


