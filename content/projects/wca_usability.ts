
import {Project} from './index'
import {} from '../tags'
import { createUxrFeaturedInfo } from './tools'

const wca_usability:  Project = {
    id: 'wca_usability',
    name: 'Streamling WCA Competitor Flow',
    description: 'The World Cube Association frequently struggles appealing to a new audience, as well as retaining new competitors. I performed a heuristic evaluation as well as a usability test to determine potential design solutions to this problem.',
    image: '/images/projects/wca_usability.png',
    darkImage: '/images/projects/wca_usability_dark.png',
    isFeatured: true,
    tags: [],
    mdFile: 'wca_usability.md',
    featuredInfo: createUxrFeaturedInfo('Graduate Course/ World Cube Association', 'October - November 2021','UX researcher on a team of one','Heuristic evaluation, Remote Usability Testing','TryMyUI, Figma')

}

export default wca_usability
