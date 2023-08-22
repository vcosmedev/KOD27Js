// Únicos que importan los modelos
const Koder = require('../models/koder.model');

// GET /koders
async function getAll() {
    return await Koder.find();
}
// const allKoders = await Koder.find();
// return allKoders;

// POST /Koders
async function create(koderData) {
    const newKoder = await Koder.create(koderData); // Regresa promesa
    return newKoder;
}

// GET /koders/:id
function getById(id) {
    // const koderFound = Koder.find({ _id: id });
    const koderFound = Koder.findById(id);
    return koderFound;
}

module.exports = { getAll, create, getById };
