const fs = require('fs');

const update = fs.appendFileSync(
    'hello.txt',
    '\n Data to append from udpate.js\n',
    'utf8'
);
update ? console.log('Archivo modificado con éxito') : null;

// Advanced
const { appendFileSync } = require('node:fs');
appendFileSync('hello.txt', 'Data updated using appendFileSync', 'utf-8');
appendFileSync ? console.log('Data successfully added') : null;
