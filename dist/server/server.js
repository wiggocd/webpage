"use strict";
/*
*   server
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
var Resources = __importStar(require("./resources"));
var Posts = __importStar(require("./posts"));
var PORT_EXPRESS = 3000;
var PORT_SOCKET = 3001;
var express = require("express");
var app = express();
var io = require("socket.io")(PORT_SOCKET);
function runServer() {
    app.use(express.static("./"));
    app.listen(PORT_EXPRESS, function () {
        console.log("Express server running on port " + PORT_EXPRESS);
    });
}
function connect() {
    io.on("connect", function (socket) {
        socket.send("Connected to socket.io server on port " + PORT_SOCKET);
        socket.on("message", function (data) {
            console.log(data);
        });
        socket.on("getAllPosts", function () {
            console.log("Sending all posts...");
            socket.emit("postReturn", Resources.readPosts());
        });
        socket.on("getPost", function (id) {
            console.log("Sending post with id " + id + " to client...");
            socket.emit("postReturn", Posts.getPostWithID(id), id);
        });
        socket.on("msgEnter", function (message, user) {
            console.log("Chat message recieved from client with username " + user + ": " + message);
            io.emit("msgRecieve", message, user);
            // [io.emit: sends to all clients / socket.emit: sends to client in question]
        });
    });
}
runServer();
connect();
Posts.loadAllPosts();
//# sourceMappingURL=server.js.map