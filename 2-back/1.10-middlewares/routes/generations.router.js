const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
    console.log('Router middleware: GENERATIONS');
    next();
});

// GET
router.get('/', (req, res) => {
    res.json({ message: 'Get Generations' });
});

module.exports = router; // commonjs
