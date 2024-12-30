function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(`My name is ${this.name}`);
}

function Player(name, marker){
    this.name = name;
    this.marker = marker;
}
Player.prototype.getMarker = function() {
  console.log(`MY marker is ${this.marker}`);
}

//NOW MAKE player inherit from person
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype) == Person.prototype; // true

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!

player1.getMarker(); // My marker is 'X'
player2.getMarker(); // My marker is 'O'





//wrong way to set prototype

function Person1(name) {
    this.name = name;
  }
  
  Person1.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`);
  };
  
  function Player1(name, marker) {
    this.name = name;
    this.marker = marker;
  }
  
  // Don't do this!
  // Use Object.setPrototypeOf(Player.prototype, Person.prototype)
  Player1.prototype = Person1.prototype;
  
  function Enemy(name) {
    this.name = name;
    this.marker = '^';
  }
  
  // Not again!
  // Use Object.setPrototypeOf(Enemy.prototype, Person.prototype)
  Enemy.prototype = Person.prototype;
  
  Enemy.prototype.sayName = function() {
    console.log('HAHAHAHAHAHA');
  };
  
  const carl = new Player1('carl', 'X');
  carl.sayName(); // Uh oh! this logs "HAHAHAHAHAHA" because we edited the sayName function!
  