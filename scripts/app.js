const menuBtn = document.getElementById('menu');
const nav = document.querySelector('nav');
const visits = document.querySelector('.visits');

let weatherIcon = document.querySelector('#weatherIcon');
const temp = document.querySelector('#temp');
const weatherDesc = document.querySelector('#weatherDesc');

// LOCATION: 6.955524205315222, 158.2095007754619

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=6.96&lon=158.21&units=imperial&appid=4bf5dd2b2d2f31a34c56032160442c9d';

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
    menuBtn.classList.toggle('show');
})

let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

if (numVisits !== 0) {
    visits.textContent = numVisits;
} else {
    visits.textContent = "This is your first visit! 🥳🎉 WELCOME!";
}

numVisits++;

localStorage.setItem('numVisits-ls', numVisits);

async function fetchData() {
    try {
        let response = await fetch(weatherUrl);

        if (response.ok) {
            let data = await response.json();
            console.log(data);
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    const imgsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', imgsrc);
    weatherIcon.setAttribute('alt', desc);

    temp.innerHTML = `${Math.trunc(data.main.temp)}&deg;F`;
    weatherDesc.innerHTML = `${data.weather[0].description}`;
}

fetchData();