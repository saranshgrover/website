import minimist from 'minimist'
import fs from 'fs'
import {Project} from '../content/projects'

const args = minimist(process.argv.slice(2))

if(!args.id || !args.n) {
    console.log(args)
    console.log("Need --id (identity file) and -n (name)")
    process.exit(1)
}
const proj : Project = {
    id: args.id,
    name: args.n,
    demo: args.demo ?? undefined,
    github: args.github ?? undefined,
    isFeatured: args.featured ?? false,
    description: args.description ?? '',
    tags: args.tags ? args.tags.split(',') : [],
    image: args.image ?? '',
    mdFile: args.id + '.md'
}
console.log(proj)
const projContent = `
import {Project} from './index'
import {${proj.tags.join(',')}} from '../tags'

const ${proj.id}:  Project = {
    id: '${proj.id}',
    name: '${proj.name}',
    description: '${proj.description}',
    image: '${proj.image}',
    isFeatured: ${proj.isFeatured},
    tags: [${proj.tags.join(',')}],
    ${proj.demo && `demo: '${proj.demo}',`}
    ${proj.github && `github: '${proj.github}',`}
    mdFile: '${proj.mdFile}'

}

export default ${proj.id}
`

const mdContent = `

# ${proj.name}

`

fs.writeFileSync(__dirname + `/../content/projects/${proj.id}.ts`,projContent)
fs.writeFileSync(__dirname + `/../content/projects//markdown/${proj.mdFile}`,mdContent)