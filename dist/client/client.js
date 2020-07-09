"use strict";
/*
*   client
*/
var io;
var PORT_SOCKET = 3001;
var hostname = location.hostname;
var socket = io("ws://" + hostname + ":" + PORT_SOCKET);
socket.on("connect", function () {
    socket.send("Client connected to socket.io server on port " + PORT_SOCKET);
    socket.emit("getPost", 0);
});
socket.on("message", function (data) {
    console.log(data);
});
//# sourceMappingURL=client.js.map