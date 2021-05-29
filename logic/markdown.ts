import fs from 'fs'
import {join} from 'path'

const mdDirectory = (dir: string) => join(process.cwd(), dir)

export function getMdFor(project: string, directory='content/projects/markdown') {
    const path = join(mdDirectory(directory),`${project}.md`)
    const content = fs.readFileSync(path, 'utf8')
    return content

}