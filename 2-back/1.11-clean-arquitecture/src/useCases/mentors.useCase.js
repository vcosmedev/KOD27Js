const db = require('../lib/db');

function create(name, email, languages) {
    const newMentor = { name, email, languages };
    // Leemos info db
    const data = db.getData();
    // Agregamos a la lista
    data.mentors.push(newMentor);
    // Leemos la lista actualizada
    db.updateData(data);
}

function remove(name) {
    // Leemos info db
    const data = db.getData();
    // Buscamos mentor en la lista
    const newMentorsList = data.mentors.filter(
        (mentor) => mentor.name !== name
    );
    // Sustituir arreglo antiguo por el nuevo
    data.mentors = newMentorsList;
    // Actualizar data
    db.updateData(data);
}

function update() {}

function getAll() {
    const data = db.getData();
    // Caso de uso de Mentors, obtenemos todos los Mentors
    return data.mentors;
}

module.exports = { create, remove, update, getAll };
