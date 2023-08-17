const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'GET koders with clean arquitecture',
    });
});

module.exports = router;
