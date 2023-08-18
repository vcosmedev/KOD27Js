const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'GET generations with clean arquitecture' });
});

module.exports = router;
