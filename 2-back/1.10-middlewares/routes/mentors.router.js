const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
    console.log('Router middelware: MENTORS');
    next();
});

// GET
router.get('/', (req, res) => {
    res.json({ message: 'Get Mentors 🤓' });
});

module.exports = router; // commonjs
