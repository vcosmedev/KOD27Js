// Purpose: DESCRIBIR y montar el servidor
// - Guarda la definición del server
// - Qué middlewares se van a usar - montar middlewares
// - Montar routers
const express = require('express');
const kodersRouter = require('./routes/koders');
const mentorsRouter = require('./routes/mentors');
const generationsRouter = require('./routes/generations');

const app = express();

app.use(express.json());

app.use('/koders', kodersRouter);
app.use('/mentors', mentorsRouter);
app.use('/generations', generationsRouter);

app.get('/', (req, res) => {
    res.json({
        message: 'Kodemia API, clean arquitecture',
    });
});

module.exports = app;
