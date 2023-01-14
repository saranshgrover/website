import { Project } from './index'
import { visualization, ui } from '../tags'
import { createUxrFeaturedInfo } from './tools'

const century_events_dashboard: Project = {
	id: 'century_events_dashboard',
	name: 'American Disaster Dashboard',
	description:
		'To better evaulate the impacts of Covid-19, this project compares its effects with various other 21st century major events in the US like 9/11 and the 2008 Financial Crisis',
	image: '/images/projects/century_events_dashboard.png',
	demo: 'https://youtu.be/kCyf_TN-ID8',
	isFeatured: false,
	tags: [visualization, ui],
	mdFile: 'century_events_dashboard.md',
	featuredInfo: createUxrFeaturedInfo(
		'Graduate Course in Visualization',
		'January - April 2021',
		'Lead Designer & Developer',
		'User Flows, Mockups, Expert Reviews',
		'Figma, React, D3'
	),
}

export default century_events_dashboard
