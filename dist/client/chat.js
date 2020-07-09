"use strict";
/*
*   chat
*/
socket.on("msgRecieve", function (message, user) {
    console.log("Chat message recieved from server: " + message);
    var mainElement = document.getElementById("main");
    var chat;
    if (mainElement != null) {
        chat = mainElement.getElementsByClassName("chat-history")[0];
        chat.innerHTML += "<b>" + user + "</b>: " + message + "<br>";
    }
    else {
        console.error("Element with id main cannot be found.");
    }
});
function addMsgListener() {
    var mainElement = document.getElementById("main");
    if (mainElement != null) {
        var msgfield = mainElement.getElementsByClassName("msgfield")[0];
        var userfield = mainElement.getElementsByClassName("userfield")[0];
        msgfield.addEventListener("keypress", function (event) {
            if (event.key == "Enter") {
                socket.emit("msgEnter", msgfield.value, userfield.value);
                msgfield.value = "";
            }
        });
    }
    else {
        console.error("Element with id main cannot be found.");
    }
}
function addListeners() {
    setTimeout(function () {
        addMsgListener();
    }, 500);
}
addListeners();
//# sourceMappingURL=chat.js.map