const fs = require('fs');

const copy = fs.copyFileSync('hello.txt', 'hello-copy.txt');
copy ? console.log('Archivo copiado correctamente') : null;

// Advanced
const { copyFileSync } = require('node:fs');
copyFileSync('hello.txt', 'hello-copy-adv.txt');
copyFileSync ? console.log('Archivo copiado correctamente adv :)))') : null;
