

// Replace with your actual API key
const apiKey = '7c375490b17943c6aae155338242809';

// Get elements from the DOM
const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherDisplay = document.getElementById('weatherDisplay');

const datePicker = document.getElementById('dateInput');


// Function to fetch weather data
function getPresentWeather() {
    const city = cityInput.value;
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(url)
        .then(response => {
            console.log('Response status:', response.status); // Log status for debugging
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.error.message || 'City not found');
                });
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Fetch error:', error); // Log full error to understand the issue
            alert('Error fetching weather data: ' + error.message);
        });
}

// Function to display weather data
function displayPresentWeather(data) {
    // console.log('Weather data:', data); // Log the fetched data for debugging
    const cityName = data.location.name;
    // const temperature = data.current.temp_c;
    const weatherDescription = data.current.condition.text;
    const Region = data.location.region;
    const country = data.location.country;
    const humidity = data.current.humidity;
    const windSpeed = data.current.wind_kph;
    const icon = data.current.condition.icon;
    const temperature = data.current.temp_c;
    
    weatherDisplay.innerHTML = `
    <h1>${weatherDescription} <h1/>
        <img src = ${icon} alt = "imgae couldnt load"/>
        <h2>${cityName} Region :${Region} , Country:${country}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${weatherDescription}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
    `;

    weatherDisplay.style.display = 'block';
}

// Add event listener to the button
// getWeatherBtn.addEventListener('click', getPresentWeather);



function getWeatherHistory() {
    const city = cityInput.value;
    const date = datePicker.value;
    console.log(date);
    
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    const histUrl = `https://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${city}&dt=${date}`;

    fetch(histUrl)
        .then(response => {
            console.log('Response status:', response.status); // Log status for debugging
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.error.message || 'City not found');
                });
            }
            return response.json();
        })
        .then(data => {
            displayHistoryWeather(data);
        })
        .catch(error => {
            console.error('Fetch error:', error); // Log full error to understand the issue
            alert('Error fetching weather data: ' + error.message);
        });
}

function getDayOfWeek(dateString) {
    
    const [day, month, year] = dateString.split('-');
  
    
    const date = new Date(year, month - 1, day);
  
    
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
   
    const dayOfWeek = date.getDay();
  
    
    return daysOfWeek[dayOfWeek];
  }


  
function  displayHistoryWeather(data) {
    console.log('Weather data:', data); // Log the fetched data for debugging

    const country = data.location.country;
    const serachPlace  =  data.location.name;
    const region = data.location.region;

    const avg_temp = data.forecast.forecastday[0].day.avgtemp_c;
    const avg_humidity = data.forecast.forecastday[0].day.avgtemp_c;
    const condition = data.forecast.forecastday[0].day.condition.text;
    const icon = data.forecast.forecastday[0].day.condition.icon;
    const date = data.forecast.forecastday[0].date;

    const day = getDayOfWeek(date);
    console.log(day);
    
   
    weatherDisplay.innerHTML = `
    <h1>${condition} <h1/>
        <img src = ${icon} alt = "imgae couldnt load"/>
        <h2>${serachPlace} Region :${region} , Country:${country}</h2>
        <p>Temperature: ${avg_temp}°C</p>
        <p>Weather: ${condition}</p>
        <p>Humidity: ${avg_humidity}%</p>
       
    `;

    weatherDisplay.style.display = 'block';
}


getWeatherBtn.addEventListener('click', getWeatherHistory);