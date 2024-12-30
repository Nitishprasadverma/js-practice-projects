function repeatString(str,num){
    // return str.repeat(num);

    var string = '';
    for(let i = 0; i < num; i++){
        
        string += str;
    }
    return string
}

console.log(repeatString("Nitish", 4));