const express = require('express');

const router = express.Router(); // -> Llamar al 'servidor de router'

router.use((req, res, next) => {
    console.log('Router middleware: KODERS');
    next();
});

// GET
router.get(
    '/',
    (req, res, next) => {
        console.log('GET /koders middleware');
        next();
    },
    (req, res) => {
        res.json({
            message: 'Get Koders :)',
        });
    }
);

module.exports = router; // -> common.js
