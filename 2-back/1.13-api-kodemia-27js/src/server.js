// Import 'expess'
const express = require('express');

// Invocar función express
const app = express();

// Middleware json -> Recibe peticiones json y que pueda ser utilizado -> Leer json desde req.body
app.use(express.json());

// Crear endpoint
app.get('/', (req, res) => {
    res.json({ message: 'API Koders' });
});

// Exportar servidor
module.exports = app;
