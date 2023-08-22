// Import 'express'
const express = require('express');
// Import useCase 'Koders'
const koders = require('../useCases/koder.useCase');

// Import 'Router'
const router = express.Router();

// List Koders -> GET /koders
router.get('/', (req, res) => {
    const allKoders = koders.getAll();
    res.json({
        message: 'GET all Koders',
        koders: allKoders,
    });
});

module.exports = router;
