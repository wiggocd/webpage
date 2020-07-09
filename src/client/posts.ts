/*
*   posts
*/

socket.on("postReturn", (data, id: any) => {
    console.log("post_"+id+":")
    console.log(data)

    const post = document.getElementById("post_"+id)
    if (post != null) {
        const body = post.getElementsByClassName("post-body")

        if (body != null) {
            body[0].innerHTML = data.body

            const username = post.getElementsByClassName("username")
            if (username != null) {
                username[0].innerHTML = data.user
            }
        }
    }
})