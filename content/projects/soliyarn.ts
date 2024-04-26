import { Project } from './index'
import { ui, ux, research, visualization } from '../tags'
import { createUxrFeaturedInfo } from './tools'

const soliyarn: Project = {
	id: 'soliyarn',
	name: 'Soliyarn: Designing for Smart Garments',
	description:
		'My Summer Internship as UX Engineer at Soliyarn, an E-Textile startup creating sensor based, PFC free clothing.',
	image: '/images/projects/soliyarn.png',
	isFeatured: true,
	tags: [ui, ux, research, visualization],
	mdFile: 'soliyarn.md',
	featuredInfo: createUxrFeaturedInfo(
		`Soliyarn & Soliyarn's Business Partners`,
		'May - August 2022',
		'UX Engineer',
		'Design Sprints, Prototyping, Usability Tests, A/B Testing',
		'Figma, Blender, Sketch, Illustrator, UserZoom'
	),
	// passwordProtect: true,
}

export default soliyarn
