const accessKey = '2Tk4t0PNGq1fXzWVKB-87PKLx4wyYH06e7XNixZm8aI'
const searchForm = document.getElementById("search-form")

const inputfield = document.getElementById("search-field")

const loadButton = document.getElementById("show-more-btn");

const searchResult = document.getElementById("search-result");

const searchBtn = document.getElementById("search-form");
let keyword = "";
let page = 1;
async function searchImages() {
    keyword = inputfield.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if(page === 1){
        searchResult.innerHTML = ""
    }

console.log(results);
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        console.log(image.src);
        // console.log(image);

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

    loadButton.style.display = "block"

   
}

loadButton.addEventListener("click", () => {
    page++;
    searchImages()
}
   )

searchBtn.addEventListener("submit", (e) => {
    e.preventDefault()
    page = 1;

    searchImages()
})