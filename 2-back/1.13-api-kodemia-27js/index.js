// Importar e invocar dotenv -> Buena práctica, incluir en la primera línea del doc
require('dotenv').config(); // -> .config() se puede añadir configuración extra
// Importar mongoose para utilizarlo para conectarnos a la db
const mongoose = require('mongoose');
// Importar server
const app = require('./src/server');
const port = 8080;

// Destructuring process.env object
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// mongodb+srv -> protocol
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

// Conectar con la db
mongoose
    .connect(URL)
    .then(() => {
        console.log('DB connected 🟢');
        // Server listening...
        app.listen(port, () => {
            console.log(`Server listening on port ${port} 🔊`);
        });
    })
    .catch((err) => {
        console.log('Oooops, smth went wrong 🔴', err);
    });
