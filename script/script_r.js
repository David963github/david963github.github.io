window.addEventListener('scroll', function () {
    var nav = document.querySelector('.main-menu');
    var scrolled = window.scrollY;

    if (scrolled > 50) {
        nav.style.backgroundColor = '#d64a09'; // Cambia el color de fondo al hacer scroll
    } else {
        nav.style.backgroundColor = 'transparent'; // Vuelve al fondo transparente si el scroll es arriba
    }
});