var button = document.querySelectorAll('#subv');

button.addEventListener('click', () => {
    if (button.value != true ) {
        button.value.src = './assets/img/icon-error.svg'
    } else {
        button = button.value;
    }
})