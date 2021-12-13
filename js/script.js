async function getAllUsers(){
    let userdata= await fetch("https://jsonplaceholder.typicode.com/users");
    let postUser= await userdata.json();
    for (let i = 0; i < postUser.length; i++) {  
        let card= 
        ` <div class="col-3 mb-5">   
            <div class="card">
                <p class="card-text"> Username: ${postUser[i].name}</p>
                <p class="card-text"> Username: ${postUser[i].username}</p>
                <p class="card-text"> Email: ${postUser[i].email}</p>
                <p class="card-text"> Email: ${postUser[i].phone}</p>
                <p class="card-text"> Email: ${postUser[i].website}</p>
                <button type="button" class="btn btn-primary user" id=${postUser[i].id}>Information</button>
            </div>
        </div>`
info=document.querySelectorAll(".row");
info.forEach(element => {
element.innerHTML+=card;
});
}       
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




// let data =await fetch("https://jsonplaceholder.typicode.com/posts");
//     let posts=await data.json();