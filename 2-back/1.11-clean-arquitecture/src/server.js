// DESCRIBIR y montar el servidor (guarda la definición del server, qué middlewares se van a usar, montar middlewares, montar routers)
const express = require('express');
const kodersRouter = require('./routes/koders.router');
const mentorsRouter = require('./routes/mentors.router');
const generationsRouter = require('./routes/generations.router');

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
