/*
*   client
*/

var io: any
const PORT_SOCKET = 3001
const hostname = location.hostname
const socket = io("ws://"+hostname+":"+PORT_SOCKET)

socket.on("connect", () => {
    socket.send("Client connected to socket.io server on port "+PORT_SOCKET)
    socket.emit("getPost", 0)
})

socket.on("message", (data: any) => {
    console.log(data)
})
