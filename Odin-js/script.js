// const string = " The revolutiion will not be allowed "
// console.log(string);
// const badstring = string
// console.log(badstring);

// // Embedding javascript

// // const name = "Nitish"
// // const greeting = `Hola,${name}`
// // console.log(greeting);

// // const one = "Hola, "
// // const two = "how are you?"
// // const joined = `${one}${two}`
// // console.log(joined);

// const button = document.querySelector("button")

// function greeting(){
//     const name = prompt("What is your name?")
//     const greeting = document.
//     querySelector("#greeting");

//     greeting.textContent = `Hello ${name}, nice to see you!`
// }

// button.addEventListener("click",greeting,)

// const bigmouth = 'I\'ve got no right to take my place…';
// console.log(bigmouth);

// const goodQuotes1 = 'She said "I think so!"';
// const goodQuotes2 = `She said "I'm not going in there!"`;
// console.log(goodQuotes1);
// console.log(goodQuotes2);

// // const badQuotes = "she said i am""
// // console.log(badQuotes);
// const myString = "123"
// const myNum = Number(myString)
// console.log(typeof myNum);


// let text = "ndaklebamdakoopfrbhcmamake";
// let length = text.length; //26

// extracting string character
//  let text = "HELLO WORLD";
//  let char = text.charAt(0) //H
//  console.log(char);
//  let code= text.charCodeAt(0) //H

//  let letter = text.at(2) //L
//  let lette = text.at(-3) //R

// let text = "Hi There"
// let retur = text[0]


// js string slice 
// let text = " Apple, Banana, Kiwi"
// let part = text.slice(7, 12)


// let text = "Apple, Banana, Kiwi";
// // let part = text.slice(7,13);
// // let part = text.slice(-12);
// let part = text.slice(-12, -6);
// document.getElementById("demo").innerHTML = part;

// const hour = new Date(32).getHours(10); 
// console.log(hour);

// const myArray = ["i", "love", ""];
// const madeStriing = myArray.join(" ");
// console.log(madeStriing);

// const myText = "I am a string";
// const newString = myText.replace("string", "sausage");
// console.log(newString);

// let sum = (a, b) => {  // the curly brace opens a multiline function
//     let result = a + b;
//     return result; // if we use curly braces, then we need an explicit "return"
//   }

//   console.log(sum(1, 2)); 

// function add7(n) {
//     return n + 7;
// }
// console.log(add7(7));

// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(3, 4));

// function capitalize(string) {
//     string = string.toLowerCase();

//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
// console.log(capitalize("hello"));

// console.log(capitalize("hAello"));

// function getlastChar(string){
//     return string[string.length - 1];
//     // return string.charAt[0]
// }

// console.log(getlastChar("nitish"));








// ++++++++++++++++++++solving problem........+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for(i=1;i<101;i++)console.log((i%3?'':'Fizz')+(i%5?'':'Buzz')||i)


// var fizzBuzz = function () {
//     var i, output;
//     for (i = 1; i < 101; i += 1) {
//       output = '';
//       if (!(i % 3)) { output += 'Fizz'; }
//       if (!(i % 5)) { output += 'Buzz'; }
//       console.log(output || i);//empty string is false, so we short-circuit
//     }
//   };

//   fizzBuzz();





// for(i = 1; i<20; i++){

//     if(i%3 === 0 && i%5 === 0){
//         console.log("fizzbuzz");
//     }

//     else if(i%3 === 0){
//         console.log("fizz");
//     }
//     else if(i%5 ===0){
//         console.log("buzz");
//     }
//     else{
//         console.log(i);
//     }
// }

const fruits = [1,2,3,3,"nit"];

// let joins = fruits.join("*");
// console.log(joins);

// console.log(fruits.pop());

// console.log(fruits.push("gya"));


// console.log(fruits.shift());
// console.log(fruits.unshift(9));
// console.log(fruits);


fruits.copyWithin(2,0);

// console.log(fruits);

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
// console.log(newArr);

const name =["nitish", "Abhimanyu", "piyush", "Niranjan", "Abhimanyu" ];

  name.splice(0,4, "Anshu", "Miki");
//  console.log(name);

 const fruit = ["Banana", "Orange", "Apple", "Mango"];
// fruit.splice(2, 2, "Lemon", "Kiwi");
// console.log(fruit);

// fruit.splice(0,2);
// console.log(fruit);
// const citrus = fruit.slice(1,3);
// console.log(citrus);
// console.log(fruit.toString());



// map ///////// 


function toUpper(string){
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"]

const upperCats = cats.map(toUpper);
// console.log(upperCats);


// filter +++++++++++++++++


function lcat(cat){
  return cat.startsWith("L");
}


const filtered = cats.filter(lcat);

// console.log(filtered);

let i =35;
let sq = Math.sqrt(i)
console.log(Math.floor(sq));





// +++++++++++++++++++++++++++++++++++++++++++++++++++

const catrs = ["Rabbit", "Dogs", "Goat"];

let myFavouriteCats = "My catrs are called ";
for(let i = 0; i < catrs.length; i++){
  if(i === catrs.length - 1){
    myFavouriteCats = myFavouriteCats +  `and ${catrs[i]}`;
  }
  else {
    myFavouriteCats = myFavouriteCats + `${catrs[i]}, ` ;
  }
}

console.log(myFavouriteCats);










