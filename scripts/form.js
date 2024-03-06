const rangevalue = document.getElementById('rangevalue');
const slider = document.getElementById('rating');

const pass1 = document.getElementById('password');
const pass2 = document.getElementById('password2');
const message = document.getElementById('formmessage');


slider.addEventListener('change', displayValue);
slider.addEventListener('input', displayValue);

function displayValue() {
    rangevalue.innerHTML = slider.value;

    if (slider.value <= 3) {
        rangevalue.style.color = 'red';
    } else if (slider.value >= 7) {
        rangevalue.style.color = 'green';
    } else if (slider.value === 10) {
        rangevalue.style.color = 'rgb(255, 215, 0)';
    } else {
        rangevalue.style.color = 'rgb(69, 69, 177)';
    }
}

pass2.addEventListener('focusout', checkPasswords);

function checkPasswords() {
    if (pass1.value !== pass2.value) {
        message.textContent = "❗️Passwords Don't Match❗️";
        message.style.visibility = "show";
        pass2.style.background = '#ddd';
        pass2.style.borderRight = '15px solid red';
        pass2.value = '';
        pass2.focus();
    } else {
        message.style.display = 'none';
        pass2.style.background = '#eee9e9';
        pass2.style.borderRight = '15px solid green';
    }
}