
const container = document.querySelector('.carousel-container-cards');
    const cards = document.querySelectorAll('.cards-tour');
    let currentIndex = 0;

    function showCards() {
        cards.forEach(card => {
            card.style.display = 'none';
        });
        for (let i = currentIndex; i < currentIndex + getDisplayCount(); i++) {
            if (cards[i]) {
                cards[i].style.display = 'block';
            }
        }
    }

    function getDisplayCount() {
        if (window.innerWidth >= 768) {
            return 3;
        } else if (window.innerWidth >= 480) {
            return 2;
        } else {
            return 1;
        }
    }

document.addEventListener('DOMContentLoaded', function() {
        const scrollbarIconsContainer = document.querySelector('.scrollbar-icons');
        
        // Array de iconos de monumentos
        const monumentIcons = [
            './assets/monumentos/catedral-de-morelia.png',
            './assets/monumentos/independencia.png',
            './assets/monumentos/kiosko.png',
            './assets/monumentos/capilla.png',
            './assets/monumentos/piramide-maya.png',
            './assets/monumentos/palacio.png',
            './assets/monumentos/iglesia.png',
            './assets/monumentos/catedral-de-morelia.png',
            './assets/monumentos/independencia.png',
            './assets/monumentos/kiosko.png',
            './assets/monumentos/capilla.png',
            './assets/monumentos/piramide-maya.png',
            './assets/monumentos/palacio.png',
            './assets/monumentos/iglesia.png',
            './assets/monumentos/catedral-de-morelia.png',
            './assets/monumentos/independencia.png',
            './assets/monumentos/kiosko.png',
            './assets/monumentos/capilla.png',
            './assets/monumentos/piramide-maya.png',
            './assets/monumentos/palacio.png'
                ];
        
        monumentIcons.forEach(icon => {
            const img = document.createElement('img');
            img.classList.add("mini-icono");
            img.src = icon;
            scrollbarIconsContainer.appendChild(img);
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const reviewsContainer = document.querySelector('.reviews-container');
    
        // Función para guardar las reseñas en el localStorage
        function saveReviews() {
            const reviews = Array.from(reviewsContainer.children).map(review => {
                return {
                    content: review.querySelector('.review-content p').innerText,
                    author: review.querySelector('.review-author h6').innerText
                };
            });
            localStorage.setItem('reviews', JSON.stringify(reviews));
        }
    
        // Función para cargar las reseñas desde el localStorage
        function loadReviews() {
            const savedReviews = localStorage.getItem('reviews');
            if (savedReviews) {
                const reviews = JSON.parse(savedReviews);
                reviews.forEach(review => {
                    const newReview = document.createElement('div');
                    newReview.classList.add('review-card');
                    newReview.innerHTML = `
                        <div class="review-content">
                            <p>${review.content}</p>
                        </div>
                        <div class="review-author">
                            <div class="author-info">
                                <h6>${review.author}</h6>
                            </div>
                        </div>
                    `;
                    reviewsContainer.appendChild(newReview);
                });
            }
        }
    
        // Cargar reseñas al cargar la página
        loadReviews();
    
        // Agrega un evento de envío al formulario
        const form = document.getElementById('review-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe
    
            // Obtiene el contenido de la reseña y el nombre del autor desde el formulario
            const reviewContent = document.getElementById('review-content').value;
            const authorName = document.getElementById('author-name').value;
    
            // Crea un nuevo elemento de reseña
            const newReview = document.createElement('div');
            newReview.classList.add('review-card');
            newReview.innerHTML = `
                <div class="review-content">
                    <p>${reviewContent}</p>
                </div>
                <div class="review-author">
                    <div class="author-info">
                        <h6>${authorName}</h6>
                    </div>
                </div>
            `;
    
            // Agrega la nueva reseña al final del contenedor de reseñas
            reviewsContainer.appendChild(newReview);
    
            // Guarda las reseñas en el localStorage
            saveReviews();
    
            // Limpia los campos del formulario
            document.getElementById('review-content').value = '';
            document.getElementById('author-name').value = '';
        });
    });
    