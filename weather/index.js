// Replace with your actual API key
// const apiKey = '7c375490b17943c6aae155338242809'


// // Get elements from the DOM
// const cityInput = document.getElementById('cityInput');
// const getWeatherBtn = document.getElementById('getWeatherBtn');
// const weatherDisplay = document.getElementById('weatherDisplay');

// // Function to fetch weather data
// function getWeather() {
//     const city = cityInput.value;
//     if (!city) {
//         alert('Please enter a city name.');
//         return;
//     }

//     const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('City not found');
//             }
//             return response.json();
//         })
//         .then(data => {
//             displayWeather(data);
            
//         })
//         .catch(error => {
//             alert('Error fetching weather data: ' + error.message);
//         });
// }

// // Function to display weather data
// function displayWeather(data) {
//     console.log(data);
//     const cityName = data.location.name;
//     console.log(cityName);
//     const temperature = data.current.temp_c;
//     console.log(temperature);
//     const weatherDescription = data.current.condition.text;
//     console.log(weatherDescription);
//     const humidity = data.current.humidity;
//     const windSpeed = data.current.wind_kph;

//     weatherDisplay.innerHTML = `
//         <h2>${cityName}</h2>
//         <p>Temperature: ${temperature}°C</p>
//         <p>Weather: ${weatherDescription}</p>
//         <p>Humidity: ${humidity}%</p>
//         <p>Wind Speed: ${windSpeed} m/s</p>
//     `;

//     weatherDisplay.style.display = 'block';
// }

// // Add event listener to the button
// getWeatherBtn.addEventListener('click', getWeather);



// Replace with your actual API key
const apiKey = '7c375490b17943c6aae155338242809';

// Get elements from the DOM
const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherDisplay = document.getElementById('weatherDisplay');

// Function to fetch weather data
function getWeather() {
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
function displayWeather(data) {
    console.log('Weather data:', data); // Log the fetched data for debugging
    const cityName = data.location.name;
    const temperature = data.current.temp_c;
    const weatherDescription = data.current.condition.text;
    const Region = data.location.region;
    const country = data.location.country;
    const humidity = data.current.humidity;
    const windSpeed = data.current.wind_kph;
    const icon = data.current.condition.icon;
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
getWeatherBtn.addEventListener('click', getWeather);



