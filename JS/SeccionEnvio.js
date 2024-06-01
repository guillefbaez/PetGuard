function selectCollarFromQR(index) {
    selectCollar(index);
}
let currentCollarIndex = 0;
const collars = [
    {
        src: 'Images/Placa1.png',
        alt: 'Collar 1'
    },
    {
        src: 'Images/Placa2.png',
        alt: 'Collar 2'
    },
    {
        src: 'Images/Placa3.png',
        alt: 'Collar 3'
    },
    {
        src: 'Images/Placa4.png',
        alt: 'Collar 4'
    },
    {
        src: 'Images/Placa5.png',
        alt: 'Collar 5'
    },
];

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa la imagen del collar elegido
    const collarElegido = document.getElementById('collarElegido');
    collarElegido.src = collars[currentCollarIndex].src;
    collarElegido.alt = collars[currentCollarIndex].alt;
});

function changeCollar(direction) {
    if (direction === 'left') {
        currentCollarIndex = (currentCollarIndex === 0) ? collars.length - 1 : currentCollarIndex - 1;
    } else if (direction === 'right') {
        currentCollarIndex = (currentCollarIndex === collars.length - 1) ? 0 : currentCollarIndex + 1;
    }
    updateCollarDisplay();
}

function selectCollar(index) {
    if (index >= 0 && index < collars.length) {
        currentCollarIndex = index;
        updateCollarDisplay();
    }
}

function updateCollarDisplay() {
    const collarElegido = document.getElementById('collarElegido');
    collarElegido.src = collars[currentCollarIndex].src;
    collarElegido.alt = collars[currentCollarIndex].alt;
}

function orderCollar() {
    alert(`Has seleccionado el collar ${currentCollarIndex + 1}`);
    window.location.href = 'SeccionEnvio.html';
}

function cancel() {
    // Lógica para cancelar la operación
    alert('Operación cancelada');
    window.location.href = 'Qr.html';
}

function pagar() {
    // Lógica para proceder con el pago
    alert('Llena los datos de pago');
    window.location.href = 'SeccionPago.html';
}

