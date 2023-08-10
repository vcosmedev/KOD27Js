const fs = require('fs');

const copy = fs.copyFileSync('hello.txt', 'hello-copy.txt');
copy ? console.log('Archivo copiado correctamente') : null;
