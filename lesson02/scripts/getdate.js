const lastModified = document.lastModified;
const year = new Date(lastModified).getFullYear();

const copyrightYearElement = document.getElementById('copyrightYear');
const lastModifiedElement = document.getElementById('lastModified');

copyrightYearElement.textContent = year;
lastModifiedElement.textContent = `Last Modified: ${lastModified}`;