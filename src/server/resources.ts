/*
*   resources
*/

import fs, { readFileSync } from "fs"

export function readPosts(): any {
    /*
    var json: any = null
    fs.readFile("dist/server/posts.json", (err, data) => {
        if (err) throw err
        json = JSON.parse(data.toString())
        return json
    })
    */
    const data = readFileSync("dist/server/posts.json")
    return JSON.parse(data.toString())
}
