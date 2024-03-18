document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const middle = document.querySelector('.middle');

    hamburgerMenu.addEventListener('click', function () {
        middle.classList.toggle('active');
    });
});