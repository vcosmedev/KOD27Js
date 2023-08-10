const fs = require('fs');

const deleted = fs.unlinkSync('hello-delete.txt');
deleted ? console.log('Archivo eliminado con éxito') : null;

// Advanced
// const { unlinkSync } = require('node:fs');
// unlinkSync('hello-delete.text');
