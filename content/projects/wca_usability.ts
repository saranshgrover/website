import { Project } from './index'
import { research } from '../tags'
import { createUxrFeaturedInfo } from './tools'
import usability_testing from 'content/tags/usability_testing'
import heuristic_eval from 'content/tags/heuristic_eval'

const wca_usability: Project = {
	id: 'wca_usability',
	name: 'Streamling WCA Competitor Flow',
	description:
		'The World Cube Association frequently struggles appealing to a new audience, as well as retaining new competitors. I performed a heuristic evaluation as well as a usability test to determine potential design solutions to this problem.',
	image: '/images/projects/wca_usability.png',
	isFeatured: true,
	tags: [research, usability_testing, heuristic_eval],
	mdFile: 'wca_usability.md',
	featuredInfo: createUxrFeaturedInfo(
		'Graduate Course/ World Cube Association',
		'October - November 2021',
		'UX researcher on a team of one',
		'Heuristic evaluation, Remote Usability Testing',
		'TryMyUI, Figma'
	),
}

export default wca_usability
