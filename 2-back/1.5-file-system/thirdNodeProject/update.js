const fs = require('fs');

const update = fs.appendFileSync(
    'hello.txt',
    'Data to append from udpate.js',
    'utf8'
);
update ? console.log('Archivo modificado con éxito') : null;
