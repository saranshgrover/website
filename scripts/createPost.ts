import args from 'minimist'
import path from 'path'

console.log(args(process.argv.slice(2)))

console.log(process.cwd())