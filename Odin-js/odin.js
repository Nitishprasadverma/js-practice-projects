// const container = document.querySelector("#container");

// const content = document.createElement("div");

// content.setAttribute("class", "content")
// content.textContent = "HEllo i'm nitish.";

// container.appendChild(content);

// // adding para
// const para = document.createElement("p");
// para.textContent ="Hey i'm red!";
// para.style.color ="red";
// container.appendChild(para)

// // adding heading

// const para3 = document.createElement("h3");
// para3.textContent ="i'm a blue h3!";
// para3.style.color ="blue";
// container.appendChild(para3);

// const div = document.createElement("div");
// div.style.backgroundColor ="pink";
// div.style.border = "10px"
// div.style.borderColor = "blue";


// container.appendChild(div);
// const anotherDiv = document.createElement("h1")
// anotherDiv.textContent = "i'm in a div";
// div.appendChild(anotherDiv);
// const anotherPara = document.createElement("p");
// anotherPara.textContent ="Me too!";
// div.appendChild(anotherPara);



// const button = document.createElement("button");
// button.textContent ="click me"
// container.appendChild(button);
// button.addEventListener("click" , ()=>{
//     alert("hello world")
// })
// // 

// const buttons = document.querySelectorAll("button");
// buttons.forEach((g) => {
//     g.addEventListener("click", () =>{
//         alert(g.id);
//     })
// })


// const link = document.querySelector("a");

// link.textContent = "Google";
// link.href = "https://Google.com";

// const sec  = document.querySelector("section");

// const para = document.createElement("para");
// para.textContent = "We hope you Enjoyed it";
// sec.appendChild(para);

// const text = document.createTextNode("HELLO there this is nitish");
// const linkpara = document.querySelector("p");
// linkpara.appendChild(text);

// sec.appendChild(linkpara)
// linkpara.remove();

// linkpara.parentNode.removeChild(linkpara)


//  Map method

function addone(num) {
    return num + 1;
}

const arr = [1, 2, 3, 4, 5];
const mappedarr = arr.map(addone);
// console.log(mappedarr);

// console.log(arr);

const arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mappedarrs = arrs.map((num) => num + 1);
// console.log(mappedarrs);


const oddNums = arr.filter((num) => num % 2 !== 0);

// console.log(oddNums);
// console.log(arr);


// Reduce array function method

const productOfAllNums = arr.reduce((total, currentItem) => {
    return total * currentItem;
}, 10);
// console.log(productOfAllNums);

function sumOfThree(array) {
    return array.filter((num) => num % 2 === 0) // [2,4]
        .map((num) => num * 3) // [6, 12]
        .reduce((acc, curr) => acc + curr, 10); //10 is initialized to the acc    //28 output
};

console.log(sumOfThree(arr));

const students = [
    { first: "Nitish", last: "Verma", passed: 2076,    Dob: 2005 },
    { first: "Abhimanyu", last: "Mahto", passed: 2078, Dob: 2003 },
    { first: "Piyush", last: "Sharma", passed: 2080,   Dob: 2005 },
    { first: "Pankaj", last: "Verma", passed: 2079,    Dob: 2004 },
    { first: "Priya", last: "Verma", passed: 2095,     Dob: 2011 },
    { first: "Nikhil", last: "Verma", passed: 2085,    Dob: 2005 },
    { first: "Prince", last: "Mahto", passed: 2097,    Dob: 2003 },
    { first: "Deepak", last: "Sharma", passed: 2084,   Dob: 2004 },
    { first: "Pintu", last: "Verma", passed: 2092,     Dob: 2004 },
    { first: "Supriya", last: "Verma", passed: 2099,   Dob: 2011 }
];




const getAge = function(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

// findTheOldest(students);



// console.log(oldest(students));

const people = [" Nitish, Verma", "Nishant, Kumar", "Nikhil, Kumar", "Sunil, kuamr", "Pankaj, Verma,", "Prince Kumar", "Ashish, Kumaar", "Manjo, Sharma", "Abhijeet, Kumar", "Vishal, Verma", "Ayush , maurya", "Akshay, Kumar", "Ishu, Kumar", "Nitesh, Kumar", " Nitish, Verma", "Nishant, Kumar", "Nikhil, Kumar", "Sunil, kuamr", "Pankaj, Verma,", "Prince Kumar", "Ashish, Kumaar", "Manjo, Sharma", "Abhijeet, Kumar", "Vishal, Verma", "Ayush , maurya", "Akshay, Kumar", "Ishu, Kumar", "Nitesh, Kumar"];


// Filter

const fifteen = students.filter(student => (student.DOB >= 2005 && student.DOB < 2007));
// console.log(fifteen);
// console.table(fifteen);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Array.protype map()
const fullName = students.map(student => `${student.first}   ${student.last}`);

//   console.table(fullName);
//  console.log(fullName);



//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const sort = students.sort( (a, b) => {
//     if(a.Age > b.Age){
//         return 1;
//     }
//     else{
//         return -1;
//     }
// })

const sort = students.sort((a, b) => a.Age > b.Age ? 1 : -1); //work Same as above sort code.
// console.table(sort);

// Reduce function

const TotalYears = students.reduce((a, b) => {
    return a + b.Age;
}, 0);

// console.log(TotalYears);


const ar = [1, 2, 3, 4, 5];
const sumofnum = ar.reduce((total, curent) => {
    return total + curent
})
// console.log(sumofnum);


