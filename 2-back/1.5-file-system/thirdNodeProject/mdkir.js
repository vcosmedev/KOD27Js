const fs = require('fs');

const makeDirectory = fs.mkdirSync('./new-directory');
makeDirectory ? console.log('Directorio creado') : null;
