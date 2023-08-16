const express = require('express');

const router = express.Router(); // -> Llamar al 'servidor de router'

// GET
router.get('/', (req, res) => {
    res.json({
        message: 'Get Koders :)',
    });
});

// Tras crear el router, hay que 'pegarlo' al servidor

// ESTE ES UN ARCHIVO INDEPENDIENTE A INDEX.JS - ¿CÓMO LO COMUNICAMOS CON INDEX.JS?
// HAY QUE INDICAR CÓMO SE VA A COMUNICAR ESTE MÓDULO CON OTRO EXTERNO
// Permitir que otros scripts accedan a este router y lo puedan ocupar

// Objecto 'module', objecto global que se refiere al módulo actual en el que nos encontramos en este momento
// Se exporta el router para poder montarlo en el servidor
// En cada archivo solo se puede exportar una sola cosa
// En este caso se exporta un solo objecto router
module.exports = router; // -> common.js

// export default router -> ESM
