const inputEl = document.querySelector('input');
const btn = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
})

inputEl.focus();


btn.addEventListener('click', () => {
    if (inputEl.value != '') {
        displayList(inputEl.value);
        chaptersArray.push(inputEl.value)
        setChapterList();

        inputEl.value = '';
        inputEl.focus();
    }
})

function displayList(item) {
    const li = document.createElement('li');
    const del = document.createElement('button');
    li.textContent = item;
    del.textContent = "❌";
    del.classList.add('delete');
    li.append(del);
    list.append(li);

    del.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        inputEl.focus();
    })
}

function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}