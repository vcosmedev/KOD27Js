// Import 'express'
const express = require('express');
// Import useCase 'Koders' (get functions from useCases)
const koders = require('../useCases/koder.useCase');
// Import middleware
const auth = require('../middleware/auth.middleware'); // Poner auth middleware function antes del req, res

// Invoque 'Router' function
const router = express.Router();

// List Koders -> GET /koders -> <Router route>
router.get('/', auth, async (req, res) => {
    try {
        const allKoders = await koders.getAll();
        res.json({
            message: 'GET all Koders from KodersDB',
            data: { koders: allKoders },
        });
    } catch (error) {
        res.status(500);
        res.json({
            message: 'Smth went wrong 😟',
            error: error.message,
        });
    }
});

// Create Koder -> POST /koders
router.post('/', auth, async (req, res) => {
    try {
        const { firstName, lastName, email, password, program } = req.body;
        const koderCreated = await koders.create({
            firstName,
            lastName,
            email,
            password,
            program,
        });
        res.status(201); // Created
        res.json({
            message: `Koder ${koderCreated.firstName} added to KodersDB`,
            data: { koder: koderCreated },
            // Puede regresar null, el koder creado, lista de todos los koders (ejemplos)
        });
    } catch (error) {
        const status = error.name === 'ValidationError' ? 400 : 500;
        // ValidationError -> nombre que le da mongoose a errores de validación
        res.status(status); // 400 Validation error, 500 Server error
        res.json({
            message: 'Smth went wrong 😿',
            error: error.message,
        });
    }
});

// List Koder by id -> GET /koders/:id
router.get('/:id', auth, async (req, res) => {
    try {
        const { id } = req.params;
        const getKoderById = await koders.getById(id);
        res.json({
            message: `GET Koder ${getKoderById.firstName} from KodersDB`,
            // message: `GET Koder ${id} from KodersDB`,
            data: { koder: getKoderById },
        });
    } catch (error) {
        // error.status -> es donde viene el status de nuestro error
        // si el error no tiene un status asociado, lanzamos un error 500
        res.status(error.status || 500);
        res.json({
            message: 'Smth went wrong 😿😿',
            error: error.message,
        });
    }
});

// Update Koder -> PATCH /koders/:id
router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const koderUpdated = await koders.updateById(id, data);
        res.json({
            message: `Koder ${koderUpdated.firstName} updated`,
            data: {
                koder: koderUpdated,
            },
        });
    } catch (error) {
        const status = error.name === 'ValidationError' ? 400 : 500;
        res.status(error.status || status);
        res.json({
            message: 'Smth went wrong',
            error: error.message,
        });
    }
});

// Remove Koder -> DELETE /koders/:id
router.delete('/:id', auth, async (req, res) => {
    try {
        const { id } = req.params;
        const deleteKoderById = await koders.removeById(id);
        res.json({
            message: `DELETE Koder ${deleteKoderById.firstName} from KodersDB`,
            data: { koder: deleteKoderById },
        });
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            message: 'Smth went wrong 😫',
            error: error.message,
        });
    }
});

module.exports = router;
