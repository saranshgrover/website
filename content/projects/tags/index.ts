import {IconType} from 'react-icons'
import pwa from './pwa'
import react from './react'
import research from './research'
import typescript from './typescript'
import javascript from './javascript'

export {
    pwa,
    react,
    research,
    typescript,
    javascript    
}

interface Tag {
    name: string,
    icon: IconType,
    showIcon: boolean
}

export type {Tag}