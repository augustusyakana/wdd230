const menuBtn = document.getElementById('menu-btn');
const menu = document.querySelector('#small-nav');
const copyrightYear = document.getElementById('copyright-year');
const lastModified = document.lastModified;
const lastModifiedElement = document.getElementById('last-modified');
const year = new Date(lastModified).getFullYear();
const modeBtn = document.querySelector('#mode');
const main = document.querySelector('main');
const card = document.querySelectorAll('.card');
const subcard = document.querySelectorAll('.sub-card');
const purposeStatement = document.querySelector('#purpose');
const footer = document.querySelector('footer');
const gallery = document.querySelector('#gallery');
const memberPara = document.querySelector('#become-member')

// variables for days visited
const lastVisit = Number(window.localStorage.getItem('last-visit')) || Date.now();
const visitsElement = document.querySelector('#last-visited');
const dateToday = new Date();
const msToDay = 86400000;
const timeSinceLast = (Date.now() - lastVisit) / msToDay;
console.log(timeSinceLast);

if (lastVisit === dateToday.getTime()) {
    visitsElement.textContent = 'Welcome! Let us know if you have any questions.';
    setTime()
} else if (timeSinceLast < 1) {
    visitsElement.textContent = 'Back so soon! Awesome!';
    setTime();
} else if (timeSinceLast === 1) {
    visitsElement.textContent = `You last visited ${lastVisit.toFixed(0)} day ago`;
    setTime()
} else if (timeSinceLast > 1) {
    visitsElement.textContent = `You last visited ${timeSinceLast.toFixed(0)}`;
    setTime();
}

function setTime() {
    localStorage.setItem('last-visit', dateToday.getTime());
}


menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
    menuBtn.classList.toggle('show');
})

copyrightYear.textContent = year;
lastModifiedElement.textContent = `Last Modified: ${lastModified}`;

modeBtn.addEventListener('click', () => {
    if (modeBtn.textContent.includes('🌙')) {
        main.style.background = 'linear-gradient(to right, rgb(22, 66, 22), black, rgb(22, 66, 22))';
        footer.style.background = '#003A52';
        footer.style.color = 'white';
        main.style.color = 'white';
        purposeStatement.style.color = 'white';
        gallery.style.color = 'black';
        memberPara.style.color = 'white';
        modeBtn.textContent = "☀️"

        card.forEach((item) => item.style.background = "#003A52")
        card.forEach((item) => item.style.color = 'white')
        subcard.forEach((item) => item.style.background = '#8DAA9D')
    } else {
        main.style.background = 'linear-gradient(to right, rgb(81, 220, 81), white, rgb(81, 220, 81)';
        purposeStatement.style.color = 'black';
        footer.style.background = '#8DAA9D';
        footer.style.color = 'black';
        modeBtn.textContent = '🌙';
        memberPara.style.color = 'black';

        card.forEach((item) => item.style.background = "#8DAA9D")
        card.forEach((item) => item.style.color = 'black')
        subcard.forEach((item) => item.style.background = 'white')
    }
})

