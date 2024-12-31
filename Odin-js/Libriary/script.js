const myLibriary = [];
console.log("hel");
function Book(title, author,page,read){
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;

    this.info = function(){
        return `${title} by ${author}, ${page} pages, ${read}`;
    }
}


function addBookToLibriary(title, author,page,read){
    const book = new Book(title, author,page,read);
    myLibriary.push(book);

}

addBookToLibriary('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
addBookToLibriary('The Lord of the Rings', 'J.R.R. Tolkien', 1178, 'not read yet');
addBookToLibriary('The Silmarillion', 'J.R.R. Tolkien', 365, 'not read yet');
addBookToLibriary('The Children of Hurin', 'J.R.R. Tolkien', 313, 'not read yet');
addBookToLibriary('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
addBookToLibriary('The Lord of the Rings', 'J.R.R. Tolkien', 1178, 'not read yet');
addBookToLibriary('The Silmarillion', 'J.R.R. Tolkien', 365, 'not read yet');
addBookToLibriary('The Children of Hurin', 'J.R.R. Tolkien', 313, 'not read yet');
addBookToLibriary('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
addBookToLibriary('The Lord of the Rings', 'J.R.R. Tolkien', 1178, 'not read yet');
addBookToLibriary('The Silmarillion', 'J.R.R. Tolkien', 365, 'not read yet');
addBookToLibriary('The Children of Hurin', 'J.R.R. Tolkien', 313, 'not read yet');
// console.log(myLibriary);
function displayBooks(){
   const booksContainer = document.getElementById('books-container');
   booksContainer.innerHTML = '';


    myLibriary.forEach(book => {
         const bookCard = document.createElement('div');
         bookCard.classList.add('book-card');
         bookCard.innerHTML = `
         <h3> Title:${book.title}</h3>
         <p> <h5>Author:</h5>${book.author}</p>
         <p>${book.page} pages</p>
         <p><h5>Status:</h5>${book.read}</p>
         <button class="btn btn-danger">Delete</button>
         `;
         console.log(bookCard);
         booksContainer.appendChild(bookCard);
    });

  
}

displayBooks();


// const addButton  = document.getElementById("addbtn");

// const formContainer = document.querySelector('.form-container');
// const bookForm = document.getElementById('bookForm');
// const booksContainer = document.getElementById("books-container");

// formContainer.style.display = 'none';

// addButton.addEventListener('click', () => {
//     formContainer.style.display = 'block';
// }


// )


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



bookForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
  
    // Get form data
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
  
    // Create a new book card
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
      <h3>${title}</h3>
      <p><strong>Author:</strong> ${author}</p>
      <p><strong>Pages:</strong> ${pages}</p>
      <p><strong>Read:</strong> ${read ? 'Yes' : 'No'}</p>
       <button class="btn btn-danger">Delete</button>
    `;
  
    // Add the book card to the books container
    booksContainer.appendChild(bookCard);
  
    // Hide the form and reset it
    formContainer.style.display = 'none';
    bookForm.reset();
  });