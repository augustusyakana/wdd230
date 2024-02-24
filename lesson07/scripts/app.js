const lastModifiedEl = document.getElementById('last-modified');
const lastModified = document.lastModified;
const year = new Date(lastModified).getFullYear();
const copyYearEl = document.getElementById('copy-year');

lastModifiedEl.textContent = lastModified;
copyYearEl.textContent = year;

