import {Project} from './index'
import { research, ui, javascript, react} from './tags'

const politech:  Project = {
    id: 'politech',
    name: 'PoliTech',
    description: 'A premier Automated Redistricting System (ARS) for the rapid generation of statewide congressional districts through various user-defined preferences as well as fairness and correctness measures.',
    image: '/images/projects/politech.gif',
    isFeatured: true,
    tags: [research, ui, javascript, react],
    mdFile: 'politech.md'

}

export default politech