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
        info=document.querySelectorAll(".row1");
        info.forEach(element => {
        element.innerHTML+=card;
        });  
    }); 
}

function FetchUserPost(userid){
    console.log(userid);
    getPosts(userid);
}

async function getPosts(userid){
    let data =await fetch("https://jsonplaceholder.typicode.com/posts");
        let posts=await data.json();

        // posts=posts.filter(post=> post.userid == userid);

        posts.forEach(post => {
            if (post.userid==userid) {
                let card= 
            ` <div class="col-3 mb-5">   
                <div class="cards">
                    <p class="card-post"> Name: ${post.title}</p>
                    <p class="card-post"> Username: ${post.body}</p>
                </div>
            </div>`
            info=document.querySelectorAll(".row2");
            info.forEach(element => {
            element.innerHTML+=card;
        }); 
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



