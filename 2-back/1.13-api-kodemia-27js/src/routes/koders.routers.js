// Import 'express'
const express = require('express');
// Import useCase 'Koders' (get functions from useCases)
const koders = require('../useCases/koder.useCase');

// Invoque 'Router' function
const router = express.Router();

// List Koders -> GET /koders -> Router route
router.get('/', async (req, res) => {
    const allKoders = await koders.getAll();
    res.json({
        message: 'GET all Koders from KodersDB',
        data: { koders: allKoders },
    });
});

// Create Koder -> POST /koders
router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, password, program } = req.body;
        await koders.create({ firstName, lastName, email, password, program });
        res.status(201);
        res.json({
            message: 'Koder added to KodersDB',
            data: null,
            // Puede regresar null, el koder creado, lista de todos los koders
        });
    } catch (error) {
        res.status(500);
        res.json({
            message: 'Smth went wrong 😿',
            error: error,
        });
    }
});

// List Koder by id -> GET /koders/:id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const getKoderById = await koders.getById(id);
    res.json({
        message: `GET Koder ${getKoderById.firstName} from KodersDB`,
        // message: `GET Koder ${id} from KodersDB`,
        data: { koder: getKoderById },
    });
});

// Remove Koder -> DELTE /koders/:id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deleteKoderById = await koders.removeById(id);
    res.json({
        message: 'DELETE Koder by id from KodersDB',
        data: { koder: deleteKoderById },
    });
});

module.exports = router;
