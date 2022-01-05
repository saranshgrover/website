import { IconType } from 'react-icons'


interface Tag {
	id: string
	name: string
	icon: IconType
	showIcon: boolean,
	featured: boolean
}

export type { Tag }
export {default as pwa} from './pwa'
export {default as react} from './react'
export {default as research} from './research'
export {default as typescript} from './typescript'
export {default as javascript} from './javascript'
export {default as ui} from './ui'


export {default as travel} from './travel'
export {default as coding} from './coding'
export {default as life} from './life'
export {default as featured} from './featured'
export {default as visualization} from './visualization'
export {default as ux} from './ux'