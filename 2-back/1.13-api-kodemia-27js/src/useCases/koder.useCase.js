const mongoose = require('mongoose');
// Use Case: único recurso que importan 'modelos'
const Koder = require('../models/koder.model');
const createError = require('http-errors');
const bcrypt = require('../lib/bcyrpt');

// GET /koders
async function getAll() {
    return await Koder.find();
}
// const allKoders = await Koder.find();
// return allKoders;

// POST /koders
async function create(koderData) {
    // Validación si el usuario existe antes de crear uno nuevo -> find() regresa un arreglo de resultados; findOne() regresa solamente el elemento, así evitamos ingresar en el arreglo
    const existingKoder = await Koder.findOne({ email: koderData.email });
    if (existingKoder) throw new createError(412, 'Koder already exists');
    // 409 -> Conflict
    // 412 -> Precondition Failed (las condiciones anteriores no se cumplieron)

    // Password validation
    const passwordRegExp = new RegExp(
        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$'
    );
    if (!passwordRegExp.test(koderData.password)) {
        throw new createError(400, 'Weak password');
    }

    // Save encrypted password
    // const passwordEncrypted = bcrypt.encrypt(koderData.password);
    // koderData.password = passwordEncrypted;
    koderData.password = bcrypt.encrypt(koderData.password);

    const newKoder = await Koder.create(koderData); // Regresa promesa
    return newKoder;
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
    // Cuando sea un ID que no existe en db
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
        runValidators: true,
        // Correr validaciones al momento de actualizar un valor
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
