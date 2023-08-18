const express = require('express');
const generations = require('../useCases/generations.useCase');

const router = express.Router();

// List Generations
router.get('/', (req, res) => {
    const allGenerations = generations.getAll();
    res.json({
        message: 'GET generations with clean arquitecture',
        generations: allGenerations,
    });
});

// Create Generation
// Endpoint, controlador <-
router.post('/', (req, res) => {
    // req.body -> representa una generación
    const { language, number } = req.body;
    generations.create(language, number);
    res.json({ message: 'Generation added' });
});

// Update Generation
// generations.update()

// Delete Generation
router.delete('/:number', (req, res) => {
    const { number } = req.params;
    generations.remove(number);
    res.json({ message: 'Generation removed' });
});

module.exports = router;
