// Navbar Initialization
const body = document.body;
const menuBtn = document.querySelector('#menu-button');
const menuCloseBtn = document.querySelector('#menu-close-button');
const menuContent = document.querySelector('#menu-content');
const linkContainer = document.querySelectorAll('#link-container > li > a');
const navbar = document.querySelector('nav');

const closeMobileMenu = () => {
    menuContent.classList.add(
        'opacity-0',
        'pointer-events-none',
        'lg:opacity-0'
    );
    body.classList.remove('overflow-y-hidden');
};

linkContainer.forEach((link) => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});

menuBtn.addEventListener('click', () => {
    menuContent.classList.remove('opacity-0', 'pointer-events-none');
    body.classList.add('overflow-y-hidden');
});

menuCloseBtn.addEventListener('click', () => {
    closeMobileMenu();
});

let prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', () => {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos <= 80) {
        navbar.classList.remove('shadow-xl');
    } else if (prevScrollpos > currentScrollPos) {
        navbar.classList.replace('-top-20', 'top-0');
        navbar.classList.add('shadow-xl');
    } else {
        navbar.classList.replace('top-0', '-top-20');
    }

    prevScrollpos = currentScrollPos;
});

window.addEventListener('load', () => {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos >= 80) {
        navbar.classList.replace('-top-20', 'top-0');
        navbar.classList.add('shadow-xl');
    }
});