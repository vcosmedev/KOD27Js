const db = require('../lib/db');

function create(language, number) {
    const newGeneration = { language, number };
    // Leemos info db
    const data = db.getData();
    // Agregamos a la lista
    data.generations.push(newGeneration);
    // Leemos la lista actualizada
    db.updateData(data);
}

function remove(number) {
    // Leemos info db
    const data = db.getData();
    // BUscamos generation number en la lista
    const newGenerationsList = data.generations.filter(
        (generation) => generation.number !== number
    );
    // Sustituir arreglo antiguo por el nuevo
    data.generations = newGenerationsList;
    // Actualizar data
    db.updateData(data);
}

function update() {}

function getAll() {
    // Leemos info db
    const data = db.getData();
    // Caso de uso de Generatinos, obtenemos todas la Generations
    return data.generations;
}

module.exports = { create, remove, update, getAll };
