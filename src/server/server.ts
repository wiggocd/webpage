/*
*   server
*/

import * as Global from "./global"
import * as Resources from "./resources"
import * as Posts from "./posts"
import { response } from "express"

const PORT_EXPRESS = 3000
const PORT_SOCKET = 3001
const express = require("express")
const app = express()
const io = require("socket.io")(PORT_SOCKET)

function runServer() {
    app.use(express.static("./"))
    app.listen(PORT_EXPRESS, () => {
        console.log("Express server running on port "+PORT_EXPRESS)
    })
}

function connect() {
    io.on("connect", (socket: any) => {
        socket.send("Connected to socket.io server on port "+PORT_SOCKET)

        socket.on("message", (data: any) => {
            console.log(data)
        })

        socket.on("getAllPosts", () => {
            console.log("Sending all posts...")
            socket.emit("postReturn", Resources.readPosts())
        })

        socket.on("getPost", (id: string) => {
            console.log("Sending post with id "+id+" to client...")
            socket.emit("postReturn", Posts.getPostWithID(id), id)
        })

        socket.on("msgEnter", (message, user: string) => {
            console.log("Chat message recieved from client with username "+user+": "+message)
            io.emit("msgRecieve", message, user)
            // [io.emit: sends to all clients / socket.emit: sends to client in question]
        })
    })
}

runServer()
connect()
Posts.loadAllPosts()