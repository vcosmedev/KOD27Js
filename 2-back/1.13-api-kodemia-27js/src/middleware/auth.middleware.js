const jwt = require('../lib/jwt');
const createError = require('http-errors');

// Auth middleware
// Esta función debe revisar si la petición lleva el token autenticado
function auth(req, res, next) {
    try {
        const { authorization } = req.headers;
        // Antes de continuar, hay que verificar que exista o no el header auth
        if (!authorization) {
            throw new createError(402, 'Token required');
        }
        const token = authorization.replace('Bearer ', ''); // authorization: header que es una cadena de texto
        const payload = jwt.verify(token); // Regresa error si no es válido, si sí es válido regresa el token decodificado
        if (!payload) {
            throw new createError(401, 'Could not verify token');
        }
        next(); // Solo en caso de que el token sea válido, dar paso
    } catch (error) {
        res.status(401);
        res.json({
            message: 'Unauthorized',
            error: error.message,
        });
    }
}

// Header, viene de la siguiente forma:

// HEADER, contiene:
// Authorization: Beareer tokenExampleHere
// 'Bearer' -> palabra que identifica este tipo de autorización

module.exports = auth;
