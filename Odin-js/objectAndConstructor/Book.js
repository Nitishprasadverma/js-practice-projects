function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this. info = () => {
    return `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'}`;
  }
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
const book2 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
console.log(book1.info()); // The Hobbit by J.R.R. Tolkien, 295 pages, read

 // true
// prototype of book1 and book2 is Book.prototype
console.log(Object.getPrototypeOf(book1) == Book.prototype);
console.log(Object.getPrototypeOf(book2) == Book.prototype);
 // true

 console.log(book1.valueOf());


 // DigitalOcean prototype inheritance


function Hero(name, level){
    this.name = name;
    this.level = level;
}

function Warrior(name, level, weapon){
    Hero.call(this,name,level);

    this.weapon =  weapon;
}

function Healer(name, level, spell){
    Hero.call(this,name, level);

    this.spell = spell;
}

//Linking prototype and add prototype methods

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Warrior.prototype.attack = function () {
    return `${this.name} attacks with the ${this.weapon}.`
}

Hero.prototype.greet = function ( ){
    return `${this.name} says hello.`
}

Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}`
}

//initialize individual character instances

const hero1 = new Warrior("Spiderman", 3, "spidey");

const hero2 = new Healer('Kanin', 1, 'cure');

console.log(hero1);
console.log(hero2);

