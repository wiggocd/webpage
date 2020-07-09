"use strict";
/*
*   resources
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.readPosts = void 0;
var fs_1 = require("fs");
function readPosts() {
    /*
    var json: any = null
    fs.readFile("dist/server/posts.json", (err, data) => {
        if (err) throw err
        json = JSON.parse(data.toString())
        return json
    })
    */
    var data = fs_1.readFileSync("dist/server/posts.json");
    return JSON.parse(data.toString());
}
exports.readPosts = readPosts;
//# sourceMappingURL=resources.js.map