const express = require('express');

const router = express.Router();

// GET
router.get('/', (req, res) => {
    res.json({ message: 'Get Generations' });
});

module.exports = router; // commonjs
