const mongoose = require('mongoose');
// Use Case: único recurso que importan 'modelos'
const Practice = require('../models/practice.model');
const Koder = require('../models/koder.model');
const createError = require('http-errors');

// GET /practices
async function getAll(titleFilter, koder) {
    // Agregar consultas que se quieren añadir a la db
    const filters = {};
    if (titleFilter) {
        filters.title = new RegExp(titleFilter, 'i');
    }
    if (koder && mongoose.isValidObjectId(koder)) {
        filters.koder = koder;
    }
    return await Practice.find(filters).populate('koder');
}

// POST /practices
async function create(practiceData) {
    // Validar que el formato del id del Koder es válido
    if (!mongoose.isValidObjectId(practiceData.koder)) {
        throw new createError(400, 'Invalid koder id with http-error');
    }
    // Validar que el Koder exista o no en la db
    // const koderFound = await Koder.findOne(practiceData.koder);
    const koderFound = await Koder.findById(practiceData.koder);
    if (!koderFound) {
        throw new createError(404, 'Koder not found');
    }

    return await Practice.create(practiceData);
}

// GET /practices/:id
async function getById(id) {
    if (!mongoose.isValidObjectId(id)) {
        throw new createError(400, 'Invalid id with http-errors library');
    }
    const practice = await Practice.findById(id).populate('koder');
    if (!practice) {
        throw new createError(404, 'Practice not found 🚫');
    }
    return practice;
}

// GET /practices/:id?koderId=64e6d5fa8cea4cc56bb7e901
function getByKoderId() {}

// PATCH /practices/:id
async function updateById(id, dataToUpdate) {
    // Validation id is valid
    if (!mongoose.isValidObjectId(id)) {
        throw new createError(400, 'Invalid id');
    }
    // Validation id is valid and exists into db
    if (dataToUpdate.koder) {
        if (!mongoose.isValidObjectId(dataToUpdate.koder)) {
            throw new createError(400, 'Invalid koder id');
        }
        const koder = await Koder.findById(dataToUpdate.koder);
        if (!koder) {
            throw new createError(404, 'Koder not found');
        }
    }

    dataToUpdate.modified = new Date();

    const practiceUpdated = await Practice.findByIdAndUpdate(id, dataToUpdate, {
        new: true,
        // Validación al momento de actualizar
        runValidators: true,
    });
    if (!practiceUpdated) {
        throw new createError(404, 'Practice not found, patch');
    }
    return practiceUpdated;
}

// DELETE practices/:id
async function removeById(practiceId) {
    if (!mongoose.isValidObjectId(id)) {
        throw new createError(400, 'Invalid id');
    }
    const practiceDeleted = await Practice.findByIdAndDelete(practiceId);
    if (!practiceDeleted) {
        throw new createError(404, 'Practice not found');
    }
    return practiceDeleted;
}

module.exports = { getAll, create, getById, updateById, removeById };
