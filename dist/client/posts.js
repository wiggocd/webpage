"use strict";
/*
*   posts
*/
socket.on("postReturn", function (data, id) {
    console.log("post_" + id + ":");
    console.log(data);
    var post = document.getElementById("post_" + id);
    if (post != null) {
        var body = post.getElementsByClassName("post-body");
        if (body != null) {
            body[0].innerHTML = data.body;
            var username = post.getElementsByClassName("username");
            if (username != null) {
                username[0].innerHTML = data.user;
            }
        }
    }
});
//# sourceMappingURL=posts.js.map