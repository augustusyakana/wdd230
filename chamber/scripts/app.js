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

        card.forEach((item) => item.style.background = "#8DAA9D")
        card.forEach((item) => item.style.color = 'black')
        subcard.forEach((item) => item.style.background = 'white')
    }
})

