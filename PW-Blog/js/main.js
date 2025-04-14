const addbtn = document.getElementById("add-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-modal")
const blogContainer = document.getElementById("blog-container");

const submitBtn = document.getElementById("submit-blog")

//form enabling
console.log(addbtn)
addbtn.addEventListener("click", () =>{
    modal.style.display = "flex"
    console.log("btnclicked")
})

//Form disabling
closeBtn.addEventListener("click", () =>{
    modal.style.display = "none"
    console.log("btnclicked")
})



//Add blog

submitBtn.addEventListener("click" ,() =>{
    const  url = document.getElementById("blog-url").value;

    const title = document.getElementById("blog-title").value;
    const desc = document.getElementById("blog-description").value;

    const content = document.getElementById("blog-content").value


    // console.log(title)
    // console.log(content)
    // console.log(desc)
    // console.log(url)

    if(!url || !title || !desc || !content){
        alert("all fields are required");
        return;
    }

    const newBlog = {
        id: Date.now(),
        url,
        title,
        desc,
        content
    };

    console.log("new blogs :",newBlog)

    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    console.log("localStorgae data: ", blogs)

    blogs.push(newBlog);
    localStorage.setItem("blogs", JSON.stringify(blogs)); 
    console.log("Blogs in uppper",blogs)
    modal.style.display = "none";
    clearForm();
    renderBlogs();
})

//clear form function

function clearForm(){
    document.getElementById("blog-url").value = "";
    document.getElementById("blog-title").value = "";
    document.getElementById("blog-description").value ="";
    document.getElementById("blog-content").value ="";
}


function renderBlogs(){

        blogContainer.innerHTML = "";
        const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

        console.log("inside Blogs", blogs)
        console.log("image url in render :", blogs.url)
// console.log("i'm inside renderblogs")
    blogs.forEach((blog) => {
        const card = document.createElement("div");
        card.classList.add("blog-card");

        
        card.innerHTML = `
        <img src = "${blog.url}" alt = "Blog Image"/>

        <div class = "blog-content">
           <h3>${blog.title}</h3>
           <p>${blog.desc}</p>

           <div class = "read-btn" onclick ="readBlog(${blog.id})">Read</div>

        </div>
        `
        blogContainer.append(card);
    })


}

function readBlog(id){
    
    window.location.href =`blog.html?id=${id}`;

}

window.onload = renderBlogs;