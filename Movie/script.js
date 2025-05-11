
const input = document.getElementById("movie-name");
const container = document.getElementById("movie-container");


const apiKey = "2d7fcb4e"
const api = `http://www.omdbapi.com/?t=Inception&apikey=${apiKey}`;
console.log(input.value);
const fetchMovie = async (title) => {
    const existingError = document.querySelector('.error-message');
    if(existingError){
        existingError.remove();
    }
    try {

        const response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
        const data = await response.json();
        console.log(data)
        if (data.Response == "False") {
             // Create and display the error message
             const errorContainer = document.createElement('div');
             errorContainer.classList.add('error-message');
            //  errorContainer.style.position = 'fixed';
             errorContainer.style.top = '0';
             errorContainer.style.left = '0';
            //  errorContainer.style.width = '100%';
            //  errorContainer.style.height = '100vh';
             errorContainer.style.display = 'flex';
             errorContainer.style.justifyContent = 'center';
             errorContainer.style.alignItems = 'center';
             errorContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            //  errorContainer.style.zIndex = '1000';
 
             const errorMessage = document.createElement('p');
             errorMessage.style.color = 'white';
             errorMessage.style.fontWeight = 'bold';
             errorMessage.style.textAlign = 'center';
             errorMessage.innerText = data.Error;
 
             errorContainer.appendChild(errorMessage);
             document.body.appendChild(errorContainer);
             return;
        }
        
        const card = document.createElement("div");
        card.classList.add("movie-card");

        card.innerHTML = `  <img src="${data.Poster !== "N/A" ? data.Poster : 'default-image-url.jpg'}" alt="${data.Title}" />

        <h3>${data.Title} </h3>
        
        <button>Watch Now </button>`

        container.appendChild(card);
    } catch (error) {
        container.innerHTML = `<p style="color:red;">Something went wrong!</p>`;
    }
};

input.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        const movieName = input.value.trim();

        if (movieName) fetchMovie(movieName);
    }
})




