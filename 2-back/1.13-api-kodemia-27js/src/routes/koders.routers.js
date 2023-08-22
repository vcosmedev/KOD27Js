// Import 'express'
const express = require('express');
// Import useCase 'Koders'
const koders = require('../useCases/koder.useCase');

// Import 'Router'
const router = express.Router();

// List Koders -> GET /koders
router.get('/', async (req, res) => {
    const allKoders = await koders.getAll();
    res.json({
        message: 'GET all Koders from KodersDB',
        koders: allKoders,
    });
});

// Create Koder -> POST /koders
router.post('/', async (req, res) => {
    const { firstName, lastName, email, password, program } = req.body;
    await koders.create({ firstName, lastName, email, password, program });
    res.json({ message: 'Koder added to KodersDB' });
});

// List Koder by id -> GET /koders/:id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const getKoderById = await koders.getById(id);
    res.json({ message: 'GET Koder by id from KodersDB', koder: getKoderById });
});

// Remove Koder -> DELTE /koders/:id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deleteKoderById = await koders.removeById(id);
    res.json({
        message: 'DELETE Koder by id from KodersDB',
        koder: deleteKoderById,
    });
});

module.exports = router;
