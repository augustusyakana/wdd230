const inputEl = document.getElementById('date');
const inputSub = document.getElementById('inputsub');

inputSub.addEventListener('click', setDateValue());

function setDateValue() {
    inputEl.value = Date.now();
    console.log(inputEl.value);
}