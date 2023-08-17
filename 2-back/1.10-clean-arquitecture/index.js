// CLEAN ARQUITECTURE
// PROPÓSITO DE ESTE ARCHIVO: LEVANTAR SERVIDOR/INCIAR APLICACIÓN

const app = require('./src/server');
const port = 8080;

app.listen(port, () => {
    console.log(`Server listening on port ${port} with clean arquitecture`);
});
