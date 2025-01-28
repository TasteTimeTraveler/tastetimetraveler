
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


document.addEventListener("DOMContentLoaded", () => {
    const toursContainer = document.querySelector(".cards-wrapper");

    // Cargar JSON dinámicamente
    fetch("/tours.json")
     console.log("estoy en fetch")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((tour) => {
                // Crear cada tarjeta
                console.log(data);
                console.log(tour.id);
                console.log(tour.image);
                console.log(tour.title);
                console.log(tour.description);
                const card = document.createElement("div");
                card.className = "col-12 col-md-4 mb-4";
                card.innerHTML = `
                    <div class="card h-100" data-id="${tour.id}">
                        <img 
                            src="${tour.image}" 
                            class="tour-img" 
                            alt="${tour.title}" 
                            onclick="openModal(${tour.id}, '${tour.image}', '${tour.title}', \`${tour.details}\`, '${tour.link}')"
                        >
                        <div class="card-body tour-card-body">
                            <h5 class="card-title tour-title">${tour.title}</h5>
                            <p class="card-text">${tour.description}</p>
                            <button 
                                class="btn btn-vermas" 
                                onclick="openModal(${tour.id}, '${tour.image}', '${tour.title}', \`${tour.details}\`, '${tour.link}')"
                            >More Details</button>
                        </div>
                    </div>
                `;
                toursContainer.appendChild(card);
            });
        })
        .catch((error) => console.error("Error loading JSON:", error));
});

// Función para abrir el modal
function openModal(id, image, title, details, link) {
    const modal = document.getElementById("modal");
    const modalContent = modal.querySelector(".modal-content");

    modal.dataset.id = id; // Asigna el id al modal para referencia futura
    modal.querySelector(".modal-img").src = image;
    modal.querySelector(".modal-title").innerText = title;
    modal.querySelector(".modal-details").innerHTML = details;
    modal.querySelector(".modal-link").href = link;
    modal.style.display = "block";

    // Asegurar que el evento de clic fuera del contenido está configurado
    modal.addEventListener("click", (event) => {
        if (!modalContent.contains(event.target)) {
            closeModal();
        }
    });
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Cerrar modal al hacer clic fuera del contenido
modal.addEventListener("click", (event) => {
    if (!modalContent.contains(event.target)) {
        modal.style.display = "none";
    }
});
