
    document.addEventListener('DOMContentLoaded', function () {
        const hamburger = document.querySelector('.hamburger');
        const menu = document.querySelector('.menu');
        const menuLinks = document.querySelectorAll('.menu li a');
    
        // Función para alternar la visibilidad del menú
        function toggleMenu() {
            const isMenuVisible = menu.classList.contains('active');
            if (menu) menu.classList.toggle('active', !isMenuVisible);
            if (hamburger) {
                hamburger.classList.toggle('open', !isMenuVisible);
            }
        }
    
        // Función para cerrar el menú
        function closeMenu() {
            if (menu) menu.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('open');
            }
        }
        // Manejar el clic en el botón hamburguesa
        if (hamburger && menu) {
            hamburger.addEventListener('click', () => {
                toggleMenu();
            });
    
            // Cerrar el menú al hacer clic en los enlaces del menú
            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    closeMenu();
                });
            });
        }
    
        
    
    // Detectar clics fuera del menú para cerrarlo
    document.addEventListener('click', function (event) {
        const isClickInsideMenu = menu && menu.contains(event.target);
        const isClickOnHamburger = hamburger && hamburger.contains(event.target);

        // Si el clic es fuera del menú y del ícono hamburguesa, cerramos el menú
        if (!isClickInsideMenu && !isClickOnHamburger && menu.classList.contains('active')) {
            closeMenu();
        }
    });
});
    

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
