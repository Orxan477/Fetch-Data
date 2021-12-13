async function getAllPosts(){
    let data =await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts=await data.json();
    [...posts].forEach(el => {
        let card= ` <div class="col-3">   
                        <div class="card">
                            <p class="card-text"> Data Id: ${posts[0].userId}</p>
                            <p class="card-text"> Id: ${posts[0].id}</p>
                            <p class="card-text">${posts[0].title}</p>
                            <p class="card-text">${posts[0].body}</p>
                        </div>
                    </div>`

    info=document.querySelectorAll(".row");
    [...info].forEach(element => {
        element.innerHTML+=card;
    });
        });
    }


    // async function getAllUsers(){
    //     let data =await fetch("https://jsonplaceholder.typicode.com/users");
    //     let posts=await data.json();
    //     [...idInfo].forEach(el => {
    //         let card1= ` <div class="col-3">   
    //                         <div class="card">
    //                             <p class="card-text"> Data Id: ${posts[0].name}</p>
    //                             <p class="card-text"> Id: ${posts[0].username}</p>
    //                             <p class="card-text">${posts[0].email}</p>
    //                         </div>
    //                     </div>`
    
    //     info=document.querySelectorAll(".row");
    //     [...info].forEach(element => {
    //         element.innerHTML+=card1;
    //     });
    //         });
    // }
button=document.querySelector(".btn-primary");
load= document.querySelector(".loader");

button.addEventListener('click',function(ev){
load.classList.remove("d-none");
// ev.preventDefault();
 getAllPosts();
 getAllUsers();
load.classList.add("d-none");

})