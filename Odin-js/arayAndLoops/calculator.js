const add = function (a, b) {
    return a + b;

}

const subtract = function (a, b) {
    return a - b;

}

const sum = function (array) {
    return array.reduce((a, b) => a + b
        , 0);
}

const multiply = function (array) {
    // let pro ;
    return array.reduce((a, b) => a * b, 1)

}

const power = function (a, b) {
    return Math.pow(a, b);
}
const factorial = function (n) {
    let fact = 1;
    if (n === 1) {
        return 1;
    }
    else {
        for (let i = 1; i <= n; i++) {
            fact = fact * i;
        }
        return fact;
    }
}

const recursiveFactorial = function (n) {
    if (n === 0) {
        return 1;
    }
    return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(9));
console.log(factorial(9));
console.log(power(2, 3));
console.log(sum([1, 2, 3, 4, 5]));
console.log(multiply([3, 2, 4, 2]));
console.log(add(2, 3));
console.log(subtract(33, 3));