const sumAll = function (num1, num2) {

    if ((num1 < 0 || num2 < 0) || (num1 > num2)) {
        return "ERROR"
    }
    else {
        var sum = 0;
        for (let i = num1; i <= num2; i++) {
            sum += i;
        }
    }

    return sum;
}

console.log(sumAll(0, 10)); //45



