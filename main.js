const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const button = document.querySelector('.main__btn');
const text = document.querySelector('.hidden');
const title = document.querySelector('.main__content');

// HOME PAGE: navigation bar appears when button is clicked
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// HOME PAGE: about me section appears when button is clicked
button.addEventListener('click', function() {
    title.classList.toggle('slide-up');
    text.classList.toggle('show');
})

// PROJECTS PAGE: navigation bar appears when button is clicked


// RESUME PAGE: navigation bar appears when button is clicked


// CONTACT PAGE: navigation bar appears when button is clicked