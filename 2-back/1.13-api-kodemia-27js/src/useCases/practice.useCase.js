const mongoose = require('mongoose');
// Use Case: único recurso que importan 'modelos'
const Practice = require('../models/practice.model');
const createError = require('http-errors');

// GET /practices
async function getAll() {
    return await Practice.find();
}

// POST /practices
async function create(practiceData) {
    return await Practice.create(practiceData);
}

// GET /practices/:id
async function getById(id) {
    if (!mongoose.isValidObjectId(id)) {
        throw new createError(400, 'Invalid id with http-errors library');
    }
    const practice = await Practice.findById(id);
    if (!practice) {
        throw new createError(404, 'Practice not found 🚫');
    }
    return practice;
}

// GET /practices/:id?koderId=64e6d5fa8cea4cc56bb7e901
function getByKoderId() {}

// PATCH /practices/:id
async function updateById(id, dataToUpdate) {
    // Validation
    if (!mongoose.isValidObjectId(id)) {
        throw new createError(400, 'Invalid id');
    }
    const practiceUpdated = await Practice.findByIdAndUpdate(id, dataToUpdate, {
        new: true,
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
