const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListened('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});