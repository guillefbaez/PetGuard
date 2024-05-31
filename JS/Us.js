let currentIndex = 0;

function changeContainer(direction) {
    const containers = document.querySelectorAll('.containerUs');
    containers[currentIndex].classList.remove('containerUs-active');
    containers[currentIndex].style.display = 'none';

    if (direction === 'right') {
        currentIndex = (currentIndex + 1) % containers.length;
    }

    containers[currentIndex].classList.add('containerUs-active');
    containers[currentIndex].style.display = 'block';
}

// Inicializa el primer contenedor activo
document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.containerUs');
    containers[currentIndex].classList.add('containerUs-active');
    containers[currentIndex].style.display = 'block';
});
