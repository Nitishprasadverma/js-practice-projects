const myLibriary = [];
console.log("hel");
function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;

  this.info = function () {
    return `${title} by ${author}, ${page} pages, ${read ? "Yes" : "No"}`;
  }
}


function addBookToLibriary(title, author, page, read) {
  const book = new Book(title, author, page, read);
  myLibriary.push(book);

}



// console.log(myLibriary);
function displayBooks() {
  const booksContainer = document.getElementById('books-container');
  booksContainer.innerHTML = '';


  myLibriary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
         <h3> Title:${book.title}</h3>
         <p> <strong>Author:</strong>${book.author}</p>
         <p>${book.page} pages</p>
          <button class="btn btn-toggle" data-index="${index}">${book.read ? "Read: No" : "Read Yes"}</button>
         
         
         <button class="btn btn-danger" data-index = "${index}">Delete</button>
         `;


       
//adding the color to the read button
    const toggleButton = bookCard.querySelector(".btn-toggle");
    toggleButton.style.backgroundColor = book.read ? " #28a745" : " #dc3545 "; // Green for read, Red for not read
    toggleButton.style.color = "#fff";
    toggleButton.style.padding = "10px,20px"


    //delete button color;
    const deleteButton = bookCard.querySelector(".btn-danger");
    deleteButton.style.backgroundColor = "#dc3545";
    deleteButton.style.color = "#fff";


//toggling the button;
    bookCard.querySelector('.btn-toggle').addEventListener("click", (e) => {
      const index = e.target.dataset.index;

      myLibriary[index].read = !myLibriary[index].read;
      displayBooks();
    })

    //Removing the books from the card;
    bookCard.querySelector('.btn-danger').addEventListener('click', (e) => {
      const index = e.target.dataset.index;
      myLibriary.splice(index, 1);
      displayBooks()
    });

    booksContainer.appendChild(bookCard);
  });


}
addBookToLibriary('The Hobbit', 'J.R.R. Tolkien', 295, 'no');
addBookToLibriary('The Lord of the Rings', 'J.R.R. Tolkien', 1178, 'yes');
addBookToLibriary('The Silmarillion', 'J.R.R. Tolkien', 365, 'no');
displayBooks();





const addButton = document.querySelector('.header button');
const formContainer = document.querySelector('.form-container');
const bookForm = document.getElementById('bookForm');
const booksContainer = document.getElementById('books-container');
const cancelFormButton = document.getElementById('cancelForm');

// Show the form when the "Add +" button is clicked
addButton.addEventListener('click', () => {
  formContainer.style.display = 'block';
});

// Hide the form when the "Cancel" button is clicked
cancelFormButton.addEventListener('click', () => {
  formContainer.style.display = 'none';
  bookForm.reset(); // Reset the form fields
});


//Form implementation//
bookForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  // Create a new book card
  addBookToLibriary(title, author, pages, read);

  displayBooks();

  // Hide the form and reset it
  formContainer.style.display = 'none';
  bookForm.reset();
});

