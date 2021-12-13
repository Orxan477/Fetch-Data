async function getAllUsers(){
    let userdata= await fetch("https://jsonplaceholder.typicode.com/users");
    let postUser= await userdata.json();
    postUser.forEach(user => {
        let card= 
        ` <div class="col-3 mb-5">   
            <div class="card">
                <p class="card-text"> Name: ${user.name}</p>
                <p class="card-text"> Username: ${user.username}</p>
                <p class="card-text"> Email: ${user.email}</p>
                <p class="card-text"> Phone: ${user.phone}</p>
                <p class="card-text"> Website: ${user.website}</p>
                <button type="button" class="btn btn-primary user" onclick="FetchUserPost(${user.id})">Information</button>
            </div>
        </div>`
        info=document.querySelector(".row1");
        info.innerHTML+=card;
    }); 
}

async function FetchUserPost(userid){
    // console.log(userid);
    await getPosts(userid);
}

async function getPosts(userid){
    let data =await fetch("https://jsonplaceholder.typicode.com/posts");
        let posts=await data.json();
        posts.forEach(post => {
            if (post.userId==userid) {
                let cards= 
                    ` <div class="col-3 mb-5">   
                        <div class="card">
                            <p class="card-post"> Title: ${post.title}</p>
                            <p class="card-post"> Body: ${post.body}</p>
                        </div>
                    </div>`
            infos=document.querySelector(".row2");
            infos.innerHTML+=cards;
            }
        }); 
    }







button=document.querySelector(".btn-primary");
load= document.querySelector(".loader");

button.addEventListener('click',function(ev){

//   load.classList.remove("d-none");
// ev.preventDefault();
  getAllUsers().then(res => {
    load.classList.add("d-none");
  });

})



