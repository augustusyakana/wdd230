const menuBtn = document.getElementById('menu-btn');
const menu = document.querySelector('#small-nav');
const copyrightYear = document.getElementById('copyright-year');
const lastModified = document.lastModified;
const lastModifiedElement = document.getElementById('last-modified');
const year = new Date(lastModified).getFullYear();


menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
    menuBtn.classList.toggle('show');
})

copyrightYear.textContent = year;
lastModifiedElement.textContent = `Last Modified: ${lastModified}`;