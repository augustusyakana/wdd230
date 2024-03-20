const baseURL = "https://augustusyakana.github.io/wdd230";
const linksURL = "https://augustusyakana.github.io/wdd230/data/links.json";

const linksElement = document.querySelector('#links');
const result = '';

async function getLinks(url) {
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();

    }
}