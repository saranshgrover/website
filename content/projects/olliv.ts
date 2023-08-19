import { Project } from './index'
import { ux, coding, react, featured } from '../tags'

const olliv: Project = {
	id: 'olliv',
	name: 'Olliv by Coinflip',
	description: `At Olliv, I currently work on designing and developing experiences that empower users to buy, sell and trade crypto through Olliv products. In particular, I manage public facing websites for all our products, which are essential to creating a conversion for users into the Olliv ecosystem.`,
	isFeatured: true,
	tags: [ux, coding, react, featured],
	// mdFile: 'olliv.md',
	image: '/images/projects/olliv-video.mp4',
	demo: 'https://olliv.com',
}

export default olliv
