const express = require('express');
const router = express.Router();

//Creando Rutas

router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/about', (req, res) => {
    res.render('about.html');
});

router.get('/portfolio', (req, res) => {
    res.render('portfolio.html');
});

router.get('/contact', (req, res) => {
    res.render('contact.html');
});

//Exportando rutas
module.exports = router;