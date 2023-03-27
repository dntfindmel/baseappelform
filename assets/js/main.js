var button = document.querySelector('#subv');
var email = document.querySelector('#emailv');
var message = document.getElementById('message');

button.addEventListener('click', (event) => {
    event.preventDefault();

    if (!email.validity.valid) {
        button.src = './assets/img/icon-error.svg'
        button.style.background = 'hsl(0, 93%, 68%)';
        message.innerHTML = 'please provide a valid email';
    } else {
        button.src = './assets/img/icon-arrow.svg';
        button.style.background = null;
        message.innerHTML = '';
    }
})