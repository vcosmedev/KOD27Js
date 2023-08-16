const express = require('express');
const app = express();
const port = 8080;

const kodersRouter = require('./routes/koders.router'); // Importar router
const mentorsRouter = require('./routes/mentors.router'); // Importar router
const generationsRouter = require('./routes/generations.router'); // Importar router

app.use(express.json()); // -> El servidor 'app' va a poder recibir información y transformarla en formato json
app.use('/koders', kodersRouter); // -> Montar router en el servidor 'Koders'
app.use('/mentors', mentorsRouter); // -> Montar router en el servidor 'Mentors'
app.use('/generations', generationsRouter); // -> Montar router en el servidor 'Generations'

// ENDPOINT -> método + ruta
// GET '/'
// POST '/koders/koderName'

app.get('/', (req, res) => {
    res.json({
        message: 'Kodemia APIv27',
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
