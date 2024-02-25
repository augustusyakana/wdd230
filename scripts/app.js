const menuBtn = document.getElementById('menu');
const nav = document.querySelector('nav');
const visits = document.querySelector('.visits');

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

