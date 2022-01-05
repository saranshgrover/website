

import century_events_dashboard from './century_events_dashboard'
import mango_lakay from './mango_lakay'
import nodus from './nodus'
import politech from './politech'
import pulze from './pulze'
import wca_usability from './wca_usability'
import type { Tag } from '../tags'


export default {
	projects: [mango_lakay,wca_usability,century_events_dashboard,politech,nodus,pulze]
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
	darkImage?: string
	mdFile: string
}


