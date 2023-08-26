const jsonWebToken = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

// Create a function called 'sign' -> Cuando se expiden tokens se conoce como firmar tokens
function sign(payload = {}) {
    // method sign() from jsonWebToken libraru
    return jsonWebToken.sign(payload, JWT_SECRET, { expiresIn: '2h' });
    // {} -> algoritmo que utiliza para encriptar + tiempo de expiración (tiempo de expiración: 1d, 2d, 1h, 2h, etc)
}

// Create a function that verifies 'token'
function verify(token) {
    return jsonWebToken.verify(token, JWT_SECRET);
}

module.exports = { sign, verify };
