const express = require('express');
const greeting = require('./Modulos/Modulos');

const app = express();

app.get('/', (req, res) => {
    const nombre = req.query.nombre || 'Visitante';
    res.send(`
        <html>
            <head>
                <title>Saludo Express</title>
            </head>
            <body>
                <h1>${greeting(nombre)}</h1>
            </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});