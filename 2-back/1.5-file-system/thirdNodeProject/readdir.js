const fs = require('fs');

const readDirectory = fs.readdirSync('../thirdNodeProject');
readDirectory ? console.log('Directorio leído') : null;
