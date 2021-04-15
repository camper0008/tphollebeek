let express = require('express');
let app = express();

app.use('/public', express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/pages/index.html')
})
app.get('/experience', (req, res) => {
    res.sendFile(__dirname + '/public/pages/experience.html')
})
app.get('/portfolio', (req, res) => {
    res.sendFile(__dirname + '/public/pages/portfolio.html')
})
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/pages/about.html')
})
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/pages/contact.html')
})

app.listen(80);