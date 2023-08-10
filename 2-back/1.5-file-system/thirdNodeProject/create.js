const fs = require('fs');

fs.writeFileSync('hello.txt', 'Hello from Node 💚', 'utf8');
// console.log('Archivo creado');
// options: can be either 'utf8' or 'utf-8'
// Cada vez que corremos este script, se vuelve a crear un archivo, lo sobreescribe

// fs.existsSync(path);
// return true si el archivo existe, false si no existe
const exists = fs.existsSync('hello.txt');
exists ? console.log('Archivo creado') : console.error('No se creó el archivo');

// Desde este archivo, crear un mismo archivo pero desde el home del usuario
fs.writeFileSync(
    process.env.HOME + '~/hello-from-home.txt',
    'Craeting a file from Home 🏡',
    'utf8'
);
fs.writeFileSync(
    '../hello-from-fs-folder.txt',
    'Creating a file from previous route',
    'utf8'
);

// const folderPath = require('os');
// Example here
