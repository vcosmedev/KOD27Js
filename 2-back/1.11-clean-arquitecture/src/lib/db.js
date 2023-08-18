// OPERACIONES QUE SE VAN A REALIZAR CON LA DB
const fs = require('node:fs');
const filePath = 'db.json';

const defaultDB = {
    koders: [],
    mentors: [],
    generations: [],
};
// Crear archivo DB si no existe
function createIfNotExists() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify(defaultDB), {
            encoding: 'utf-8',
        });
    }
}
// Regresa contenido del archivo parseado en JSON
function getData() {
    return JSON.parse(fs.readFileSync(filePath, { encoding: 'utf-8' }));
}

// Función escribir data en el archivo
function updateData(newData) {
    fs.writeFileSync(filePath, JSON.stringify(newData), { encoding: 'utf-8' });
}

// Exportar funciones -> Para exportar varias cosas, lo hacemos a través de un objeto
// Cuando la llave se llama igual que el valor, podemos indicar solamente una vez el nombre
// module.exports = { createIfNotExists: createIfNotExists, getData: getData, updateData: updateData };
module.exports = { createIfNotExists, getData, updateData };
