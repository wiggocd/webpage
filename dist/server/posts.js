"use strict";
/*
*   posts
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logAllPosts = exports.loadAllPosts = exports.getPostWithID = void 0;
var Resources = __importStar(require("./resources"));
var Global = require("./global");
function getPostWithID(id) {
    return Global.posts_list[id];
}
exports.getPostWithID = getPostWithID;
function loadAllPosts() {
    Global.posts_list = Resources.readPosts();
}
exports.loadAllPosts = loadAllPosts;
function logAllPosts() {
    console.log("Posts:");
    console.log(Global.posts_list);
}
exports.logAllPosts = logAllPosts;
//# sourceMappingURL=posts.js.map