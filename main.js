const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const button = document.querySelector('.main__btn');
const text = document.querySelector('.hidden');
const title = document.querySelector('.main__content');

// navigation bar appears when button is clicked
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// about me section appears when button is clicked
button.addEventListener('click', function() {
    title.classList.toggle('slide-up');
    text.classList.toggle('show');
})

