const mqList = window.matchMedia('(prefers-color-scheme: dark)');
let darkThemeEnabled;

const toggleTheme = () => {
    const html = document.querySelector('html');
    const themeToggleButton = document.querySelector('#toggle-website-theme');
    darkThemeEnabled = !darkThemeEnabled;
    
    if (darkThemeEnabled) {
        html.classList.add('dark-theme-enabled');
        html.classList.remove('light-theme-enabled');
        themeToggleButton.innerText = '🌞';
    } else {
        html.classList.add('light-theme-enabled');
        html.classList.remove('dark-theme-enabled');
        themeToggleButton.innerText = '🌙';
    }
}

const handlePreferenceChange = () => {
    darkThemeEnabled = !mqList.matches;
    toggleTheme();
}

const handleThemeToggleButton = () => {
    const themeToggleButton = document.querySelector('#toggle-website-theme');
    themeToggleButton.setAttribute('style', 'display: initial;');
    themeToggleButton.addEventListener('click', toggleTheme);
}

const handleDarkMode = () => {
    if (typeof mqList.addEventListener !== 'undefined') {
        mqList.addEventListener('change', handlePreferenceChange);
    }
    handlePreferenceChange();
    handleThemeToggleButton();
}

handleDarkMode();