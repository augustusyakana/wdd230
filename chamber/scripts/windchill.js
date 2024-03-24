const temp = document.getElementById('temperature').innerText;
const windspeed = document.getElementById('windspeed').innerText;
const windchill = document.getElementById('windchill');
const announcementDiv = document.querySelector('#announcement');
const annMessage = document.querySelector('#annMsg');
const annBtn = document.querySelector('#annBtn');

if (temp <= 50 && windspeed > 3) {
    let chill = 35.74 + 0.6215 * temp - 35.75 * (windspeed ** (+0.16)) + 0.4275 * (temp ** (+0.16));
    windchill.textContent = `${chill.toFixed(2)}˚ F`;
} else {
    windchill.textContent = "N/A";
}

window.addEventListener('load', (event) => {
    displayAnnouncement();
});


function displayAnnouncement() {

    // let today = new Date().getDay;
    let today = 1;

    if (today == 1) {
        annMessage.textContent = "Come join our Weekly PTCC Members Meeting on Wednesday at 7.00pm.";
        announcementDiv.classList.toggle('showAnnouncement');

    } else if (today == 2) {
        annMessage.textContent = "Our weekly PTCC Members Meeting is tomorrow (Wed) at 7.00pm. Come join us!";
        announcementDiv.style.display = 'flex';
    } else if (today == 3) {
        annMessage.textContent = "Today is our weekly PTCC Members Meeting. Come join us at 7:00pm this evening!";
        announcementDiv.style.display = 'flex';
    } else {
        announcementDiv.style.display = 'none';
    }

    annBtn.addEventListener('click', () => {
        announcementDiv.style.display = 'none';
    })
}