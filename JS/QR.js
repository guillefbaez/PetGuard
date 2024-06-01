let currentCollarIndex = 0;
const collars = document.querySelectorAll('.collar');

function changeCollar(direction) {
    collars[currentCollarIndex].classList.remove('collar-active');
    if (direction === 'left') {
        currentCollarIndex = (currentCollarIndex === 0) ? collars.length - 1 : currentCollarIndex - 1;
    } else if (direction === 'right') {
        currentCollarIndex = (currentCollarIndex === collars.length - 1) ? 0 : currentCollarIndex + 1;
    }
    collars[currentCollarIndex].classList.add('collar-active');
}

function selectCollar(index) {
    collars[currentCollarIndex].classList.remove('collar-active');
    currentCollarIndex = index;
    collars[currentCollarIndex].classList.add('collar-active');
}

function orderCollar() {
    alert(`Has seleccionado el collar ${currentCollarIndex + 1}`);
    window.location.href = 'SeccionEnvio.html';
}
