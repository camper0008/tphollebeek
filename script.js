// definitions
const html = document.querySelector('html');
const navbar = document.querySelector('#navbar');
const darkThemeButton = document.querySelector('#toggle-dark-theme');
const mqList = window.matchMedia('(prefers-color-scheme: dark)');

let darkThemeEnabled = true;

// pre-script
darkThemeButton.setAttribute('style', 'display: initial;')

// functions
const updateNavbar = () => {
    if (html.scrollTop !== 0) {
        navbar.removeAttribute('class');
    } else {
        navbar.setAttribute('class', 'top-scrolled');
    }
}

const toggleDarkTheme = () => {
    darkThemeEnabled = !darkThemeEnabled;
    
    if (darkThemeEnabled) {
        html.classList.add('dark-theme-enabled');
        html.classList.remove('light-theme-enabled');
        darkThemeButton.innerText = '🌞';
    } else {
        html.classList.add('light-theme-enabled');
        html.classList.remove('dark-theme-enabled');
        darkThemeButton.innerText = '🌙';
    }
}

const onPreferenceChange = () => {
    darkThemeEnabled = !mqList.matches;
    toggleDarkTheme();
}

if (typeof mqList.addEventListener !== 'undefined') mqList.addEventListener('change', onPreferenceChange);
darkThemeButton.addEventListener('click', toggleDarkTheme);
window.addEventListener('scroll', updateNavbar);

onPreferenceChange();
updateNavbar();