
import {Project} from './index'
import {research, ux} from '../tags'
import {GrStakeholder} from 'react-icons/gr'
import { createUxrFeaturedInfo } from './tools'

const mango_lakay:  Project = {
    id: 'mango_lakay',
    name: 'Mango Lakay: Improving Vendor Experience',
    description: "Mango Lakay - an online directory for Haitian owned business was failing to acquire new vendor partnerships. We did UX research using Contextual Design methods to suggest design solutions",
    image: '/images/projects/mango_lakay_new.png',
    isFeatured: true,
    tags: [research, ux],
    mdFile: 'mango_lakay.md',
    featuredInfo: createUxrFeaturedInfo('Association of Haitian Professionas', 'September - December 2021', 'UX Analyst','Contextual Inquiry, Interviews, Interpretation Sessions, Affinity Diagrams, Journey Map','Miro, Figma, Adobe Illustrator')
}

export default mango_lakay
