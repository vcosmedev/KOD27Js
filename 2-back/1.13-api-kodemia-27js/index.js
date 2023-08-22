// Importar mongoose para utilizarlo para conectarnos a la db
const mongoose = require('mongoose');
// Importar server
const app = require('./src/server');
const port = 8080;
// Importar dotenv
const dotenv = require('dotenv');
// Importar dotenv
dotenv.config();

// Destructuring process.env object
const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;

//
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

// Conectar con la db
mongoose
    .connect(URL)
    .then(() => {
        console.log('DB connected');
        // Server listening...
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    })
    .catch((err) => {
        console.log('Oooops, smth went wrong :(', err);
    });
