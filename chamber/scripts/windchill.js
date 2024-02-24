const temp = document.getElementById('temperature').innerText;
const windspeed = document.getElementById('windspeed').innerText;
const windchill = document.getElementById('windchill');

if (temp <= 50 && windspeed > 3) {
    let chill = 35.74 + 0.6215 * temp - 35.75 * (windspeed ** (+0.16)) + 0.4275 * (temp ** (+0.16));
    console.log(`Chill: ${chill} `);
    windchill.textContent = `${chill.toFixed(2)}˚ F`;
} else {
    windchill.textContent = "N/A";
}