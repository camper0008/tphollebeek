const generatePortfolioViewer = () => {
    const portfolioViewer = document.createElement('div');
    portfolioViewer.className = 'portfolio-viewer hidden';
    document.body.appendChild(portfolioViewer);
}


const portfolioClicked = () => {
    const content = "bruh"
}

const handlePortfolioViewer = () => {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    portfolioGrid.classList.add('js-enabled');

    const portfolioImages = document.querySelectorAll('.portfolio-grid img');
    for (i in portfolioImages) {
        const image = portfolioImages[i];
        image.addEventListener('click', portfolioClicked);
    }
}

handlePortfolioViewer();