// Únicos que importan los modelos
const mongoose = require('mongoose');
const Koder = require('../models/koder.model');
const createError = require('http-errors');

// GET /koders
async function getAll() {
    return await Koder.find();
}
// const allKoders = await Koder.find();
// return allKoders;

// POST /koders
async function create(koderData) {
    return await Koder.create(koderData); // Regresa promesa
    // const newKoder = await Koder.create(koderData);
    // return newKoder;
}

// GET /koders/:id
async function getById(id) {
    // const koderFound = Koder.find({ _id: id });

    // const koderFound = Koder.findById(id);
    // return koderFound;

    // Validar id antes de budcarlo con 'mongoose.isValidObjectId()'
    // No realizará petición a la db a no ser que el id sea válido
    // Cuando el id no sea válido...
    if (!mongoose.isValidObjectId(id)) {
        // Pasar status code y mensaje. Esta función crea un objeto con el status code y el mensaje
        throw new createError(400, 'Invalid id with http-errors library');
    }

    const koder = await Koder.findById(id);

    if (!koder) {
        throw new createError(404, 'Koder not found 🚫');
    }
    return koder;
}

// PATCH /koders/:id
async function updateById(id, dataToUpdate) {
    if (!mongoose.isValidObjectId(id)) {
        throw new createError(400, 'Invalid id');
    }
    const koderUpdated = await Koder.findByIdAndUpdate(id, dataToUpdate, {
        new: true,
        // Objecto de opciones (documentation: 'options')
        // if true, return the modified document rather than the original
    });
    if (!koderUpdated) {
        throw new createError(404, 'Koder not found, patch');
    }
    return koderUpdated;
}

// DELETE /koders/:id
async function removeById(koderId) {
    if (!mongoose.isValidObjectId(koderId)) {
        throw new createError(400, 'Invalid id');
    }
    const koderDeleted = await Koder.findByIdAndDelete(koderId);
    if (!koderDeleted) {
        throw new createError(404, 'Koder not found');
    }
    return koderDeleted;
}

module.exports = { getAll, create, getById, updateById, removeById };
