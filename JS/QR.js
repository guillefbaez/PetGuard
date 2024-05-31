let currentCollarIndex = 0;

function changeCollar(direction) {
    // Obtén todas las imágenes de collares
    const collars = document.querySelectorAll('.collar');

    // Oculta la imagen actual
    collars[currentCollarIndex].classList.remove('collar-active');

    // Calcula el nuevo índice basado en la dirección
    if (direction === 'left') {
        currentCollarIndex = (currentCollarIndex - 1 + collars.length) % collars.length;
    } else if (direction === 'right') {
        currentCollarIndex = (currentCollarIndex + 1) % collars.length;
    }

    // Muestra la nueva imagen
    collars[currentCollarIndex].classList.add('collar-active');
}
