// const div = document.createElement("div");

// div.style.color = "blue"

// div.style.cssText = "color :blue; background:red"

// div.textContent ="hello "


// const userName = " Bro Code"
// const welcomeMsg = document.getElementById("welcome-msg");

// welcomeMsg.textContent += userName ==="" ? `guest` : userName

// simple string on the page...

// const body = document.body
// body.append("Helllo world") //appendchild ---->  create an elements.

//creating an element.

// const div = document.createElement("h1")
// // body.appendChild(div)

  
// Removing element
// const div2 = document.querySelector("div")

// const spanHi = document.getElementById("hi")

// const spanBye = document.getElementById("bye")

// spanBye.remove() //removed

// div2.appendChild(spanBye)

// // Defining Id classes etc..

// spanHi.setAttribute("class","gya")
// spanHi.setAttribute("title", "Bye")

// spanHi.removeAttribute("title")
// spanHi.removeAttribute("class")
// spanHi.style.color = "green"

// objects +++++++++++++++++++++++++++++++++++++++++++++


const target = {a:1, b:2};
const source = { b: 4, c: 5};
const returnedTarget = Object.assign(target, source);

//by using spread 

const obj = {...target, ... source};
console.log(obj);

// console.log(target);
// console.log(returnedTarget);

// output {a: 1, b: 4, c: 5};

console.log(returnedTarget === target);



const obj1 = {
    1: "a", 2: "b"
}

const obj2 = {
    3: "a", 4: "b"
}
const obj3 = {
    5: "a", 6: "b"
}

// concatnation of object
const obj4 = Object.assign(

    {},obj1, obj2, obj3
);

const obj5 = {...obj1, ...obj2, ...obj3}

console.log(obj4);
console.log(obj5);

const tinder = 
{
    id: '234nj', name: "nitish", isLoggedIN: false
};

console.log(tinder);
console.log(Object.keys(tinder));
console.log(Object.values(tinder));

console.log(tinder.hasOwnProperty('isLoggedIN')); // return true bcz it exist in the tinder.


const course = {
    course: "javascript",
    price: 999,
    mentor: 'Nitish'
}

// course.mentor 

// const {mentor: courseIntructor} = course;
const {mentor} = course; // Nitish

console.log(mentor);
// console.log(courseIntructor); //Nitish



const obj6 = {a: 0, b: { c: 0}}
const obj7 = Object.assign({}, obj6);

console.log(obj7);

obj7.a = 3;
console.log(obj6);
console.log(obj7);

obj7.b.c = 9;
console.log(obj6);
console.log(obj7);