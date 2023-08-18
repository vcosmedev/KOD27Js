const db = require('../lib/db');

function create(name, email, program, generation) {
    const newKoder = { name, email, program, generation };
    // Leemos info db
    const data = db.getData();
    // Agregamos a la lista
    data.koders.push(newKoder);
    // Leemos la lista actualizada
    db.updateData(data);
}

function remove(name) {
    // Leemos info db
    const data = db.getData();
    // Buscamos koder en la lista
    const newKodersList = data.koders.filter((koder) => koder.name !== name);
    // Sustituir arreglo antiguo por el nuevo
    data.koders = newKodersList;
    // Actualizar data
    db.updateData(data);
}

function update(name) {}

function getAll() {
    const data = db.getData();
    // Caso de uso de Koders, obtenemos todos los Koders
    return data.koders;
}

module.exports = { create, remove, update, getAll };
