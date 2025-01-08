//carousel
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.tour-carousel');
    let startX;

    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX; // Captura la posición inicial del toque
    });

    carousel.addEventListener('touchmove', (e) => {
        const moveX = e.touches[0].clientX; // Captura la posición del toque mientras se mueve
        const diffX = startX - moveX; // Diferencia de la posición

        if (Math.abs(diffX) > 50) { // Si el movimiento es suficiente
            if (diffX > 0) {
                carousel.scrollBy({ left: 300, behavior: 'smooth' }); // Desplazamiento hacia la derecha
            } else {
                carousel.scrollBy({ left: -300, behavior: 'smooth' }); // Desplazamiento hacia la izquierda
            }
            startX = moveX; // Actualiza la posición inicial para el siguiente movimiento
        }
    });
});

//menu hamburguesa
// Obtener los elementos del menú y del icono
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Agregar el evento de clic para abrir y cerrar el menú
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menu.classList.remove('open');
  }
});