// script to toggle dark mode
// const html from navbarTransparency
const darkModeButton = document.querySelector('#toggle-dark-mode');
const mqList = window.matchMedia('(prefers-color-scheme: dark)');
darkModeButton.setAttribute('style', 'display: initial;');
let darkModeEnabled;

const toggleDarkMode = () => {
    darkModeEnabled = !darkModeEnabled;
    
    if (darkModeEnabled) {
        html.classList.add('dark-mode-enabled');
        html.classList.remove('light-mode-enabled');
        darkModeButton.innerText = '🌞';
    } else {
        html.classList.add('light-mode-enabled');
        html.classList.remove('dark-mode-enabled');
        darkModeButton.innerText = '🌙';
    }
}

const onPreferenceChange = () => {
    darkModeEnabled = !mqList.matches;
    toggleDarkMode();
}

if (typeof mqList.addEventListener !== 'undefined') mqList.addEventListener('change', onPreferenceChange);
darkModeButton.addEventListener('click', toggleDarkMode);
onPreferenceChange();