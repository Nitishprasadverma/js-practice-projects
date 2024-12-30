const palindromes = function(string){
    let reversedString = string.split("").reverse().join("");
    if(string === reversedString){
        return true
    }
    return false;
}

console.log(palindromes(''));


const  palindrome = function(str){
const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'
const validString = str
                      .toLowerCase()
                      .split('')
                      .filter((character) => alphanumerical.includes(character))
                      .join('');

const reversedStrign = validString.split('').reverse().join('');

return validString === reversedStrign
}
  console.log( palindrome('Lid off a daffodil.'));