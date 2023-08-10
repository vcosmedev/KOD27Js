const fs = require('fs');

const deleted = fs.unlinkSync('hello-delete.txt');
deleted ? console.log('Archivo eliminado con éxito') : null;
