import minimist from 'minimist'
import fs from 'fs'
import { Tag } from '../content/tags'

const args = minimist(process.argv.slice(2))
if(!args.n || !args.i || !args.p) {
    console.log('Missing -n (name), -i (icon), or -p (path)')
    process.exit(1)
}
const t: Tag = {
	id: args.p,
	name: args.n,
	icon: args.i,
	showIcon:  args.s === 'false' ? false : true,
}
const path = args.p

const iconPathName = (t.icon as any).split(/(?=[A-Z])/)[0].toLowerCase()

const fileContent = `

import {${t.icon}} from 'react-icons/${iconPathName}'
import { Tag } from './index'

const ${t.id}: Tag = {
	name: '${t.name}',
	icon: ${t.icon},
	showIcon: ${t.showIcon},
	id: ${t.id}
}

export default ${t.id} 

`

const indexContent = `export {default as ${path}} from './${path}'`

fs.writeFileSync(__dirname + `/../content/tags/${path}.ts`,fileContent)

fs.appendFileSync(__dirname + '/../content/tags/index.ts', indexContent)
console.log(t)