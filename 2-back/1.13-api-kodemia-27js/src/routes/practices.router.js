// Import 'express'
const express = require('express');
// Import useCase 'Practices' (get functions from useCases)
const practices = require('../useCases/practice.useCase');

// Invoque 'Router' function
const router = express.Router();

// List Practices -> GET /practices -> <Router route>
router.get('/', async (req, res) => {
    const allPractices = await practices.getAll();
    res.json({
        message: 'GET all Practices from KodersDB',
        data: { practices: allPractices },
    });
});

// Create Practice -> POST /practices
router.post('/', async (req, res) => {
    try {
        const { title, repository, koder } = req.body;
        await practices.create({ title, repository, koder });
        res.status(201); // Created
        res.json({
            message: 'Practice added to KodersDB',
            data: null,
        });
    } catch (error) {
        res.status(500); // Server error
        res.json({
            message: 'Smth went wrong 😿',
            error: error,
        });
    }
});

// List Practice by id -> GET /practices/:id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const getPracticeById = await practices.getById(id);
        res.json({
            message: `GET ${getPracticeById.title} from KodersDB`,
            data: { practice: getPracticeById },
        });
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            message: 'Smth went wrong 😢',
            error: error.message,
        });
    }
});

// List Practice by Koder id -> GET

// Remove Practice -> DELETE /practices/:id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletePracticeById = await practices.removeById(id);
    res.json({
        message: `DELETE ${deletePracticeById.title} from KodersDB`,
        data: { practice: deletePracticeById },
    });
});

module.exports = router;
