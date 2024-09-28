// Replace with your actual API key
const apiKey = '7c375490b17943c6aae155338242809'


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
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
            
        })
        .catch(error => {
            alert('Error fetching weather data: ' + error.message);
        });
}

// Function to display weather data
function displayWeather(data) {
    console.log(data);
    const cityName = data.location.name;
    console.log(cityName);
    const temperature = data.current.temp_c;
    console.log(temperature);
    const weatherDescription = data.current.condition.text;
    console.log(weatherDescription);
    const humidity = data.current.humidity;
    const windSpeed = data.current.wind_kph;

    weatherDisplay.innerHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${weatherDescription}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
    `;

    weatherDisplay.style.display = 'block';
}

// Add event listener to the button
getWeatherBtn.addEventListener('click', getWeather);