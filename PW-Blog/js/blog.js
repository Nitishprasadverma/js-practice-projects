const blogContainer = document.getElementById("full-blog-container");
const backBtn = document.getElementById("back-btn");

backBtn.addEventListener("click", () => {
    window.location.href = 'index.html';
})


//blog id from url

const params = new URLSearchParams(window.location.search);

const blogId = params.get("id");


//fetch blog data from localstorage

const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

const blog = blogs.find((b) => b.id == blogId);

if (blog) {
    blogContainer.innerHTML = `
    <section class="full-blog">
  <div class="blog-hero">
    <div class="hero-text">
      <h2>${blog.title}</h2>
      <p>${blog.desc}</p>
    </div>
    <div class="hero-img">
      <img src="${blog.url}" alt="Blog Author Image"/>
    </div>
  </div>

  <div class="blog-body">
    <p>${blog.content}</p>
  </div>
</section>


    `;
} else {
    blogContainer.innerHTML = `<p>Blog not found 😢</p>`;
}