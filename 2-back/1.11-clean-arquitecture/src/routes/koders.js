const express = require('express');
const koders = require('../useCases/koders.usecase');

const router = express.Router();

// List Koders
router.get('/', (req, res) => {
    const allKoders = koders.getAll();
    res.json({
        message: 'GET koders with clean arquitecture',
        koders: allKoders,
    });
});

// Create Koder
// Endpoint, controlador
router.post('/', (req, res) => {
    // req.body -> representa un koder
    const { name, email, program, generation } = req.body;
    koders.create(name, email, program, generation);
    res.json({ message: 'Koder added' });
});

// Update Koder
// koders.update()

// Delete Koder
router.delete('/:name', (req, res) => {
    const { name } = req.params;
    koders.remove(name);
    res.json({ message: 'Koder deleted' });
});

module.exports = router;
