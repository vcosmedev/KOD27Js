const fs = require('fs');

// Borrar una carpeta cuando está vacía
// Gonna be deprecated soon
const removeDirSync = fs.rmdirSync('./directory-to-delete');
removeDirSync ? console.log('Eliminado con éxito carpeta vacía') : null;
// fs.rmSync(path[, options])
// add example

// Borrar una carpeta que contenga archivos
const rmDirSyncFile = fs.rmdirSync('./rm-directory-files', { recursive: true });
rmDirSyncFile ? console.log('Directory with files removed') : null;
