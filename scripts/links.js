const baseURL = "https://augustusyakana.github.io/wdd230";
const linksURL = "https://augustusyakana.github.io/wdd230/data/links.json";

const linksElement = document.querySelector('#links');

async function getLinks() {
    const response = await fetch(linksURL);

    if (response.ok) {
        const data = await response.json();
        // console.log(data.lessons);
        displayLinks(data.lessons);
    }
}

function displayLinks(lessons) {
    lessons.forEach((lesson) => {
        let listItem = document.createElement('li');
        let links = lesson.links;
        listItem.textContent = `${lesson.lesson}`;
        links.forEach(link => {
            let activity = document.createElement('a');
            activity.setAttribute('href', link.url);
            activity.textContent = ` ${link.title} |`;
            listItem.appendChild(activity);
            linksElement.appendChild(listItem);

        })
    })
}

getLinks();