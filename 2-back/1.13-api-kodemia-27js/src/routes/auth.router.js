const express = require('express');
// Import auth useCase
const auth = require('../useCases/auth.useCase');

const router = express.Router();
// Router -> /auth/login

// ENDPOINT LOGIN
router.post('/login', async (req, res) => {
    try {
        // Apply logic
        // Sacar info del cuerpo del request
        const { email, password } = req.body;
        const token = await auth.login(email, password); // login() regresa Promesa
        res.json({
            message: 'Logged in successfully',
            data: {
                token,
            },
        });
    } catch (error) {
        res.status(500);
        res.json({
            message: 'Smth went wrong, auth router',
            error: error.message,
        });
    }
});

module.exports = router;
