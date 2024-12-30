const fahrenheit = function(celsius){
    return Math.round((9/5 *20) + 32);
}
console.log(fahrenheit(21));



const convertToFahrenheit = function (celsius) {
    return Math.round(((celsius * 9) / 5 + 32) * 10)/10;
  };

  const convertToCelsius = function(fahrenheit){
    return Math.round((fahrenheit - 32) *(5/9) *10) /10;
  }
  console.log(convertToFahrenheit(21));
  console.log(convertToCelsius(69.8));