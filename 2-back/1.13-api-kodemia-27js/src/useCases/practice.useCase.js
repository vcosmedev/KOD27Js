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
// GET /practices/:koderId
function getByKoderId() {}

// DELETE practices/:id
function removeById(practiceId) {
    return Practice.findByIdAndDelete(practiceId);
}

module.exports = { getAll, create, getById, removeById };
