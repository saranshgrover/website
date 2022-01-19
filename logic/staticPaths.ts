import fs from 'fs'
import {join} from 'path'
export function getPaths(dir: string, keepIndex=false) {
    const dirPath = join(process.cwd(),dir)
    let filenames = fs.readdirSync(dirPath)
    // let filenames =['a.ts']
    if(!keepIndex) {
        filenames = filenames.filter(f => f !=='index.ts' && f!== 'index.js' && f !== 'markdown' && f !== 'tools.js' && f !== 'tools.ts')
    }
    const paths = filenames.map(filename => (
        {
            params: {
                id: filename.slice(0, filename.lastIndexOf('.'))
            }
        }
        ))
    return paths
}