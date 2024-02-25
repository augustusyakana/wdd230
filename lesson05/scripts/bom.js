const inputEl = document.querySelector('input');
const btn = document.querySelector('button');
const list = document.querySelector('#list');

inputEl.focus();

btn.addEventListener('click', () => {
    if (inputEl.value != '') {
        const li = document.createElement('li');
        const del = document.createElement('button');
        li.textContent = inputEl.value;
        del.textContent = "Delete";
        li.append(del);
        list.append(li);

        del.addEventListener('click', () => {
            list.removeChild(li);
            inputEl.focus;
        })

        inputEl.value = '';
    }


})