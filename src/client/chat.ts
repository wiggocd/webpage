/*
*   chat
*/

socket.on("msgRecieve", (message, user: string) => {
    console.log("Chat message recieved from server: "+message)
    const mainElement = document.getElementById("main")
    var chat: any
    if (mainElement != null) {
        chat = mainElement.getElementsByClassName("chat-history")[0]
        chat.innerHTML += "<b>"+user+"</b>: "+message+"<br>"
    } else {
        console.error("Element with id main cannot be found.")
    }
})

function addMsgListener() {
    const mainElement = document.getElementById("main")
    if (mainElement != null) {
        var msgfield: any = mainElement.getElementsByClassName("msgfield")[0]
        var userfield: any = mainElement.getElementsByClassName("userfield")[0]

        msgfield.addEventListener("keypress", (event: any) => {
            if (event.key == "Enter") {
                socket.emit("msgEnter", msgfield.value, userfield.value)
                msgfield.value = ""
            }
        })
    } else {
        console.error("Element with id main cannot be found.")
    }    
}

function addListeners() {
    setTimeout(() => {
        addMsgListener()
    }, 500)    
}

addListeners()
