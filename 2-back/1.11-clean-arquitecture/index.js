// CLEAN ARQUITECTURE
// PROPÓSITO DE ESTE ARCHIVO: LEVANTAR SERVIDOR/INCIAR APLICACIÓN

const app = require('./src/server');
const port = 8080;
// Comprobar si existe o no nuestro archivo db
const db = require('./src/lib/db');

db.createIfNotExists();
app.listen(port, () => {
    console.log(`Server listening on port ${port} with clean arquitecture`);
});
