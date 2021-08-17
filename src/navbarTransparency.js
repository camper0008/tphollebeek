const updateNavbar = () => {
    const navbar = document.querySelector('#navbar');
    const html = document.querySelector('html');

    if (html.scrollTop !== 0) {
        navbar.removeAttribute('class');
    } else {
        navbar.setAttribute('class', 'top-scrolled');
    }
}


const handleNavbarTransparency = () => {
    updateNavbar();
    window.addEventListener('scroll', updateNavbar);
}

handleNavbarTransparency();