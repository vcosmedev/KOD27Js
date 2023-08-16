const express = require('express');

const router = express.Router();

// GET
router.get('/', (req, res) => {
    res.json({ message: 'Get Mentors 🤓' });
});

module.exports = router; // commonjs
