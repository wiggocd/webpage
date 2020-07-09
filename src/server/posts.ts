/*
*   posts
*/

import * as Resources from "./resources"
import Global = require("./global")

export function getPostWithID(id: string): any {
    return Global.posts_list[id]
}

export function loadAllPosts() {
    Global.posts_list = Resources.readPosts();
}

export function logAllPosts() {
    console.log("Posts:")
    console.log(Global.posts_list)
}