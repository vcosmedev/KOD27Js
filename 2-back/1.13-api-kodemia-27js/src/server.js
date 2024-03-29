// Import 'expess'
const express = require('express');
// Import routers
const kodersRouter = require('./routes/koders.router');
const practicesRouter = require('./routes/practices.router');
const authRouter = require('./routes/auth.router');

// Invocar función express
const app = express();

// Middleware json -> Recibe peticiones json y que pueda ser utilizado -> Leer json desde req.body
// Esta función siempre irá antes de montar routers
app.use(express.json());

// 'Montar' Routers
app.use('/auth', authRouter);
app.use('/koders', kodersRouter);
app.use('/practices', practicesRouter);

// Crear endpoint
app.get('/', (req, res) => {
    res.json({ message: 'API Koders' });
});

// Exportar servidor
module.exports = app;
