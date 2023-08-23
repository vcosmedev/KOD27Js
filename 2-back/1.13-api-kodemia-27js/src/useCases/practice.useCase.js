// Use Case: único recurso que importan 'modelos'
const Practice = require('../models/practice.model');

// GET /practices
async function getAll() {
    return await Practice.find();
}

// POST /practices
async function create(practiceData) {
    return await Practice.create(practiceData);
}

// GET /practices/:id
function getById(id) {
    return Practice.findById(id);
}
// GET /practices/:koderId
function getByKoderId() {}

// DELETE practices/:id
function removeById(practiceId) {
    return Practice.findByIdAndDelete(practiceId);
}

module.exports = { getAll, create, getById, removeById };
