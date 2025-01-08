
    document.addEventListener('DOMContentLoaded', function () {
        const hamburger = document.querySelector('.hamburger');
        const menu = document.querySelector('.menu');
        const menuLinks = document.querySelectorAll('.menu li a');
        const toggleButton = document.querySelector('.navbar-toggler');
        const despliegue = document.getElementById('navbarNav');
        const scrollbarIconsContainer = document.querySelector('.scrollbar-icons');
    
        // Función para alternar la visibilidad del menú
        function toggleMenu() {
            const isMenuVisible = menu.classList.contains('active');
            if (menu) menu.classList.toggle('active', !isMenuVisible);
            if (toggleButton) {
                toggleButton.setAttribute('aria-expanded', !isMenuVisible);
                toggleButton.classList.toggle('collapsed', isMenuVisible);
            }
        }
    
        // Función para cerrar el menú
        function closeMenu() {
            if (menu) menu.classList.remove('active');
            if (toggleButton) {
                toggleButton.setAttribute('aria-expanded', 'false');
                toggleButton.classList.add('collapsed');
            }
        }
    
        // Manejar el clic en el botón hamburguesa
        if (hamburger && menu) {
            hamburger.addEventListener('click', () => {
                menu.classList.toggle('active');
                hamburger.classList.toggle('open');
            });
    
            // Cerrar el menú al hacer clic en los enlaces del menú
            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.remove('active');
                    hamburger.classList.remove('open');
                });
            });
        }
    
        // Alternar el menú al hacer clic en el botón navbar-toggler
        if (toggleButton && despliegue) {
            toggleButton.addEventListener('click', function () {
                if (despliegue.classList.contains('show')) {
                    closeMenu();
                } else {
                    despliegue.classList.add('show');
                    toggleButton.setAttribute('aria-expanded', 'true');
                    toggleButton.classList.remove('collapsed');
                }
            });
    
            // Detectar clics fuera del menú para cerrarlo
            document.addEventListener('click', function (event) {
                const isClickInsideMenu = menu && menu.contains(event.target);
                const isClickOnToggleButton = toggleButton && toggleButton.contains(event.target);
    
                if (!isClickInsideMenu && !isClickOnToggleButton && menu.classList.contains('active')) {
                    closeMenu();
                }
            });
        }
    
        // Cargar íconos en la barra de desplazamiento
        if (scrollbarIconsContainer) {
            const monumentIcons = [
                './assets/monumentos/catedral-de-morelia.png',
                './assets/monumentos/independencia.png',
                './assets/monumentos/kiosko.png',
                './assets/monumentos/capilla.png',
                './assets/monumentos/palacio.png',
                './assets/monumentos/iglesia.png'
            ];
    
            monumentIcons.forEach(icon => {
                const img = document.createElement('img');
                img.classList.add("mini-icono");
                img.src = icon;
                scrollbarIconsContainer.appendChild(img);
            });
        }
    });
    

//carousel

    document.addEventListener('DOMContentLoaded', function () {
        const carousel = document.querySelector('.tour-carousel');
        const scrollAmount = 300; // Cantidad de desplazamiento
    });