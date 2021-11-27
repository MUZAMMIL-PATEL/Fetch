function userData(){
    if(search == ""){
        alert("Please Write Username !")
    }
    else{
        var search = document.getElementById("search").value
        fetch("https://api.github.com/users/" + search)
            .then(function(data){
                return data.json()
    })
        .then(function(fullDetails){
            var userDetails = []
                userDetails.push(fullDetails)
                    var img = document.getElementById("picture")
                    var username = document.getElementById("username")
                    var description = document.getElementById("description")
                    var Repositories = document.getElementById("Repositories")
                    var follow = document.getElementById("follow")
                    var following = document.getElementById("following")
                        img.src = userDetails[0].avatar_url
                        username.innerHTML = userDetails[0].login
                        description.innerHTML = userDetails[0].bio
                        Repositories.innerHTML = userDetails[0].public_repos
                        follow.innerHTML = userDetails[0].followers
                        following.innerHTML = userDetails[0].following
        })
        document.getElementById("search").value = ""
        
    }
}
