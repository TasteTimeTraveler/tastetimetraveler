
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

/*gallery*/

document.querySelectorAll('.grid-gallery img').forEach(img => {
    console.log(img);
    img.addEventListener('click', function () {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox);
        
        const imgClone = document.createElement('img');
        imgClone.src = this.src;
        imgClone.style.maxWidth = '90vw';
        imgClone.style.maxHeight = '90vh';
        lightbox.appendChild(imgClone);
        
        lightbox.addEventListener('click', function () {
            lightbox.remove();
        });
    });
});
/*
function ajustargaleria_2() {
    let galeria_2 = document.getElementById(".grid-gallery");
    if (!galeria_2) return; 

    let imagenes_2 = document.querySelectorAll("#galeria_2 .imagen_2_2");

    if (window.innerWidth <= 768) { 
        // Estilo carrusel en móviles
        galeria_2.style.display = "flex";
        galeria_2.style.overflowX = "auto";
        galeria_2.style.scrollSnapType = "x mandatory";
        galeria_2.style.whiteSpace = "nowrap";
        galeria_2.style.scrollBehavior = "smooth";
        galeria_2.style.padding = "10px";
        galeria_2.style.gap = "10px";

        imagenes_2.forEach(img => {
            img.style.flex = "0 0 90vw"; 
            img.style.height = "70vh"; 
            img.style.scrollSnapAlign = "center";
            img.style.position = "relative";
            img.style.overflow = "hidden";
            img.style.borderRadius = "15px";
            img.style.margin = "0 5px";

            let imagen = img.querySelector("img");
            imagen.style.width = "100%";
            imagen.style.height = "100%";
            imagen.style.objectFit = "cover";
            imagen.style.position = "absolute";
            imagen.style.top = "0";
            imagen.style.left = "0";
            imagen.style.transition = "transform 0.3s ease-in-out"; // Animación suave

            // Hover para realzar imagen
            img.addEventListener("mouseenter", () => {
                imagen.style.transform = "scale(1.05)"; // Efecto de zoom
            });

            img.addEventListener("mouseleave", () => {
                imagen.style.transform = "scale(1)"; 
            });
        });
    } else { 
        // Estilo galería en pantallas grandes
        galeria_2.style.display = "grid";
        galeria_2.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
        galeria_2.style.gap = "10px";
        galeria_2.style.padding = "20px";
        galeria_2.style.justifyContent = "center";

        imagenes_2.forEach(img => {
            img.style.height = "250px";
            img.style.width = "100%";
            img.style.position = "relative";
            img.style.overflow = "hidden";
            img.style.borderRadius = "15px"; // Bordes redondeados

            let imagen = img.querySelector("img");
            imagen.style.width = "100%";
            imagen.style.height = "100%";
            imagen.style.objectFit = "cover";
            imagen.style.position = "absolute";
            imagen.style.top = "0";
            imagen.style.left = "0";
            imagen.style.transition = "transform 0.3s ease-in-out"; // Animación suave

            // Hover para realzar imagen
            img.addEventListener("mouseenter", () => {
                imagen.style.transform = "scale(1.05)"; // Efecto de zoom
            });

            img.addEventListener("mouseleave", () => {
                imagen.style.transform = "scale(1)"; 
            });
        });
    }
}

ajustargaleria_2();
window.addEventListener("resize", ajustargaleria_2);
*/