// script to make navbar transparent when scrolled to top

const html = document.querySelector('html');
const navbar = document.querySelector('#navbar');

const updateNavbar = () => {
    if (html.scrollTop !== 0) {
        navbar.removeAttribute('class');
    } else {
        navbar.setAttribute('class', 'top-scrolled');
    }
}

window.addEventListener('scroll', updateNavbar);
updateNavbar();