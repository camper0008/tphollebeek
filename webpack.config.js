const path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/websiteTheme'),
        path.resolve(__dirname, 'src/navbarTransparency'),
        path.resolve(__dirname, 'src/portfolioViewer.js')
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public/assets'),
    }
};