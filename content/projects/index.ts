import century_events_dashboard from './century_events_dashboard'
import mango_lakay from './mango_lakay'
import nodus from './nodus'
import politech from './politech'
import pulze from './pulze'
import soliyarn from './soliyarn'
import olliv from './olliv'
import wca_usability from './wca_usability'
import yeetcode from './yeetcode'
import type { Tag } from '../tags'
import { IconType } from 'react-icons'

export default {
	projects: [olliv, soliyarn, mango_lakay, wca_usability, politech, century_events_dashboard, nodus, pulze],
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
	mdFile?: string
	featuredInfo?: FeaturedInfo[]
	passwordProtect?: boolean
}

export interface FeaturedInfo {
	title: string
	content: string
	icon?: IconType
}
