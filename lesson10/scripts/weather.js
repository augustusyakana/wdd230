const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const imgCaption = document.querySelector('figcaption');

const windDeg = document.querySelector('#windDeg');
const windSpeed = document.querySelector('#speed');
const windGust = document.querySelector('#gust');

// Longitude: 49.75˚N
// Latitude: 6.64˚E

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=6.96&lon=158.21&units=imperial&appid=4bf5dd2b2d2f31a34c56032160442c9d';

async function apiFetch() {
    try {
        let response = await fetch(url);

        if (response.ok) {
            let data = await response.json();
            console.log(data)
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${Math.trunc(data.main.temp)}&deg;F`;
    const imgsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let description = data.weather[0].description;
    weatherIcon.setAttribute('src', imgsrc);
    weatherIcon.setAttribute('alt', description);

    imgCaption.textContent = `${data.weather[0].description}`.toUpperCase();

    windDeg.innerHTML = `${data.wind.deg}&deg;F`;
    windSpeed.innerHTML = `Wind Speed: ${data.wind.speed} mph`;
    windGust.innerHTML = `Gusts: up to ${data.wind.gust} mph`;
}

apiFetch();
