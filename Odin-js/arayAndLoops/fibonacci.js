const fibonacciSeries = function(n){
    let arr = [];
    let num1 = 1;
    let num2 = 0
    arr.push(1);
    for(let i = 2;i<=n;i++){
        
       let nextTerm = num1 + num2;
        num2 = num1;
        num1 = nextTerm;
        arr.push(num1);
    }
  return arr;

}

console.log(fibonacciSeries(6));