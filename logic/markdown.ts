import fs from 'fs'
import {join} from 'path'

const mdDirectory = join(process.cwd(),'content/projects/markdown')

export function getMdFor(project: string) {
    const path = join(mdDirectory,`${project}.md`)
    const content = fs.readFileSync(path, 'utf8')
    return content

}