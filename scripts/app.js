const menuBtn = document.getElementById('menu');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
    menuBtn.classList.toggle('show');
})

menuBtn.addEventListener('touchend', () => {
    Event.preventDefault();
    nav.classList.toggle('show');
    menuBtn.classList.toggle('show');
})