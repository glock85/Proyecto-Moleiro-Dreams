const express = require('express');
const app = express();
const path = require('path');

// Configuraciones

app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Importando Rutas

app.use(require('./routes/index.js'));

// Archivos Estaticos

app.use(express.static(path.join(__dirname, 'public')));

// Escuchando Servidor

app.listen(app.get('port'), () => {
    console.log('Servidor activo en el puerto:', app.get('port'));
});