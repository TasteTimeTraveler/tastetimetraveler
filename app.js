
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
    const dots = document.querySelectorAll('.dot');
    const cards = document.querySelectorAll('.tour-carousel .col-12');
    
    let startX;

    // Obtener el ancho de la tarjeta
    const cardWidth = cards[0].offsetWidth + 16; // Ancho de las tarjetas + margen (si lo tienes)

    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX; 
    });

    carousel.addEventListener('touchmove', (e) => {
        const moveX = e.touches[0].clientX;
        const diffX = startX - moveX;

        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                carousel.scrollBy({ left: 50, behavior: 'smooth' });
            } else {
                carousel.scrollBy({ left: -50, behavior: 'smooth' });
            }
            startX = moveX;
        }
    });

    // Función para actualizar el punto activo
    function updateActiveDot() {
        const scrollPosition = carousel.scrollLeft;
        const cardWidth = cards[0].offsetWidth + 16; // Ancho de las tarjetas + espacio
        const activeIndex = Math.round(scrollPosition / cardWidth);
        
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === activeIndex) {
                dot.classList.add('active');
            }
        });
    }

    // Actualizar el punto activo cuando el carrusel se desplace
    carousel.addEventListener('scroll', updateActiveDot);

    // Hacer que los puntos sean clickeables
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const cardWidth = cards[0].offsetWidth + 16;
            carousel.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
        });
    });

    // Llamar a updateActiveDot al cargar la página para asegurarse de que el primer punto esté activo
    updateActiveDot();

});