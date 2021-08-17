const closePortfolioViewer = () => {
    const portfolioViewer = document.querySelector('#portfolio-viewer')
    portfolioViewer.classList.add('hidden');

    const html = document.querySelector('html');
    html.style = "";
}

const generatePortfolioViewer = () => {
    const portfolioViewer = document.createElement('div');
    portfolioViewer.id = 'portfolio-viewer'
    portfolioViewer.className = 'portfolio-viewer hidden';

    
    const portfolioCloseButton = document.createElement('button');
    portfolioCloseButton.className = 'portfolio-viewer__close-button'
    portfolioCloseButton.innerText = '×';
    portfolioCloseButton.setAttribute('aria-label', 'close portfolio viewer');
    portfolioCloseButton.addEventListener('click', closePortfolioViewer);
    
    const portfolioContent = document.createElement('div');
    portfolioContent.id = 'portfolio-viewer__content';
    portfolioContent.className = 'portfolio-viewer__content';

    portfolioViewer.appendChild(portfolioCloseButton);
    portfolioViewer.appendChild(portfolioContent);
    document.body.appendChild(portfolioViewer);
}


const portfolioClicked = async (event) => {
    const portfolioViewer = document.querySelector('#portfolio-viewer');
    portfolioViewer.classList.remove('hidden');
    
    const portfolioViewerContent = document.querySelector('#portfolio-viewer__content');
    
    const response = await fetch(`/assets/portfolio/${event.target.id.slice(11)}.html`);
    const text = await response.text();
    portfolioViewerContent.innerHTML = text;
    
    const html = document.querySelector('html');
    html.style = "overflow: hidden";
}

const handlePortfolioViewer = () => {
    generatePortfolioViewer();

    const portfolioGrid = document.querySelector('.portfolio-grid');
    portfolioGrid.classList.add('js-enabled');

    const portfolioImages = document.querySelectorAll('.portfolio-grid img');
    for (let i = 0; i < portfolioImages.length; i++) {
        const image = portfolioImages[i];
        image.addEventListener('click', portfolioClicked);
        image.addEventListener('keyup', e => e.keyCode === 13 ? portfolioClicked() : null);
    }
}

handlePortfolioViewer();