
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
                carousel.scrollBy({ left: 30, behavior: 'smooth' }); // Desplazar al tamaño de la tarjeta
            } else {
                carousel.scrollBy({ left: -30, behavior: 'smooth' }); // Desplazar al tamaño de la tarjeta
            }
            startX = moveX;
        }
    });

    // Función para actualizar el punto activo
    function updateActiveDot() {
        const scrollPosition = carousel.scrollLeft;
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
            carousel.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
        });
    });

    // Llamar a updateActiveDot al cargar la página para asegurarse de que el primer punto esté activo
    updateActiveDot();

});

//carousel2
document.addEventListener('DOMContentLoaded', function () {
    const carousel2 = document.querySelector('.tour-carousel-2');
    const dots2 = document.querySelectorAll('.dot2');
    const cards2 = document.querySelectorAll('.tour-carousel-2 .col-12');
    
    let startX2;

    // Obtener el ancho de la tarjeta
    const cardWidth2 = cards2[0].offsetWidth + 16; // Ancho de las tarjetas + margen (si lo tienes)

    carousel2.addEventListener('touchstart', (e) => {
        startX2 = e.touches[0].clientX;
    });

    carousel2.addEventListener('touchmove', (e) => {
        const moveX = e.touches[0].clientX;
        const diffX = startX2 - moveX;

        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                carousel2.scrollBy({ left: 30, behavior: 'smooth' }); // Desplazar al tamaño de la tarjeta
            } else {
                carousel2.scrollBy({ left: -30, behavior: 'smooth' }); // Desplazar al tamaño de la tarjeta
            }
            startX2 = moveX;
        }
    });

    // Función para actualizar el punto activo
    function updateActiveDot2() {
        const scrollPosition = carousel2.scrollLeft;
        const activeIndex = Math.round(scrollPosition / cardWidth2);
        
        dots2.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === activeIndex) {
                dot.classList.add('active');
            }
        });
    }

    // Actualizar el punto activo cuando el carrusel se desplace
    carousel2.addEventListener('scroll', updateActiveDot2);

    // Hacer que los puntos sean clickeables
    dots2.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            carousel2.scrollTo({ left: cardWidth2 * index, behavior: 'smooth' });
        });
    });

    // Llamar a updateActiveDot al cargar la página para asegurarse de que el primer punto esté activo
    updateActiveDot2();

});



//funcionalidad chat
document.addEventListener("DOMContentLoaded", function () {
    const whatsappButton = document.getElementById("whatsapp-button");
    const chatBox = document.querySelector(".whatsapp-chat");
    const closeChat = document.getElementById("close-chat");
    const chatQuestions = document.querySelectorAll(".chat-question");
    const chatMessage = document.getElementById("chat-message");

    // Mostrar/Ocultar el chat
    whatsappButton.addEventListener("click", function () {
        chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
    });

    closeChat.addEventListener("click", function () {
        chatBox.style.display = "none";
    });

    // Mostrar respuestas personalizadas dentro del chat
    chatQuestions.forEach(button => {
        button.addEventListener("click", function () {
            const response = this.getAttribute("data-response");
            chatMessage.innerHTML = response; // Muestra la respuesta en el chat
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    const sliderContainer = document.querySelector(".slider-container");

    function changeSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(changeSlide, 10000); // Cambia cada 3 segundos
});
